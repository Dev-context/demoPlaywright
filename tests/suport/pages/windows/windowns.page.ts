import type { BrowserContext } from "@playwright/test"
import elements from "@pages/windows/elements.json"
import { Actions } from "commands/actions"
import Baseclass from "fixture/baseclass"

export default class Windows extends Baseclass {
	readonly openTabbedWindows = this.page.locator(elements.open_new_tab_window)
	readonly openSeperateWindows = this.page.locator(elements.open_separete_window)
	readonly openMultipleWindowns = this.page.locator(elements.open_multiple_window)
	readonly clickTabbedWindows = this.page.locator(elements.click_Open_new_tab)
	readonly clickSeperateWindows = this.page.locator(elements.click_OpenSeparete)
	readonly clickMultipleWindowns = this.page.locator(elements.click_Open_Multiple)

	async OpenTabbedWindows() {
		await Actions.actionClick(this.openTabbedWindows)
	}

	async OpenSeperateWindows() {
		await Actions.actionClick(this.openSeperateWindows)
	}

	async OpenMultipleWindows() {
		await Actions.actionClick(this.openMultipleWindowns)
	}

	async ClickTabbedWindow() {
		await Actions.actionClick(this.clickTabbedWindows)
	}

	async clickSeperateWindow() {
		await Actions.actionClick(this.clickSeperateWindows)
	}

	async clickMultipleWindows() {
		await Actions.actionClick(this.clickMultipleWindowns)
	}

	async windownsHandle(context: BrowserContext) {
		return await Actions.windownsHandle(context)
	}
}
