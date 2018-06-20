import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Genders } from '../create.data';

@Component({
    selector: 'sri-gender',
    templateUrl: './gender.component.html',
    styleUrls: ['./gender.component.scss']
})
export class GenderComponent implements OnInit {

    public genders = Genders;
    @Output() public select: EventEmitter<Genders> = new EventEmitter();
    constructor() { }

    ngOnInit() {
    }

    public emitSelected(option: Genders): void {
        this.select.emit(option);
    }

}
