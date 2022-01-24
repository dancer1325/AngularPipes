import { Pipe, PipeTransform } from "@angular/core";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";

@Pipe({
  name: "domseguro",
})
export class DomseguroPipe implements PipeTransform {
  constructor(private domSanitizer: DomSanitizer) {}

  // Method invoked to pipe the expressions
  // args Arguments which can be specified if you whish in the customized pipe
  transform(value: string, ...args: unknown[]): SafeResourceUrl {
    // Indicate as trust Url, to overcome Angular security checkers
    // Without byPass methods, no script could be injected
    return this.domSanitizer.bypassSecurityTrustResourceUrl(value);
  }
}
