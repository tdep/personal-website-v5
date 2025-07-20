export async function loadProjects() {
    const res = await fetch('/projects.json');
    const projects = await res.json();

    const projectsContainer = document.getElementById('projects-container');
    if (!projectsContainer) return;

    projects.forEach((project: any) => {
        const card = document.createElement('div');
        card.className = 'project-card';

        const title = `<h3>${project.title}</h3>`;
        const description = `<p>${project.description}</p>`;
        
        const technologies = Array.isArray(project.technologies) ? project.technologies
        .map(
            (tech: any) =>
                `<p>${tech}`
        ).join(", ") : "";

        let mediaHTML = "";

        if (project.video) {
            mediaHTML = `
                <video autoplay muted loop playsinline>
                    <source src="${project.video}" type=video/webm>
                    Your browser does not support the video tag.
                </video>
            `;
        } else if (project.image) {
            mediaHTML = `<img src="${project.image}" alt="${project.title}" loading="lazy" />`;
        }

        const links = Array.isArray(project.links)
            ? project.links 
            .map(
                (link: any) => 
                    `<a href="${link.url}" target="_blank" rel="noopener noreferrer">${link.label}</a>`
            )
            .join(" ") : "";

        const status = project.status;

        card.innerHTML = `
            <div>
                ${mediaHTML}
            </div>
            <div>
                ${title}
                ${description}
            </div>
                ${technologies}
            <div>
            </div>
            <div class="project-links">
                ${links}
            </div>    
            <div>
                ${status.deployment}
                ${status.exposure}
            </div>
        `;

        projectsContainer.appendChild(card);
    });
}