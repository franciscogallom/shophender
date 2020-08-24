import React from 'react'

import ItemList from './ItemList/ItemList'

import'./listItems.scss';

const ListItem = (props) => {

    return (
        <section className='container-list-items'>
            <ItemList
                imgProduct={props.imgProduct} 
                nameProduct={props.nameProduct} 
                priceProduct={props.priceProduct}
                genderProduct={props.genderProduct}
                categoryProduct={props.categoryProduct}
            />
            <ItemList
                imgProduct={props.imgProduct} 
                nameProduct={props.nameProduct} 
                priceProduct={props.priceProduct}
                genderProduct={props.genderProduct}
                categoryProduct={props.categoryProduct}
            />
            <ItemList
                imgProduct={props.imgProduct} 
                nameProduct={props.nameProduct} 
                priceProduct={props.priceProduct}
                genderProduct={props.genderProduct}
                categoryProduct={props.categoryProduct}
            />
            <ItemList
                imgProduct={props.imgProduct} 
                nameProduct={props.nameProduct} 
                priceProduct={props.priceProduct}
                genderProduct={props.genderProduct}
                categoryProduct={props.categoryProduct}
            />          
        </section>
    )
}

export default ListItem;