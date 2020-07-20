import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UploadPopoverComponent } from './upload-popover.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
    ],
    exports: [
        UploadPopoverComponent
    ],
    declarations: [UploadPopoverComponent]
})
export class PopoverModule { }
