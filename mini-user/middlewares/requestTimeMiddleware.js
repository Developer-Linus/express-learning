export const requestTimeMiddleware = (req, res, next) => {
  req.requestTime = new Date().toLocaleString();
  console.log(req.requestTime);
  next();
};


