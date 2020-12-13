import { Routes } from '@angular/router';
import { ProfileComponent } from './profile.component';

export const userRoutes: Routes = [
    {path: 'profile', component: ProfileComponent} // in action this is actually user/pofile; refer to main routes.ts to see how we load this in there
]