import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Projects } from './pages/projects/projects';
import { About } from './pages/about/about';
import { Resume } from './pages/resume/resume';

export const routes: Routes = [
    { path: '', component: Home, title: 'Home — Portfolio Hub' },
    { path: 'projects', component: Projects, title: 'Projects — Shelf' },
    { path: 'about', component: About, title: 'About — Profile' },
    { path: 'resume', component: Resume, title: 'Resume — Experience' },
    { path: '**', redirectTo: '' }
];
