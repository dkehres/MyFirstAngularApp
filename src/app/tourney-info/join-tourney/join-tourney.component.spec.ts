import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinTourneyComponent } from './join-tourney.component';

describe('JoinTourneyComponent', () => {
  let component: JoinTourneyComponent;
  let fixture: ComponentFixture<JoinTourneyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinTourneyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinTourneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
