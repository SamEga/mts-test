import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { User, UserService } from '../../../models/home.models';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  users: User[] | [] = [];
  services: UserService[] | [] = [];
  activeUser: User | undefined;

  constructor(private api: ApiService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.getDataFromServer();
  }

  getDataFromServer(): void {
    forkJoin([this.api.getData<User[]>('users'), this.api.getData<UserService[]>('services')]).subscribe(
      ([res1, res2]) => {
        this.users = res1;
        this.services = res2;
        this.activeUser = this.users[0];
        this.cdr.detectChanges();
      },
      error => console.error(error)
    );
  }

  setActiveUser(user: User): void {
    this.activeUser = user;
  }

  removeService(service: UserService): void {
    if (this.activeUser) {
      this.activeUser.enabledServices = this.activeUser?.enabledServices.filter(el => el !== service.id);
    }
  }
}
