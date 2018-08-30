import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
	selector: 'page-about',
	templateUrl: 'about.html'
})

export class AboutPage{
	
	param:string = 'Don is working this about page like Yoooo!!!';

	constructor(private navCtrl: NavController){

	}

}