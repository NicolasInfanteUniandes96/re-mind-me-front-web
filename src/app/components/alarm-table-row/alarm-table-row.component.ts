import { Component, Input } from '@angular/core';

type AlarmPriority = 'high' | 'medium' | 'low';

@Component({
  selector: 'app-alarm-table-row',
  templateUrl: './alarm-table-row.component.html',
  styleUrl: './alarm-table-row.component.css',
  standalone: false
})
export class AlarmTableRowComponent {
  @Input() time = '07:30';
  @Input() title = 'Alarm';
  @Input() context = 'Context placeholder';
  @Input() priority: AlarmPriority = 'medium';
  @Input() state = 'Activa';

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
