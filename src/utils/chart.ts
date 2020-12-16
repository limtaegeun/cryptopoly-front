export default class Chart {
  static numberWithCommas(x: number| string): string {
    return (typeof x === 'number' ? x.toString() : x).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  static decimalPoint(number: number, underPoint: number) {
    return Math.round(number * (10 * underPoint)) / (10 * underPoint);
  }
}
