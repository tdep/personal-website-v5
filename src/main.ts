import './style.css'
import { renderHeader } from './components/header';
import { setupThemeToggle } from './utilities/theme'
import { renderAbout } from './components/about';
import { renderProjects } from './components/projects';
import { renderExperience } from './components/experience';
import { loadProjects } from './utilities/project-loader';

renderHeader();
renderAbout();
renderProjects();
renderExperience();
setupThemeToggle();
loadProjects();