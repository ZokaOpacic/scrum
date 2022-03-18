class DeleteBoard {

    get boardName() {
        return cy.get('a[href="/boards/7090"]')
    }
    get configureBoard() {
        return cy.get('a[href="/boards/7088/settings"]')
    }
    get delBtn() {
        return cy.get('.vs-c-btn vs-c-btn--warning vs-c-btn--spaced')
    }

    delete() {
        this.boardName.click()
        this.configureBoard.click()
        this.delBtn.click()
    }
}

export const deleteBoard = new DeleteBoard()