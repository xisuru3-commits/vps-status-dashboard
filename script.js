// ===== VPS Status Dashboard =====

// Current UTC time
function updateTime() {
    const time = document.getElementById("current-time");
    if (!time) return;

    const now = new Date();

    time.textContent = now.toLocaleString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZone: "UTC"
    }) + " UTC";
}

setInterval(updateTime, 1000);
updateTime();

// Fade-in animation
window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});

// Status pulse animation
document.querySelectorAll(".status-dot").forEach(dot => {
    setInterval(() => {
        dot.animate(
            [
                { transform: "scale(1)" },
                { transform: "scale(1.35)" },
                { transform: "scale(1)" }
            ],
            {
                duration: 1800,
                easing: "ease-in-out"
            }
        );
    }, 2000);
});

// Mouse glow effect
const glow = document.createElement("div");
glow.className = "cursor-glow";
document.body.appendChild(glow);

document.addEventListener("mousemove", e => {
    glow.style.left = `${e.clientX}px`;
    glow.style.top = `${e.clientY}px`;
});

// Card hover effect
document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("mousemove", e => {
        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty("--x", `${x}px`);
        card.style.setProperty("--y", `${y}px`);
    });
});
