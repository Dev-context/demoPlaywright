import elements from "@pages/home/elements.json"
import { Actions } from "commands/actions"
import Baseclass from "fixture/baseclass"

export default class Home extends Baseclass {
	readonly email = this.page.locator(elements.email_ipt)
	readonly enter = this.page.locator(elements.enter_btn)

	async fillEmail(email: string) {
		await Actions.actionFill({ locator: this.email, text: email })
	}

	async performEnter() {
		await Actions.actionClick(this.enter)
	}
}
