export function renderFooter() {
    const section = document.getElementById("footer");

    if (section) {
        section.innerHTML = `
        <div>
            <p>
                <a href="https://github.com/tdep" target="_blank">GitHub</a> | 
                <a href="https://www.linkedin.com/in/trevor-depew" target="_blank">LinkedIn</a>
            </p>
            <p>&copy; Trevor DePew</p>
        </div>
        `
    }
}