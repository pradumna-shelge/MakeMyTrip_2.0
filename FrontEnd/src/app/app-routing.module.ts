
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', 
    loadChildren: () => import('./default-module/default-module.module').then(m => m.DefaultModuleModule)
  },

{
  path: 'admin', 
  loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
