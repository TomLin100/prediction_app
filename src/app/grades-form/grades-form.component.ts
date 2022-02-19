import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Grades, Gsat } from '../result';

@Component({
  selector: 'app-grades-form',
  templateUrl: './grades-form.component.html',
  styleUrls: ['./grades-form.component.scss'],
})
export class GradesFormComponent implements OnInit {

  inputData: FormGroup;
  defaultGroup: string[];
  defaultELLevel: string[];
  defaultProperty: string[];
  defaultLoc: string[];

  constructor(private form: FormBuilder) {
    this.createForm();
    this.createDefaultValue();
  }

  ngOnInit() {}

  createDefaultValue() {
      this.defaultELLevel = ['A','B','C','F'];
      this.defaultGroup = [
        '工程學群','數理化學群','資訊學群',
        '地球環境學群','醫藥衛生學群',
        '管理學群', '建築設計學群',
        '遊憩運動學群','財經學群',
        '生命科學學群','社會心理學群',
        '大眾傳播學群','外語學群',
        '生物資源學群','法政學群',
        '藝術學群','文史哲學群',
        '教育學群','不分系學群'
      ];
      this.defaultLoc = [
        '基隆市','台北市','新北市',
        '桃園市','新竹縣市','苗栗縣',
        '台中市','彰化縣','南投縣',
        '嘉義縣市','台南市','高雄市',
        '屏東市','宜蘭縣','花蓮縣',
        '台東縣','金門縣'
      ];
      this.defaultProperty = ['公立','私立'];

  }

  createForm() {
      const grades = new Gsat();
      grades.chinese = 0;
      grades.english = 0;
      grades.math = 0;
      grades.science = 0;
      grades.society = 0;
      grades.engListeningLevel = '';
    this.inputData = this.form.group({
        gsat: this.form.group(grades),
    });
  }

  submitForm() {
      console.log(this.inputData.value);
  }
}
