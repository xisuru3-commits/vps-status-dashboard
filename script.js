const refreshBtn = document.getElementById("refresh");
const lastUpdated = document.getElementById("updated");

const cpu = document.getElementById("cpuText");
const ram = document.getElementById("ramText");
const swap = document.getElementById("swapText");
const disk = document.getElementById("diskText");

const upload = document.getElementById("upload");
const download = document.getElementById("download");
const total = document.getElementById("total");

async function loadStatus() {
    try {
        const res = await fetch("https://vps-status-api.xisuru3.workers.dev/");
        const data = await res.json();

        cpu.textContent = data.server.cpu.toFixed(1) + "%";
ram.textContent = data.server.ramPercent + "%";
swap.textContent = data.server.swapPercent + "%";
disk.textContent = data.server.storagePercent + "%";

document.querySelector(".cpu").style.width = data.server.cpu + "%";
document.querySelector(".ram").style.width = data.server.ramPercent + "%";
document.querySelector(".swap").style.width = data.server.swapPercent + "%";
document.querySelector(".disk").style.width = data.server.storagePercent + "%";
        upload.textContent = data.panel.upload || "0 B";
        download.textContent = data.panel.download || "0 B";
        total.textContent = data.panel.totalUsage || "0 B";

        lastUpdated.textContent = new Date().toLocaleTimeString();
    } catch (err) {
        console.error(err);
    }
}

refreshBtn.addEventListener("click", loadStatus);

loadStatus();

setInterval(loadStatus, 5000);
