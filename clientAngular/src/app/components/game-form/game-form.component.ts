import { Component, OnInit,HostBinding} from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import { Game } from 'src/app/models/game.interface';
import { GamesService } from 'src/app/services/games.service';
import {ActivatedRoute,Router} from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css']
})
export class GameFormComponent implements OnInit {
  @HostBinding('class') classes = 'row';

  game: Game={
    id: 0,
    title: '',
    description: '',
    image: '',
    created_at: new Date()
  };
  idGame: string = "";
  edit:boolean = false;
  constructor(private gamesSvc: GamesService,private router:Router,private activedRoute:ActivatedRoute) {
    
   }

  ngOnInit(): void {
    const params = this.activedRoute.snapshot.params;
    if (params.id) {
      this.gamesSvc.getGame(params.id).subscribe(
        res => {
          console.log(res),
            this.game = res;
          this.edit = true;
          this.idGame = params.id;
        },
        res => console.log(res)
      );

    }
  }
  saveNewGame() {
    delete this.game.created_at;
    delete this.game.id;
    this.gamesSvc.savedGame(this.game).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/games']);
      },
      err => {
        console.log(err);
      }
    );
    
  }

  updateGame() {
    this.gamesSvc.updateGame(this.idGame,this.game).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/games']);
      },
      err => {
        console.log(err);
      }
    );
  }
}
