import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteMainViewComponent } from './note-main-view.component';

describe('NoteMainViewComponent', () => {
  let component: NoteMainViewComponent;
  let fixture: ComponentFixture<NoteMainViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteMainViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteMainViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
