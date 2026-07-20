// Receives lead submissions from the site forms and forwards them to the
// Google Apps Script web app. Runs server-side, so the webhook URL stays
// hidden and there are no browser CORS issues.

const FIELDS = [
  "formType",
  "name",
  "phone",
  "email",
  "childName",
  "childAge",
  "currentSchool",
  "grade",
  "preferredDate",
  "comment",
  "locale",
  "source",
  "page",
];

export async function POST(request) {
  try {
    const body = await request.json();

    // Honeypot: real users never fill the hidden "company" field. If it's
    // filled, it's a bot — pretend success and drop it silently.
    if (body.company) {
      return Response.json({ result: "success" });
    }

    if (!body.name || !body.phone) {
      return Response.json(
        { result: "error", message: "Name and phone are required." },
        { status: 400 }
      );
    }

    const url = process.env.GOOGLE_SHEETS_WEBAPP_URL;
    if (!url) {
      return Response.json(
        { result: "error", message: "Lead webhook is not configured." },
        { status: 500 }
      );
    }

    const payload = {};
    for (const key of FIELDS) payload[key] = body[key] ?? "";

    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      redirect: "follow",
    });

    if (!res.ok) {
      return Response.json(
        { result: "error", message: "Upstream error." },
        { status: 502 }
      );
    }

    return Response.json({ result: "success" });
  } catch (err) {
    return Response.json(
      { result: "error", message: String(err) },
      { status: 500 }
    );
  }
}
