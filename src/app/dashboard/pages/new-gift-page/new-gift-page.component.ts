import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GiftsService } from '../../services/gifts.service';
import { Gift } from '../../interfaces/gif.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-new-gift-page',
  standalone: true,
  imports: [],
  templateUrl: './new-gift-page.component.html',
  styleUrl: './new-gift-page.component.css'
})
export class NewGiftPageComponent implements OnInit{

  public giftForm = new FormGroup({
    id:                   new FormControl(''),
    role:                 new FormControl(''),
    title:                new FormControl(''),
    alt_image:            new FormControl(''),
    due_date:             new FormControl(''),
    description:          new FormControl(''),
    budget:               new FormControl(''),
    balance:              new FormControl(''),
    number_participants:  new FormControl(''),
    payers:               new FormControl(''),
    organizer:            new FormControl(''),
    bizum:                new FormControl(''),
    account:              new FormControl(''),
    collaborators:        new FormControl(''),
    participants:         new FormControl(''),
  });


  private giftsService = inject(GiftsService);

  private router = inject( Router );

  private activatedRoute = inject( ActivatedRoute )
  
  
  ngOnInit(): void {
    
    if ( !this.router.url.includes('edit') ) return;

    this.activatedRoute.params
      .pipe(
          switchMap( ({ id }) => this.giftsService.getGiftById( id ) ),
      ).subscribe( gift => {

        if( !gift ) {
          return this.router.navigateByUrl('/');
        }

        this.giftForm.reset(  );
        return;

      } )

  }

  // get currentGift(): Gift {

  //   // const gift = this.giftForm.value as Gift;
 
  //   // return gift;
  // }


  // onSubmit(){

  //   if ( this.giftForm.invalid ) return;

  //   if ( this.currentGift.id ){
  //     this.giftsService.updateGift( this.currentGift )
  //       .subscribe( gift => {

  //       });

  //       return;
  //   }


  //   this.giftsService.addGift( this.currentGift )
  //     .subscribe( gift => {

  //     });

  // }

}
