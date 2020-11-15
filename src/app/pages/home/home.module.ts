import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home-form/home.component';
import { UsersComponent } from './components/users/users.component';
import { ServicesComponent } from './components/services/services.component';
import { UserComponent } from './components/user/user.component';
import { EnabledServiceComponent } from './components/enabled-service/enabled-service.component';
import { AvailableServiceComponent } from './components/available-service/available-service.component';

@NgModule({
  declarations: [HomeComponent, UsersComponent, ServicesComponent, UserComponent, EnabledServiceComponent, AvailableServiceComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
