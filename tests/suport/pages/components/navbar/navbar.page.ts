import elements from "@components/navbar/elemets.json";
import Baseclass from "fixture/baseclass";
import { Actions } from "commands/actions";
import navBarOptions from "enums/subOptions";

export default class Navbar extends Baseclass {
	private readonly home = this.page.locator(elements.navbar_li_home);
	private readonly register = this.page.locator(elements.navbar_li_register);
	private readonly webtable = this.page.locator(elements.navbar_li_webtable);
	private readonly switchTo = this.page.locator(elements.navbar_li_opc_switchto);
	private readonly widgets = this.page.locator(elements.navbar_li_opc_widgets);
	private readonly interactions = this.page.locator(elements.navbar_li_opc_interactions);
	private readonly video = this.page.locator(elements.navbar_li_opc_video);
	private readonly wsiwyg = this.page.locator(elements.navbar_li_opc_wysiwyg);
	private readonly more = this.page.locator(elements.navbar_li_opc_more);
	private readonly practiseSite = this.page.locator(elements.navbar_li_opc_practiseSite);

	async openHome() {
		await Actions.actionClick(this.home);
	}

	async openRegister() {
		await Actions.actionClick(this.register);
	}

	async openWebTable() {
		await Actions.actionClick(this.webtable);
		navBarOptions.switchTo;
	}

	async openOptionsSwitchTo(option: string) {
		await this.switchTo.hover();
		const opt = { ...navBarOptions.switchTo };
		switch (option) {
			case opt.Alerts:
				await Actions.actionClick(this.switchTo.getByText("Alerts"));
				break;
			case opt.windowns:
				await Actions.actionClick(this.switchTo.getByText("Windows"));
				break;
			case opt.Frames:
				await Actions.actionClick(this.switchTo.getByText("Frames"));
				break;
		}
	}

	async openOptionsWidgets(option: string) {
		await this.widgets.hover();
		const opt = { ...navBarOptions.widgets };
		switch (option) {
			case opt.Accordion:
				await Actions.actionClick(this.widgets.getByText("Accordion"));
				break;
			case opt.AutoComplete:
				await Actions.actionClick(this.widgets.getByText("AutoComplete"));
				break;
			case opt.Datepicker:
				await Actions.actionClick(this.widgets.getByText("Datepicker"));
				break;
			case opt.Slider:
				await Actions.actionClick(this.widgets.getByText("Slider"));
				break;
		}
	}

	async openOptionsInteractions(option: string) {
		await this.interactions.hover();
		const opt = { ...navBarOptions.interactions };
		opt;
		switch (option) {
			case opt.DragandDrop:
				await Actions.actionClick(this.interactions.getByText("Drag and Drop"));
				break;
			case opt.Selectable:
				await Actions.actionClick(this.interactions.getByText("Selectable"));
				break;
			case opt.Resizable:
				await Actions.actionClick(this.interactions.getByText("Resizable"));
				break;
		}
	}

	async openOptionsVideo(option: string) {
		await this.video.hover();
		const opt = { ...navBarOptions.video };

		switch (option) {
			case opt.Youtube:
				await Actions.actionClick(this.video.getByText("Youtube"));
				break;
			case opt.Vimeo:
				await Actions.actionClick(this.video.getByText("Vimeo"));
				break;
		}
	}

	async openOptionsWsiwyg(option: string) {
		await this.wsiwyg.hover();
		const opt = { ...navBarOptions.wysiwyg };
		switch (option) {
			case opt.TinyMCE:
				await Actions.actionClick(this.wsiwyg.getByText("TinyMCE"));
				break;
			case opt.CKEditor:
				await Actions.actionClick(this.wsiwyg.getByText("CKEditor"));
				break;
			case opt.SummerNote:
				await Actions.actionClick(this.wsiwyg.getByText("SummerNote"));
				break;
			case opt.CodeMirror:
				await Actions.actionClick(this.wsiwyg.getByText("CodeMirror"));
				break;
		}
	}

	async openOptionsMore(option: string) {
		await this.more.hover();
		const opt = { ...navBarOptions.more };
		switch (option) {
			case opt.Charts:
				await Actions.actionClick(this.more.getByText("Charts"));
				break;
			case opt.DynamicData:
				await Actions.actionClick(this.more.getByText("Dynamic Data"));
				break;
			case opt.FileDownload:
				await Actions.actionClick(this.more.getByText("File Download"));
				break;
			case opt.FileUpload:
				await Actions.actionClick(this.more.getByText("File Upload"));
				break;
			case opt.JQueryProgressBar:
				await Actions.actionClick(this.more.getByText("JQuery ProgressBar"));
				break;
			case opt.Loader:
				await Actions.actionClick(this.more.getByText("Loader"));
				break;
			case opt.Modals:
				await Actions.actionClick(this.more.getByText("Modals"));
				break;
			case opt.ProgressBar:
				await Actions.actionClick(this.more.getByText("ProgressBar"));
				break;
		}
	}

	async openPractiseSite() {
		await Actions.actionClick(this.practiseSite);
	}
}
