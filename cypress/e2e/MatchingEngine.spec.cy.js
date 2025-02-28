import TopNav from "../pages/TopNav"
import RepertoireManagementModulePage from "../pages/RepertoireManagementModulePage"

const topNav = new TopNav()
const repertoireManagementModulePage = new RepertoireManagementModulePage()

describe('template spec', () => {

  beforeEach(() => {
    cy.viewport(1024, 768)
    cy.visit('https://www.matchingengine.com/')
  })
  
  it('list of supported products is displayed', () => {
    topNav.selectModulesOption('Repertoire Management Module')

    // hover on any other element since the previous mouse over causes the opened menu to hide 
    // the 'Products Supported' tab
    cy.contains('a', 'Contact us!').realHover('mouse')

    repertoireManagementModulePage.clickProductsSupportedTab()
    
    // Asserting the list of supported products under the heading ‘There are several types of
    //Product Supported'
    repertoireManagementModulePage.verifyListOfProductsSupported()
  })
})