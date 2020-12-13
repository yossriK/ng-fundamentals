import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'selector-name',
    templateUrl: './create-event.component.html'
})

export class CreateEventComponent implements OnInit {
    isDirty: boolean = true;
    constructor(private router: Router) { }

    ngOnInit() { }

    cancel() {
        this.router.navigate(['/events']);
    }
}