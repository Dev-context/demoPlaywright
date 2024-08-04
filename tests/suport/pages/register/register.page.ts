import Baseclass from "fixture/baseclass";
import elements from "@pages/register/elements.json";
import { Actions } from "../../comands/actions";
import { register } from "fixture/routes/routes.json";
import type { Register as RegisterType } from "fixture/data/register.model";

export default class Register extends Baseclass {
  readonly firstName = this.page.getByPlaceholder(elements.fullName_ipt);
  readonly lastName = this.page.getByPlaceholder(elements.lastName_ipt);
  readonly address = this.page.locator(elements.address_ipt_lbl);
  readonly emailAddress = this.page.locator(elements.email_ipt);
  readonly phone = this.page.locator(elements.phone_ipt);
  readonly gender = this.page.locator(elements.gender);
  readonly hobbies = this.page.locator(elements.hobbies);
  readonly languages = this.page.locator(elements.languages_slc);
  readonly skills = this.page.locator(elements.skills_slc);
  readonly country = this.page.locator(elements.country_ipt);
  readonly year = this.page.locator(elements.year_date_of_birth);
  readonly month = this.page.locator(elements.month_date_of_birth);
  readonly day = this.page.locator(elements.day_date_of_birth);
  readonly password = this.page.locator(elements.password);
  readonly passworconfirm = this.page.locator(elements.password_confirm);
  readonly submit = this.page.locator(elements.submit);
  readonly refresh = this.page.locator(elements.refresh);

  async goto() {
    await this.page.goto(register, { waitUntil: "domcontentloaded" });
  }

  async fillFirstName(text: string) {
    await Actions.actionFill({ locator: this.firstName, text: text });
  }

  async fillLastName(text: string) {
    await Actions.actionFill({ locator: this.lastName, text: text });
  }

  async fillAddress(text: string) {
    await Actions.actionFill({ locator: this.address, text: text });
  }

  async fillEmail(text: string) {
    await Actions.actionFill({ locator: this.emailAddress, text: text });
  }

  async fillPhone(text: string) {
    await Actions.actionFill({ locator: this.phone, text: text });
    return this.phone;
  }

  async genderOption({ gender }: Pick<RegisterType, "gender">) {
    const getGender = this.gender.locator(`input[value=${gender}]`);
    await Actions.actionCheck(getGender);
    return getGender;
  }

  async hobbiesCheck({ hobbies }: Pick<RegisterType, "hobbies">) {
    const getHobbies = this.hobbies.locator(`input[value=${hobbies}]`);
    await Actions.actionCheck(getHobbies);
    return getHobbies;
  }

  async selectSomeLanguages(languages: string[]) {
    await Actions.setDisplay(this.languages.locator("div").last(), "block");

    await Actions.multiSelect(
      await this.languages.locator("li:has(a)").all(),
      languages
    );

    await Actions.setDisplay(this.languages.locator("div").last(), "none");
    return this.languages.locator(".ui-autocomplete-multiselect-item");
  }

  async seletcSkills(option: string) {
    await Actions.select(this.skills, option);
  }

  async selectCountry(option: string) {
    const presentation = this.page
      .locator("span.select2-selection__arrow")
      .filter({ has: this.page.getByRole("presentation") });
    await Actions.actionClick(presentation);
    await Actions.actionFill({ locator: this.country, text: option });
    await this.page.keyboard.press("Enter");
  }

  async seletcYear(year: string) {
    await Actions.select(this.year, year);
  }

  async selectMonth(month: string) {
    await Actions.select(this.month, month);
  }

  async selectDay(day: string) {
    await Actions.select(this.day, day);
  }

  async fillPassword(text: string) {
    await Actions.actionFill({ locator: this.password, text });
  }

  async fillConfirmPassword(text: string) {
    await Actions.actionFill({ locator: this.passworconfirm, text });
  }

  async performSubmit() {
    await Actions.actionClick(this.submit);
  }

  async performRefresh() {
    await Actions.actionClick(this.refresh);
  }
}
