import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductWithOperationComponent } from './product-with-operation.component';

describe('ProductWithOperationComponent', () => {
  let component: ProductWithOperationComponent;
  let fixture: ComponentFixture<ProductWithOperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductWithOperationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductWithOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
