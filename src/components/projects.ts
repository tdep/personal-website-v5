export function renderProjects() {
    const section = document.getElementById("projects");

    if (section) {
        section.innerHTML = `
        <div>
            <h2>Projects</h2>
            <p>Thar be projects here!</p>
        </div>
        <div id="projects-container"></div>
        `
    }
}