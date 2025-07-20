export async function loadProjects() {
    const res = await fetch('/projects.json');
    const projects = await res.json();

    const projectsContainer = document.getElementById('projects-container');
    if (!projectsContainer) return;

    projects.forEach((project: any) => {
        const card = document.createElement('div');
        card.className = 'project-card';

        card.innerHTML = `
            <video autoplay muted loop playsinline>
                <source src="${project.image}" type="video/webm" alt="Animated demo of ${project.title}"/>
            </video>
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <p><strong>Tech:</strong> ${project.technologies.join(', ')}</p>
            <a href="${project.url}" target="_blank">View Project</a>
        `;

        projectsContainer.appendChild(card);
    });
}