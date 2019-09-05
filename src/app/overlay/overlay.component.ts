import { Component, OnInit } from '@angular/core';
import { OverlayService } from '../overlay.service';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.less']
})
export class OverlayComponent implements OnInit {
  public visible: boolean;
  constructor(private overlayService: OverlayService) {}

  ngOnInit() {
    this.overlayService.status.subscribe(
      (value: boolean) => (this.visible = value)
    );
  }
}
