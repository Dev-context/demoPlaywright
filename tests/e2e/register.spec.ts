import { test } from "fixture/baseTest";

test("Realizo o  preenchimento do formulario", async ({ page, registerPage }) => {
	await page.goto("Register.html");
	await registerPage.fillFirstName("Maria");
	await registerPage.fillLastName("Silva");
	await registerPage.fillAdress("Rua xyz teste fneifnei efniefnienfefni");
});
