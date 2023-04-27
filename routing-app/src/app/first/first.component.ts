import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {

  speed: number = 0;
  reactionTime: number = 0;
  friction: number = 0.7;

  get brakingDistance(): number {
    const speedInMetersPerSecond = this.speed * 1000 / 3600;
    const reactionDistance = speedInMetersPerSecond * this.reactionTime;
    const brakingDistance = Math.pow(speedInMetersPerSecond, 2) / (2 * this.friction * 9.81);
    return reactionDistance + brakingDistance;
  }
  calculate():void{}
}
