import {inject} from 'aurelia-framework';
import {WebAPI} from './web-api';

@inject(WebAPI)
export class PatientRecord {
    patient;

    constructor(public api : WebAPI) {}

    activate(params) {
        this.api.getPatientDetails(params.id).then(patient => this.patient = patient);
    }

    save() {
        this.api.updatePatientDetails(this.patient);
    }
}