import { NgModule } from '@angular/core';
import { LazyComponent } from './lazy.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [LazyComponent],
    exports: [LazyComponent],
    imports: [CommonModule]
})
export class LazyModule {
    static components = {
        lazy: LazyComponent,
    };
}