import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
navLinks=[];
activeLinkIndex = -1; 

  constructor(private router: Router) { 
    this.navLinks = [
      {
          label: 'MERCURY',
          link: './mercury',
          index: 0
      }, {
          label: 'EARTH',
          link: './earth',
          index: 1
      }, {
          label: 'MARS',
          link: './mars',
          index: 2
      }, {
          label: 'SATURN',
          link: './saturn',
          index: 3
      }, {
          label: 'NEPTUNE',
          link: './neptune',
          index: 4
      }, {
          label: 'URANUS',
          link: './uranus',
          index: 5
      }, {
          label: 'JUPITER',
          link: './jupiter',
          index: 6
      },
  ];
  }

  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
  });
  }


  planetChange(planet){
 

  }
}
 