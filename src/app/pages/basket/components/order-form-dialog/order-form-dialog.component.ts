import { Component, OnInit, Inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BasketService } from '@pages/basket.service';

@Component({
  selector: 'app-order-form-dialog',
  templateUrl: './order-form-dialog.component.html',
  styleUrls: ['./order-form-dialog.component.scss']
})



export class OrderFormDialogComponent implements OnInit{


  form : FormGroup;

  constructor(
    private basket: BasketService,
    public dialogRef : MatDialogRef<OrderFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public fullPrice : number,
    private fb : FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ["",[ Validators.required, Validators.minLength(3)]],
      surname: ["", [Validators.required, Validators.minLength(2)]],
      email: ["", [Validators.required, Validators.email]],
      address: ["", Validators.required],
      town: ["", Validators.required],
      code: ["", Validators.required], // * tu trzeba dodać
      apartmentNumber: [""],
      cardNumber: ["", [Validators.required, Validators.min(0), this.cardNumberValidator()]],
      cardDate: ["", Validators.required], // * tu trzeba dorobić
      cvv: ["", [Validators.required, Validators.min(0), this.cvvValidator()]]
    })
  }

  cardNumberValidator(): ValidatorFn {
    const cardNumberPattern = /^([0-9]){16}$/;

    return (control: AbstractControl): { [key: string]: any } | null => {
      const value = control.value;
      const isValid = cardNumberPattern.test(value);

      return isValid ? null : { 'cardNumberInvalid': true };
    };
  }

  cvvValidator(): ValidatorFn {
    const cardNumberPattern = /^(0*[0-9]){3}$/;

    return (control: AbstractControl): { [key: string]: any } | null => {
      const value = control.value;
      const isValid = cardNumberPattern.test(value);

      return isValid ? null : { 'cardNumberInvalid': true };
    };
  }

  sendOrder() {
    if(this.form.valid) {
      this.basket.deleteAllFromBasket();
      this.dialogRef.close("Zamówienie zostało wysłane");
    }
  }

  onCancelClose() {
    this.dialogRef.close(null);
  }
}
