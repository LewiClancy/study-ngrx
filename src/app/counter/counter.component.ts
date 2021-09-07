import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SnackbarService } from '../shared/snackbar.service';
import { AppState } from '../store';
import { decrement, increment, reset } from '../store/counter/counter.actions';
import { count } from '../store/counter/counter.selectors';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  count$!: Observable<number>;

  constructor(
    private store: Store<AppState>,
    private snackbar: SnackbarService,
  ) {}

  ngOnInit() {
    this.count$ = this.store.select(count);
  }

  onIncrement() {
    this.store.dispatch(increment());
  }

  onDecrement() {
    this.store.dispatch(decrement());
  }

  onReset() {
    this.store.dispatch(reset());
  }
}
