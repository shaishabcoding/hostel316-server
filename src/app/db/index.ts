import { superAdminData } from "../modules/auth/Auth.constant";
import User from "../modules/user/User.model";

export const seedSuperAdmin = async () => {
  const isSuperAdminExits = await User.findOne({
    role: "SUPER_ADMIN",
  });

  if (!isSuperAdminExits) {
    await User.create(superAdminData);
  }
};
