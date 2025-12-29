import Banner from '../Banner/Banner'
import ProductList from '../ProductList/ProductList'
import Cards from '../Cards/Card'


export const CategoryPage = ({title,bgImage,Menu=[]}) => {
     let FilterdItems = Menu.includes('All') ? ProductList : ProductList.filter(item =>Menu.includes(item.category))
    let renderProducts = FilterdItems.map(product => {
        return (
            <Cards key={product.id} product={product}/>
        )
    })
    return (
        <div>
            <Banner title={title} bgImage={bgImage}/>
            <div className='grid grid-col-1 md:grid-cols-4 gap-9 py-20 max-w-[1400px] mx-auto px-10'>
                {renderProducts}
            </div>
        </div>
    )
}
