import { Component, OnInit } from '@angular/core';
import {RequestService} from '../services/request.service';
import {forkJoin, ReplaySubject} from 'rxjs';
import {delay, finalize} from 'rxjs/operators';

@Component({
  selector: 'app-buttons-window',
  templateUrl: './buttons-window.component.html',
  styleUrls: ['./buttons-window.component.less']
})
export class ButtonsWindowComponent implements OnInit {

  public progressFlag: boolean;
  public $progressValue = new ReplaySubject(1);
  public progressContext = '';
  public $progressContext = new ReplaySubject(1);
  public progressMode: string;

  constructor(private requestService: RequestService) { }

  ngOnInit() {
  }

  public onConsistently(): void {
    this.progressMode = 'determinate';
    this.progressFlag = true;
    this.progressContext = '';
    this.$progressValue.next(0);
    this.$progressContext.next(this.progressContext);
    this.requestService.firstRequest()
      .subscribe((ans1) => {
        this.$progressValue.next(33);
        this.progressContext += ans1;
        this.$progressContext.next(this.progressContext);
        this.requestService.firstRequest().subscribe((ans2) => {
          this.$progressValue.next(66);
          this.progressContext += ans2;
          this.$progressContext.next(this.progressContext);
          this.requestService.firstRequest().subscribe((ans3) => {
            this.$progressValue.next(100);
            this.progressContext += ans3;
            this.$progressContext.next(this.progressContext);
          });
        });
      });
  }

  public onSimultaneously(): void {
    this.progressFlag = true;
    this.progressMode = 'indeterminate';
    this.progressContext = '';
    this.$progressValue.next(0);
    this.$progressContext.next(this.progressContext);
    const example = forkJoin(
      this.requestService.secondRequest(),
      this.requestService.secondRequest().pipe(delay(1000)),
      this.requestService.secondRequest().pipe(delay(2000))
    );
    example.pipe(finalize(() => {
      this.progressMode = 'determinate';
      this.$progressValue.next(100);
    })).subscribe((ans) => this.$progressContext.next(ans.reduce((sum, cur) => sum + cur)));
  }

}
