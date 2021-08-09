import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
// import { WindowService } from './window.service';
// import { ServerWindowService } from './server-window.service';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
