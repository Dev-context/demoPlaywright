import { Page } from "@playwright/test";
import elements from "./elemets.json";
import Baseclass from "../../suport/baseclass";

export default class Navbar extends Baseclass {
    private readonly home = this.page.locator(elements.navbar_li_home);
    private readonly register = this.page.locator(elements.navbar_li_register);
    private readonly webtable = this.page.locator(elements.navbar_li_webtable);
    private readonly switchTo = this.page.locator(
        elements.navbar_li_opc_switchto
    );

    constructor(page: Page) {
        super(page);
    }

    async openHome() {
        await this.home.click();
    }

    async openRegister() {
        await this.register.click();
    }

    async openWebTable() {
        await this.webtable.click();
    }

    async openSwitchTo(option: string) {
        await this.switchTo.hover();

        // switch(option){
        //     case "Alerts":await this.page.locator().hover()
        //     break;
        //     case "Windows":await this.page.locator().click()
        //     break;
        //     case "Frames":await this.page.locator().click()
        //     break;
        //   }
        // }
    }
}
