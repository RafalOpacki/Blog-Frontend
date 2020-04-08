import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input() text: string;
  @Input() type: string = 'button';
  @Input() disabled: boolean;
  @Output() handleClick: EventEmitter<void> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.handleClick.emit();
  }
}
