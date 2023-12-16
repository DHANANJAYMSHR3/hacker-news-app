import { ResolveFn } from '@angular/router';

export const newsResolver: ResolveFn<boolean> = (route, state) => {
  return true;
};
