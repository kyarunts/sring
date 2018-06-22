import { Component, OnInit } from '@angular/core';
import { CreateStates, Genders, SelectedOptions, StateObject, BookOptions } from './create.data';
import { CreateService } from './create.service';

@Component({
    selector: 'sri-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

    public createStates = CreateStates;
    public currentState: CreateStates = this.createStates.letters;
    public states: StateObject[] = [
        { state: this.createStates.gender, icon: '', title: 'Gender', isActive: true, isSelected: false },
        { state: this.createStates.name, icon: '', title: 'Name', isActive: false, isSelected: false },
        { state: this.createStates.theme, icon: '', title: 'Theme', isActive: false, isSelected: false },
        { state: this.createStates.style, icon: '', title: 'Style', isActive: false, isSelected: false },
        { state: this.createStates.letters, icon: '', title: 'Letters', isActive: false, isSelected: false },
        { state: this.createStates.type, icon: '', title: 'Type', isActive: false, isSelected: false },
        { state: this.createStates.preview, icon: '', title: 'Preview', isActive: false, isSelected: false },
        { state: this.createStates.order, icon: '', title: 'Order', isActive: false, isSelected: false },
    ];
    public selectedOptions: SelectedOptions = {
        gender: null,
        name: null,
        theme: null,
        style: null,
    };
    public bookOptions: BookOptions;

    public get currentStateObject(): StateObject {
        return this.states
            .filter((state: StateObject) => state.state === this.currentState)[0]
    }

    constructor(
        private createService: CreateService,
    ) { }

    ngOnInit() {
        this.createService.getBookOptions()
            .subscribe((data: BookOptions) => {
                this.bookOptions = data;
            })
    }

    public changeState(newState: StateObject): void {
        this.currentState = newState.state;
    }

    public toNextState(): void {
        if (this.currentState !== this.createStates.order) {
            this.currentStateObject.isSelected = true;
            this.currentState++;
            this.currentStateObject.isActive = true;
        }
    }

    public catchEmits(value, componentName): void {
        this.selectedOptions[componentName] = value;
        this.toNextState();
        console.log(this.selectedOptions);
    }
}
