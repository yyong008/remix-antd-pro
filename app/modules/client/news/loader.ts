import type * as tn from "@remix-run/node";
import * as us from "~/utils/server";

import { query } from "./loaders";

class L {
  static async loader(args: tn.LoaderFunctionArgs) {
    try {
      return L.loaderImpl(args);
    } catch (error) {
      return us.rfj();
    }
  }

  static async loaderImpl(args: tn.LoaderFunctionArgs) {
    const result = await query(args);
    return us.rsj(result);
  }
}

export const loader = L.loader;
