import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductWithDeleteComponent } from './product-with-delete.component';

describe('ProductWithDeleteComponent', () => {
  let component: ProductWithDeleteComponent;
  let fixture: ComponentFixture<ProductWithDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductWithDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductWithDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
