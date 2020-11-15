import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  QueryList,
  SimpleChanges,
  ViewChildren,
} from '@angular/core';
import { User, UserService } from 'src/app/models/home.models';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesComponent implements OnChanges {
  @ViewChildren('serviceCheckbox') serviceCheckbox: QueryList<ElementRef> | undefined;
  @Input() services: UserService[] = [];
  @Input() activeUser: User | undefined;
  @Output() removeServiceEmitter: EventEmitter<UserService> = new EventEmitter();

  filteredServices: UserService[] = [];
  availableServices: UserService[] | undefined;
  enabledServices: (UserService | undefined)[] | undefined;
  private tempServices = new Set<number>();

  ngOnChanges(changes: SimpleChanges): void {
    this.reset();

    if (changes?.activeUser) {
      this.filteredServices = this.services;
      this.updateServices();
    }
  }

  getEnabledServices(): void {
    this.enabledServices = this.activeUser?.enabledServices
      .map(el => this.filteredServices?.find(s => s.id === el))
      .filter(e => e !== undefined);
  }

  getAvailableServices(): void {
    this.availableServices = this.filteredServices?.filter(el => !this.activeUser?.enabledServices.includes(el.id));
  }

  removeService(service: UserService | undefined): void {
    this.removeServiceEmitter.emit(service);
    this.updateServices();
  }

  updateServices(): void {
    this.getEnabledServices();
    this.getAvailableServices();
  }

  selectService(service: UserService, event: EventTarget | null): void {
    (event as HTMLInputElement).checked ? this.tempServices.add(service.id) : this.tempServices.delete(service.id);
  }

  addServices(): void {
    this.tempServices.forEach(el => this.activeUser?.enabledServices.push(el));
    this.tempServices.clear();
    this.updateServices();
  }

  reset(): void {
    this.tempServices.clear();
    if (this.serviceCheckbox) {
      this.serviceCheckbox.forEach(el => (el.nativeElement as HTMLInputElement).checked = false);
    }
  }

  onSearch(event: KeyboardEvent): void {
    this.filteredServices = this.services.filter(el => el.title.includes((event.target as HTMLInputElement).value));
    this.updateServices();
  }
}
