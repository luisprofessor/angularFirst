import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor() { }

  @Input() mensaje:any;
  @Output() salida=new EventEmitter<Number>();

  ngOnInit(): void {
  }

  onClick(){
    this.salida.emit(this.mensaje.id);
  }

}
