import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'calenderHeader',
  templateUrl: './calenderHead.component.html',
  styleUrls: ['./calenderHead.component.scss']
})
export class CalenderHeadComponent {
  @Input() view: string;

  @Input() viewDate: Date;

  @Input() locale: string = 'en';

  @Output() viewChange: EventEmitter<string> = new EventEmitter();

  @Output() viewDateChange: EventEmitter<Date> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
}
