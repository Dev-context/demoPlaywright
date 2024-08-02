import { expect, test } from "fixture/baseTest"

test.describe("Teste on Home page", () => {
	test("Login com sucesso", async ({ home, page }) => {
		await home.fillEmail("teste@test.com")
		await home.performEnter()

		expect(page.url()).toContain("Register.html")
	})
})
