import { Redirect } from "react-router-dom";

export function StoreCounter () {
  return {
    data : 0,
    Add () {
      this.data++;
    },
    Subb () {
      this.data--;
    }
  };
}