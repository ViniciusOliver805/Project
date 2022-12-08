import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPolarchartComponent } from './card-polarchart.component';

describe('CardPolarchartComponent', () => {
  let component: CardPolarchartComponent;
  let fixture: ComponentFixture<CardPolarchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardPolarchartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardPolarchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
