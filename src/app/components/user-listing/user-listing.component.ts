import { Component, OnInit } from '@angular/core';

import { ListingsService } from 'src/app/services/listings.service';
import { Listing } from 'src/app/types';

@Component({
  selector: 'app-user-listing',
  templateUrl: './user-listing.component.html',
  styleUrls: ['./user-listing.component.scss']
})
export class UserListingComponent implements OnInit{


  listings: Listing[] = [];

  constructor(
    private listingsService: ListingsService,
  ) { }


  ngOnInit(): void {
    this.listingsService.getListingsForUser()
    .subscribe(listings => this.listings = listings);
  }

  onDeleteClicked(listingId: string){
    this.listingsService.deleteListing(listingId)
    .subscribe(() => {
      this.listings = this.listings.filter(
        listing => listing.id !== listingId
      );
    });
  }

}
