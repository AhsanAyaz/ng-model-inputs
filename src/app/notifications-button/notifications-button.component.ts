import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-notifications-button',
  standalone: true,
  templateUrl: './notifications-button.component.html',
  styleUrls: ['./notifications-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationsButtonComponent {
  count = input(0);
}
