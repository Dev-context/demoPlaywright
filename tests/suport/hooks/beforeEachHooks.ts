import { test } from "fixture/baseTest";

const afterEachHooks = test.afterEach(async ({ page }) => {
  await page.close();
});

export default afterEachHooks;
