import {Component, Directive, View} from 'angular2/angular2';

import {IonicApp, List, Item, ActionMenu, Modal, ModalRef,
  NavbarTemplate, Navbar, NavController, Content} from 'ionic/ionic';

import {SinkPage} from '../sink-page';

@Component({
  selector: 'ion-view'
})
@View({
  template: `
  <ion-navbar *navbar><ion-nav-items primary><button icon (^click)="toggleMenu()"><i class="icon ion-navicon"></i></button></ion-nav-items><ion-title>Cards</ion-title></ion-navbar>

  <ion-content class="padding">
    <h2>Cards</h2>
    <p>
      Cards are an emerging UI concept where a bit of content is displayed
      like it would be on an index card or a piece of paper.
    </p>
    <p>
      Cards are great for displaying contextual information in a small space,
      like a Tweet, today's weather report, or a photo.
    </p>
    <div class="card">

      <div class="item card-header">
        <div class="item-content">
          <div class="item-label">
            Card Header
          </div>
        </div>
      </div>

      <div class="item">
          <div class="item-media">
            <img src="http://i.imgur.com/7BEPcGo.jpg">
          </div>
      </div>

      <div class="item card-footer">
        <div class="item-content">
          <div class="item-label">
            Card Footer
          </div>
        </div>
      </div>

    </div>
  </ion-content>
  `,
  directives: [NavbarTemplate, Navbar, Content, List, Item]
})
export class CardPage extends SinkPage {
  constructor(app: IonicApp) {
    super(app);
  }
}