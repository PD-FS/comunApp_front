import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterClassifiedsPage } from './register-classifieds';

@NgModule({
  declarations: [
    RegisterClassifiedsPage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterClassifiedsPage),
  ],
})
export class RegisterClassifiedsPageModule {}
