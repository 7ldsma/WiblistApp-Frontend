import { Component, inject, OnInit } from '@angular/core';
import { GiftsService } from '../../services/gifts.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Gift } from '../../interfaces/gif.interface';

@Component({
  selector: 'app-gift-page',
  standalone: true,
  imports: [],
  templateUrl: './gift-page.component.html',
  styleUrl: './gift-page.component.css'
})
export class GiftPageComponent implements OnInit {

  public gift?: Gift;

  private giftsService = inject( GiftsService )
  private router = inject ( Router )
  private activatedRoute = inject( ActivatedRoute )

  ngOnInit(): void {
    
    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.giftsService.getGiftById( id )),
      ).subscribe( gift => {

        if(!gift) return this.router.navigate([ '/gifts/list' ]);

        this.gift = gift;
        return;

      })
  }

}
