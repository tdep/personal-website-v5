import './style.css'
import { setupThemeToggle } from './utilities/theme'
import { renderAbout } from './components/about';
import { renderExperience } from './components/experience';
import { loadProjects } from './utilities/project-loader';

renderAbout();
renderExperience();
setupThemeToggle();
loadProjects();