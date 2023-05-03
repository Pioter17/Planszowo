import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Filters } from '@pages/offer/filters';
import { Observable, filter, firstValueFrom } from 'rxjs';

@Component({
  selector: 'filters-form',
  templateUrl: './filters-form.component.html',
  styleUrls: ['./filters-form.component.scss']
})
export class FiltersFormComponent implements OnInit {


  public defaultFilters : Filters = {
    minPlayers : 2,
    maxPlayers : 4,
    name : "Catan"
  }

  @Output() activeFilters = new EventEmitter<Filters>();

  form : FormGroup;

  constructor(
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      minPlayers: [this.defaultFilters.minPlayers],
      maxPlayers: [this.defaultFilters.maxPlayers],
      name: [this.defaultFilters.name]
    })
  }

  sendActiveFilters(){
    this.changeActiveFilters();
    console.log(this.defaultFilters)
    this.activeFilters.emit(this.defaultFilters);
    return false;
  }

  changeActiveFilters() : void {
    let formValues = this.form.value;
      this.defaultFilters.minPlayers = formValues.minPlayers,
      this.defaultFilters.maxPlayers = formValues.maxPlayers,
      this.defaultFilters.name = formValues.name
  }

}
