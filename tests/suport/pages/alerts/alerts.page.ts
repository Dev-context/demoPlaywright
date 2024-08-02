import elements from "@pages/alerts/elements.json"
import { expect } from "@playwright/test"
import { Actions } from "commands/actions"
import Baseclass from "fixture/baseclass"

export default class Alerts extends Baseclass {
	readonly alertWithOk = this.page.locator(elements.alert_with_OK)
	readonly alertWithOkCancel = this.page.locator(elements.alert_with_OK_cancel)
	readonly alertWithTextbox = this.page.locator(elements.alert_with_textbox)
	readonly alertBox = this.page.locator(elements.alert_box)
	readonly alertConfirm = this.page.locator(elements.alert_confirm_box)
	readonly alertConfirmText = this.page.locator(elements.alert_confirm_text)
	readonly alertPrompt = this.page.locator(elements.alert_prompt)
	readonly alertPromptText = this.page.locator(elements.alert_prompt_text)

	async openAlertWithOk() {
		await Actions.actionClick(this.alertWithOk)
	}

	async openAlertWithOkCancel() {
		await Actions.actionClick(this.alertWithOkCancel)
	}

	async openAlertWithTextbox() {
		await Actions.actionClick(this.alertWithTextbox)
	}

	async performAlertOk() {
		await Actions.actionClick(this.alertBox)
	}

	async performAlertConfirm() {
		await Actions.actionClick(this.alertConfirm)
	}

	async performAlertPrompt() {
		await Actions.actionClick(this.alertPrompt)
	}

	async alertWindowHandler() {
		this.page.on("dialog", async (dialog) => {
			expect(dialog.message()).toContain("I am an alert box!")
			expect(dialog.type()).toContain("alert")
			await dialog.accept()
		})
		await this.page.getByRole("button").click()
	}

	async alertCancelWindowHandler() {
		this.page.on("dialog", async (dialog) => {
			await dialog.accept()
		})
		await this.page.getByRole("button").click()
	}

	async alertPromptlWindowHandler() {
		this.page.on("dialog", async (dialog) => {
			expect(dialog.type()).toContain("prompt")
			expect(dialog.defaultValue()).toContain("Automation Testing user")
			await dialog.accept("Testando com Playwright")
		})
		await this.page.getByRole("button").click()
	}
}
