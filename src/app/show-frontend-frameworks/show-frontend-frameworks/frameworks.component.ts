import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-frameworks',
  templateUrl: './frameworks.component.html',
  styleUrls: ['./frameworks.component.scss']
})
export class Frameworks implements OnInit {
  @Input() items: string[] = [];
  allShown = false;

  ngOnInit() {
    this.items.sort();
  }

  showAllItems() {
    this.allShown = !this.allShown;
  }
}
