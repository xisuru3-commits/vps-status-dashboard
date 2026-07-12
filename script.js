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

const lastUpdate = new Date(data.updated);
const seconds = (Date.now() - lastUpdate.getTime()) / 1000;

const statusPill = document.querySelector(".status-pill");
const heroTitle = document.querySelector(".hero-content h1 span");

if (seconds > 15) {
    statusPill.innerHTML =
        '<span class="status-dot" style="background:#ef4444;box-shadow:0 0 15px #ef4444;"></span> Server Offline';

    heroTitle.textContent = "Offline";
} else {
    statusPill.innerHTML =
        '<span class="status-dot"></span> Server Online';

    heroTitle.textContent = "Online";
}

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
