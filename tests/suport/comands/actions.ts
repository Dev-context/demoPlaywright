import type { BrowserContext, Locator } from "@playwright/test";

interface ActionsFill {
  locator: Locator;
  text: string;
}

export namespace Actions {
  export async function actionFill({ locator, text }: ActionsFill) {
    await locator.fill(text);
    return locator;
  }

  export async function actionClick(locator: Locator) {
    await locator.click();
    return locator;
  }

  export async function actionCheck(locator: Locator) {
    await locator.check();
    return locator;
  }

  export async function multiSelect(locator: Array<Locator>, option: string[]) {
    await Promise.all(
      locator.map(async (e) => {
        if (option.includes(await e.innerText())) {
          await e.hover();
          await e.click();
        }
      })
    );
  }

  export async function setDisplay(locator: Locator, display: string) {
    await locator.evaluate(
      async (el, display) => (el.style.display = display),
      display
    );
    return locator;
  }

  export async function select(locator: Locator, option: string) {
    await locator.selectOption(option);
  }

  export async function windownsHandle(context: BrowserContext) {
    const [newWindow] = await Promise.all([context.waitForEvent("page")]);
    return newWindow;
  }
}
