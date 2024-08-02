import { expect, test } from "fixture/baseTest";

test.describe("Handle alerts Tests", () => {
  test.beforeEach(async ({ home, navBar }) => {
    await home.signUp("test@test.com");
    await navBar.openOptionsSwitchTo("Alerts");
  });

  test("Open Alerts with sucess", async ({ alerts }) => {
    await alerts.alertWindowHandler();
    await alerts.openAlertWithOk();
  });

  test("Open confirmed Alert success", async ({ alerts }) => {
    await alerts.openAlertWithOkCancel();
    await alerts.alertCancelWindowHandler();
    expect(alerts.alertConfirmText).toHaveText("You pressed Ok");
  });

  test("Open prompt success", async ({ alerts }) => {
    await alerts.openAlertWithTextbox();
    await alerts.alertPromptlWindowHandler();
    await expect(alerts.alertPromptText).toContainText(
      "Testando com Playwright"
    );
  });
});
