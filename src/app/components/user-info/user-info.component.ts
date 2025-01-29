import { Component } from '@angular/core';
import { AssetsService } from 'src/app/services/assets.service'
import { BALANCES } from './balance.mock'

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./style.scss']
})
export class UserInfo {
  balances = BALANCES

  constructor(public assetsService: AssetsService) {}
}
