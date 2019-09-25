import { Directive, HostListener, Input, HostBinding } from '@angular/core';

@Directive({
    selector: '[togglePassword]'
})

export class TogglePasswordDirective {
    
    type: string = 'text';
    @Input('togglePassword') class;

    constructor() { }

    @HostBinding('class.active') isActive: boolean = false;

    @HostListener('click') click() {
        this.isActive = !this.isActive;
    }
}
