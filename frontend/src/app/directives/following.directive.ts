import { Directive, HostListener, Input, HostBinding} from '@angular/core';

@Directive({
    selector: '[following]'
})

export class FollowingDirective{
    @Input('following') class;

    constructor () {}

    @HostBinding('class.active') isActive: boolean = false;
    
    @HostListener('click') click() {
        this.isActive = !this.isActive;
    }
}
