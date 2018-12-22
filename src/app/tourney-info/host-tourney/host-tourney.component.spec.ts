import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostTourneyComponent } from './host-tourney.component';

describe('HostTourneyComponent', () => {
  let component: HostTourneyComponent;
  let fixture: ComponentFixture<HostTourneyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostTourneyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostTourneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
