import './style.css'
import { setupThemeToggle } from './utilities/theme'
import { renderAbout } from './components/about';
import { loadProjects } from './utilities/project-loader';

renderAbout();
setupThemeToggle();
loadProjects();