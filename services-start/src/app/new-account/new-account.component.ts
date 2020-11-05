import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers : [LoggingService] // this to tell angular to give the services we need
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor(private service: LoggingService) {} // the to service is inicilizing

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountAdded.emit({
      name: accountName,
      status: accountStatus
    });
    // tslint:disable-next-line:max-line-length
    // const service = new LoggingService(); // this inicilizing is wrong do not ever inilizise, let angular do it as we have done in constructor.
    this.service.logStatusChange(accountStatus); // it equals the line below.
    // console.log('A server status changed, new status: ' + accountStatus);
  }
}
