import * as clientUtils from "~/utils";
import * as ds from "~/server/decorators";
import type * as rrn from "@remix-run/node";
import * as serviceUtils from "~/server/utils";
import * as systemDeptServices from "~/server/services/system/dept";
import * as systemRoleServices from "~/server/services/system/role";
import * as systemUserServices from "~/server/services/system/user";

// rxjs
import { forkJoin, from } from "rxjs";

// import * as userSchemas from "~/schema/user.schema";

class Loader {
  @ds.checkLogin()
  async loader({ request, params }: rrn.LoaderFunctionArgs) {
    const { page, pageSize, name, role } =
      await clientUtils.getPaginationByRequest(request);

    const result$ = forkJoin({
      total: from(
        systemUserServices.getUserCount({ page, pageSize, name, role }),
      ),
      dataSource: from(
        systemUserServices.getUserList({ page, pageSize, name, role }),
      ),
      roles: from(systemRoleServices.getRoleList()),
      depts: from(systemDeptServices.getDeptListTree()),
    });
    return serviceUtils.resp$(result$);
  }
}

export const loader = new Loader().loader;
