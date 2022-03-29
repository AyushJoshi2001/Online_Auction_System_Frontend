import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BidOnProductComponent } from './bid-on-product.component';

describe('BidOnProductComponent', () => {
  let component: BidOnProductComponent;
  let fixture: ComponentFixture<BidOnProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BidOnProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BidOnProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
