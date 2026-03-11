import { Component, Input } from '@angular/core';

type AlarmPriority = 'high' | 'medium' | 'low';

@Component({
  selector: 'app-alarm-card',
  templateUrl: './alarm-card.component.html',
  styleUrl: './alarm-card.component.css',
  standalone: false
})
export class AlarmCardComponent {
  @Input() title = 'Alarm';
  @Input() time = '07:30';
  @Input() context = 'Context placeholder';
  @Input() intention = 'Intention placeholder';
  @Input() priority: AlarmPriority = 'medium';

  get priorityLabel(): string {
    if (this.priority === 'high') {
      return 'Alta';
    }

    if (this.priority === 'low') {
      return 'Baja';
    }

    return 'Media';
  }
}
