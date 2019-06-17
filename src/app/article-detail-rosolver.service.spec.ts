import { TestBed } from '@angular/core/testing';

import { ArticleDetailRosolverService } from './article-detail-rosolver.service';

describe('ArticleDetailRosolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArticleDetailRosolverService = TestBed.get(ArticleDetailRosolverService);
    expect(service).toBeTruthy();
  });
});
