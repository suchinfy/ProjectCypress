export default class TopNav{
        getModulesDropdown() {
        cy.contains('a', 'Modules').realHover('mouse')
      }

      selectModulesOption(option) {
        this.getModulesDropdown()
        cy.contains('a', `${option}`).click()
      }
    }