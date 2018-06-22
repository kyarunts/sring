import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterOptionsComponent } from './letter-options.component';

describe('LetterOptionsComponent', () => {
  let component: LetterOptionsComponent;
  let fixture: ComponentFixture<LetterOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetterOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetterOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
