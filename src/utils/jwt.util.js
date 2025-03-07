import jwt from "jsonwebtoken";
import httpStatus from "#utils/httpStatus";
import env from "#configs/env";

export const createToken = (payload, secret = env.JWT_SECRET, options = {}) => {
  const token = jwt.sign(payload, secret, { ...options });
  return token;
};

export const generateRandomPassword = (length = 12) => {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?";
  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
  }

  return password;
};

export const verifyToken = (token, secret = env.JWT_SECRET) => {
  try {
    const payload = jwt.verify(token, secret);
    return payload;
  } catch (err) {
    throw {
      status: false,
      message: "Invalid token please login again",
      httpStatus: httpStatus.UNAUTHORIZED,
    };
  }
};
