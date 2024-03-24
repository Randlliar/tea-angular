import {Component, OnInit} from '@angular/core';
import {BehaviorSubject, delay, take} from "rxjs";

@Component({
  selector: 'main-component',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {


  public isShowPopup: boolean = false;
  private readonly delay: number = 10000;

  ngOnInit() {
    (new BehaviorSubject(null)).asObservable()
      .pipe(
        take(1),
        delay(this.delay)
      )
      .subscribe(() => {
        this.isShowPopup = true;
      })
  }
}
