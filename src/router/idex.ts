import { AuthRouter } from "./auth.router";
import { UserRouter } from "./user.router";
import { BookRouter } from "./book.router";
import { BillRouter } from "./bill.router";

export const routerInit = [UserRouter, AuthRouter, BookRouter, BillRouter];