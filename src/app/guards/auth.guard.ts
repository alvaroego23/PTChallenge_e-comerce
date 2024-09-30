import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { ToastrService } from 'ngx-toastr';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);  // Inyectar el servicio de autenticación
  const router = inject(Router);
  const toastr= inject(ToastrService);

  if (authService.isAuthenticated()) {
    return true; 
  } else {       
    toastr.warning('¡Debe Autenticarse primero!', 'Alert');
    router.navigate(['/sing-in']);
    return false;
  }
};
