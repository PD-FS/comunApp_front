import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClassifiedsPage } from './classifieds';

@NgModule({
  declarations: [
    ClassifiedsPage,
  ],
  imports: [
    IonicPageModule.forChild(ClassifiedsPage),
  ],
})
export class ClassifiedsPageModule {}
