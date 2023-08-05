import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { fakeListings, fakeMyListings } from 'src/app/fake-data';
import { ListingsService } from 'src/app/services/listings.service';
import { Listing } from 'src/app/types';

@Component({
  selector: 'app-edit-listing',
  templateUrl: './edit-listing.component.html',
  styleUrls: ['./edit-listing.component.scss']
})
export class EditListingComponent implements OnInit {

  listing!: Listing;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private listingsService: ListingsService,
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.listingsService.getListingById(id)
    .subscribe(listing => this.listing = listing);
  }

  onSubmit({ name, description, price }:any): void {
    this.listingsService.editListing(this.listing.id, name, description, price)
    .subscribe(() => {
      this.router.navigateByUrl('/user-listing');
    });

  }

}
