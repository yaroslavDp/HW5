import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FilterByNamePipe } from './pipes/filter-by-name';
import { UserActionsComponent } from './user-actions/user-actions.component';
import { UserListComponent } from './user-list/user-list.component';


@NgModule({
  declarations: [
    UserDashboardComponent,
    UserActionsComponent,
    UserListComponent,
    FilterByNamePipe
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    FormsModule,
    FlexLayoutModule,
    MatCardModule,
  ],
  exports: [
    UserDashboardComponent
  ]
})
export class UsersModule { }
