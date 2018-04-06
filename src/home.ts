import {inject} from 'aurelia-framework';
import {WebAPI} from './web-api';

@inject(WebAPI)
export class Home {
    firstName = '';
    lastName = '';
    patients;

    constructor(private api : WebAPI) {}

    search() {
        this.api.searchPatients(this.firstName, this.lastName).then(result => this.patients = result);
    }

    clear() {
        this.firstName = '';
        this.lastName = '';
    }

    get canSearch() {
        return this.firstName || this.lastName;
    }
}