import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string;
  age:number;
  email:string;
  address:Address;
  hobbies:string[];
  hello:any;
  posts:Post[];

  constructor(private dataService:DataService) { 
    console.log('Constructor ran');

    //this.name = 'Saquibul Islam Waheed';
  }

  ngOnInit() {
    console.log('ngOnInit ran');

    this.name = 'Saquib Waheed!'
    this.age = 31;
    this.email = 'saquib@augmedix.com';
    this.address = {
      street:'Babar Road',
      city:'Dhaka',
      state:'Dhaka'
    }
    this.hobbies = ['Play cricket', 'Watch movies'];

    //hello = 1 or 'abcd' | any can be used to hold anything

    this.dataService.getPosts().subscribe((data: Post) => this.posts = {...data});
  }

  onClick() {
    console.log('I am clicked!');
    this.name = 'John Doe';
    this.hobbies.push('New hobby');
  }

  addHobby(hobby) {
    console.log(hobby);
    this.hobbies.unshift(hobby);
    return false;
  }

  deleteHobby(hobby) {
    console.log(hobby);
    for(let i = 0; i < this.hobbies.length; i++) {
      if(this.hobbies[i] == hobby) {
        this.hobbies.splice(i,1);
      }
    }
  }

}

interface Address {
  street:string,
  city:string,
  state:string
}

interface Post {
  userId: number,
  id: number,
  title: string,
  body: string
}