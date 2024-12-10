import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { ProductComponent } from './product/product.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { StretchersComponent } from './product/stretchers/stretchers.component';
import { ElectrocardiografoComponent } from './accessories/electrocardiografo/electrocardiografo.component';
import { MaquinaAnestesiaComponent } from './accessories/maquina-anestesia/maquina-anestesia.component';
import { MonitoresComponent } from './accessories/monitores/monitores.component';
import { OtrosComponent } from './accessories/otros/otros.component';
import { IncubadoraComponent } from './accessories/incubadora/incubadora.component';

const routes: Routes = [
  {path: 'acerca-de-nosotros', component: ContentComponent},
  {path: 'equipos/1', component: ProductComponent},
  {path: 'desfibriladores', component: AccessoriesComponent},
  {path: 'equipos/2', component: StretchersComponent},
  {path: "electrocardiografos", component: ElectrocardiografoComponent},
  {path: "maquinas-anestesia", component: MaquinaAnestesiaComponent},
  {path: "monitores", component: MonitoresComponent},
  {path: "incubadora", component: IncubadoraComponent},
  {path: "otros", component: OtrosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
