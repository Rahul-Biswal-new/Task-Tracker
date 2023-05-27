import { Component, OnInit, Input , Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit{
  @Input() text!: string;
  @Input() color!: String;
  @Output() btnClick = new EventEmitter(); 

  constructor(){ }

  ngOnInit(): void {}

  onClick(){
    this.btnClick.emit();    //1st emitting here
    // console.log("add");
  }
}
