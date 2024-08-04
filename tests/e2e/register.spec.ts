import { expect, test } from "fixture/baseTest"

test.describe("Testes na Pagina de Registros", () => {
	test("Realizo o  preenchimento do formulario com sucesso", async ({ registerPage, registerData }) => {
		await registerPage.goto()
		await registerPage.fillFirstName(registerData.first_name)
		await expect(registerPage.firstName).toBeVisible()
		await registerPage.fillLastName(registerData.last_name)
		await expect(registerPage.lastName).toBeVisible()
		await registerPage.fillAddress(registerData.address)
		await expect(registerPage.address).toBeVisible()
		await registerPage.fillEmail(registerData.email)
		await registerPage.fillPhone(registerData.phone)
		const gender = await registerPage.genderOption({
			gender: registerData.gender,
		})
		await expect(gender).toBeChecked()
		const hobbies = await registerPage.hobbiesCheck({
			hobbies: registerData.hobbies,
		})
		await expect(hobbies).toBeChecked()
		const languages = await registerPage.selectSomeLanguages(registerData.languages)
		expect(languages).toHaveCount(1)
		await registerPage.seletcSkills(registerData.skills)
		await registerPage.selectCountry(registerData.country)
		const birth = registerData.birth.split("/")
		await registerPage.seletcYear(birth[0])
		await registerPage.selectMonth(birth[1])
		await registerPage.selectDay(birth[2])
		await registerPage.fillPassword(registerData.password)
		await registerPage.fillConfirmPassword(registerData.password)
		await registerPage.performSubmit()
	})

	test("check if the fields are cleaned after click on reflesh", async ({ registerPage }) => {
		await registerPage.goto()
		await registerPage.performRefresh()
		await expect(registerPage.firstName).toBeEmpty()
		await expect(registerPage.lastName).toBeEmpty()
		await expect(registerPage.address).toBeEmpty()
		await expect(registerPage.emailAddress).toBeEmpty()
	})
})
