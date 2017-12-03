import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { AddItemComponent } from './add-item/add-item.component';
import { AllItemsComponent } from './all-items/all-items.component';
import { ItemSearchComponent } from './item-search/item-search.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { CreateRegistryComponent } from './create-registry/create-registry.component';
import { UserSearchComponent } from './user-search/user-search.component';
import { UnauthAccessComponenet} from './unauth-access/unauth-access.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { LoginService } from './services/login-service';
import { UserIdService } from './services/userId.service';
import { ProfileService } from './services/profile.service';
import { ItemService } from './services/item.service';
import { HttpClient } from '@angular/common/http/src/client';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ItemSearchComponent,
    ItemDetailComponent,
    AllItemsComponent,
    CreateRegistryComponent,
    UserSearchComponent,
    ProfileComponent,
    UnauthAccessComponenet,
    PageNotFoundComponent,
    AddItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    LoginService,
    UserIdService,
    ItemService,
    ProfileService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
