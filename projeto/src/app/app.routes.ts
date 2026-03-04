import { Routes } from '@angular/router';
import { UsersList } from './pages/users-list/users-list';
import { UsersDetail } from './pages/users-detail/users-detail';

export const routes: Routes = [

  {
    path:'users',
    component: UsersList
  },

  {
    path:'users/:id',
    component: UsersDetail
  },

  {
    path:'',
    redirectTo: 'users',
    pathMatch: 'full'
  },

  {
    path:'**',
    redirectTo: 'users'
  },

];
