import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StyleObject, SelectedOptions } from '../create.data';

@Component({
    selector: 'sri-style',
    templateUrl: './style.component.html',
    styleUrls: ['./style.component.scss']
})
export class StyleComponent implements OnInit {

    @Input() public selectedOptions: SelectedOptions;
    @Input() public styles: StyleObject[];
    @Output() public select: EventEmitter<number> = new EventEmitter();
    
    public availableStyles: StyleObject[];
    constructor() { }

    ngOnInit() {
        this.filterStyles();
    }

    private filterStyles(): void {
        this.availableStyles = this.styles.filter((style: StyleObject) => {
            return style.themeIDs.includes(this.selectedOptions.theme)
        })
    }

    public emitSelected(id: number): void {
        this.select.emit(id);
    }
}
