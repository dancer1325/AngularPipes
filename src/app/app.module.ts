import { BrowserModule } from "@angular/platform-browser";
import { NgModule, LOCALE_ID } from "@angular/core";

import { registerLocaleData } from "@angular/common";
import localEs from "@angular/common/locales/es";
import localFr from "@angular/common/locales/fr";
import localDe from "@angular/common/locales/de";

registerLocaleData(localEs);
registerLocaleData(localFr);
registerLocaleData(localDe);

import { AppComponent } from "./app.component";
import { CapitalizadoPipe } from "./pipes/capitalizado.pipe";
import { DomseguroPipe } from "./pipes/domseguro.pipe";
import { ContrasenaPipe } from "./pipes/contrasena.pipe";

@NgModule({
  declarations: [AppComponent, CapitalizadoPipe, DomseguroPipe, ContrasenaPipe],
  imports: [BrowserModule],
  providers: [
    {
      provide: LOCALE_ID, // Indicate the default local one
      useValue: "es",
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
