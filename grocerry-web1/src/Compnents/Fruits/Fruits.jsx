import { CategoryPage } from "../CategeoryPage/CategoryPage"
import BgFruits from '../../images/fruits-banner.jpg'
const Fruits = () =>{
    return(
        <div>
            <CategoryPage title="Fruits & Veggies" bgImage={BgFruits} Menu={['Fruits','Vegetables']}/>
        </div>
    )
}
export default Fruits