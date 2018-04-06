let latency = 200;
let id = 0;

function getId(){
    return ++id;
}

let patients = [
    {
        id:getId(),
        firstName: 'Teemu',
        lastName: 'Teekkari',
        phone: '0401234567',
        address: 'Hukkatie 1'
    },
    {
        id:getId(),
        firstName: 'Ahto',
        lastName: 'Simakuutio',
        phone: '0401234567',
        address: 'Simakatu 3'
    },
    {
        id:getId(),
        firstName: 'Erkki',
        lastName: 'Esimerkki',
        phone: '0401234567',
        address: 'Erkkilänraitti 1'
    },
    {
        id:getId(),
        firstName: 'Mikko',
        lastName: 'Mallikas',
        phone: '0401234567',
        address: 'Maalaistie 345'
    },
    {
        id:getId(),
        firstName: 'Teemu',
        lastName: 'Mallikas',
        phone: '0401234567',
        address: 'Mallikatu 5'
    },
    {
        id:getId(),
        firstName: 'Ahto',
        lastName: 'Esimerkki',
        phone: '0401234567',
        address: 'Ahtokuja 2345'
    },
    {
        id:getId(),
        firstName: 'Erkki',
        lastName: 'Simakuutio',
        phone: '0401234567',
        address: 'Muutie 1'
    },
    {
        id:getId(),
        firstName: 'Mikko',
        lastName: 'Teekkari',
        phone: '0401234567',
        address: 'Tämätie 42'
    },
    {
        id:getId(),
        firstName: 'Erkki',
        lastName: 'Mallikas',
        phone: '0401234567',
        address: 'Tuotie 45'
    },
    {
        id:getId(),
        firstName: 'Mikko',
        lastName: 'Esimerkki',
        phone: '0401234567',
        address: 'Hukkatie 5'
    }
];

export class WebAPI {
    isRequesting = false;
    
    getPatientList() {
        return new Promise(resolve => {
            setTimeout(() => {
              let results = patients.map(x =>  { return {
                id:x.id,
                firstName:x.firstName,
                lastName:x.lastName
              }});
              resolve(results);
              this.isRequesting = false;
            }, latency);
        });
    }

    getPatientDetails(id){
        this.isRequesting = true;
        return new Promise(resolve => {
          setTimeout(() => {
            let found = patients.filter(x => x.id == id)[0];
            resolve(JSON.parse(JSON.stringify(found)));
            this.isRequesting = false;
          }, latency);
        });
    }

    updatePatientDetails(patient) {
        this.isRequesting = true;
        return new Promise(resolve => {
          setTimeout(() => {
            let found = patients.filter(x => x.id == id)[0];
            found.firstName = patient.firstName;
            found.lastName = patient.lastName;
            this.isRequesting = false;
          }, latency);
        });
    }

    searchPatients(firstName, lastName) {
        this.isRequesting = true;
        return new Promise(resolve => {
          setTimeout(() => {
            let found = [];
            //patients.filter(x => x.firstName == firstName).concat(patients.filter(x => x.lastName == lastName));
            patients.forEach(p => {
                if(p.firstName == firstName || p.lastName == lastName){
                    found.push(p);
                }
            })
            resolve(JSON.parse(JSON.stringify(found)));
            this.isRequesting = false;
          }, latency);
        });
    }
}