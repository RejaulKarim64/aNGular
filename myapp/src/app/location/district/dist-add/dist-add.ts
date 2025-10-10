import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PoliceStationMod } from '../../../../model/policeStation.model';
import { DistService } from '../../../service/dist.service';
import { PolStService } from '../../../service/pol-st.service';
import { District } from '../../../../model/district.model';

@Component({
  selector: 'app-dist-add',
  standalone: false,
  templateUrl: './dist-add.html',
  styleUrl: './dist-add.css'
})
export class DistAdd {


   districtForm: FormGroup;
  policeStations: PoliceStationMod[] = [];

  constructor(
    private fb: FormBuilder,
    private districtService: DistService,
    private policeStationService: PolStService
  ) {
    this.districtForm = this.fb.group({
      name: ['', Validators.required],
      policeStations: [[], Validators.required] // Array of selected Police Station IDs
    });
  }

  ngOnInit() {
    this.loadPoliceStations();
  }

  loadPoliceStations() {
    this.policeStationService.getAll().subscribe(data => {
      this.policeStations = data;
    });
  }

  onSubmit() {
    if (this.districtForm.invalid) return;

    const district: District = this.districtForm.value;

    this.districtService.add(district).subscribe(() => {
      alert('District added successfully!');
      this.districtForm.reset();
    });
  }
}
