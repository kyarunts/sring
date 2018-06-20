import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'sri-style',
    templateUrl: './style.component.html',
    styleUrls: ['./style.component.scss']
})
export class StyleComponent implements OnInit {

    @Input() public styles = [
        {id: 1, name: 'Custom style 1'},
        {id: 2, name: 'Custom style 2'},
    ];
    @Output() public select: EventEmitter<number> = new EventEmitter();
    constructor() { }

    ngOnInit() {
    }

    public emitSelected(id: number): void {
        this.select.emit(id);
    }
}
