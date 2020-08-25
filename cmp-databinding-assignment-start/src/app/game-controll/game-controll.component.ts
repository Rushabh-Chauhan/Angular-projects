import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-game-controll",
  templateUrl: "./game-controll.component.html",
  styleUrls: ["./game-controll.component.css"],
})
export class GameControllComponent implements OnInit {
  interval;
  dis;
  @Output() num = new EventEmitter<{ number: Number }>();
  i = 0;
  constructor() {}

  ngOnInit(): void {}

  onstart() {
    this.interval = setInterval(this.increament, 1000);
    this.dis = true;
  }

  increament = () => {
    this.i = this.i + 1;
    this.num.emit({ number: this.i });
  };

  onstop() {
    clearInterval(this.interval);
    this.dis = false;
  }
}
