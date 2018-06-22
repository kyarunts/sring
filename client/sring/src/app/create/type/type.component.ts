import { Component, OnInit } from '@angular/core';
import { TypeObject } from '../create.data';
import { Input } from '@angular/core';

@Component({
    selector: 'sri-type',
    templateUrl: './type.component.html',
    styleUrls: ['./type.component.scss']
})
export class TypeComponent implements OnInit {

    @Input() public types: TypeObject[];
    constructor() { }

    ngOnInit() {
    }

}
