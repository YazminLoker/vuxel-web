
import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
  OnDestroy,
  ChangeDetectorRef,
  NgZone
} from '@angular/core';

import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements AfterViewInit, OnDestroy {

  @ViewChild('seccionConcepto')
  seccionConcepto!: ElementRef<HTMLElement>;

  animarPalabras = false;

  mostrarTodasPreguntas = false;

  alternarPreguntas(): void {
    this.mostrarTodasPreguntas = !this.mostrarTodasPreguntas;
  }

  private observer?: IntersectionObserver;

  constructor(
    private cdr: ChangeDetectorRef,
    private ngZone: NgZone
  ) {}

  ngAfterViewInit(): void {

    if (typeof IntersectionObserver === 'undefined') {
      this.animarPalabras = true;
      this.cdr.detectChanges();
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {

        const entrada = entries[0];

        this.ngZone.run(() => {

          this.animarPalabras = entrada.isIntersecting;

          this.cdr.detectChanges();

        });

      },
      {
        threshold: 0.15
      }
    );

    this.observer.observe(
      this.seccionConcepto.nativeElement
    );
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  reproducirVideo(video: HTMLVideoElement): void {
    video.muted = true;

    video.play().catch(error => {
      console.warn(
        'No se pudo reproducir el video:',
        error
      );
    });
  }
}
