import * as singleBoardSingleListThreeCards from './fixtures/singleBoardSingleListThreeCards.json'
import * as singleBoard from './fixtures/singleBoard.json'
import * as singleBoardSingleListThreeCardsSingleUser from './fixtures/singleBoardSingleListThreeCardsSingleUser.json'


const beforeEachTestSeeds = {
  'cypress/e2e/chai_start.cy.ts': singleBoardSingleListThreeCards,
  'cypress/e2e/chai_end.cy.ts': singleBoardSingleListThreeCards,
  'cypress/e2e/intercept_start.cy.ts': singleBoardSingleListThreeCards,
  'cypress/e2e/intercept_end.cy.ts': singleBoardSingleListThreeCards,
  'cypress/e2e/custom_commands_start.cy.ts': singleBoard,
  'cypress/e2e/custom_commands_end.cy.ts': singleBoard,
  'cypress/e2e/authentication_start.cy.js': singleBoardSingleListThreeCardsSingleUser,
  'cypress/e2e/authentication_end.cy.js': singleBoardSingleListThreeCardsSingleUser,
}

const testPath = Cypress.platform.includes('win') ? Cypress.spec.relative.replaceAll('\\', '/') : Cypress.spec.relative

beforeEach(() => {

  const dbState = beforeEachTestSeeds[`${testPath}`]

  if (dbState) {
    cy.task('testSetupData', dbState, { log: false })
    cy.info('💡 Database was wiped and seeded before each test', dbState)
  }

})