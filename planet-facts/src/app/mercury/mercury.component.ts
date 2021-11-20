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
  radius
  revolution
  rotation
  basicInfo = []
  ngOnInit(): void {
    this.service.getJSON().subscribe(res=>{
      res.forEach(planet => {
        
        if(planet.name ==='Mercury'){
          this.data.push(planet)
          this.planetInfo = planet.content
          this.radius= planet.radius; this.revolution= planet.revolution; this.rotation=planet.rotation
          console.log(this.basicInfo)

        }
      });
      this.data.forEach(planet=>{
        console.log(this.data)
        this.planetInfo = planet.overview
        this.link= this.planetInfo.source
        this.planetInfo = this.planetInfo.content
      })

    })
  }

}
