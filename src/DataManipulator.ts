import { ServerRespond } from './DataStreamer';

export interface Row {
  timestamp: Date,
  price_abc: number; 
  price_def: number;
  ratio: number;
  upper_bound: number;
  lower_bound: number;
  trigger_alert?: number; 
}

export class DataManipulator {
  static generateRow(serverResponds: ServerRespond[]) {
    const [abc, def] = serverResponds;
    const price_abc = abc.top_ask && abc.top_ask.price || 0;
    const price_def = def.top_ask && def.top_ask.price || 0;
    const ratio = price_abc / price_def;
    const upper_bound = 1.05; 
    const lower_bound = 0.95;
    let trigger_alert;
    if (ratio > upper_bound || ratio < lower_bound) {
      trigger_alert = ratio; 
    }

    return {
      timestamp: abc.timestamp,
      price_abc, 
      price_def,
      ratio,
      upper_bound,
      lower_bound,
      trigger_alert,
    };
  }
}