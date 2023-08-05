import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListingsPageComponent } from './components/listings-page/listings-page.component';
import { ListingsDetailPageComponent } from './components/listings-detail-page/listings-detail-page.component';
import { ContactComponent } from './components/contact/contact.component';
import { EditListingComponent } from './components/edit-listing/edit-listing.component';
import { UserListingComponent } from './components/user-listing/user-listing.component';
import { NewListingComponent } from './components/new-listing/new-listing.component';


const routes: Routes = [
  {
    path:'',
    redirectTo:'/listings',
    pathMatch:'full'
  },
  
  {
    path:'listings',
    component: ListingsPageComponent,
    pathMatch:'full'
  },
  {
    path:'listings/:id',
    component: ListingsDetailPageComponent ,
    
  },
  {
    path:'contact/:id',
    component: ContactComponent,
    
  }
  ,{
    path:'edit-listing/:id',
    component: EditListingComponent,
  },
  {
    path:'user-listing',
    component: UserListingComponent,
   
  },{
    path:'new-listing',
    component:NewListingComponent
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
