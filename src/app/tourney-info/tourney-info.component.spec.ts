import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourneyInfoComponent } from './tourney-info.component';

describe('TourneyInfoComponent', () => {
  let component: TourneyInfoComponent;
  let fixture: ComponentFixture<TourneyInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourneyInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourneyInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
