import { expect, test } from "@playwright/test"
import { baseUrl } from "../constants";

export class LoginForm {
    page;
    #welcomeTitle;
    #usernameInput;
    #passwordInput;
    #loginButton;

    constructor(page){
        this.page = page;
        this.#welcomeTitle = page.locator("h1", {hasText: "Test Login page for Automation Testing Practice"});
        this.#usernameInput = page.getByLabel("Username")
        this.#passwordInput = page.getByLabel("Password")
        this.#loginButton = page.locator("button", {hasText: "Login"})
    }

    async gotoLoginPage(){
        await this.page.goto(`${baseUrl}/login`)
    }

    async welcomeTitleCheck() {
        await expect(this.#welcomeTitle).toBeVisible()
    }

    async formsFill(username, password){
        await this.#usernameInput.scrollIntoViewIfNeeded()
        await this.#usernameInput.fill(username)
        await this.#passwordInput.fill(password)
    }

    async loginBtnClick() {
        await this.#loginButton.click()
    }

    async urlRedirectAssert(){
        await expect(this.page).toHaveURL(`${baseUrl}/secure`, {timeout: 60*1000})
    }
}