import { Component } from '@angular/core';

@Component({
  selector: 'app-zodiak',
  templateUrl: './zodiak.component.html',
  styleUrls: ['./zodiak.component.css']
})
export class ZodiakComponent {

  birthdate: string = "";
  zodiacSign: string = "";

  calculate(): void {
    const date = new Date(this.birthdate);
    const month = date.getMonth() + 1;
    const day = date.getDate();

    switch (month) {
      case 1:
        this.zodiacSign = day < 20 ? "Козерог" : "Водолей";
        break;
      case 2:
        this.zodiacSign = day < 19 ? "Водолей" : "Рыбы";
        break;
      case 3:
        this.zodiacSign = day < 21 ? "Рыбы" : "Овен";
        break;
      case 4:
        this.zodiacSign = day < 20 ? "Овен" : "Телец";
        break;
      case 5:
        this.zodiacSign = day < 21 ? "Телец" : "Близнецы";
        break;
      case 6:
        this.zodiacSign = day < 21 ? "Близнецы" : "Рак";
        break;
      case 7:
        this.zodiacSign = day < 23 ? "Рак" : "Лев";
        break;
      case 8:
        this.zodiacSign = day < 23 ? "Лев" : "Дева";
        break;
      case 9:
        this.zodiacSign = day < 23 ? "Дева" : "Весы";
        break;
      case 10:
        this.zodiacSign = day < 23 ? "Весы" : "Скорпион";
        break;
      case 11:
        this.zodiacSign = day < 22 ? "Скорпион" : "Стрелец";
        break;
      case 12:
        this.zodiacSign = day < 22 ? "Стрелец" : "Козерог";
        break;
      default:
        this.zodiacSign = "";
    }
  }

}
