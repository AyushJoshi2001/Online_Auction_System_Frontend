import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyWinComponent } from './my-win.component';

describe('MyWinComponent', () => {
  let component: MyWinComponent;
  let fixture: ComponentFixture<MyWinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyWinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyWinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
