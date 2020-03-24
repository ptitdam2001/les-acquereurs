import { PriceHistoricRow } from './price-historic-row.interface';

export interface Price {
  price: number;
  notary_fees: number;
  commission: number;
  history?: PriceHistoricRow[];
}
