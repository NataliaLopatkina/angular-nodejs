import { Directive, HostListener, Input, HostBinding, OnInit } from '@angular/core';

@Directive({
    selector: '[following]'
})

export class FollowingDirective implements OnInit {
    @Input() following;

    constructor () {}

    @HostBinding('class.active') isActive: boolean = false;
    
    @HostListener('click') click() {
        this.isActive = !this.isActive;
    }

    ngOnInit() {
        this.isActive = this.following > 0;
    }
}