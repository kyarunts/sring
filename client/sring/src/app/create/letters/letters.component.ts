import { Component, OnInit, Input } from '@angular/core';

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
    public letters = [];

    constructor() { }

    ngOnInit() {
        this.getLetterOptions(); 
    }

    public getLetterOptions(): void {

    }

}
