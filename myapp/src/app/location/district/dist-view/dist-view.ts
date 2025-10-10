import { Component } from '@angular/core';
import { District } from '../../../../model/district.model';
import { PoliceStationMod } from '../../../../model/policeStation.model';
import { DistService } from '../../../service/dist.service';
import { PolStService } from '../../../service/pol-st.service';

@Component({
  selector: 'app-dist-view',
  standalone: false,
  templateUrl: './dist-view.html',
  styleUrl: './dist-view.css'
})
export class DistView {


   districts: District[] = [];
  policeStations!: PoliceStationMod[];

  constructor(
    private districtService: DistService,
    private policeStationService: PolStService
  ) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.policeStationService.getAll().subscribe(ps => {
      this.policeStations = ps;
      this.districtService.getAll().subscribe(districts => {
        this.districts = districts;
      });
    });
  }

  getPoliceStationNames(ids: string[]): string {
    const names = this.policeStations
      .filter(ps => ids.includes(ps.id!))
      .map(ps => ps.name);
    return names.join(', ');
  }


  deleteDistrict(id: string) {
    if (confirm('Are you sure?')) {
      this.districtService.delete(id).subscribe(() => {
        alert('District deleted!');
        this.loadData();
      });
    }
  }

}
