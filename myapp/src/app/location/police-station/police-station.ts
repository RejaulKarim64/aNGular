import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PolStService } from '../../service/pol-st.service';
import { PoliceStationMod } from '../../../model/policeStation.model';

@Component({
  selector: 'app-police-station',
  standalone: false,
  templateUrl: './police-station.html',
  styleUrl: './police-station.css'
})
export class PoliceStation {

  policeStations: PoliceStationMod[] = [];
  psForm: FormGroup;
  editing: boolean = false;

  constructor(
    private fb: FormBuilder,
    private psService: PolStService,
    private cdr: ChangeDetectorRef
  ) {
    this.psForm = this.fb.group({
      id: [''], // JSON Server uses number
      name: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.loadPoliceStations();
  }

  loadPoliceStations() {
    this.psService.getAll().subscribe(data => {
      this.policeStations = data;
      this.cdr.markForCheck();
    });
  }

  onSubmit() {
  if (this.psForm.invalid) return;

  if (this.editing) {
    this.psService.update(this.psForm.value).subscribe(() => {
      alert('Updated successfully!');
      this.loadPoliceStations();
      this.cancelEdit();
    });
  } else {
    const { name } = this.psForm.value; // ⬅️ Only send the name
    this.psService.add({ name }).subscribe(() => {
      alert('Added successfully!');
      this.loadPoliceStations();
      this.psForm.reset();
      this.editing = false;
    });
  }
}

  // editPoliceStation(ps: PoliceStation) {
  //   this.editing = true;
  //   this.psForm.patchValue({
  //     id: ps.id,
  //     name: ps.name
  //   });
  // }

  deletePoliceStation(id: string ) {
    if (confirm('Are you sure?')) {
      this.psService.delete(id).subscribe(() => {
        alert('Deleted!');
        this.loadPoliceStations();
      });
    }
  }

  cancelEdit() {
    this.editing = false;
    this.psForm.reset();
  }
}
