import { Component, Injector, Compiler, Type, ReflectiveInjector } from '@angular/core';
import { AppService } from './app.service';
import { LazyComponent } from './lazy/lazy.component';
import { LazyService, LazyData } from './lazy/lazy.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private compiler: Compiler,
    private injector: Injector,
    private appService: AppService
  ) {

  }

  menus: any[] = [];
  selectedMenuId: number;

  myInjector: Injector;
  myComponent: Type<LazyComponent>;

  ngOnInit() {
    this.appService.getMenuList().subscribe((res: any[]) => {
      this.menus = res.slice();
    });
  }

  load(menu: any) {

    if (menu.id === this.selectedMenuId) {
      return;
    }

    this.selectedMenuId = menu.id;

    import('./lazy/lazy.module')
      .then(mod => mod.LazyModule)
      .then(lazyModule => {
        this.myComponent = lazyModule.components['lazy'];
        this.myInjector = ReflectiveInjector.resolveAndCreate([LazyService, { provide: LazyData, useValue: menu }], this.injector);
        return lazyModule;
      })
      .then(lazyModule => this.compiler.compileModuleAsync(lazyModule))
      .then(factory => {
        factory.create(this.injector);
      });
  }
}
