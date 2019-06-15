import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {
 
  items;
  
  searchBoxValue = '';
  
  showList = false;  

    account: { email: string, password: string } = {
    email: '',
    password: ''
  }; 
     
   

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initializeItems(); 
	   // Show the results
   // this.showList = false;
  }

  initializeItems() {
    this.items = [
      'Amsterdam',
      'Bogota',
      'Buenos Aires',
      'Cairo',
      'Dhaka',
      'Edinburgh',
      'Geneva',
      'Genoa',
      'Glasglow',
      'Hanoi',
      'Hong Kong',
      'Islamabad',
      'Istanbul',
      'Jakarta',
      'Kiel',
      'Kyoto',
      'Le Havre',
      'Lebanon',
      'Lhasa',
      'Lima',
      'London',
      'Los Angeles',
      'Madrid',
      'Manila',
      'New York',
      'Olympia',
      'Oslo',
      'Panama City',
      'Peking',
      'Philadelphia',
      'San Francisco',
      'Seoul',
      'Taipeh',
      'Tel Aviv',
      'Tokio',
      'Uelzen',
      'Washington'
    ];
  }

  getItems(ev) {
    // Show the results
    this.showList = true;
  
  
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string, return no item
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    } else {
	    this.showList = false;
	}
	
  }

  medClicked(event, item) {
   this.searchBoxValue = item;
   this.items = this.items.filter((item) => {
   return '';
   })
  } 
    
  handleSearch(){
     this.searchBoxValue ='Key Search Success!';
  }
  
  validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
  }

   form_check() {
   //var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   
   
   
   var email =  this.account.email;  
   if (this.validateEmail(email)) {
   
    alert('valid');
  	return true;
    } else {
	alert('Not valid');
   	return false; 
    }
   }



  

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }



  
}



