import { Component, OnInit } from '@angular/core';
import { FetchGsatDataService } from '../fetch-gsat-data.service';
import { Grades, Gsat, Input, PredictResult } from '../result';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  result: PredictResult;
  constructor(private fetchResult: FetchGsatDataService) {}
  onBtnClick(): void {
    const grades = new Gsat();
      grades.chinese =  15;
      grades.english =  15;
      grades.mathA = 15;
      grades.mathB = 15;
      grades.society = 15;
      grades.science = 15;
      grades.engListeningLevel = 'A';
    const data = new Input();
    const gradeObj = new Grades();
    gradeObj.gsat = grades;
    data.grades = gradeObj;
    data.groups = [
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
    data.location = [
        '基隆市','台北市','新北市',
        '桃園市','新竹縣市','苗栗縣',
        '台中市','彰化縣','南投縣',
        '嘉義縣市','台南市','高雄市',
        '屏東市','宜蘭縣','花蓮縣',
        '台東縣','金門縣'
    ];
    data.property = ['公立','私立'];
    this.fetchResult.getPredictResult(data).subscribe((rsp)=>{
      this.result = rsp;
    });
  }
}
