import { Nodule } from './nodule.model';

export interface Analysis {
  nodule: Nodule[];
  la: any[];
  ha: any[];
  risk: boolean;
}
