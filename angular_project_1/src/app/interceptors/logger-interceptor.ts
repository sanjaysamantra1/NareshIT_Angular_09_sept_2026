import { HttpInterceptorFn } from '@angular/common/http';

export const loggerInterceptor: HttpInterceptorFn = (req, next) => {
  console.log(`Logger Interceptor: ${req.url} is fired...`)
  return next(req);
};
