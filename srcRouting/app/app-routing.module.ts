import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Abc1Component } from './abc1/abc1.component';
import { Abc2Component } from './abc2/abc2.component';


const routes: Routes = [
{path:'a', component:Abc1Component},
{path:'a/b', component:Abc2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
