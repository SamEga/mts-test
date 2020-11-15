import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { User } from 'src/app/models/home.models';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserComponent {
  @Input() user: User | undefined;
  @Input() userPayment: number | undefined;
  @Input() activeId: number | undefined;
}
