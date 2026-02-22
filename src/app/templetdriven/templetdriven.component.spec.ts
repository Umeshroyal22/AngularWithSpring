import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempletdrivenComponent } from './templetdriven.component';

describe('TempletdrivenComponent', () => {
  let component: TempletdrivenComponent;
  let fixture: ComponentFixture<TempletdrivenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TempletdrivenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TempletdrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
