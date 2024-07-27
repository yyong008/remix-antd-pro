import { api } from "@/utils/server/api";
import { createApi } from "@/utils/server/api/api-handler";
import { readMonitorServeListService } from "~/services/admin/system/monitor-serve";

// import { blogCategoryPermissions as perm } from "@/constants/permission";

const options = {
  GET: {
    isPublic: false,
    perm: "",
    // perm: perm.READ_LIST,
  },
  CREATE: {
    isPublic: false,
    // perm: perm.CREATE,
  },
  UPDATE: {
    isPublic: false,
    // perm: perm.UPDATE,
  },
  DELETE: {
    isPublic: false,
    // perm: perm.DELETE,
  },
};

const restfulApis = {
  GET: await createApi(options.GET, readMonitorServeListService),
};

export const { loader, action } = api(restfulApis);
