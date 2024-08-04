import { test } from "fixture/baseTest"

const beforeEachHooks = test.beforeEach(async ({ home }) => {
	await home.signUp("test@test.com")
})

export default beforeEachHooks
