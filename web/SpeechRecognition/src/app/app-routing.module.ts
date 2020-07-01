import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecognizeComponent } from './components/recognize/recognize.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: RecognizeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
