import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { MyApp } from './app.component';

// Basic Pages
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { ForgotpasswordPage } from '../pages/forgotpassword/forgotpassword';
import { MenuPage } from '../pages/menu/menu';
import { OnboardingPage } from '../pages/onboarding/onboarding';
import { StudyInputPage } from '../pages/study-input/study-input';


// Main Pages
import { HomePage } from '../pages/home/home';
import { HistoryPage } from '../pages/history/history';
import { SettingsPage } from '../pages/settings/settings';

// Others
import { StatusBar } from '@ionic-native/status-bar';
import { TabsPage } from '../pages/tabs/tabs';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ChartsModule } from 'ng2-charts';

// Provider
import { AuthServiceProvider } from '../providers/auth-service/auth-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    StudyInputPage,
    HistoryPage,
    SettingsPage,
    LoginPage,
    SignupPage,
    ForgotpasswordPage,
    MenuPage,
    OnboardingPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    StudyInputPage,
    HistoryPage,
    SettingsPage,
    LoginPage,
    SignupPage,
    ForgotpasswordPage,
    MenuPage,
    OnboardingPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider
  ]
})
export class AppModule {}
