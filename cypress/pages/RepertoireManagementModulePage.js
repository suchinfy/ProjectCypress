export default class RepertoireManagementModulePage{
    clickProductsSupportedTab() {
      cy.contains('span', 'Products Supported').scrollIntoView().should('be.visible')
      cy.contains('span', 'Products Supported').click() 
      }

      verifyListOfProductsSupported() {
        cy.get('h3:contains("There are several types of Product Supported:") + div span:contains("Cue Sheet / AV Work")').should('be.visible')
        cy.get('h3:contains("There are several types of Product Supported:") + div span:contains("Recording")').should('be.visible')
        cy.get('h3:contains("There are several types of Product Supported:") + div span:contains("Bundle")').should('be.visible')
        cy.get('h3:contains("There are several types of Product Supported:") + div span:contains("Advertisement")').should('be.visible')
      }
    }