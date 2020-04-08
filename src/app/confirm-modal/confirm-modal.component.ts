import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.css'],
})
export class ConfirmModalComponent implements OnInit {
  @Output() handleDelete: EventEmitter<void> = new EventEmitter();
  @Output() handleToggleModal: EventEmitter<void> = new EventEmitter();
  @Input() text: string = 'Are you sure you want to delete that item?';

  delete: string = 'delete';
  cancel: string = 'cancel';

  constructor() {}

  handleClose() {
    this.handleToggleModal.emit();
  }

  handleClick() {
    this.handleDelete.emit();
    this.handleToggleModal.emit();
  }
  ngOnInit(): void {}
}
