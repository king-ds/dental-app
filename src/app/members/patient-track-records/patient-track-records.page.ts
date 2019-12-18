import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../services/api.service';
import { StorageService } from './../../services/storage.service';
import { ActivatedRoute, Router, NavigationExtras, Route } from '@angular/router';

@Component({
  selector: 'app-patient-track-records',
  templateUrl: './patient-track-records.page.html',
  styleUrls: ['./patient-track-records.page.scss'],
})
export class PatientTrackRecordsPage implements OnInit {

  debouncer : any;
  loader : boolean;

  track_record : any;
  empty : boolean;
  patient : string;

  constructor(private apiService : ApiService,
              private storageService : StorageService,
              private router : Router) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.loader = true;

    this.storageService.getObject('patient').then((result) => {
      this.patient = result;
      
      this.debouncer = setTimeout(() => {
        this.checkMyTrackRecord();
        this.loader = false;
      }, 2000)
    })
  }

  checkMyTrackRecord(){
    this.apiService.getMyTrackRecord(this.patient['id']).subscribe(val => {
      if(val == ''){
        this.empty = true;
      }else{
        this.empty = false;
        this.track_record = val;
      }
    });
  }

  goToPatientInformation(){
    let navigationExtras : NavigationExtras = {
      state : {
        track_record : this.track_record
      }
    };
    this.router.navigate(['members', 'patient-personal-information'], navigationExtras);
  }

  goToComplaint(){
    let navigationExtras : NavigationExtras = {
      state : {
        track_record : this.track_record
      }
    };
    this.router.navigate(['members', 'patient-complaint'], navigationExtras);
  }

  goToVitalSign(){
    let navigationExtras : NavigationExtras = {
      state : {
        track_record : this.track_record
      }
    };
    this.router.navigate(['members', 'patient-vital-sign'], navigationExtras);
  }

  goToMedicalHistory(){
    let navigationExtras : NavigationExtras = {
      state : {
        track_record : this.track_record
      }
    };
    this.router.navigate(['members', 'patient-medical-history'], navigationExtras);
  }
  
  goToMedicalHealthQuestionnaire(){
    let navigationExtras : NavigationExtras = {
      state : {
        track_record : this.track_record
      }
    };
    this.router.navigate(['members', 'patient-medical-health-questionnaire'], navigationExtras);
  }

  goToAllergies(){
    let navigationExtras : NavigationExtras = {
      state : {
        track_record : this.track_record
      }
    };
    this.router.navigate(['members', 'patient-allergies'], navigationExtras);
  }

  goToDentalChart(){
    let navigationExtras : NavigationExtras = {
      state : {
        track_record : this.track_record
      }
    };
    this.router.navigate(['members', 'patient-dental-chart'], navigationExtras);
  }

  goToOralAssessment(){
    let navigationExtras : NavigationExtras = {
      state : {
        track_record : this.track_record
      }
    };
    this.router.navigate(['members', 'patient-oral-assessment'], navigationExtras);
  }
}