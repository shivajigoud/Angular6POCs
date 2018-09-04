import { appRouting } from './app-route.module';

describe('AppRouteModule', () => {
  let appRouteModule: appRouting;

  beforeEach(() => {
    appRouteModule = new appRouting();
  });

  it('should create an instance', () => {
    expect(appRouting).toBeTruthy();
  });
});
