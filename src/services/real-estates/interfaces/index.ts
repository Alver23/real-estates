// Interfaces
import { IRealEstateDetail, IRealEstatesGroup } from '@alversoft/services/real-estates/interfaces/api';

export interface IRealEstateList {
  data: IRealEstatesGroup[];
  included: IRealEstateDetail[];
}
