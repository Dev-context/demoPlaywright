import { test as base } from "@playwright/test";
import Navbar from "@components/navbar/navbar.page";
import Register from "@pages/register/register.page";
import Home from "@pages/home/home.page";
import Alerts from "@pages/alerts/alerts.page";
import Windows from "@pages/windows/windowns.page";
import type { Register as registerType } from "fixture/data/register.model";
import mydata from "fixture/data/register.json";

type Pages = {
  registerPage: Register;
  home: Home;
  alerts: Alerts;
  windows: Windows;
};

type Components = {
  navBar: Navbar;
};

interface dataType {
  registerData: registerType;
}

const dataRegisterSuccess = mydata.success_register as registerType;

export const test = base.extend<Pages & Components & dataType>({
  page: async ({ page }, use) => {
    await page.goto("/", { waitUntil: "domcontentloaded" });
    await use(page);
  },
  registerPage: async ({ page }, use) => {
    await use(new Register(page));
  },

  home: async ({ page }, use) => {
    await use(new Home(page));
  },

  navBar: async ({ page }, use) => {
    await use(new Navbar(page));
  },

  alerts: async ({ page }, use) => {
    await use(new Alerts(page));
  },

  windows: async ({ page }, use) => {
    await use(new Windows(page));
  },

  registerData: dataRegisterSuccess,
});

export { expect } from "@playwright/test";
