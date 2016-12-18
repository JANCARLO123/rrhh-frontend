import {NgModule} from "@angular/core";
import {SmartadminModule} from "./shared/smartadmin.module";
import {AppComponent} from "./app.component";
import {appRouting} from "./app.routing";
import {BrowserModule} from "@angular/platform-browser";
import {UserModule} from "./shared/user/user.module";
import {UserService} from "./shared/user/user.service";
import {LoginComponent} from "./+auth/login/login.component";
import {AuthGuard} from "./+auth/_guards/auth.guard";
import {AuthenticationService} from "./+auth/_services/authentication.service";




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    appRouting,
    SmartadminModule.forRoot(),
    UserModule.forRoot(),

  ],
  providers: [
      AuthGuard,
      AuthenticationService,
      UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {



}
