/**
 * Authorization header file and helper for retrieving data
 */
import { getCurrentUser } from "./auth.service";

export const authHeader = () => {
  const user = getCurrentUser();

  if (!user && !user.accessToken) {
    return {};
  }
  return { Authorization: `Bearer: ${user.accessToken}` };
};
