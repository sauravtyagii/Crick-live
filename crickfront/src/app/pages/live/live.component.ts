import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../../service/api-call.service';
import { CommonModule } from '@angular/common';
import { MatchCartComponent } from '../../components/match-cart/match-cart.component';

@Component({
  selector: 'app-live',
  standalone: true,
  imports: [CommonModule,MatchCartComponent],
  templateUrl: './live.component.html',
  styleUrl: './live.component.css'
})
export class LiveComponent implements OnInit {
  liveMatch:any
  constructor(private _api:ApiCallService){

  }
  ngOnInit(): void {
    this.loadLiveMatches();
  }


  private loadLiveMatches() {
    this._api.getLiveMatches().subscribe({
      next: data => {
        console.log(data);
        this.liveMatch=data
      },
      error: error => {
        console.log(error);
      }
    });
  }
}
