
import { List, City } from './wether-days';

export class Series {
    name: string;
    value: number;
}

export class Forecast {
    name: string;
    series: Series[];
}