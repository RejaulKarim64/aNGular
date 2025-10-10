import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Location } from '../../src/model/location.model';
import { LocationService } from '../../src/app/service/location.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-location',
  standalone: false,
  templateUrl: './update-location.html',
  styleUrl: './update-location.css'
})
export class UpdateLocation implements OnInit {

  id: string = '';
  l: Location = new Location();

  constructor(
    private locationService: LocationService,
    private router: Router,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.loadLocationById();
  }
  loadLocationById():void {
    this.id = this.route.snapshot.params['id'];
    this.locationService.getLocationById(this.id).subscribe({
      next: (res) => {
        this.l = res;
        this.cdr.markForCheck();
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
  updateLocation(): void {
    this.locationService.updateLocation(this.id, this.l).subscribe({
      next: (res) => this.router.navigate(['/allloc']),
      error: (err) => console.error(err)

    });
  }

}
