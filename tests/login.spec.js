import { test } from "@playwright/test"
import { LoginForm } from "../src/pages/Login";
import 'dotenv/config'

test("Login", async ({ page }) => {
    const username = process.env.LOGIN_NAME
    const password = process.env.LOGIN_PASSWORD
    const login = new LoginForm(page)
    
    await login.gotoLoginPage()
    await login.welcomeTitleCheck()
    await login.formsFill(username, password)
    await login.loginBtnClick()

    await login.urlRedirectAssert()
})
