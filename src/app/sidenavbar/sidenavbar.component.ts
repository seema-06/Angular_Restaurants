import { Component, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-sidenavbar',
  templateUrl: './sidenavbar.component.html',
  styleUrls: ['./sidenavbar.component.scss']
})
export class SidenavbarComponent implements OnInit {
  @Output() sidenavClose = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }

}
