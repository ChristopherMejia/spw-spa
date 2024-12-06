import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { ProductComponent } from './product/product.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { StretchersComponent } from './product/stretchers/stretchers.component';
import { ElectrocardiografoComponent } from './accessories/electrocardiografo/electrocardiografo.component';
import { NavbarComponent } from './footer/navbar/navbar.component';
import { MaquinaAnestesiaComponent } from './accessories/maquina-anestesia/maquina-anestesia.component';
import { MonitoresComponent } from './accessories/monitores/monitores.component';
import { OtrosComponent } from './accessories/otros/otros.component';
import { IncubadoraComponent } from './accessories/incubadora/incubadora.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    FooterComponent,
    ContentComponent,
    ProductComponent,
    AccessoriesComponent,
    StretchersComponent,
    ElectrocardiografoComponent,
    NavbarComponent,
    MaquinaAnestesiaComponent,
    MonitoresComponent,
    OtrosComponent,
    IncubadoraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
