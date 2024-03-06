import { ChangeDetectionStrategy, Component, model } from '@angular/core';

@Component({
  selector: 'app-notifications-manager',
  standalone: true,
  templateUrl: './notifications-manager.component.html',
  styleUrls: ['./notifications-manager.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationsManagerComponent {
  count = model(0);

  addNotification() {
    this.count.update((count) => count + 1);
  }

  removeNotification() {
    if (this.count() == 0) {
      return;
    }
    this.count.update((count) => count - 1);
  }

  resetCount() {
    this.count.set(0);
  }
}
