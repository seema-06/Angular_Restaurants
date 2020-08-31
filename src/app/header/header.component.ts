import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { LoginComponent } from '../login/login.component';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter();
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  openLoginForm() {
    this.dialog.open(LoginComponent, {width: '500px', height: '450px'});
  }
  public onToggleSidenav = () => { 
    this.sidenavToggle.emit();
  }
}
