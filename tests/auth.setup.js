import { test as setup, expect } from "@playwright/test"
import { } from '@playwright/test';

import path from "path"

const authFile = path.join(__dirname, '../playwright/.auth/user.json')

setup("auth", async ({ page }) => {
    await page.goto("/")
})