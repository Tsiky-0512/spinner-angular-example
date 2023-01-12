import { Component , OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  
  constructor(
    private commonService : CommonService
  ){

  }
  
  ngOnInit(): void {
    this.commonService.showSpinner();
    setTimeout(()=>{
      this.commonService.hideSpinner();
    },7000)
  }

}
