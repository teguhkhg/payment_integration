import jwt from "jsonwebtoken";

import config from "../config";

export function validate(str) {
  if (!str || str.length < 100 || str.search("Bearer") != 0) {
    return false;
  }

  return true;
}

export function decode(target) {
  try {
    const res = jwt.verify(target.replace("Bearer", ""), config.jwt_secret);

    return res;
  } catch (err) {
    return false;
  }
}

export function encode(id) {
  const token = jwt.sign({ id: id }, config.jwt_secret, {
    expiresIn: config.jwt_expired,
  });

  return `Bearer ${token}`;
}
