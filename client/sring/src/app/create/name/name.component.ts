import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Input } from '@angular/core';

@Component({
    selector: 'sri-name',
    templateUrl: './name.component.html',
    styleUrls: ['./name.component.scss']
})
export class NameComponent implements OnInit {

    @Input() public name: string = '';
    @Output() public select: EventEmitter<string> = new EventEmitter();

    constructor() { }

    ngOnInit() {
    }

    public emitSelected(): void {
        this.select.emit(this.name);
    }
}
