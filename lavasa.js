(() => {
  const page = document.body.dataset.page;
  document.querySelectorAll("[data-page-link]").forEach((link) => {
    if (link.dataset.pageLink === page) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }
  });

  const reportStorageKey = "lavasa-help-local-incidents-v1";
  const categoryKey = (label) => {
    const value = String(label || "").toLowerCase();
    if (value.includes("road") || value.includes("landslide")) return "road";
    if (value.includes("water")) return "water";
    if (value.includes("power")) return "power";
    if (value.includes("garbage") || value.includes("sanitation")) return "garbage";
    if (value.includes("streetlight")) return "streetlights";
    if (value.includes("wildlife") || value.includes("snake")) return "wildlife";
    return "other";
  };
  const readLocalReports = () => {
    try {
      const saved = JSON.parse(localStorage.getItem(reportStorageKey) || "[]");
      return Array.isArray(saved) ? saved : [];
    } catch {
      return [];
    }
  };
  const saveLocalReport = (report) => {
    try {
      const saved = readLocalReports();
      saved.unshift(report);
      localStorage.setItem(reportStorageKey, JSON.stringify(saved.slice(0, 100)));
      return true;
    } catch {
      return false;
    }
  };
  const renderLocalReports = () => {
    const list = document.getElementById("reportedIncidents");
    const section = document.getElementById("submittedReportsSection");
    if (!list || !section) return;
    const labels = { road: "Road or landslide", water: "Water supply", power: "Power", garbage: "Garbage and sanitation", streetlights: "Streetlights", wildlife: "Wildlife" };
    const reports = readLocalReports().sort((a, b) => String(b.createdAt).localeCompare(String(a.createdAt)));
    section.hidden = reports.length === 0;
    reports.forEach((report) => {
      const card = document.createElement("article");
      card.className = "incident-card";
      card.dataset.incidentCard = "";
      card.dataset.category = report.category || categoryKey(report.categoryLabel);
      card.dataset.source = "community";

      const meta = document.createElement("div");
      meta.className = "incident-meta";
      const sourceBadge = document.createElement("span");
      sourceBadge.className = "badge badge-neutral";
      sourceBadge.textContent = "Community report";
      const statusBadge = document.createElement("span");
      statusBadge.className = "badge badge-info";
      statusBadge.textContent = "Submitted";
      meta.append(sourceBadge, statusBadge);

      const title = document.createElement("h2");
      title.textContent = report.title || "Incident report";
      const location = document.createElement("span");
      location.className = "incident-location";
      const date = report.createdAt ? new Date(report.createdAt).toLocaleString() : "Recently submitted";
      location.textContent = [report.area, report.landmark, date].filter(Boolean).join(" · ");
      const category = document.createElement("span");
      category.className = "badge badge-neutral";
      category.textContent = labels[card.dataset.category] || report.categoryLabel || "Incident";
      const description = document.createElement("p");
      description.textContent = report.message || "No additional details provided.";
      const actions = document.createElement("div");
      actions.className = "incident-actions";
      const urgency = document.createElement("span");
      urgency.className = report.urgency === "Critical" || report.urgency === "High" ? "badge badge-warn" : "badge badge-neutral";
      urgency.textContent = `${report.urgency || "Unspecified"} urgency`;
      const local = document.createElement("span");
      local.className = "form-note";
      local.textContent = "Visible on this device";
      actions.append(urgency, local);
      card.append(meta, category, title, location, description, actions);
      list.append(card);
    });
  };
  renderLocalReports();

  const cards = [...document.querySelectorAll("[data-incident-card]")];
  let category = "all";
  let source = "all";
  const applyFilters = () => {
    let visible = 0;
    cards.forEach((card) => {
      const matches = (category === "all" || card.dataset.category === category) &&
        (source === "all" || card.dataset.source === source);
      card.hidden = !matches;
      if (matches) visible += 1;
    });
    const empty = document.getElementById("noIncidents");
    if (empty) empty.style.display = visible ? "none" : "block";
  };
  document.querySelectorAll("[data-category-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      category = button.dataset.categoryFilter;
      document.querySelectorAll("[data-category-filter]").forEach((item) => item.classList.toggle("active", item === button));
      applyFilters();
    });
  });
  document.querySelectorAll("[data-source-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      source = button.dataset.sourceFilter;
      document.querySelectorAll("[data-source-filter]").forEach((item) => item.classList.toggle("active", item === button));
      applyFilters();
    });
  });
  if (cards.length) applyFilters();

  document.querySelectorAll("[data-affected]").forEach((button) => {
    button.addEventListener("click", () => {
      if (button.dataset.selected === "true") return;
      button.dataset.selected = "true";
      button.dataset.count = String(Number(button.dataset.count || 0) + 1);
      button.textContent = `Affected too · ${button.dataset.count}`;
      button.classList.add("active");
    });
  });

  const form = document.getElementById("incidentForm");
  if (form) {
    const status = document.getElementById("formStatus");
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const submit = form.querySelector("button[type=submit]");
      submit.disabled = true;
      submit.textContent = "Sending…";
      status.className = "form-status";
      status.textContent = "Sending your report…";
      const payload = Object.fromEntries(new FormData(form));
      try {
        const response = await fetch(form.action, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(payload)
        });
        const result = await response.json();
        if (!response.ok || !result.success) throw new Error(result.body?.message || result.message || "Please try again.");
        const stored = saveLocalReport({
          category: categoryKey(payload.category),
          categoryLabel: payload.category,
          title: String(payload.incident_title || "").trim(),
          area: String(payload.area || "").trim(),
          landmark: String(payload.landmark || "").trim(),
          urgency: String(payload.urgency || "").trim(),
          message: String(payload.message || "").trim(),
          source: "community",
          createdAt: new Date().toISOString()
        });
        form.reset();
        status.className = "form-status success";
        status.textContent = stored
          ? "Your report was sent and added to the incident feed on this device."
          : "Your report was sent, but this browser could not save it to the incident feed.";
      } catch (error) {
        status.className = "form-status error";
        status.textContent = error.message || "Could not send your report. Check your connection and try again.";
      } finally {
        submit.disabled = false;
        submit.textContent = "Send incident report";
      }
    });
  }
})();
