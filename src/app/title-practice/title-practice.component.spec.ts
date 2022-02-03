import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitlePracticeComponent } from './title-practice.component';

describe('TitlePracticeComponent', () => {
  let component: TitlePracticeComponent;
  let fixture: ComponentFixture<TitlePracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitlePracticeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitlePracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
