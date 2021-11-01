import { Component, OnInit } from '@angular/core';
import { Model } from './model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  displayAll: boolean = false;

  constructor() { }

  message: string = "mrehaba";


  ngOnInit(): void {
  }

 
  model = new Model();

  addItem(value: string){
    if(value!=""){
    this.model.items.push ({aciklama: value,yap: false})
    }else
    {
      alert("bilgi giriniz")
    }
  }
   
  getName() {
    return this.model.name;
  }

  getItems() {
    if(this.displayAll){
      return this.model.items;
    }
    return this.model.items.filter(item => !item.yap);
  }
}
