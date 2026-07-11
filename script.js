function updateTime() {
    const time = document.querySelector(".time");
    if (!time) return;

    const now = new Date();

    time.textContent =
        "Updated " +
        now.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit"
        });
}

updateTime();

setInterval(updateTime, 1000);

document.querySelectorAll(".fill").forEach(bar => {
    const width = bar.style.width;

    bar.style.width = "0%";

    setTimeout(() => {
        bar.style.width = width;
    }, 300);
});
