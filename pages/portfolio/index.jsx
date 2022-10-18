import { Portfolio } from "../../src/containers/protfolio"

const { MainLayout } = require("../../src/layout/mainLayout")

const PorfolioPage = () => {
    return (
        <MainLayout>
            <Portfolio />
        </MainLayout>
    )
}

export default PorfolioPage