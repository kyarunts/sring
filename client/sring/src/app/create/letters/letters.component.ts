import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'sri-letters',
    templateUrl: './letters.component.html',
    styleUrls: ['./letters.component.scss']
})
export class LettersComponent implements OnInit {

    @Input() public set name(name: string) {
        for (let letter of name) {
            this.letters.push({
                letter: letter,
                id: null,
            });
        }
    };
    
    @Output() public select: EventEmitter<any> = new EventEmitter();

    public currentSelectedLetter: number = 0;
    public letters = [];

    constructor() { }

    ngOnInit() {
        this.getLetterOptions(); 
    }

    public getLetterOptions(): void {

    }

    public selectLetter(index: number): void {
        this.currentSelectedLetter = index;
    }

    public toNextLetter(): void {
        if (this.currentSelectedLetter < this.letters.length - 1) {
            this.currentSelectedLetter++
        }
    }

    public emitSelected(value: any): void {
        this.select.emit({a: 1});
    }
}
