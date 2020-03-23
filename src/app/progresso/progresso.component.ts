import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-progresso',
  templateUrl: './progresso.component.html',
  styleUrls: ['./progresso.component.css']
})
export class ProgressoComponent implements OnInit, OnChanges {

  @Input('progress') public progresso: number = 0; 

  public progressStyle: string = "";

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(): void {
    this.progressStyle = `width: ${this.progresso}%`;
  }
}
