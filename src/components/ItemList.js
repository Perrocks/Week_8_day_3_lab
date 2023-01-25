import Item from "./Item"


const ItemList = ({products}) =>{
    const listOfProducts =  products.map(product => {
        return(
            <Item product={product}/>
        )
    })
    return(
            <div>{listOfProducts}</div>
    )
}

export default ItemList