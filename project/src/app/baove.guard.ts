import { CanActivateFn } from '@angular/router';

export const baoveGuard: CanActivateFn = (route, state) => {
  return true;
};
