import { test } from "fixture/baseTest";

test.describe("Teste on Home page", () => {
  test("Login com sucesso", async ({ home }) => {
    await home.fillEmail("teste@test.com");
    await home.performEnter();
  });
});
