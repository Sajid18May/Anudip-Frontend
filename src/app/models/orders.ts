import { User } from "./user";

export class Orders {
  order_id!:number;
  totalcount!:number;
  totalprice!:number;
  customers!:User;
}
