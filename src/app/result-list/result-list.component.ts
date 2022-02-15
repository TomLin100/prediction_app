import { Component, Input, OnInit } from '@angular/core';
import { Result } from '../result';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.scss'],
})
export class ResultListComponent implements OnInit {

  @Input() predictResult: Result[];

  constructor() { }

  ngOnInit() {}

}
