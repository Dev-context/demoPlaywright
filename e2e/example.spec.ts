import { test, expect } from "@playwright/test";
import Navbar from "./pages/components/navbar/navbar";
import { SWITCHTO } from "./pages/components/navbar/subOptions";

test("has title", async ({ page }) => {
    await page.goto("/Register.html")
	const navBar=new Navbar(page)

    await navBar.openOptionsSwitchTo(SWITCHTO.Alerts)
    await page.pause()
});


