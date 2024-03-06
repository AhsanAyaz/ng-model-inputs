import { Component, signal } from '@angular/core';
import { NotificationsManagerComponent } from './notifications-manager/notifications-manager.component';
import { NotificationsButtonComponent } from './notifications-button/notifications-button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [NotificationsManagerComponent, NotificationsButtonComponent],
})
export class AppComponent {
  appTitle = 'Angular Model Inputs';
  notificationsCount = signal(10);
}
