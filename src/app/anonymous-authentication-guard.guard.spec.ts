import { TestBed } from '@angular/core/testing';

import { AnonymousAuthenticationGuardGuard } from './anonymous-authentication-guard.guard';

describe('AnonymousAuthenticationGuardGuard', () => {
  let guard: AnonymousAuthenticationGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AnonymousAuthenticationGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
