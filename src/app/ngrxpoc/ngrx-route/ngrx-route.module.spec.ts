import { NgrxRouteModule } from './ngrx-route.module';

describe('NgrxRouteModule', () => {
  let ngrxRouteModule: NgrxRouteModule;

  beforeEach(() => {
    ngrxRouteModule = new NgrxRouteModule();
  });

  it('should create an instance', () => {
    expect(ngrxRouteModule).toBeTruthy();
  });
});
