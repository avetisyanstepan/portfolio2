import { useRouter } from "next/router"
import { FilterCustomArticle } from "../../src/containers/blog/filterCustomArticle"
import { MainLayout } from "../../src/layout/mainLayout"
import { blogsData } from "../../src/utils/idnex"

const Article1 =  () => {
    return (
        <MainLayout>
            <FilterCustomArticle />
        </MainLayout>
    )
}
export default Article1