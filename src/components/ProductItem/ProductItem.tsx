import React from 'react'
import { IProduct } from '../../models/product/product';
import Button from '../Button/Button';
import './ProductItem.css'

interface ProductItemProps {
    product: IProduct;
    className: string;
    onAdd: (product: IProduct) => void;
}

const ProductItem = ({product, className, onAdd}: ProductItemProps) => {
    const onAddHandler = () => {
        onAdd(product);
    }

    return (
        <div className={'product ' + className}>
            <div className={'img'}/>
            <div className={'title'}>{product.title}</div>
            <div className={'description'}>{product.description}</div>
            <div className={'price'}>
                <span>Стоимость: <b>{product.price}</b></span>
            </div>
            <Button className={'add-btn'} onClick={onAddHandler}>
                Добавить в корзину
            </Button>
        </div>
    );
}

export default ProductItem
