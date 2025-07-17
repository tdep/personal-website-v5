export function renderAbout() {
    const section = document.getElementById("about");

    if (section) {
        section.innerHTML = `
        <h2>About</h2>
        <p>A Little blurby about meself</p>`
    }
}