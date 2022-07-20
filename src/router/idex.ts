import { AuthRouter } from "./auth.router";
import { BookRouter } from "./book.router";
import { BillRouter } from "./bill.router";
import { PayRouter } from "./pay.router";

export const routerInit = [AuthRouter, BookRouter, BillRouter, PayRouter];