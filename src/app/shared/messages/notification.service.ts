import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  notifier = new EventEmitter<string>();

  notify(message: string) {
    this.notifier.emit(message);
  }

  constructor() { }
}
