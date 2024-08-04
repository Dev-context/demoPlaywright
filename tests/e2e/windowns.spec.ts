import { test } from "fixture/baseTest"
import afterEachHooks from "tests/suport/hooks/beforeEachHooks"
import beforeEachHooks from "tests/suport/hooks/beforeEachHooks"

test.describe("Test on Windowns", { tag: "@windows" }, () => {
	beforeEachHooks
	test.beforeEach("Open Window Nav", async ({ navBar }) => {
		await navBar.openOptionsSwitchTo("windowns")
	})
	test("Open new Tabbed Windowns", async ({ windows, context }) => {
		await windows.OpenTabbedWindows()
		await windows.ClickTabbedWindow()
		const windowHandled = await windows.windownsHandle(context)
		console.log(await windowHandled.title())
	})

	test("Open Seperate Windows", async ({ windows, context }) => {
		await windows.OpenSeperateWindows()
		await windows.clickSeperateWindow()
		const windowHandled = await windows.windownsHandle(context)
		console.log(await windowHandled.title())
	})

	test("Open Seperate Multiple Windows", async ({ windows, context }) => {
		await windows.OpenMultipleWindows()
		await windows.clickMultipleWindows()
		const windowHandled = await windows.windownsHandle(context)
		console.log(await windowHandled.title())
	})

	afterEachHooks
})
