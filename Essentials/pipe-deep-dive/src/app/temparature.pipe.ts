import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'temperature',
    standalone: true,
})
export class TemperaturePipe implements PipeTransform {
    transform(value: number, unit: string): string {
        if (unit === 'C') {
            return `${value} °C`;
        } else if (unit === 'F') {
            return `${(value * 9) / 5 + 32} °F`;
        } else if (unit === 'K') {
            return `${value + 273.15} K`;
        } else {
            return `${value} °C`;
        }
    }

}