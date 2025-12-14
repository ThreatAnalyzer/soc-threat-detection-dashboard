function analyze() {

    const logs = [
        { ip: "192.168.1.10", status: "Failed" },
        { ip: "192.168.1.10", status: "Failed" },
        { ip: "192.168.1.10", status: "Failed" },
        { ip: "192.168.1.10", status: "Failed" },
        { ip: "192.168.1.10", status: "Failed" },
        { ip: "10.0.0.5", status: "Success" },
        { ip: "10.0.0.6", status: "Failed" },
        { ip: "10.0.0.6", status: "Failed" },
        { ip: "10.0.0.6", status: "Failed" },
        { ip: "10.0.0.6", status: "Failed" },
        { ip: "10.0.0.6", status: "Failed" }
    ];

    let failed = 0;
    let success = 0;
    let ipCount = {};

    logs.forEach(log => {
        if (log.status === "Failed") {
            failed++;
            ipCount[log.ip] = (ipCount[log.ip] || 0) + 1;
        } else {
            success++;
        }
    });

    document.getElementById("summary").innerHTML = `
        <h3>📊 Log Summary</h3>
        <p>Failed Logins: ${failed}</p>
        <div class="bar red" style="width:${failed * 10}px"></div>

        <p>Successful Logins: ${success}</p>
        <div class="bar green" style="width:${success * 10}px"></div>
    `;

    let alertHTML = "<h3>🚨 Alerts</h3>";

    for (let ip in ipCount) {
        if (ipCount[ip] >= 5) {
            alertHTML += `
                <div class="alert">
                    Brute Force Attack Detected<br>
                    IP: ${ip}<br>
                    Attempts: ${ipCount[ip]}<br>
                    Severity: HIGH
                </div>
            `;
        }
    }

    document.getElementById("alerts").innerHTML = alertHTML;
}
