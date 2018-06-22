import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ThemeObject, SelectedOptions } from '../create.data';

@Component({
    selector: 'sri-theme',
    templateUrl: './theme.component.html',
    styleUrls: ['./theme.component.scss']
})
export class ThemeComponent implements OnInit {

    @Input() public selectedOptions: SelectedOptions; 
    @Input() public themes: ThemeObject[];
    @Output() public select: EventEmitter<number> = new EventEmitter();

    public suggested: ThemeObject[];
    public others: ThemeObject[];
    public showAll: boolean = false;

    constructor() { }

    ngOnInit() {
        this.filterThemes();
    }
    
    public changeDisplayCondition(): void {
        this.showAll = !this.showAll;
    }

    private filterThemes(): void {
        this.suggested = this.themes.filter((theme: ThemeObject) => {
            return theme.genderID === this.selectedOptions.gender;
        });
        this.others = this.themes.filter((theme: ThemeObject) => {
            return theme.genderID !== this.selectedOptions.gender;
        });
    }

    public emitSelected(id: number): void {
        this.select.emit(id);
    }
}
