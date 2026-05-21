// Client helper: posts a lead to /api/lead, automatically attaching the
// current locale, UTM/source params, and page path. Returns true on success.
export async function submitLead(data) {
  let source = "";
  let page = "";
  let locale = "";

  if (typeof window !== "undefined") {
    const params = new URLSearchParams(window.location.search);
    source = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"]
      .map((k) => params.get(k))
      .filter(Boolean)
      .join(" | ");
    page = window.location.pathname;
    locale = document.documentElement.lang || "";
  }

  try {
    const res = await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, source, page, locale }),
    });
    const json = await res.json().catch(() => ({}));
    return res.ok && json.result === "success";
  } catch {
    return false;
  }
}
