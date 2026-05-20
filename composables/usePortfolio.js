import { PortfolioController } from '~/controllers/portfolioController'

let controllerInstance

export function usePortfolio() {
    if (!controllerInstance) {
        controllerInstance = new PortfolioController()
    }

    return controllerInstance
}
