export function renderAbout() {
    const section = document.getElementById("about");

    if (section) {
        section.innerHTML = `
        <h1>Trevor DePew</h1>
        <h2>Software Engineer</h2>
        <p>I am a <strong>software engineer</strong> specializing in backend development. I am constantly seeking to understand how the natural and synthetic world works and always eager to take on another challenge. </p>
        <p>I hold a Master's degree in Music Composition and a cerrtificate in Software Engineering from Flatiron School.</p>
        `
    }
}