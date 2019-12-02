import { Component, OnInit } from '@angular/core';
import {StarWarsDemoServiceService} from '../star-wars-demo-service.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private starWarsService: StarWarsDemoServiceService) { }

  ngOnInit() {
    this.starWarsService.getVehicles().subscribe(results => {
      console.log(results);
    });
  }

}
