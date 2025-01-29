import { Component } from '@angular/core';
import { AssetsService } from 'src/app/services/assets.service'

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./style.scss']
})
export class BannerComponent {
  constructor(public assetsService: AssetsService) {}
}
