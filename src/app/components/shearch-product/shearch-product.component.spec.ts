import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShearchProductComponent } from './shearch-product.component';

describe('ShearchProductComponent', () => {
  let component: ShearchProductComponent;
  let fixture: ComponentFixture<ShearchProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShearchProductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShearchProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
