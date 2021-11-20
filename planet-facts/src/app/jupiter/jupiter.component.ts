import { Component, OnInit } from '@angular/core';
import { PlanetService } from '../planet.service';

@Component({
  selector: 'app-jupiter',
  templateUrl: './jupiter.component.html',
  styleUrls: ['./jupiter.component.css']
})
export class JupiterComponent implements OnInit {

  constructor(private service:PlanetService) { }
  internal = 'internal'
  backgroundImg = '../../../utills/assets/planet-mercury.svg'
  imgStructure;
  imgOverview;
  imgGeology
  data=[]
  planetInfo
  source='Source: Wikipedia'
  link;
  radius
  revolution
  rotation
  basicInfo = [];
  structureContent;
  geologyContent
  ngOnInit(): void {
    this.service.getJSON().subscribe(res=>{
      res.forEach(planet => {
        
        if(planet.name ==='Jupiter'){
          this.structureContent= planet.structure.content;
          this.geologyContent = planet.geology.content
          console.log(planet.images.planet)
          this.data.push(planet)
          this.planetInfo = planet.content
          this.radius= planet.radius; this.revolution= planet.revolution; this.rotation=planet.rotation

        }
      });
      this.data.forEach(planet=>{
        this.planetInfo = planet.overview
        this.link= this.planetInfo.source
        this.planetInfo = this.planetInfo.content
      })

    })
  }
  geologyView;
  onViewChangeInternal(){
    document.getElementById('planet-container').classList.remove('planet-container')
    document.getElementById('planet-container').classList.add('planet-container-internal')
    this.planetInfo = this.structureContent
    this.geologyView = false;

  }
  onViewChangeOverview(){
    document.getElementById('planet-container').classList.remove('planet-container-internal')
    document.getElementById('planet-container').classList.add('planet-container')
    this.geologyView = false;


    this.ngOnInit()
  } 
   onViewChangeGeology(){
     this.geologyView = true;
  



    this.planetInfo = this.geologyContent;
  }
}
