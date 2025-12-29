import { CategoryPage } from "../CategeoryPage/CategoryPage"
import bgDairy from '../../images/dairy-banner.jpg'
const Dairy =()=>{
    return(
        <div>
             <CategoryPage bgImage={bgDairy} title="Dairy & Eggs" Menu={['Dairy']}/>
        </div>
    )
}

export default Dairy