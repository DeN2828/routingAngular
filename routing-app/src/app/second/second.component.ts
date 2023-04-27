import { Component } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent {

  distance: number = 0;
  fuelConsumption: number = 8.0;

  get fuel(): number {
    return this.distance * this.fuelConsumption / 100;
  }

  calculate(): void {
    // Пустой метод, так как вычисление происходит в геттере fuel
  }

}
