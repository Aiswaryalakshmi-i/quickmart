import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Listing } from 'src/app/types';

@Component({
  selector: 'app-listing-data-form',
  templateUrl: './listing-data-form.component.html',
  styleUrls: ['./listing-data-form.component.scss']
})
export class ListingDataFormComponent implements OnInit {

  @Input() buttonText: any;
  @Input() currentName = '';
  @Input() currentDescription = '';
  @Input() currentPrice: any;

  @Output() onSubmit = new EventEmitter<Listing>();

  name: string= '';
  description: string = '';
  price: string = '';
 

  constructor(private route: ActivatedRoute,private router:Router){}


  ngOnInit(): void {
    this.name = this.currentName;
    this.description = this.currentDescription;
    this.price = this.currentPrice;


  }

  onButtonClicked(){
    this.onSubmit.emit({
      id:'',
      name: this.name,
      description: this.description,
      price: Number(this.price),
      views: 0,

    });
    // alert('Creating a new listing...');
    // this.router.navigateByUrl('/user-listing');
  }

}
