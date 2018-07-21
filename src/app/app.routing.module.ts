import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { SobrenosComponent } from './pages/sobrenos/sobrenos.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';


const appRoutes: Routes = [
	{ path: 'sobrenos', component: SobrenosComponent },
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: 'contato', component: ContatoComponent },
	{ path: 'login', component: LoginComponent },
	{path: 'home', component: HomeComponent},
];

@NgModule({
	imports: [RouterModule.forRoot(appRoutes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}