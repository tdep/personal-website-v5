export function renderAbout() {
    const section = document.getElementById("about");

    if (section) {
        section.innerHTML = `
        <div>
            <h1>Trevor DePew</h1>
            <h2>Software Engineer</h2>
        </div>
        <div>
            <p>I am a <strong>software engineer</strong> specializing in backend development. I am constantly seeking to understand how the natural and synthetic world works and always eager to take on another challenge. </p>
            <p>I hold a Master's degree in Music Composition and a cerrtificate in Software Engineering from Flatiron School.</p>
        </div>
        <div>
            <p>Skills:</p>
            <ul>
                <li>Java</li>
                <li>TypeScript</li>
                <li>JavaScript</li>
                <li>PostgreSQL</li>
                <li>Python</li>
                <li>React</li>
                <li>CSS</li>
            </ul>
        </div>
        `
    }
}