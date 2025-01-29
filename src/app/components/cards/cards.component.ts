import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./style.scss']
})

export class CardsComponent {
  @Input() title: string | undefined;
  @Input() note: string | undefined;
  @Input() formFields: any[] = [];
  @Input() buttons: any[] = [];
  @Input() imagePath: string | undefined;
}