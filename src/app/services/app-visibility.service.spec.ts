import { TestBed } from '@angular/core/testing';

import { AppVisibilityService } from './app-visibility.service';

describe('AppVisibilityService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppVisibilityService = TestBed.get(AppVisibilityService);
    expect(service).toBeTruthy();
  });
});
