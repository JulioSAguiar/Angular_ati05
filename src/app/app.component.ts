import { Component, ElementRef, ViewChild, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Projeto Lista';

  tarefas: string[] | null  = []

  mostrarParagrafo: boolean= false
 

  @ViewChild('inputAtividade')
  input!: ElementRef

  addAti(valor: string): void{
    this.tarefas?.push(valor)
    let tarefasEmString = JSON.stringify(this.tarefas) 
    console.log(`variavel tarefasEmString: ${tarefasEmString} ${typeof(tarefasEmString)}`)
    localStorage.setItem('chave', tarefasEmString) 
    this.acessarLocalStorage() 
    this.input.nativeElement.value = ""
  }

  acessarLocalStorage(): void {
    let storage = localStorage.getItem('chave') 
    console.log(`variavel storage ${storage} ${typeof(storage)} `)
    let arr = JSON.parse(storage || '[]')
    console.log(`variavel arr ${arr} ${typeof(arr)} `)
    this.tarefas = arr 
  }

  delAti(index: number, remove: number): void {
    this.tarefas?.splice(index, remove)
    
    let tarefasEmString = JSON.stringify(this.tarefas)
    localStorage.setItem('chave', tarefasEmString)
    this.acessarLocalStorage()
  }

  delTudo(index:number):void {
    this.tarefas?.splice(index, this.tarefas.length)

    let tarefasEmString = JSON.stringify(this.tarefas)
    localStorage.setItem('chave',tarefasEmString)
    this.acessarLocalStorage()
  }

  

}