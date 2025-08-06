import { Routes } from '@angular/router';
import { Alumnos } from './features/alumnos/alumnos';
import { RoutePaths } from '../shared/pipes/routes';
import { ViewStudent } from './features/alumnos/view-student/view-student';

export const routes: Routes = [
    {
        path: '',
        component: Alumnos
    },
    {
        path: RoutePaths.ALUMNOS,
        component: Alumnos
    },
    {
        path: RoutePaths.CURSOS,
        loadComponent: () => import('./features/cursos/cursos').then(m => m.Cursos)
    },
    {
        path: RoutePaths.INSCRIPCIONES,
        loadComponent: () => import('./features/inscripciones/inscripciones').then(m => m.Inscripciones)
    },
    {
        path: "view-student",
        component: ViewStudent
    }

];
