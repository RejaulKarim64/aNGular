import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { District } from '../../../../model/district.model';
import { DivService } from '../../../service/div.service';
import { DistService } from '../../../service/dist.service';

@Component({
  selector: 'app-div-add',
  standalone: false,
  templateUrl: './div-add.html',
  styleUrl: './div-add.css'
})
export class DivAdd {


   divisionForm: FormGroup;
  districts: District[] = [];

  constructor(
    private fb: FormBuilder,
    private divisionService: DivService,
    private districtService: DistService
  ) {
    this.divisionForm = this.fb.group({
      name: ['', Validators.required],
      districts: [[], Validators.required]
    });
  }

  ngOnInit() {
    this.loadDistricts();
  }

  loadDistricts() {
    this.districtService.getAll().subscribe(data => {
      this.districts = data;
    });
  }

  onSubmit() {
    if (this.divisionForm.invalid) return;

    const division = this.divisionForm.value;

    this.divisionService.add(division).subscribe(() => {
      alert('Division added successfully!');
      this.divisionForm.reset();
    });
  }
}
