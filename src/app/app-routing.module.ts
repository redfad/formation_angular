import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Observable } from 'rxjs';
import { ErrorComponent } from './composants/error/error.component';
import { ReactiveFormComponent } from './composants/formulaires/reactive-form/reactive-form.component';
import { TemplateFormComponent } from './composants/formulaires/template-form/template-form.component';
import { HomeComponent } from './composants/home/home.component';
import { LoginComponent } from './composants/login/login.component';
import { ObservableComponent } from './composants/observable/observable.component';
import { PersonneDetailsComponent } from './composants/personne-details/personne-details.component';
import { PersonneComponent } from './composants/personne/personne.component';
import { ProfileComponent } from './composants/profile/profile.component';
import { RegisterComponent } from './composants/register/register.component';
import { SubjectComponent } from './composants/subject/subject.component';
import { AuthGuard } from './guards/auth.guard';
import { LeaveGuard } from './guards/leave.guard';
import { PersonDetailsResolverService } from './resolver/person-detail-resolver.service';
import { PersonResolverService } from './resolver/persons-resolver.service';

// redirectTo: "/home": nous utilisons cette propriété dans le tableau routes
// pour indiquer au service de routage si les utilisateurs naviguent vers l'URL vide,
// ils doivent être redirigés vers l'URL d'accueil plutôt que vers l'URL vide.

// pathMatch: 'full': Cette propriété commande à Angular qu'une URL vide doit
// correspondre au chemin de chaîne exact et non une chaîne partiellement vide.

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'template-form', component: TemplateFormComponent, canDeactivate:[LeaveGuard]},
  {path: 'reactive-form', component: ReactiveFormComponent},
  {path: 'vehicule', loadChildren:()=> import('./modules/vehicule/vehicule.module').then(m=> m.VehiculeModule)},
  { path: 'obs', component: ObservableComponent },
  { path: 'sub', component: SubjectComponent },
  {path: 'error', component: ErrorComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent ,canActivate:[AuthGuard]},
  {path: 'personne', component: PersonneComponent, resolve:{
    routeResolver: PersonResolverService
  }},
  {path: 'details/:id', component: PersonneDetailsComponent, resolve:{
    personne: PersonDetailsResolverService
  }},
  {path: '', redirectTo: '/home', pathMatch:'full'},
  {path: '**', redirectTo: '/error'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
