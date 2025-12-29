
import { CategoryPage } from './CategeoryPage/CategoryPage'
import bgSeafood from '.././images/seafood-banner.jpg'
 const Seafood = () => {
  return (
    <div>
       <CategoryPage bgImage={bgSeafood} title="Meat & Seafood" Menu={['SeaFood']}/>
    </div>
  )
}

export default Seafood