import { Directive, ElementRef, Inject, Input, OnInit } from '@angular/core';
import { JQ_TOKEN } from './jQuery.service';

@Directive({ selector: '[modal-trigger]' })
export class ModalTriggerDirective implements OnInit {
    // element ref itself is wrapper around the dom, we want the actual dom elememtn and hence assigning el down here
    private el: HTMLElement; // global js type
    @Input('modal-trigger') modalId: string;
/**
 *
 */
constructor(@Inject (JQ_TOKEN) private $ : any,
            ref: ElementRef) {
            this.el = ref.nativeElement;
        }

    ngOnInit() {
        this.el.addEventListener('click', e => {
            //console.log("I was triggered, did i show");
            this.$(`#${this.modalId}`).modal({}); // this is the id of the modal i want to trigger
    });
    }

}