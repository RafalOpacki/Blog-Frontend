import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pageable } from 'src/models/pageable';
import { PostsApiService } from 'src/services/posts-api-service/posts-api.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent implements OnInit {
  @Input() pageableData$: Pageable;
  @Output() onClick: EventEmitter<number> = new EventEmitter();

  constructor(private _postApiService: PostsApiService) {}

  currentPage: number = 1;
  isPrevButtonDisabled: boolean = true;
  isNextButtonDisabled: boolean = false;

  handleClick(data: MouseEvent) {
    const target = data.target as HTMLButtonElement;
    if (target.value === 'prev') {
      this.currentPage -= 1;
    } else {
      this.currentPage += 1;
    }
    this.isPrevButtonDisabled = this.currentPage === 1 ? true : false;
    this.isNextButtonDisabled =
      this.currentPage === this.pageableData$.pagesCount ? true : false;
    this.onClick.emit(this.currentPage);
  }

  ngOnInit(): void {}
}
