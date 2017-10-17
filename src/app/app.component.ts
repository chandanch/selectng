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
  public activeTeam;

  ngOnInit() {
    this.activeTeam = this.teamList[1];
  }

  getTeam(team) {
    console.log(team);
  }

  sendTeam(team) {
    console.log(`Team ${team.name} sent`);
  }

  compareFn(c1: Team, c2: Team): boolean {
    console.log(c2);
    return c1 && c2 ? c1 === c2 : c1 === c2;
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

