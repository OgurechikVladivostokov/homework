function initToggleTheme() {
    const toggle = document.getElementById("toggle");

    if (toggle) {
        toggle.addEventListener("click", function() {
            document.body.classList.toggle("dark-theme");
        });
    } else {
        console.warn("Элемент с id 'toggle' не найден в DOM.");
    }
}

document.addEventListener("DOMContentLoaded", initToggleTheme);
if (toggle) {
} else {
    console.warn("Элемент с id 'toggle' не найден в DOM.");
}
