import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { ListProfileComponent } from './list-profile/list-profile.component';
import { NewsComponent } from './news/news.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'productprofiles',
    component: ListProfileComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'admin',
      message: 'This is only for Admin',
    }
  },
  {
    path: 'news',
    component: NewsComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'customer',
      message: 'This is only for Customer',
    }
  },
  {
    path: 'contact',
    component: ContactComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'customer',
      message: 'This is only for Customer',
    }
  },
  {
    path: 'aboutus',
    component: AboutusComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'customer',
      message: 'This is only for Customer',
    }
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
