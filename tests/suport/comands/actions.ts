import type { Locator } from "@playwright/test";

interface ActionsFill {
	locator: Locator;
	text: string;
}

export namespace Actions {
	export async function actionFill({ locator, text }: ActionsFill) {
		await locator.fill(text);
	}

	export async function actionClick(locator: Locator) {
		return await locator.click();
	}
}
