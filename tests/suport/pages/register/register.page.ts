import Baseclass from "fixture/baseclass";
import elements from "@pages/register/elements.json";
import { Actions } from "../../comands/actions";
import type { Locator } from "@playwright/test";
import { register } from "@pages/routes/routes.json";
import type { Register as RegisterType } from "fixture/data/register.model";

export default class Register extends Baseclass {
  private firstName = this.page.getByPlaceholder(elements.fullName_ipt);
  private lastName = this.page.getByPlaceholder(elements.lastName_ipt);
  private address = this.page.locator(elements.address_ipt_lbl);
  private emailAddress = this.page.locator(elements.email_ipt);
  private phone = this.page.locator(elements.phone_ipt);
  private gender = this.page.locator(elements.gender);
  private hobbies = this.page.locator(elements.hobbies);
  private languages = this.page.locator(elements.languages_slc);
  private skills = this.page.locator(elements.skills_slc);
  private country = this.page.locator(elements.country_ipt);
  private year = this.page.locator(elements.year_date_of_birth);
  private month = this.page.locator(elements.month_date_of_birth);
  private day = this.page.locator(elements.day_date_of_birth);
  private password = this.page.locator(elements.password);
  private passworconfirm = this.page.locator(elements.password_confirm);
  private submit = this.page.locator(elements.submit);
  private refresh = this.page.locator(elements.refresh);

  public get FirstName(): Locator {
    return this.firstName;
  }

  public get LastName(): Locator {
    return this.lastName;
  }

  public get email(): Locator {
    return this.emailAddress;
  }

  public get Address(): Locator {
    return this.address;
  }

  public get Phone(): Locator {
    return this.phone;
  }

  public get Gender(): Locator {
    return this.gender;
  }

  public get Hobbies(): Locator {
    return this.hobbies;
  }

  private set Gender(locator: Locator) {
    this.gender = locator;
  }

  private set Hobbies(locator: Locator) {
    this.hobbies = locator;
  }

  async goto() {
    await this.page.goto(register, { waitUntil: "domcontentloaded" });
  }

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  async fillFirstName(text: any) {
    console.log(await this.address.innerText());
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
  }

  async genderOption({ gender }: Pick<RegisterType, "gender">) {
    const locator = this.gender.locator(`input[value=${gender}]`);
    this.Gender = locator;
    await Actions.actionCheck(locator);
  }

  async hobbiesCheck({ hobbies }: Pick<RegisterType, "hobbies">) {
    const locator = this.hobbies.locator(`input[value=${hobbies}]`);
    this.Hobbies = locator;
    await Actions.actionCheck(locator);
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
