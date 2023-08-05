import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { fakeListings } from 'src/app/fake-data';
import { ListingsService } from 'src/app/services/listings.service';
import { Listing } from 'src/app/types';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit{

  email: string= '';
  message: string = '';
  listing!:Listing;
;

  constructor(private route: ActivatedRoute,
    private listingsService: ListingsService,
    private router:Router
    ){}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;

    this.listingsService.getListingById(id)
    .subscribe(listing => {
      this.listing = listing;
      this.message = `Hi, I'm interested in your ${this.listing.name.toLowerCase()}!`;
    });
  }

  sendMessage(){
    alert('Your message has been send');
    this.router.navigateByUrl('/listings');
  }

}
