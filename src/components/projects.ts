export function renderProjects() {
    const section = document.getElementById("projects");

    if (section) {
        section.innerHTML = `
        <h2>Projects</h2>
        <p>There be projects here</p>
        `
    }
}