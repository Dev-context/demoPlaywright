import { Page } from "@playwright/test"

export default class Baseclass{
    constructor(protected page: Page) {
        this.page = page
      }
}