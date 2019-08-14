import { Component, OnInit } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-tab-terapias',
  templateUrl: './tab-terapias.page.html',
  styleUrls: ['./tab-terapias.page.scss'],
})
export class TabTerapiasPage implements OnInit {

  vid = 'https://www.youtube.com/embed/LOe_wcdmZ38';
  url = '';
  videos = [
    {
      title: 'Terapia 1',
      url: 'https://www.youtube.com/embed/LOe_wcdmZ38'
    },
    {
      title: 'Terapia 2',
      url: 'https://www.youtube.com/embed/LOe_wcdmZ38'
    }
  ];
  constructor(private dom: DomSanitizer) {

  }
  sanitizer(vid) {
    return this.dom.bypassSecurityTrustResourceUrl(vid);
  }

  ngOnInit() {
  }

}
