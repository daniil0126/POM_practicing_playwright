import { expect } from "playwright/test";
import { baseUrl } from "../constants";

export class HomePage {
    #page;
    #homeText;

    constructor(page){
        this.#page = page;
    }

    async gotohomePage(){
        await this.#page.goto(baseUrl)
    }

    async homePageTextCheck() {
        const homePageText = await this.#page.getByText("Automation Testing Practice WebSite for QA and Developers")
        await expect(homePageText).toBeVisible()
    }
}