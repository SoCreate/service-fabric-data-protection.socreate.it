import { SoCreateLogoComponent } from './shared/socreate-logo/socreate-logo.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MarkdownComponent } from './shared/markdown.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { GithubCornerComponent } from './shared/github-corner.component';
import { appRoutes } from './app.routes';
import { DocsComponent } from './docs/docs.component';
import { DataProtectionLogoComponent } from './shared/data-protection-logo/data-protection-logo.component';
import { HowToSetUpComponent } from './docs/set-up/how-to-set-up/how-to-set-up.component';
import { SetupClientTouseDataProtectionComponent } from './docs/set-up/setup-client-to-use-data-protection/setup-client-to-use-data-protection.component';
import { ExampleUsageComponent } from './docs/configuration/example-usage/example-usage.component';
import { OptionalConfigurationSettingsComponent } from './docs/configuration/optional-configuration-settings/optional-configuration-settings.component';


@NgModule({
  declarations: [
    AppComponent,
    DataProtectionLogoComponent,
    SoCreateLogoComponent,
    GithubCornerComponent,
    MarkdownComponent,
    AboutComponent,
    HomeComponent,
    DocsComponent,
    HowToSetUpComponent,
    SetupClientTouseDataProtectionComponent,
    ExampleUsageComponent,
    OptionalConfigurationSettingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
