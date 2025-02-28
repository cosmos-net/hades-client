import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

export const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: '/login' },
  {
    path: 'login',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('@app/pages/login/login.routes').then((m) => m.LOGIN_ROUTES),
      },
    ]
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('@app/pages/home/home.routes').then((m) => m.HOME_ROUTES),
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('@app/pages/dashboard/dashboard.routes').then(
            (m) => m.DASHBOARD_ROUTES
          ),
      },
      {
        path: 'roles',
        loadChildren: () =>
          import('@app/pages/roles/roles.routes').then((m) => m.ROLES_ROUTES),
      },
      {
        path: 'users',
        loadChildren: () =>
          import('@app/pages/users/users.routes').then((m) => m.USERS_ROUTES),
      },
      {
        path: 'assignments',
        loadChildren: () =>
          import('@app/pages/assignments/assignments.routes').then(
            (m) => m.ASSIGNMENTS_ROUTES
          ),
      },
      {
        path: 'permissions',
        loadChildren: () =>
          import('@app/pages/permissions/permissions.routes').then(
            (m) => m.PERMISSIONS_ROUTES
          ),
      },
      {
        path: 'policies',
        loadChildren: () =>
          import('@app/pages/policies/policies.routes').then(
            (m) => m.POLICIES_ROUTES
          ),
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('@app/pages/settings/settings.routes').then(
            (m) => m.SETTINGS_ROUTES
          ),
      },
    ]
  },
];
