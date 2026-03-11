import { Component } from '@angular/core';

type AlarmPriority = 'high' | 'medium' | 'low';

interface AlarmRow {
  time: string;
  title: string;
  context: string;
  priority: AlarmPriority;
  state: string;
}

@Component({
  selector: 'app-alarm-management-page',
  templateUrl: './alarm-management-page.component.html',
  styleUrl: './alarm-management-page.component.css',
  standalone: false
})
export class AlarmManagementPageComponent {
  readonly filters = ['Hoy', 'Trabajo', 'Personal', 'Criticas'];

  readonly rows: AlarmRow[] = [
    {
      time: '07:30',
      title: 'Preparar reunion con cliente',
      context: 'Revisar agenda y objetivos de llamada.',
      priority: 'high',
      state: 'Activa'
    },
    {
      time: '10:45',
      title: 'Pausa de enfoque',
      context: 'Respirar y reorganizar tareas del sprint.',
      priority: 'medium',
      state: 'Activa'
    },
    {
      time: '13:00',
      title: 'Tomar medicina',
      context: 'Despues de almorzar, recordatorio breve.',
      priority: 'high',
      state: 'Snoozed'
    },
    {
      time: '19:00',
      title: 'Planificar manana',
      context: 'Definir top 3 prioridades del dia siguiente.',
      priority: 'low',
      state: 'Activa'
    }
  ];
}
