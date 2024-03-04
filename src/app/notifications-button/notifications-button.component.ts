import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-notifications-button',
  standalone: true,
  templateUrl: './notifications-button.component.html',
  styleUrls: ['./notifications-button.component.scss'],
})
export class NotificationsButtonComponent {
  @Input() count = 0;
}
