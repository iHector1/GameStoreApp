import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/models/game.interface';
import { GamesService} from '../../services/games.service';
@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  games: any=[];
  constructor(private gameSvc:GamesService) { }

  ngOnInit(): void {
    this.gameSvc.getGames().subscribe(
      res => {
        this.games = res;
      },
      err => console.log(err)
    );
  }

}
