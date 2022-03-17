import { createBoard } from "../pageObjects/createBoard"
import { createOrg } from "../pageObjects/createOrg"
import { loginPage } from "../pageObjects/loginPage"

describe("create board", () => {
    before("login user", () => {
        cy.visit("https://cypress.vivifyscrum-stage.com/login")
        loginPage.login('zokaopacic@gmail.com', 'zoka1412')

    })

    it("create new board", () => {
        createOrg.create('1111')
        createBoard.board('cypress')

    })
})