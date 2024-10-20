import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftLayoutComponent } from './gift-layout.component';

describe('GiftLayoutComponent', () => {
  let component: GiftLayoutComponent;
  let fixture: ComponentFixture<GiftLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GiftLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GiftLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
