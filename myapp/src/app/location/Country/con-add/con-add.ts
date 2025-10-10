import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Division } from '../../../../model/division.model';
import { CountryService } from '../../../service/country.service';
import { DivService } from '../../../service/div.service';

@Component({
  selector: 'app-con-add',
  standalone: false,
  templateUrl: './con-add.html',
  styleUrl: './con-add.css'
})
export class ConAdd {


   countryForm: FormGroup;
  divisions: Division[] = [];

  constructor(
    private fb: FormBuilder,
    private countryService: CountryService,
    private divisionService: DivService
  ) {
    this.countryForm = this.fb.group({
      name: ['', Validators.required],
      divisions: [[], Validators.required]
    });
  }

  ngOnInit() {
    this.loadDivisions();
  }

  loadDivisions() {
    this.divisionService.getAll().subscribe(data => {
      this.divisions = data;
    });
  }

  onSubmit() {
    if (this.countryForm.invalid) return;

    const country = this.countryForm.value;

    this.countryService.add(country).subscribe(() => {
      alert('Country added successfully!');
      this.countryForm.reset();
    });
  }

}
