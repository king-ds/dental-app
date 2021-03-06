import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  pages = [
    {
      title : 'Home',
      url : '/members/menu/clinician-dashboard'
    },
    {
      title : 'Profile',
      url : '/members/menu/clinician-profile'
    },
    {
      title : 'Instructor',
      url : '/members/menu/instructor-viewer'
    },
    {
      title : 'Transfer Patient',
      url : '/members/menu/transfer-patient'
    },
  ];

  selectedPath = '';

  constructor(private router : Router,
              private authenticationService : AuthenticationService) {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event && event.url){
        this.selectedPath = event.url;
      }
    })
   }

  ngOnInit() {
  }

  logoutUser(){
    this.authenticationService.logoutClinician();
  }
}
