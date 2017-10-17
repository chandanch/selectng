import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  teamList: Team[] = [
    new Team(1, 'Real'),
    new Team(2, 'Manchester'),
    new Team(3, 'Liverpool'),
  ];
  activeTeam = '';

  ngOnInit() {
    this.activeTeam = this.teamList[1].name;
  }

  getTeam(team) {
    console.log(team);
    console.log(this.activeTeam);
  }
}

export class Team {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}
