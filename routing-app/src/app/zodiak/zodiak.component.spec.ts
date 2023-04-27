import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZodiakComponent } from './zodiak.component';

describe('ZodiakComponent', () => {
  let component: ZodiakComponent;
  let fixture: ComponentFixture<ZodiakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZodiakComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZodiakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
