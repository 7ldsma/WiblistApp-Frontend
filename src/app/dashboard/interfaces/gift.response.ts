import { Gift } from "./gif.interface";

export interface GiftResponse {
    organized: Gift[];        // Asegúrate de que `Gift` es el tipo correcto
    collaborated: Gift[];
    participated: Gift[];
  }