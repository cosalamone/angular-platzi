import { Component } from '@angular/core';

import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  widthImg=10;
  name = 'Constanza';
  age = 18;
  img = "https://t2.ev.ltmcdn.com/es/posts/4/8/4/plantar_suculentas_como_hacerlo_2484_orig.jpg";
  buttonDisable = true;
  person = {
    name: "Nicolas",
    age: 40,
    avatar: "https://www.w3schools.com/howto/img_avatar.png",
  }
  names: string[] = ["constanza", "nicolas", "ana"];
  newName = "";
  box = {
    width: 100,
    heigth: 100,
    background: "red"
  };
  products: Product[] = [
    {
      name: "haworthia",
      price: 200,
      image: "./assets/images/haworthia_fasciata.jpg",
    },
    {
      name: "graptopetalum",
      price: 350,
      image: "./assets/images/graptopetalum.jpg",
    },
    {
      name: "sedum-burrito",
      price: 400,
      image: "./assets/images/sedumburrito.jpg",
    },
    {
      name: "haworthia2",
      price: 600,
      image: "./assets/images/haworthia_fasciata.jpg",
    },
    {
      name: "graptopetalum2",
      price: 650,
      image: "./assets/images/graptopetalum.jpg",
    },
    {
      name: "sedum-burrito2",
      price: 600,
      image: "./assets/images/sedumburrito.jpg",
    },
  ];

  toggleButton() {
    this.buttonDisable = !this.buttonDisable;
  }

  increaseAge() {
    this.person.age += 1;
  }

  onScroll(event: Event) {
    const elemento = event.target as HTMLElement;
    console.log(elemento.scrollTop);
  }

  changeName(event: Event) {
    const elemento = event.target as HTMLInputElement;
    this.person.name = elemento.value;
  }

  addName() {
    this.names.push(this.newName);
    this.newName = "";
  }

  deleteName(index: number) {
    this.names.splice(index, 1);
  }

}
