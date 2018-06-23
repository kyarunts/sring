import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

import { BookOptions, LetterOption } from "./create.data";
import { BookOptionsMock } from "./create.mock";

@Injectable()
export class CreateService {
    
    public getBookOptions(): Observable<BookOptions> {
        return of(BookOptionsMock);
    }

    public getLetters(): Observable<LetterOption> {
        return of();
    }
}