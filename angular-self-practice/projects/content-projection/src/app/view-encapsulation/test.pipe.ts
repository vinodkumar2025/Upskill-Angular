import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'curren'
})
export class currencyCustomPipe implements PipeTransform{
    transform(value: any, ...args: any[]) {
        throw new Error("Method not implemented.");
    }

}