import { Component, OnInit } from '@angular/core';
import { IApply, Apply } from './apply';
import { ApplyService } from './apply.service';

@Component({
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css']
})
export class ApplyComponent implements OnInit {
  apply = new Apply();
  countApply = 1;
  success = false;
  error = false;

  constructor(private _applyService: ApplyService) { }

  ngOnInit() {
    this.apply.id = this.countApply;
  }

  submitApply() {
    console.log('SUBMIT');
    this._applyService.postMessageRecrutement(this.apply).subscribe(
      response => {
        this.success = true;
        this.apply = new Apply();
        window.scrollTo(0,0);
      },
      error => {
        this.error = true;
        console.log('ERROR: ', error)
      }
    );
  }
}
