import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gestionnairecollection } from './gestionnairecollection';

describe('Gestionnairecollection', () => {
  let component: Gestionnairecollection;
  let fixture: ComponentFixture<Gestionnairecollection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Gestionnairecollection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gestionnairecollection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
