import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IniciodesesionPage } from './iniciodesesion.page';

describe('IniciodesesionPage', () => {
  let component: IniciodesesionPage;
  let fixture: ComponentFixture<IniciodesesionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IniciodesesionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
