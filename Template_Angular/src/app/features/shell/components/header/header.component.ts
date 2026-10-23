import { Component, HostListener } from '@angular/core';
import { NgIf } from '@angular/common';
import { Scroll } from '../../../../services/scroll';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIf,RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  // Estado centralizado de los dropdowns
  dropdowns: Record<string, boolean> = {
    servicios: false,
    acerca: false,
    taller:false,
    innovar:false,
    emprender:false
  };

  constructor(private scrollService: Scroll) { }

  // Abre/cierra dropdowns de forma genérica
  toggleDropdown(key: keyof typeof this.dropdowns) {
    Object.keys(this.dropdowns).forEach(k => {
      this.dropdowns[k] = k === key
        ? !this.dropdowns[k]
        : false;
    });
  }

  // Cierra todos los dropdowns
  closeAllDropdowns() {
    Object.keys(this.dropdowns).forEach(k => {
      this.dropdowns[k] = false;
    });
  }

  // Click fuera del dropdown
  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    const target = event.target as HTMLElement;

    if (!target.closest('.relative')) {
      this.closeAllDropdowns();
    }
  }

  // Scroll reutilizable
  scrollToSection(sectionId: string) {
    this.closeAllDropdowns();
    this.scrollService.scrollToSection(sectionId);
  }
}
 