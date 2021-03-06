import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InstructorProfilePageRoutingModule } from './instructor-profile-routing.module';

import { InstructorProfilePage } from './instructor-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InstructorProfilePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [InstructorProfilePage]
})
export class InstructorProfilePageModule {}
