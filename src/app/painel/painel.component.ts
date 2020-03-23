import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Frase } from '../shared/frase.model';
import { FRASES } from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit, OnDestroy {

  public instrucao: string = 'Traduza a frase:';
  public frases: Frase[] = FRASES;
  public resposta: string = '';

  public rodada: number = 0;
  public rodadaFrase: Frase;

  public progresso: number = 0;

  public tentativas: number = 3;

  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    this.atualizaRodada();
  }

  ngOnInit() {
  }

  ngOnDestroy(){
    console.log('destruido');
  }

  // public atualizaResposta(resposta: Event): void {
  //   this.resposta = (<HTMLInputElement>resposta.target).value;
  // }

  public atualizaResposta(resposta: string): void {
    this.resposta = resposta;
  }

  public verificarResposta(): void {
    if(this.resposta.toLocaleLowerCase() == this.rodadaFrase.frasePtBr.toLocaleLowerCase()) {
      this.progresso = this.progresso + (100 / this.frases.length);
      this.rodada++;
      this.atualizaRodada();

      if(this.progresso === 100){
        this.encerrarJogo.emit('vitoria');
      }
    }
    else{
      this.tentativas--;
      
      if(this.tentativas === -1){
        this.encerrarJogo.emit('derrota');
      }
    }
  }

  public atualizaRodada(): void{
    this.rodadaFrase = this.frases[this.rodada];
    this.resposta = '';
  }

}
