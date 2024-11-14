import React, { useContext, useState } from 'react';
import './ProductDisplay.css';
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from '../Assets/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
    const { product } = props;
    const { addToCart } = useContext(ShopContext);
    
    // State to track the selected size
    const [selectedSize, setSelectedSize] = useState(null);

    // Function to handle size selection
    const handleSizeClick = (size) => {
        setSelectedSize(size);
    };

    return (
        <div className='productdisplay'>
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="productdisplay-img">
                    <img className="productdisplay-main-img" src={product.image} alt='' />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-stars">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(122)</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">Rs {product.old_price}</div>
                    <div className="productdisplay-right-price-new">Rs {product.new_price}</div>
                </div>
                <div className="productdisplay-right-description">
                    A lightweight, usually knitted, pullover shirt, close-fitting, with a round neckline and short sleeves, worn as an undershirt or outershirt.
                </div>
                <div className="productdisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="productdisplay-right-sizes">
                        {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                            <div 
                                key={size} 
                                onClick={() => handleSizeClick(size)}
                                className={`size ${selectedSize === size ? 'selected-size' : ''}`}
                                style={{
                                    backgroundColor: selectedSize === size ? 'red' : '', // Red background for selected size
                                    color: selectedSize === size ? 'white' : '', // White text for selected size
                                    cursor: 'pointer',
                                    padding: '14px 20px',
                                    borderRadius: '10px'
                                }}
                            >
                                {size}
                            </div>
                        ))}
                    </div>
                </div>
                <button 
                    onClick={() => { 
                        if (selectedSize) {
                            addToCart(product.id, selectedSize);
                        } else {
                            alert('Please select a size before adding to cart');
                        }
                    }}
                >
                    ADD TO CART
                </button>
                <p className="productdisplay-right-category"><span>Category:</span> Women, T-Shirt, Crop Top</p>
                <p className="productdisplay-right-category"><span>Tags:</span> Modern, Latest</p>
            </div>
        </div>
    );
};

export default ProductDisplay;
