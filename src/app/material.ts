
import { MatInputModule } from '@angular/material/input';
import{MatFormFieldModule,} from '@angular/material/form-field';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        MatFormFieldModule,
        MatInputModule,
],
    exports: [
        MatFormFieldModule,
        MatInputModule,            ],
})
export class MaterialModule { }