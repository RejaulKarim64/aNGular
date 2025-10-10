import { Component, OnInit } from '@angular/core';
import { StudentService } from '../service/student.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Student } from '../../model/student.model';
import { error } from 'console';
import { Location } from '../../model/location.model';
import { LocationService } from '../service/location.service';

@Component({
  selector: 'app-addstudent',
  standalone: false,
  templateUrl: './addstudent.html',
  styleUrl: './addstudent.css'
})
export class Addstudent implements OnInit {

  locations: Location[] = [];
  formGroup !: FormGroup;

  constructor(
    private studentService: StudentService,
    private formBuilder: FormBuilder,
    private router: Router,
    private locationService: LocationService
  ) { }

  ngOnInit(): void {

    this.formGroup = this.formBuilder.group({
      name: [''],
      email: [''],
      fee: [''],
      location: this.formBuilder.group({
        id: [''],
        name: [''],
        city: [''],
        photo: ['']
      })
    });
    this.loadLocation();

    this.formGroup.get('location')?.get('city')?.valueChanges.subscribe(city => {
      const selectdeLocation = this.locations.find(loc => loc.city === city);

      if (selectdeLocation) {
        this.formGroup.patchValue({
          location: {
            id: selectdeLocation.id,   // Make sure your form has this control!
            name: selectdeLocation.name,
            photo: selectdeLocation.photo
          }
        });
      }
    });
  }

  loadLocation(): void {
    this.locationService.getAllLocation().subscribe({

      next: (res) => {
        this.locations = res;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  addStudent(): void {
    const student: Student = { ...this.formGroup.value };
    this.studentService.saveStudent(student).subscribe({

      next: (res) => {
        console.log("Student Saved", res);
        // this.loadLocation();
        this.formGroup.reset();
        this.router.navigate(['/allstu']);
      },
      error: (error) => {
        console.log(error);
      }
    })
  }
}
