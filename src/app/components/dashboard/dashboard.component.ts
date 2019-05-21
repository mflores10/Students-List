import { Component, OnInit, NgZone } from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";
//import { CrudService } from "../../shared/services/crud.service";

import { Router } from "@angular/router";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    public authService: AuthService,
    //public crudService: CrudService,
    public router: Router,
    public ngZone: NgZone
  ) { }

  ngOnInit() { 
    // Aqui tengo que mandar un servicio el cual debe guardar en un documento

  }

}
