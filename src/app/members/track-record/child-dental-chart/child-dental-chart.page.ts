import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../../services/api.service';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-child-dental-chart',
  templateUrl: './child-dental-chart.page.html',
  styleUrls: ['./child-dental-chart.page.scss'],
})
export class ChildDentalChartPage implements OnInit {

  track_record : any;

  constructor(private apiService : ApiService,
              private activatedRoute : ActivatedRoute,
              private router : Router,) { 
    this.activatedRoute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.track_record = this.router.getCurrentNavigation().extras.state.track_record;
      }
    });
  }

  ngOnInit() {
  }

  goToQuadrant1(){
    let navigationExtras : NavigationExtras = {
      state : {
        track_record : this.track_record
      }
    };

    this.router.navigate(['members', 'child-dental-chart', 'quadrant-one'], navigationExtras);
  }

  goToQuadrant2(){
    let navigationExtras : NavigationExtras = {
      state : {
        track_record : this.track_record
      }
    };

    this.router.navigate(['members', 'child-dental-chart', 'quadrant-two'], navigationExtras);   
  }

  goToQuadrant3(){
    let navigationExtras : NavigationExtras = {
      state : {
        track_record : this.track_record
      }
    };

    this.router.navigate(['members', 'child-dental-chart', 'quadrant-three'], navigationExtras);   
  }

  goToQuadrant4(){
    let navigationExtras : NavigationExtras = {
      state : {
        track_record : this.track_record
      }
    };

    this.router.navigate(['members', 'child-dental-chart', 'quadrant-four'], navigationExtras);   
  }

}