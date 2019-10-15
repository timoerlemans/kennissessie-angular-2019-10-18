import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-show-frontend-frameworks',
  templateUrl: './show-frontend-frameworks.component.html',
  styleUrls: ['./show-frontend-frameworks.component.scss']
})
export class ShowFrontendFrameworksComponent implements OnInit {
  @Input() frameworks: string[] = [];
  allItemsShown = false;

  ngOnInit() {
    this.frameworks.sort();
  }

  showAllItems() {
    this.allItemsShown = !this.allItemsShown;
  }
}
