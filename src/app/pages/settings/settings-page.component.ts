import { Component } from '@angular/core';

interface ToggleOption {
  label: string;
  detail: string;
  enabled: boolean;
}

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrl: './settings-page.component.css',
  standalone: false
})
export class SettingsPageComponent {
  readonly options: ToggleOption[] = [
    {
      label: 'Resaltar alarmas criticas',
      detail: 'Marca visual intensa para prioridad alta.',
      enabled: true
    },
    {
      label: 'Mostrar intencion en dashboard',
      detail: 'Texto corto del proposito principal.',
      enabled: true
    },
    {
      label: 'Animaciones suaves',
      detail: 'Transiciones breves entre vistas.',
      enabled: true
    },
    {
      label: 'Modo enfoque',
      detail: 'Reduce ruido visual en lista de alarmas.',
      enabled: false
    }
  ];
}
