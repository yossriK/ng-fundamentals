import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
    selector: 'selector-name',
    templateUrl: './login.component.html',
    styles: [`
    em { float: right; color:#05C65; padding-left:10px; }
    `]
})

export class LoginComponent {
    password: string;
    userName: string;
    mouseoverLogin: boolean;
    constructor(private authService: AuthService,
        private router: Router) { }

    login(formValues) {
        this.authService.loginUser(formValues.userName, formValues.password);
        this.router.navigate(['events']);
    }

    cancel() {
        this.router.navigate(['events']);
    }
}