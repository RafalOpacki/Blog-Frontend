import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(private _toastr: ToastrService) {}

  showErrorMessage(content: string) {
    this._toastr.error(content, 'Failure');
  }

  showSuccessMessage(content: string) {
    this._toastr.success(content, 'Success');
  }
}
