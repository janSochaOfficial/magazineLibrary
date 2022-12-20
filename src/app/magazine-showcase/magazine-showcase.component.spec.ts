import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagazineShowcaseComponent } from './magazine-showcase.component';

describe('MagazineShowcaseComponent', () => {
  let component: MagazineShowcaseComponent;
  let fixture: ComponentFixture<MagazineShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagazineShowcaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MagazineShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
