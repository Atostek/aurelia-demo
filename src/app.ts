import {inject} from 'aurelia-framework';
import {RouterConfiguration, Router} from 'aurelia-router';
import 'bootstrap';

@inject(Router)
export class App {
  constructor(public router: Router) {}

  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'Atostek';
    config.options.pushState = true;
    config.options.root = '/';
    config.map([
      { route: ['', 'home'], moduleId: 'home', name: 'home', title: 'Tervetuloa!' },
      { route: 'patient/:id', moduleId: 'patient-record', name: 'patient', title: 'Patient record'}
    ]);

    this.router = router;
  }
}
