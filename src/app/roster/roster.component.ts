import { Component, OnInit } from '@angular/core';

import { RaiderService } from './raider.service';
import { IRaider } from './raider';

@Component({
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.css']
})
export class RosterComponent implements OnInit {
  private _roster: IRaider[];
  displayMode: string;
  officers: IRaider[];
  members: IRaider[];
  applys: IRaider[];
  tanks: IRaider[];
  heals: IRaider[];
  melees: IRaider[];
  ranges: IRaider[];

  constructor(private _raiderService: RaiderService) { }

  ngOnInit() {
    this._raiderService.getRaiders().subscribe(roster => {
      this.displayMode = 'guildRank';
      this._roster = roster;
      this.officers = roster.filter(raider => raider.guildRank === 1);
      this.members = roster.filter(raider => raider.guildRank === 2);
      this.applys = roster.filter(raider => raider.guildRank === 3);
      this.tanks = roster.filter(raider => raider.role === 1);
      this.heals = roster.filter(raider => raider.role === 2);
      this.melees = roster.filter(raider => raider.role === 3);
      this.ranges = roster.filter(raider => raider.role === 4);
    });
  }

}
