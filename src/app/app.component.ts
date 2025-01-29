import { Component } from '@angular/core';
import { AssetsService } from 'src/app/services/assets.service'
import { CARD_DATA } from './components/cards/card-data.mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'teste.tradearena';
  cards = CARD_DATA;

  constructor(public assetsService: AssetsService) {}

}
