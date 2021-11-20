import { Component, OnInit } from '@angular/core';
import { PlanetService } from '../planet.service';
@Component({
  selector: 'app-mercury',
  templateUrl: './mercury.component.html',
  styleUrls: ['./mercury.component.css']
})
export class MercuryComponent implements OnInit {
  constructor(private service:PlanetService) { }
  data=[]
  planetInfo
  source='Source: Wikipedia'
  link;
  ngOnInit(): void {
    this.service.getJSON().subscribe(res=>{
      res.forEach(planet => {
        
        if(planet.name ==='Mercury'){
          this.data.push(planet)
          this.planetInfo = planet.content
        }
      });
      this.data.forEach(planet=>{
        this.planetInfo = planet.overview
        this.link= this.planetInfo.source
        this.planetInfo = this.planetInfo.content
      })

    })
  }

}
