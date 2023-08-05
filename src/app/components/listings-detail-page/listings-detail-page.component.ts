import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fakeListings } from 'src/app/fake-data';
import { ListingsService } from 'src/app/services/listings.service';
import { Listing } from 'src/app/types';


@Component({
  selector: 'app-listings-detail-page',
  templateUrl: './listings-detail-page.component.html',
  styleUrls: ['./listings-detail-page.component.scss']
})
export class ListingsDetailPageComponent implements OnInit {
  isLoading: boolean = true;
  listing!: Listing;

  constructor(private route: ActivatedRoute,
    private listingsService: ListingsService,
     ){}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.listingsService.getListingById(id)
    .subscribe(listing => {
      this.listing = listing;
      this.isLoading = false;
    });
  this.listingsService.addViewToListing(id)
    .subscribe(() => console.log('Views updated!'));
}
  }


