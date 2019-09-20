import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[toggle-password]'
})

export class TogglePasswordDirective {
    constructor(private elementRef: ElementRef) {
        this.elementRef.nativeElement.class = 'active';
        this.elementRef.nativeElement.type = 'text';
    }
}
