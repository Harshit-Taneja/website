import { Component, OnInit } from '@angular/core';
import { IApply } from './apply';

@Component({
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css']
})
export class ApplyComponent implements OnInit {
  apply: IApply;

  constructor() { }

  ngOnInit() {
  }

}
