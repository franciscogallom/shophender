import React, { useState } from 'react'

import ItemList from '../ItemList/ItemList'

import'./listItems.scss';

const ListItem = (props) => {

    const [itemListArray, setItemsListArray] = useState([])

    const getItemListArray = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve
                (
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
                        }
                    ]
                )
        }, 500)
    })

    getItemListArray.then((res) => setItemsListArray(res))

    return (
        <section className='container-list-items'>
            {
                itemListArray.map(item => {
                    return (
                        <ItemList 
                            product = {item}
                            key = {item.key}
                        />
                    )
                })
            }
        </section>
    )
}

export default ListItem;