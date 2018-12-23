import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { IfStmt } from '@angular/compiler';

@Component({
  selector: 'app-host-tourney',
  templateUrl: './host-tourney.component.html',
  styleUrls: ['./host-tourney.component.scss']
})
export class HostTourneyComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private _data: DataService) { }

  showPercent: boolean;
  showFlat: boolean;

  ngOnInit() {
    $(document).ready(function () {
      // // $('input[type="radio"]').click(function(){
      //   $(document).on('click','input[type="radio"]', function(event){
      //   var inputValue = $(this).attr("value");
      //   var targetDiv = $("."+inputValue);
      //   $(".optField").not(targetDiv).hide();
      //   $(targetDiv).show();
      // });


      // $('div').on('show',function (e){
      //   $('input').removeAttr('checked').removeProp('checked');
      //   $(this).find('input').attr('checked','checked').prop('checked','checked');
      // });
      $(document).on('click', 'input[id="flat"]', function (event) {
        this.showPercent=true;
        this.showFlat=false
      });

      $(document).on('click', 'input[id="percent"]', function (event) {
        this.showPercent=false;
        this.showFlat=true 
      });
    });
  }

  showPayoutDetails(opt: string) {
    switch (opt) {
      case 'percent': {
        this.showPercent = true;
        this.showFlat = false;
        break;
      }
      case 'flat': {
        this.showPercent = false;
        this.showFlat = true;
        break;
      }

      default:

        break;
    }
  }
}
