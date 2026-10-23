import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Scroll } from '../../../services/scroll';


@Component({
  selector: 'app-talleres',
  imports: [RouterLink],
  templateUrl: './talleres.html',
  styleUrl: './talleres.css',
})
export class Talleres {
  constructor(private scrollService: Scroll) { }

  readonly temas = [
    { icono: 'view_in_ar', titulo: 'Diseño 3D y CAD' },
    { icono: 'content_cut', titulo: 'Corte y grabado láser' },
    { icono: 'print', titulo: 'Impresión 3D' },
    { icono: 'memory', titulo: 'Electrónica creativa' },
    { icono: 'draw', titulo: 'Vectorización y diseño gráfico' },
    { icono: 'checkroom', titulo: 'Personalización textil' },
  ];

  readonly escuelas = [
    {
      icono: 'menu_book',
      titulo: 'Programas educativos',
      descripcion: 'Contenidos prácticos adaptados al nivel y objetivo de cada grupo.',
    },
    {
      icono: 'groups',
      titulo: 'Visitas de grupos y escuelas',
      descripcion: 'Recorridos y actividades en el taller para grupos escolares y comunitarios.',
    },
    {
      icono: 'lightbulb',
      titulo: 'Proyectos con impacto',
      descripcion: 'Aprendizaje mediante la resolución de retos reales de la comunidad.',
    },
  ];

  scrollToSection(sectionId: string) {
    this.scrollService.scrollToSection(sectionId);
  }
}
