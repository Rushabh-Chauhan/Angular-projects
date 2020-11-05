import { Component, OnInit } from "@angular/core";

@Component({
  selector: "[app-servers]",
  templateUrl: "./servers.component.html",
  styleUrls: ["./servers.component.css"],
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  creatServerStatus = "no server was created!";
  num = 0;
  servername = "Test Server";
  servercreated = false;
  servers = ["testserver", "Testserver2"];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {}

  onCreatServer() {
    this.servercreated = true;
    this.servers.push(this.servername);
    this.creatServerStatus = this.servername;
  }

  public onUpdateServerName(hi: Event) {
    this.servername = (<HTMLInputElement>event.target).value;
  }
}
