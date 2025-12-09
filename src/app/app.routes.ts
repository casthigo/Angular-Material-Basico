import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Dashboard } from './components/dashboard/dashboard';
import { Users } from './components/dashboard/users/users';
import { Reports } from './components/dashboard/reports/reports';
import { Welcome } from './components/dashboard/welcome/welcome';
import {CreateEditUser} from './components/dashboard/create-edit-user/create-edit-user';

export const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: Login},
    {path: 'dashboard', component: Dashboard, children: [
        {path: '', component: Welcome},
        {path: 'users', component: Users},
        {path: 'reports', component: Reports},
        {path: 'createEditUser', component: CreateEditUser},  
        {path: 'editUser/:id', component: CreateEditUser},  
        
    ]},
    {path: '**', redirectTo: 'login', pathMatch: 'full'},
    
];
