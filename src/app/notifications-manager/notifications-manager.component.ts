import { Component, EventEmitter, Input, Output, model } from '@angular/core';

@Component({
  selector: 'app-notifications-manager',
  standalone: true,
  templateUrl: './notifications-manager.component.html',
  styleUrls: ['./notifications-manager.component.scss'],
})
export class NotificationsManagerComponent {
  @Input() count = 0;
  @Output() countChanged = new EventEmitter<number>();

  addNotification() {
    this.count++;
    this.countChanged.emit(this.count);
  }

  removeNotification() {
    if (this.count == 0) {
      return;
    }
    this.count--;
    this.countChanged.emit(this.count);
  }

  resetCount() {
    this.count = 0;
    this.countChanged.emit(this.count);
  }
}
