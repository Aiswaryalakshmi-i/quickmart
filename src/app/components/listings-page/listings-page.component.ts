import { Component, OnInit } from '@angular/core';
import { ListingsService } from 'src/app/services/listings.service'; 
import { Listing } from 'src/app/types';

@Component({
  selector: 'app-listings-page',
  templateUrl: './listings-page.component.html',
  styleUrls: ['./listings-page.component.scss']
})
export class ListingsPageComponent implements OnInit {

  listings: Listing[] = [];

  constructor(private listingsService:ListingsService){}

  ngOnInit(): void {

     this.listingsService.getListings()
     .subscribe(listings => this.listings = listings);
  }
   
 

}
