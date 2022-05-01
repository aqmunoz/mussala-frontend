import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGatewaysComponent } from './list-gateways.component';

describe('ListGatewaysComponent', () => {
  let component: ListGatewaysComponent;
  let fixture: ComponentFixture<ListGatewaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListGatewaysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListGatewaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
