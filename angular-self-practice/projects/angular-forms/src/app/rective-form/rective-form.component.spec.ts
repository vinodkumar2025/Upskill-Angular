import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RectiveFormComponent } from './rective-form.component';

describe('RectiveFormComponent', () => {
  let component: RectiveFormComponent;
  let fixture: ComponentFixture<RectiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RectiveFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RectiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
