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
  playersList: Player[] = [];
  public activeTeam;
  activePlayer;

  ngOnInit() {
    this.activeTeam = this.teamList[1];
  }

  getTeam(team) {
    console.log(team);
    this.loadPlayers();
  }

  loadPlayers() {
    this.playersList.push(
      new Player(1, 'Jorge'),
      new Player(2, 'Simopp'),
      new Player(3, 'Fioas'),
      new Player(4, 'Goerge')
    );
    this.activePlayer = this.playersList[1];
  }

  sendTeam(team) {
    console.log(`Team ${team.name} sent`);
  }

  getPlayer(player) {
    console.log(player);
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

export  class Player {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.name = name;
    this.id = id;
  }
}

