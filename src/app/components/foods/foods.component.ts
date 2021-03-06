import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MainService } from '../../services/main.service';

@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.css']
})
export class FoodsComponent implements OnInit, AfterViewInit {
  
   total = 0;
   category: number = 1;
   food_items = []; 
   added_items = [];
   
   all_product = [{id:1,
     image_src:'https://i.pinimg.com/564x/50/ca/b5/50cab592d417033662035ee89f45f195.jpg',
                    title: 'spicy beef and tofu slas',
                    contains: 'fresh  low-carb',
                    price: '34' },
                    {id:2,image_src:'https://i.pinimg.com/564x/6c/eb/2b/6ceb2b4cd08c2f6f1e2e76e060be05cc.jpg',
                    title: 'spicy beef and tofu slas',
                    contains: 'fresh low-carb',
                    price: '34' },
                    {id:3,image_src:'https://i.pinimg.com/564x/e4/f3/da/e4f3daf3a6a926df286a8dabc6bf0dc0.jpg',
                    title: 'spicy beef and tofu slas',
                    contains: 'fresh low-carb',
                    price: '34' },
                    {id:4,image_src:'https://b.zmtcdn.com/data/reviews_photos/7d5/59be875bbf16a12396cff5c3fe6017d5_1541311047.jpg?crop=3024%3A3024%3B219%2C0&fit=around%7C200%3A200',
                    title: 'spicy beef and tofu slas',
                    contains: 'fresh low-carb',
                    price: '34' },
                    {id:5,image_src:'https://b.zmtcdn.com/data/reviews_photos/fa1/2685c376bea3439eee89a8e5d1ef2fa1_1538833699.jpg?crop=567%3A567%3B279%2C0&fit=around%7C200%3A200',
                    title: 'spicy beef and tofu slas',
                    contains: 'fresh low-carb',
                    price: '34' },
                    {id:6,image_src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSNKYtiDOH9pnm1MBiilSHb2YPqY7O3jRHvx4Hd5O-BXlTjUVz6Q',
                    title: 'spicy beef and tofu slas',
                    contains: 'fresh low-carb',
                    price: '34' },
                    {id:7,image_src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9fSnyCvXPq-s-2yP-ikywMqUgqGaS8GbgmbAorccwsXChESUY',
                    title: 'spicy beef and tofu slas',
                    contains: 'fresh low-carb',
                    price: '34' }];
         mains = [{id:1,image_src:'https://cdn.demos.pixelgrade.com/wp-content/uploads/sites/5/2014/06/spice-beef-12-400x400.jpg',
                    title: 'spicy beef and tofu slas',
                    contains: 'fresh  low-carb',
                    price: '34' },
                    {id:2,image_src:'https://cdn.demos.pixelgrade.com/wp-content/uploads/sites/5/2014/06/spice-beef-12-400x400.jpg',
                    title: 'spicy beef and tofu slas',
                    contains: 'fresh low-carb',
                    price: '34' },
                    {id:3,image_src:'https://cdn.demos.pixelgrade.com/wp-content/uploads/sites/5/2014/06/spice-beef-12-400x400.jpg',
                    title: 'spicy beef and tofu slas',
                    contains: 'fresh low-carb',
                    price: '34' }];
          salads = [{id:1,image_src:'https://cdn.demos.pixelgrade.com/wp-content/uploads/sites/5/2014/06/spice-beef-12-400x400.jpg',
                    title: 'spicy beef and tofu slas',
                    contains: 'fresh  low-carb',
                    price: '34' },
                    {id:2,image_src:'https://cdn.demos.pixelgrade.com/wp-content/uploads/sites/5/2014/06/spice-beef-12-400x400.jpg',
                    title: 'spicy beef and tofu slas',
                    contains: 'fresh low-carb',
                    price: '34' }
                    ];
        startes = [{id:1,image_src:'https://cdn.demos.pixelgrade.com/wp-content/uploads/sites/5/2014/06/spice-beef-12-400x400.jpg',
                    title: 'spicy beef and tofu slas',
                    contains: 'fresh  low-carb',
                    price: '34' }
                    
                    ];          
  constructor(private route: ActivatedRoute,private router: Router, private mainService: MainService) { }

  ngOnInit() {
    
    if(localStorage.getItem('total') != null){
      this.total = parseInt(localStorage.getItem('total'));
    };

    this.food_items = this.all_product;
    //console.log(JSON.parse(localStorage.getItem('added_items')));
    if(JSON.parse(localStorage.getItem('added_items')) == null){
    this.added_items = [];  
    }else{
       this.added_items = JSON.parse(localStorage.getItem('added_items'));
    }
    
    this.route.params.subscribe( params => {
      if(params.id == 2){
      this.food_items = this.mains;
      
      }else if(params.id == 3) {
       this.food_items = this.salads;
       
      }else if(params.id == 4) {
       this.food_items = this.startes;
       
      }
      else {
         this.food_items = this.all_product;
        
      }
      });
  }

  ngAfterViewInit(){
    this.checkAddedItems();
  }
  

  addtoCart(item) {
    document.getElementById(item.id).innerText = 'PRODUCT ADDED';
    document.getElementById(item.id).disabled = true;
    item.quantity = 1;
    this.added_items.push(item);
    localStorage.setItem('added_items',JSON.stringify(this.added_items));
    this.mainService.addCount();
    this.total =  this.total + parseInt(item.price);
    localStorage.setItem('total', this.total.toString());
    this.mainService.setTotal(this.total);
    
  }

  checkAddedItems() {

    for(let data of this.added_items){
   
   let obj = this.food_items.find(obj => obj.id = data.id);
  
      if(obj){
        //console.log(obj.id);
       
         document.getElementById(obj.id).innerText = 'PRODUCT ADDED';
         document.getElementById(obj.id).disabled = true; 
      }
     
    }
  }

}