var deep = function deepset(obj, path, value) {
    if (path.indexOf(".") == -1) return obj[path] = value;
    var parts = path.split(".");
    if (!obj[parts[0]]) obj[parts[0]] = {};
    return deepset(obj[parts[0]], parts.slice(1).join("."), value);
}

var read = function workbook_to_object(wb) {
    var out = {};

    /* assign one-off keys */
    var ws = wb.Sheets["_keys"];
    if (ws) {
        var data = XLSX.utils.sheet_to_json(ws, {
            raw: true
        });
        data.forEach(function (r) {
            deepset(out, r.path, r.value);
        });
    }

    /* assign arrays from worksheet tables */
    wb.SheetNames.forEach(function (n) {
        if (n == "_keys") return;
        out[n] = XLSX.utils.sheet_to_json(wb.Sheets[n], {
            raw: true
        });
    });

    return out;
}

module.exports = {read,deep};
