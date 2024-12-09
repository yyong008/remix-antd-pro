import { linkCategoryService } from "~/services/admin/profile/LinkCategoryService";
import { remixApi } from "@/utils/server/remixApi";

// import { blogCategoryPermissions as perm } from "@/constants/permission";

const options = {
  GET: {
    isPublic: false,
    perm: "",
    // perm: perm.READ_LIST,
    handler: linkCategoryService.getList.bind(linkCategoryService),
  },
  POST: {
    isPublic: false,
    // perm: perm.CREATE,
    handler: linkCategoryService.create.bind(linkCategoryService),
  },
  PUT: {
    isPublic: false,
    // perm: perm.UPDATE,
    handler: linkCategoryService.update.bind(linkCategoryService),
  },
  DELETE: {
    isPublic: false,
    // perm: perm.DELETE,
    handler: linkCategoryService.deleteByIds.bind(linkCategoryService),
  },
};

export const { loader, action } = remixApi.createApi(options);
