import { type DefineRouteFunction } from "@remix-run/dev/dist/config/routes";

import { apiRoutes } from "./api";
import { homeRoutes } from "./home";
import { clientRoutes } from "./client";
import { adminNoLayoutRoutes } from "./router/admin-no-layout";
import { adminRoutes } from "./router/admin";
import { anyRoutes } from "./any";

export function allRoutes(route: DefineRouteFunction) {
  homeRoutes(route);
  apiRoutes(route);
  clientRoutes(route);
  adminNoLayoutRoutes(route);
  adminRoutes(route);
  anyRoutes(route);
}
