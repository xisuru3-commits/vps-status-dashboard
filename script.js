// Infrastructure Status Dashboard

// ---------- Fade In ----------
window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});

// ---------- UTC Clock ----------
function updateClock() {
    const clock = document.getElementById("current-time");
    if (!clock) return;

    const now = new Date();

    clock.textContent = now.toLocaleString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZone: "UTC"
    }) + " UTC";
}

updateClock();
setInterval(updateClock, 1000);

// ---------- Card Light Effect ----------
document.querySelectorAll(".card").forEach(card => {

    card.addEventListener("mousemove", e => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty("--x", x + "px");
        card.style.setProperty("--y", y + "px");

    });

});

// ---------- Status Pulse ----------
setInterval(() => {

    document.querySelectorAll(".status-dot").forEach(dot => {

        dot.animate([
            { transform: "scale(1)" },
            { transform: "scale(1.4)" },
            { transform: "scale(1)" }
        ], {
            duration: 1800,
            easing: "ease-in-out"
        });

    });

}, 2000);

// ---------- Smooth Scroll ----------
document.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", e => {

        const href = link.getAttribute("href");

        if (!href || href === "#") return;

        if (href.startsWith("#")) {

            e.preventDefault();

            document.querySelector(href)
                ?.scrollIntoView({
                    behavior: "smooth"
                });

        }

    });

});
