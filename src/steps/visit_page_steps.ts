import { When } from '@cucumber/cucumber';


When('I navigate to main page', async function () {
  await this.page.goto(this.URL);
});
