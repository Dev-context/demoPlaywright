import { test as base } from "@playwright/test";
import Navbar from "@components/navbar/navbar.page";
import Register from "@pages/register/register.page";

type Pages = {
	registerPage: Register;
};

type Components = {
	navBar: Navbar;
};

export const test = base.extend<Pages & Components>({
	registerPage: async ({ page }, use) => {
		await use(new Register(page));
	},

	navBar: async ({ page }, use) => {
		await use(new Navbar(page));
	},
});
