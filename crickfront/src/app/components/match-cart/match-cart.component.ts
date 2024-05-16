import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-match-cart',
  standalone: true,
  imports: [],
  templateUrl: './match-cart.component.html',
  styleUrl: './match-cart.component.css'
})
export class MatchCartComponent {
 @Input() match:any

}
