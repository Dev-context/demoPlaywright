import { test } from "fixture/baseTest"

test.describe("Handle alerts Tests", () => {
	test.beforeEach(async ({ home }) => {
		await home.signUp("test@test.com")
	})

	test("Open Alerts with sucess", async ({ navBar, alerts }) => {
		await navBar.openOptionsSwitchTo("Alerts")
		await alerts.alertWindowHandler()
		await alerts.openAlertWithOk()
	})
})
