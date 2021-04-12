import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateFormComponent } from './composants/formulaires/template-form/template-form.component';
import { HomeComponent } from './composants/home/home.component';
import { ErrorComponent } from './composants/error/error.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './composants/formulaires/reactive-form/reactive-form.component';
import { PersonneComponent } from './composants/personne/personne.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PersonneDetailsComponent } from './composants/personne-details/personne-details.component';
import { EditPersonneComponent } from './composants/edit-personne/edit-personne.component';
import { LoginComponent } from './composants/login/login.component';
import { RegisterComponent } from './composants/register/register.component';
import { ProfileComponent } from './composants/profile/profile.component';
import { AuthInterceptor } from './helper/auth.interceptor';
import { VehiculeModule } from './modules/vehicule/vehicule.module';
import { ObservableComponent } from './composants/observable/observable.component';
import { SubjectComponent } from './composants/subject/subject.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateFormComponent,
    HomeComponent,
    ErrorComponent,
    ReactiveFormComponent,
    PersonneComponent,
    PersonneDetailsComponent,
    EditPersonneComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    ObservableComponent,
    SubjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{ provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    console.log('AppModule');
  }
 }
