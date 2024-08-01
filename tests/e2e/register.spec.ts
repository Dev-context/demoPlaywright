import { expect, test } from "fixture/baseTest";
import registerData from "fixture/data/register.json";
import type { Register } from "fixture/data/register.model";

test.describe("Testes na Pagina de Registros", () => {
  test("Realizo o  preenchimento do formulario com sucesso", async ({
    registerPage,
    page,
  }) => {
    const data = registerData.success_register as Register;
    await registerPage.goto();
    await registerPage.fillFirstName(data.first_name);
    await expect(registerPage.FirstName).toBeVisible();
    await registerPage.fillLastName(data.last_name);
    await expect(registerPage.LastName).toBeVisible();
    await registerPage.fillAddress(data.address);
    await expect(registerPage.Address).toBeVisible();
    await registerPage.fillEmail(data.email);
    await registerPage.fillPhone(data.phone);
    await registerPage.genderOption({ gender: data.gender });
    await expect(registerPage.Gender).toBeChecked();
    await registerPage.hobbiesCheck({ hobbies: data.hobbies });
    await expect(registerPage.Hobbies).toBeChecked();
    const languages = await registerPage.selectSomeLanguages([
      "Arabic",
      "Czech",
      "French",
    ]);

    expect(languages).toHaveCount(3);
    await registerPage.seletcSkills("Adobe InDesign");
    await registerPage.selectCountry("Netherlands");
    await registerPage.seletcYear("2015");
    await registerPage.selectMonth("April");
    await registerPage.selectDay("1");
    await registerPage.fillPassword("lztoLYcGL3");
    await registerPage.fillConfirmPassword("lztoLYcGL3");
    await registerPage.performSubmit();
    await page.pause();
  });
});
