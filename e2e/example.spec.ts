import { test, expect } from "@playwright/test";
import Navbar from "./pages/components/navbar";

test("has title", async ({ page }) => {
    await page.goto("/Register.html")
	const navBar=new Navbar(page)

    await navBar.openSwitchTo("")
    await page.pause()
});


