import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-host-tourney',
  templateUrl: './host-tourney.component.html',
  styleUrls: ['./host-tourney.component.scss']
})
export class HostTourneyComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private _data: DataService) { }

  ngOnInit() {
  }

}
