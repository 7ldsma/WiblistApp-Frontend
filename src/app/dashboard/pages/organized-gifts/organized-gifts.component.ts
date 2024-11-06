import { Component, OnInit, inject } from '@angular/core';
import { Gift } from '../../interfaces/gif.interface';
import { GiftsService } from '../../services/gifts.service';
import { AuthService } from '../../../auth/services/auth.service';
import { GiftResponse } from '../../interfaces/gift.response';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: './organized-gifts.component.html',
  styleUrl: './organized-gifts.component.css'
})
export default class OrganizedGiftsComponent implements OnInit {

  organizedGifts: Gift[] = [];

  imagePaths: string[] = [];

  private authService = inject( AuthService );

  private giftService = inject( GiftsService );


  ngOnInit(): void {

    const userId = this.authService.currentUser()!._id


    if(userId){

      this.giftService.getGifts(userId)
        .subscribe( (response: GiftResponse) => {
          this.organizedGifts = response.organized;
          this.imagePaths = this.organizedGifts.map(item => 
            item.alt_image || this.getRandomImage()
          );
        });

      }
      
  }

  basePath = '../../../../assets/';
  imageCount = 3;

  getRandomImage(): string {

      const randomIndex = Math.floor(Math.random() * this.imageCount) + 1;
      return `${this.basePath}${randomIndex}.png`;
  }

}
