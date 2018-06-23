import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { LetterOption } from '../../create.data';

@Component({
    selector: 'sri-letter-options',
    templateUrl: './letter-options.component.html',
    styleUrls: ['./letter-options.component.scss']
})
export class LetterOptionsComponent implements OnInit {

    @Input() public data: LetterOption[];
    @Input() public letter: string;
    constructor() { }
    ngOnInit() {
    }

}
