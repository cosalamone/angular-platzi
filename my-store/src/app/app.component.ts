import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Constanza';
  age = 18;
  img = "https://t2.ev.ltmcdn.com/es/posts/4/8/4/plantar_suculentas_como_hacerlo_2484_orig.jpg";
  buttonDisable = true;
  person = {
    name: "Nicolas",
    age: 40,
    avatar: "https://www.w3schools.com/howto/img_avatar.png"
  }

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
}
