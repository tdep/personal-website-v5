export function renderExperience() {
    const section = document.getElementById("experience");

    if (section) {
        section.innerHTML = `
        <div>
            <h2>Experience</h2>
        </div>
        <div>
            <h3>Professional</h3>
            <ul>
                <li>Lifting The Mood</li>
                <li>SongShare</li>
                <li>Spotify</li>
                <li>Flatiron School</li>
            </ul>
        </div>
        <div>
            <h3>Education</h3>
            <ul>
                <li>Master's in Music Composition - Brooklyn College</li>
                <li>Software Engineering Certificate - Flatiron School</li>
                <li>Bachelor's in Music Theory & Composition - SUNY New Paltz</li>
            </ul>
        </div>
        <div>
            <h3>Additional Coursework</h3>
            <ul>
                <li>Relational Database Systems</li>
                <li>Computer Architecture</li>
            </ul>
        </div>
        `
    }
}