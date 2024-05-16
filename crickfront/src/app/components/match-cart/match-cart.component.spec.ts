import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchCartComponent } from './match-cart.component';

describe('MatchCartComponent', () => {
  let component: MatchCartComponent;
  let fixture: ComponentFixture<MatchCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatchCartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MatchCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
