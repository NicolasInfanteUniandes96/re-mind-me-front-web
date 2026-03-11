import { Component } from '@angular/core';

type AlarmPriority = 'high' | 'medium' | 'low';

interface DashboardMetric {
  label: string;
  value: string;
  note: string;
}

interface FocusAlarm {
  title: string;
  time: string;
  intention: string;
  context: string;
  priority: AlarmPriority;
}

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.css',
  standalone: false
})
export class DashboardPageComponent {
  readonly currentTime = '07:30';
  readonly currentDate = 'Miercoles, 11 de marzo';

  readonly metrics: DashboardMetric[] = [
    {
      label: 'Alarmas activas',
      value: '08',
      note: '+2 esta semana'
    },
    {
      label: 'Prioridad alta',
      value: '03',
      note: 'Requieren accion hoy'
    },
    {
      label: 'Pendientes',
      value: '05',
      note: 'Sin confirmar intencion'
    }
  ];

  readonly focusAlarms: FocusAlarm[] = [
    {
      title: 'Tomar medicina',
      time: '08:00',
      intention: 'No saltar dosis de la manana.',
      context: 'Antes del desayuno. Duracion 5 minutos.',
      priority: 'high'
    },
    {
      title: 'Daily standup',
      time: '09:30',
      intention: 'Entrar con tareas priorizadas.',
      context: 'Meet remoto con equipo de producto.',
      priority: 'medium'
    },
    {
      title: 'Salir a entrenar',
      time: '18:30',
      intention: 'Mantener energia y foco mental.',
      context: 'Rutina corta de 35 minutos.',
      priority: 'low'
    }
  ];
}
