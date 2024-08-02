import { test as base } from "@playwright/test"
import Navbar from "@components/navbar/navbar.page"
import Register from "@pages/register/register.page"
import Home from "@pages/home/home.page"

type Pages = {
	registerPage: Register
	home: Home
}

type Components = {
	navBar: Navbar
}

export const test = base.extend<Pages & Components>({
	page: async ({ page }, use) => {
		await page.goto("/", { waitUntil: "domcontentloaded" })
		await use(page)
	},
	registerPage: async ({ page }, use) => {
		await use(new Register(page))
	},

	home: async ({ page }, use) => {
		await use(new Home(page))
	},

	navBar: async ({ page }, use) => {
		await use(new Navbar(page))
	},
})

export { expect } from "@playwright/test"
