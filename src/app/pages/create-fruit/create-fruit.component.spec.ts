import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFruitComponent } from './create-fruit.component';

describe('CreateFruitComponent', () => {
  let component: CreateFruitComponent;
  let fixture: ComponentFixture<CreateFruitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateFruitComponent]
    });
    fixture = TestBed.createComponent(CreateFruitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
