function setTheme(isDark: boolean) {
    document.body.classList.toggle('dark', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

function loadTheme() {
    const stored = localStorage.getItem('theme');
    if (stored === 'dark') return true;
    if (stored === 'light') return false;

    // system default
    return window.matchMedia('(prefers-color-scheme: dark').matches;
}

export function setupThemeToggle() {
    const toggle= document.getElementById('theme-toggle');
    if (!toggle) return;

    let isDark = loadTheme();
    setTheme(isDark);

    toggle.addEventListener('click', () => {
        isDark = !isDark;
        setTheme(isDark);
    });
}