import { Component, Inject, OnInit } from '@angular/core';
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
  dateList : string[];

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
      code: ["", [Validators.required, Validators.pattern('^[0-9]{2}-[0-9]{3}$')]],
      apartmentNumber: [""],
      cardNumber: ["", [Validators.required, Validators.min(0), this.cardNumberValidator()]],
      cardDate: ["", Validators.required],
      cvv: ["", [Validators.required, Validators.min(0), this.cvvValidator()]]
    })

    this.dateList = this.generateDateList();
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

  private generateDateList() : string[] {
    let currentDate = new Date();
    let endYear = currentDate.getFullYear() + 5;
    let options = [];

    while (currentDate.getFullYear() < endYear || (currentDate.getFullYear() === endYear && currentDate.getMonth() === 0)) {
      let month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
      let year = currentDate.getFullYear().toString();
      let optionText = month + '-' + year;
      options.push(optionText);

      // Przejście do kolejnego miesiąca
      currentDate.setMonth(currentDate.getMonth() + 1);
    }

    return options;
  }

  handleInput(event: any) {
    event.target.value = ''; // Resetuje wprowadzoną wartość
  }
}
