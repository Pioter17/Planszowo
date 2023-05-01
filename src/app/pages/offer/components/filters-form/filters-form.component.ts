import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Filters } from '@pages/offer/filters';
import { Observable, filter } from 'rxjs';

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

  @Output() activeFilters : Filters;

  form : FormGroup;
  isSame$ : Observable<boolean>;
  filters : Filters;

  constructor(
    private fb: FormBuilder
  ) {}


  ngOnInit(): void {
    this.form = this.fb.group({
      minPlayers: [2],
      maxPlayers: [4],
      name: ['']
    })

  }

  sendActiveFilters(){
    this.changeActiveFilters();

  }

  changeActiveFilters(){
    console.log(this.form.get('minPlayers'))
  }

}
