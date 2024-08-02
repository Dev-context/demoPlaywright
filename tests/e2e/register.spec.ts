import { expect, test } from "fixture/baseTest";
import registerData from "fixture/data/register.json";
import type { Register } from "fixture/data/register.model";

test.describe("Testes na Pagina de Registros", () => {
  test("Realizo o  preenchimento do formulario com sucesso", async ({
    registerPage,
  }) => {
    const data = registerData.success_register as Register;
    await registerPage.goto();
    await registerPage.fillFirstName(data.first_name);
    await expect(registerPage.firstName).toBeVisible();
    await registerPage.fillLastName(data.last_name);
    await expect(registerPage.lastName).toBeVisible();
    await registerPage.fillAddress(data.address);
    await expect(registerPage.address).toBeVisible();
    await registerPage.fillEmail(data.email);
    await registerPage.fillPhone(data.phone);
    const gender = await registerPage.genderOption({ gender: data.gender });
    await expect(gender).toBeChecked();
    const hobbies = await registerPage.hobbiesCheck({ hobbies: data.hobbies });
    await expect(hobbies).toBeChecked();
    const languages = await registerPage.selectSomeLanguages(data.languages);
    expect(languages).toHaveCount(1);
    await registerPage.seletcSkills(data.skills);
    await registerPage.selectCountry(data.country);
    const birth = data.birth.split("/");
    await registerPage.seletcYear(birth[0]);
    await registerPage.selectMonth(birth[1]);
    await registerPage.selectDay(birth[2]);
    await registerPage.fillPassword(data.password);
    await registerPage.fillConfirmPassword(data.password);
    await registerPage.performSubmit();
  });

  test("check if the fields are cleaned after click on reflesh", async ({
    registerPage,
  }) => {
    await registerPage.goto();
    await registerPage.performRefresh();
    await expect(registerPage.firstName).toBeEmpty();
    await expect(registerPage.lastName).toBeEmpty();
    await expect(registerPage.address).toBeEmpty();
    await expect(registerPage.emailAddress).toBeEmpty();
  });
});
