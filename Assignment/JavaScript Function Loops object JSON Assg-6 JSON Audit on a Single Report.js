function auditReport(reportJSON) {

    let report = JSON.parse(reportJSON);

    let okCount = 0;
    let failCount = 0;

    for (let key in report.modules) {

        if (report.modules[key] === "OK") {
            okCount++;
        }

        if (report.modules[key] === "FAIL") {
            failCount++;
            break; 
        }
    }

    let summary = {
        okCount: okCount,
        failCount: failCount
    };

    return {
        summaryObject: summary,
        summaryJSON: JSON.stringify(summary)
    };
}