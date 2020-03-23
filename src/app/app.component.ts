import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public emAndamento: boolean = true;
  public status: string = '';

  public encerrarJogo(evento: string): void {
    this.emAndamento = false;
    this.status = evento;
  }

  public reiniciarJogo(): void {
    this.emAndamento = true;
    this.status = undefined;
  }
}
