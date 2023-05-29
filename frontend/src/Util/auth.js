import { redirect } from "react-router-dom";

export function authExpiretion() {
  const storedExpirationDate = localStorage.getItem("expiretion");
  console.log(storedExpirationDate);
  const expirationDate = new Date(storedExpirationDate);
  const now = new Date();
  console.log(expirationDate.getTime());
  console.log(now.getTime());
  const duration = expirationDate.getTime() - now.getTime();
  console.log(duration);
  return duration;
}
export function getAuthToken() {
  const token = localStorage.getItem("token");

  if (!token) {
    return null;
  }
  const tokenDuration = authExpiretion();
  console.log(tokenDuration);
  if (tokenDuration < 0) {
    return "EXPIRED";
  }
  return token;
}

export function tokenLoader() {
  return getAuthToken();
}

export function checkAuthLoader() {
  const token = getAuthToken();
  console.log(token);
  if (!token) {
    return redirect("/");
  }

  return null;
}
