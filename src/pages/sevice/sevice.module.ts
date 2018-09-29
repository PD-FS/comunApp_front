import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SevicePage } from './sevice';

@NgModule({
  declarations: [
    SevicePage,
  ],
  imports: [
    IonicPageModule.forChild(SevicePage),
  ],
})
export class SevicePageModule {}
