import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "contrasena",
})
export class ContrasenaPipe implements PipeTransform {
  // Method invoked to pipe the expressions
  // value. Expression to through to the pipe
  // args. Arguments which can be specified if you whish in the customized pipe
  transform(value: string, mostrar: boolean = true): string {
    return !mostrar ? "*".repeat(value.length) : value;
  }
}
