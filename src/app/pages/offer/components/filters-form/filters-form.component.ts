import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Filters } from '@pages/offer/filters';
import { Observable } from 'rxjs';

@Component({
  selector: 'filters-form',
  templateUrl: './filters-form.component.html',
  styleUrls: ['./filters-form.component.scss']
})
export class FiltersFormComponent implements OnInit {


  private defaultFilters : Filters = {
    minPlayers : 2,
    maxPlayers : 4,
    name : ""
  }

  public activeFilters : Filters = {
    minPlayers : 2,
    maxPlayers : 4,
    name : ""
  }

  @Output() activeFiltersEmitter = new EventEmitter<Filters>();

  form : FormGroup;
  public isDefault : boolean = true;
  public isEdit$ : Observable<boolean>;

  constructor(
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      minPlayers: [this.defaultFilters.minPlayers],
      maxPlayers: [this.defaultFilters.maxPlayers],
      name: [this.defaultFilters.name]
    })

    // this.isEdit$ = this.form.valueChanges.pipe(
    //   map(value => {
    //     return value.minPlayers !== this.defaultFilters.minPlayers ||
    //            value.maxPlayers !== this.defaultFilters.maxPlayers ||
    //            value.name !== this.defaultFilters.name;
    //   })
    // )
  }

  private sendActiveFilters() : void{
    console.log(this.activeFilters);
    this.activeFiltersEmitter.emit(this.activeFilters);
  }

  changeActiveFilters() : boolean {
    let formValues = this.form.value;
    this.activeFilters.minPlayers = formValues.minPlayers,
    this.activeFilters.maxPlayers = formValues.maxPlayers,
    this.activeFilters.name = formValues.name;

    if (formValues.minPlayers != this.defaultFilters.minPlayers ||
        formValues.maxPlayers != this.defaultFilters.maxPlayers ||
        formValues.name != this.defaultFilters.name){
      this.isDefault = false;
    }

    this.sendActiveFilters();
    return false;
  }

  setFiltersToDefault() : boolean{
    this.activeFilters.minPlayers = this.defaultFilters.minPlayers;
    this.activeFilters.maxPlayers = this.defaultFilters.maxPlayers;
    this.activeFilters.name = this.defaultFilters.name;

    this.isDefault = true;

    this.form.reset({
      minPlayers: 2,
      maxPlayers: 4,
      name: ""
    });
    this.sendActiveFilters();
    return false;
  }

}
