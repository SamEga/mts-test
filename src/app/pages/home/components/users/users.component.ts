import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User, UserService } from 'src/app/models/home.models';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass'],
})
export class UsersComponent {
  @Input() users: User[] | undefined;
  @Input() services: UserService[] | undefined;
  @Input() activeId: number | undefined;
  @Output() selectUserEmitter: EventEmitter<User> = new EventEmitter();

  trackByFn(index: number, item: User): number {
    return index;
  }

  calculatePayment(user: User): number {
    return user.enabledServices.map((val) => this.getServicePriceById(val)).reduce((prev, current) => prev + current, 0);
  }

  getServicePriceById(id: number): number {
    if (this.services && this.services.length) {
      return this.services.filter((s) => s.id === id)[0].fee;
    }
    return 0;
  }

  handleClick(user: User): void {
    this.selectUserEmitter.emit(user);
  }
}
