import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListingsPageComponent } from './components/listings-page/listings-page.component';
import { ListingsDetailPageComponent } from './components/listings-detail-page/listings-detail-page.component';
import { ContactComponent } from './components/contact/contact.component';
import { UserListingComponent } from './components/user-listing/user-listing.component';
import { NewListingComponent } from './components/new-listing/new-listing.component';
import { EditListingComponent } from './components/edit-listing/edit-listing.component';

import { ListingDataFormComponent } from './components/listing-data-form/listing-data-form.component';
import { NavbarComponent } from './components/navbar/navbar.component';


import { FormsModule } from '@angular/forms';

import {AngularFireModule} from '@angular/fire/compat';
import {AngularFireAuth, AngularFireAuthModule} from '@angular/fire/compat/auth';
import { environment } from 'src/environments/environment.development';




@NgModule({
  declarations: [
    AppComponent,
    ListingsPageComponent,
    ListingsDetailPageComponent,
    ContactComponent,
    UserListingComponent,
    NewListingComponent,
    EditListingComponent,
    ListingDataFormComponent,
    NavbarComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule
   
 
  ],
  providers: [
],
  bootstrap: [AppComponent]
})
export class AppModule { 


}
