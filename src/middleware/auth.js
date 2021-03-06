import jwtUtils from "../../utils/jwt";

export function authToken(req, res, next) {
  const jwtToken = jwtUtils.decode(req.headers.authorization.split(" ")[1]);
  if (!jwtToken) {
    return res.status(400).json({
      status: "error",
      message: "token expired",
    });
  }

  next();
}
