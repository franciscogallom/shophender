import React from 'react'

import ItemList from './ItemList/ItemList'

import'./listItems.scss';

const ListItem = (props) => {

    const itemListArray = 
        [
            {
                imgProduct: props.imgProduct, 
                imgProductH: props.imgProductH, 
                nameProduct: props.nameProduct,
                priceProduct: props.priceProduct,
                genderProduct: props.genderProduct,
                categoryProduct: props.categoryProduct,
                key: 100
            },
            {
                imgProduct: props.imgProduct, 
                imgProductH: props.imgProductH, 
                nameProduct: props.nameProduct,
                priceProduct: props.priceProduct,
                genderProduct: props.genderProduct,
                categoryProduct: props.categoryProduct,
                key: 200
            },
            {
                imgProduct: props.imgProduct, 
                imgProductH: props.imgProductH, 
                nameProduct: props.nameProduct,
                priceProduct: props.priceProduct,
                genderProduct: props.genderProduct,
                categoryProduct: props.categoryProduct,
                key: 300
            },
            {
                imgProduct: props.imgProduct, 
                imgProductH: props.imgProductH, 
                nameProduct: props.nameProduct,
                priceProduct: props.priceProduct,
                genderProduct: props.genderProduct,
                categoryProduct: props.categoryProduct,
                key: 400
            },
        ]

    return (
        <section className='container-list-items'>
            {
                itemListArray.map(item => {
                    return (
                        <ItemList 
                            imgProduct= {item.imgProduct} 
                            imgProductH= {item.imgProductH} 
                            nameProduct= {item.nameProduct}
                            priceProduct= {item.priceProduct}
                            genderProduct= {item.genderProduct}
                            categoryProduct= {item.categoryProduct}
                            key= {item.key}
                        />
                    )
                })
            }
        </section>
    )
}

export default ListItem;