import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../../service/api-call.service';
import { error } from 'console';
import { CommonModule } from '@angular/common';
import { MatchCartComponent } from '../../components/match-cart/match-cart.component';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule,MatchCartComponent],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent implements OnInit{
  allMatch: any;
  constructor(private _api:ApiCallService){

  }
  ngOnInit(): void {
    this._api.getAllMatches().subscribe({
      next:data=>{
        this.allMatch=data
      },
      error:error=>{
        console.log(error)
      }
    })
  }

}
