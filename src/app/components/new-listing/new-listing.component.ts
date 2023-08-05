import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListingsService } from 'src/app/services/listings.service';

@Component({
  selector: 'app-new-listing',
  templateUrl: './new-listing.component.html',
  styleUrls: ['./new-listing.component.scss']
})
export class NewListingComponent implements OnInit {

  // @Input() buttonText: any;

  // name: string= '';
  // description: string = '';
  // price: string = '';
  

  constructor(private route: ActivatedRoute,private router:Router,    private listingsService: ListingsService,){}


  ngOnInit(): void {

  }

  onSubmit({ name, description, price }:any){
    this.listingsService.createListing(name, description, price)
      .subscribe(() => {
        this.router.navigateByUrl('/user-listing');
      });
  }

}
