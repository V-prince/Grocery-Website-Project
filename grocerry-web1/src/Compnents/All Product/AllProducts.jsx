
import { CategoryPage } from '../CategeoryPage/CategoryPage'
import bgAll from '../../images/all-banner.jpg'

 const AllProducts = () => {
  return (
    <CategoryPage bgImage={bgAll} title="All Products"  Menu={['All']}/>
  )
}

export default AllProducts