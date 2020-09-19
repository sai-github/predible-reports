import { Analysis } from './analysis.model';
import { Details } from './details.model';

export interface Report {
  id: number;
  details: Details;
  analysis: Analysis;
}
