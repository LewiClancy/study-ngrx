import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  imports: [MatButtonModule, MatSnackBarModule],
  exports: [MatButtonModule, MatSnackBarModule]
})
export class MaterialModule {}
