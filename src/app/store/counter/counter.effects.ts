import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { SnackbarService } from '../../shared/snackbar.service';

@Injectable()
export class CounterEffects {
  constructor(private actions$: Actions, private snackbar: SnackbarService) {}

  showSnackbar$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Counter] Reset'),
      switchMap(() => {
        this.snackbar.openSnackBar('Your counter has been reset.');
        return EMPTY;
      })
    )
  , {dispatch: false});
}
