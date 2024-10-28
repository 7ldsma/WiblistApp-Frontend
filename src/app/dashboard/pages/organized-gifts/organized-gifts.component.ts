import { Component, OnInit, inject } from '@angular/core';
import { Gift } from '../../interfaces/gif.interface';
import { GiftsService } from '../../services/gifts.service';

@Component({
  standalone: true,
  imports: [],
  templateUrl: './organized-gifts.component.html',
  styleUrl: './organized-gifts.component.css'
})
export default class OrganizedGiftsComponent implements OnInit {

  public organizedGifts: Gift[] = [];

  private giftService = inject( GiftsService );

  ngOnInit(): void {
    this.giftService.getGifts()
      .subscribe( gifts => this.organizedGifts = gifts );
  }

}
