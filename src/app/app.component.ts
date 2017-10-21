import {Component, OnInit} from '@angular/core';
import {Brands} from './brands.model';

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
  activeBrand;
  selectStyle;
  protected dataListHeadingColor = '#FF5B3D';
  protected dataListStyle = {
    'border': '2px solid orange',
    'background-color': 'grey'
  };
  protected selectedBrandColor = '';
  protected brands: Brands[] = [
    {
      id: 1,
      name: 'Reebok'
    },
    {
      id: 2,
      name: 'Puma'
    },
    {
      id: 3,
      name: 'Nike'
    },
    {
      id: 4,
      name: 'Adidas'
    }
  ];

  ngOnInit() {
    this.activeTeam = this.teamList[1];
    this.activeBrand = this.brands[1].name;
    this.selectStyle = {
      'none': true,
      'selected': false
    };
  }

  getTeam(team) {
    console.log(team);
    this.loadPlayers();
    this.selectStyle.none = false;
    this.selectStyle.selected = true;
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
    this.selectStyle.none = false;
    this.selectStyle.selected = true;
  }

  getPlayer(player) {
    console.log(player);
  }

  compareFn(c1: Team, c2: Team): boolean {
    console.log(c2);
    return c1 && c2 ? c1 === c2 : c1 === c2;
  }

  getBrand(brand) {
    console.log(brand);
    if (brand === '') {
      this.dataListStyle['border'] = '2px solid red';
      this.selectedBrandColor = 'selected-brand-empty';
    } else {
      this.activeBrand = brand;
      this.dataListStyle['border'] = '2px dotted green';
      this.dataListStyle['background-color'] = 'white';
      this.dataListHeadingColor = '#0f10ff';
      this.selectedBrandColor = 'selected-brand';
    }
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

