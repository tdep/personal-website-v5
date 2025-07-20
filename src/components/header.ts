export function renderHeader() {
    const section = document.getElementById("header");

    if (section) {
        section.innerHTML = `
        <nav>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
        </nav>
        <button id="theme-toggle" class="toggle-theme">Toggle Theme</button>
      `
    }
}