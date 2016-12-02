import { TravelPlannerPage } from './app.po';

describe('travel-planner App', function() {
  let page: TravelPlannerPage;

  beforeEach(() => {
    page = new TravelPlannerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
