import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'login',
        loadComponent:()=>
            import('./features/account/login/login.component').then(
                (m) =>m.LoginComponent
            ),
    },
    {
        path:'register',
        loadComponent:()=>
            import('./features/account/register/register.component').then(
                (m)=>m.RegisterComponent
            ),
    },
    {
        path:'voucher',
        loadComponent:()=>
            import('./features/voucher/list/list.component').then(
                (m)=> m.ListComponent
            ),
    },
    {
        path:'voucher/id:',
        loadComponent:()=>
            import('./features/voucher/details/details.component').then(
                (m)=>m.DetailsComponent
            ),
    },

    {
        path:'recycle',
        loadComponent:()=>
            import('./features/reycle-center/list/list.component').then(
                (m)=> m.ListComponent
            ),
    },
    {
        path:'recycle/id:',
        loadComponent:()=>
            import('./features/reycle-center/details/details.component').then(
                (m)=>m.DetailsComponent
            ),
    },

];
