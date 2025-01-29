import { Injectable } from '@angular/core'
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})

export class AssetsService {
  private readonly assetsUrl = environment.assetsUrl

  getImagePath(fileName: string = 'placeholder.jpg'): string {
    return this.assetsUrl + fileName
  }
}
