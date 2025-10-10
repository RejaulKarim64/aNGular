import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { LocationService } from '../../src/app/service/location.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-all-locations',
  standalone: false,
  templateUrl: './view-all-locations.html',
  styleUrl: './view-all-locations.css'
})
export class ViewAllLocations implements OnInit {

  locations: any;

  constructor(
    private locationService: LocationService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) { }



  ngOnInit(): void {
    this.loadAllLocation();
  }
  loadAllLocation() {
    this.locations = this.locationService.getAllLocation();

  }
  deleteLocation(id: string): void {
    this.locationService.deleteLocation(id).subscribe({
      next: (res) => {
        console.log(res);
        this.loadAllLocation();
        this.cdr.reattach();
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
getLocationById(id : string):void{

  this.locationService.getLocationById(id).subscribe({
    next: (res) => {
      console.log(res);
      this.router.navigate(['/updateLocation', id]);
    },
    error: (err) => {
      console.error(err);

    }

  });
}


}
