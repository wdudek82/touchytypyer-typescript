import { Database } from "./index";
import { Context } from "graphql-yoga/dist/types";

export interface MyContext extends Context {
  db: Database;
}
