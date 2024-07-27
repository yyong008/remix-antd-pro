import { api } from "@/utils/server/api";
import { createApi } from "@/utils/server/api/api-handler";
import { readSystemRoleListService } from "~/services/admin/system/role";

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
  GET: await createApi(options.GET, readSystemRoleListService),
  // POST: await createApi(options.CREATE, createLinkCategoryService),
  // PUT: await createApi(options.UPDATE, updateLinkCategoryService),
  // DELETE: await createApi(options.DELETE, deleteLinkCategoryService),
};

export const { loader, action } = api(restfulApis);
