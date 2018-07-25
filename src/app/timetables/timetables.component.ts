import { Component, OnInit } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Timetable} from '../timetable';
import { AgmCoreModule } from '@agm/core';
/*import myConfig from '../../assets/data/ULB/Armagh Craigavon/0-1 Armagh.cif';
*//*import * as fs from 'fs';
import {writeFileSync, readFileSync} from 'fs';

const pdbString = readFileSync('/assets/data/ULB/Armagh Craigavon/000 Armagh.cif');
i
const parsed = ParseMmcif(myConfig);
*/
@Component({
  selector: 'app-timetables',
  templateUrl: './timetables.component.html',
  styleUrls: ['./timetables.component.css']
})
export class TimetablesComponent implements OnInit {

  timetable: Timetable = {
    id: 1,
    name: 'Banbridge'
  };



  constructor() {
     console.log('hello');
  }

  ngOnInit() {
  }

}
