import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'sri-theme',
    templateUrl: './theme.component.html',
    styleUrls: ['./theme.component.scss']
})
export class ThemeComponent implements OnInit {

    @Input() public themes = [
        {id: 1, name: 'Custom Theme 1'},
        {id: 2, name: 'Custom Theme 2'},
    ];
    @Output() public select: EventEmitter<number> = new EventEmitter();

    constructor() { }

    ngOnInit() {
    }

    public emitSelected(id: number): void {
        this.select.emit(id);
    }
}
