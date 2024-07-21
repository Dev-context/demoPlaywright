import Baseclass from "fixture/baseclass";
import elemetents from "@pages/register/elements.json";
import { Actions } from "../../comands/actions";

export default class Register extends Baseclass {
	private readonly firstName = this.page.getByPlaceholder(elemetents.register_fullName_ipt);
	private readonly lastName = this.page.getByPlaceholder(elemetents.register_lastName_ipt);
	private readonly address = this.page
		.locator(".form-group")
		.filter({ has: this.page.getByText("Address", { exact: true }) })
		.locator("textarea");

	async fillFirstName(name: string) {
		console.log(await this.address.innerText());
		await Actions.actionFill({ locator: this.firstName, text: name });
	}
	async fillLastName(name: string) {
		await Actions.actionFill({ locator: this.lastName, text: name });
	}

	async fillAdress(name: string) {
		await Actions.actionFill({ locator: this.address, text: name });
	}
}
