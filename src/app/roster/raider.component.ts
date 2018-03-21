import { Component, OnInit, Input } from '@angular/core';
import { RaiderService } from './raider.service';
import { IRaider } from './raider';

@Component({
  selector: 'famous-raider',
  templateUrl: './raider.component.html',
  styleUrls: ['./raider.component.css']
})
export class RaiderComponent implements OnInit {
  @Input() raider: IRaider;
  @Input() displayMode: string;

  constructor(private _raiderService: RaiderService) { }

  ngOnInit() {
  }

}
