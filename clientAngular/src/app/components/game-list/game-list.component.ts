import { Component, HostBinding, OnInit } from '@angular/core';
import { Game } from 'src/app/models/game.interface';
import { GamesService} from '../../services/games.service';
@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  @HostBinding('class') classes = 'row';
  games: any=[];
  constructor(private gameSvc:GamesService) { }

  ngOnInit(): void {
    this.getGames();
  }
  getGames() {
    this.gameSvc.getGames().subscribe(
      res => {
        this.games = res;
      },
      err => console.log(err)
    );
  }
  deleteGame(id:string) {
    console.log(id);
    this.gameSvc.deleteGame(id).subscribe(
      res => {
        console.log('Game deleted');
        this.getGames();
      },
      err => console.log(err)
    );
  }

}
