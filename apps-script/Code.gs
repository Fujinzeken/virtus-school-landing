/**
 * Virtus International School — lead capture endpoint (Google Apps Script).
 *
 * Each form writes to its own clearly-named tab, with only the columns
 * that form uses. Tabs are auto-created (with a bold, frozen header row)
 * the first time a lead of that type arrives.
 *
 * Setup:
 *   1. Create a fresh Google Sheet (owned by the client's Google account).
 *   2. Extensions → Apps Script, paste this file.
 *   3. Deploy → New deployment → type "Web app":
 *        - Execute as: Me
 *        - Who has access: Anyone
 *      Copy the /exec URL.
 *   4. On the website, set in .env.local:
 *        GOOGLE_SHEETS_WEBAPP_URL=<the /exec URL>
 *
 * The website never calls this directly from the browser — a Next.js API
 * route posts here server-side, so the URL stays hidden.
 */

// formType (sent by the site) -> { sheet tab name, header labels, data fields }.
// "headers" and "fields" are positional and must line up (after Timestamp).
var FORMS = {
  apply: {
    sheet: "Applications",
    headers: ["Timestamp", "Parent Name", "Phone", "Email", "Child Name", "Child Age", "Grade", "Comment", "Language", "Source / UTM", "Page", "Current School"],
    fields: ["name", "phone", "email", "childName", "childAge", "grade", "comment", "locale", "source", "page", "currentSchool"],
  },
  tour: {
    sheet: "Campus Tours",
    headers: ["Timestamp", "Name", "Phone", "Email", "Child Age", "Preferred Date", "Language", "Source / UTM", "Page"],
    fields: ["name", "phone", "email", "childAge", "preferredDate", "locale", "source", "page"],
  },
  "request-call": {
    sheet: "Call Requests",
    headers: ["Timestamp", "Name", "Phone", "Language", "Source / UTM", "Page"],
    fields: ["name", "phone", "locale", "source", "page"],
  },
  enrollment: {
    sheet: "Enrollment Section",
    headers: ["Timestamp", "Name", "Phone", "Language", "Source / UTM", "Page"],
    fields: ["name", "phone", "locale", "source", "page"],
  },
  admission: {
    sheet: "Admission Section",
    headers: ["Timestamp", "Name", "Phone", "Language", "Source / UTM", "Page"],
    fields: ["name", "phone", "locale", "source", "page"],
  },
};

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);

    // Pick the form config, or capture anything unexpected in an "Other" tab.
    var cfg = FORMS[data.formType];
    if (!cfg) {
      cfg = {
        sheet: "Other",
        headers: ["Timestamp", "Form Type", "Raw Data"],
        fields: ["formType", "__raw"],
      };
      data.__raw = e.postData.contents;
    }

    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName(cfg.sheet);
    if (!sheet) {
      sheet = ss.insertSheet(cfg.sheet);
    }
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(cfg.headers);
      sheet.getRange(1, 1, 1, cfg.headers.length).setFontWeight("bold");
      sheet.setFrozenRows(1);
    }

    var row = [new Date()];
    for (var i = 0; i < cfg.fields.length; i++) {
      row.push(data[cfg.fields[i]] || "");
    }
    sheet.appendRow(row);

    var lastRow = sheet.getLastRow();
    var range = sheet.getRange(lastRow, 1, 1, cfg.headers.length);

    // Force every column except the Timestamp to plain text, then rewrite the
    // values. Without this, entries like "+998…" are parsed as formulas (#ERROR!).
    if (cfg.headers.length > 1) {
      var textRange = sheet.getRange(lastRow, 2, 1, cfg.headers.length - 1);
      textRange.setNumberFormat("@");
      textRange.setValues([row.slice(1)]);
    }

    // Wrap + top-align the new row only (doesn't touch column widths).
    range.setWrap(true);
    range.setVerticalAlignment("top");

    return json({ result: "success" });
  } catch (err) {
    return json({ result: "error", message: String(err) });
  }
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON
  );
}
