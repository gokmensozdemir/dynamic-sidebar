import { Component, OnInit, Input } from '@angular/core';
import { LazyService, LazyData } from './lazy.service';

@Component({
    selector: 'lazy-component',
    templateUrl: './lazy.component.html',
})
export class LazyComponent implements OnInit {
    constructor(
        public lazyData: LazyData,
        private lazyService: LazyService) {
        
    }

    ngOnInit() {
        
    }

    ngOnDestroy() {
        console.log(this.lazyData.title + ' destroyed!');
    }
}