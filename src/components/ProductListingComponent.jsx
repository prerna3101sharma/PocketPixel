import React, { useEffect, useState } from 'react'
import ProductCardComponent from './ProductCardComponent'
import { GridLoader } from "react-spinners";
import { data } from '../utils/data';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const ProductListingComponent = (props) => {
    const [productData, setProductData] = useState([]);
    const [loading, setLoading] = useState(true);

    const getData = async () => {
        try {

            setProductData(data);
        } catch (e) {
            console.log("Error :", e);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    // Extract products from response
    const allProducts = productData?.data?.products || [];

    // Filter only when searchText is present
    const filteredProducts = props.searchText
        ? allProducts.filter(product =>
            product?.product_title
                ?.toLowerCase()
                .includes(props.searchText.toLowerCase())
        )
        : allProducts;

    if (loading)
        return (
            <div className="flex justify-center items-center h-screen w-screen mt-[-100px]">
                <GridLoader color="#46de4c" />
            </div>
        );

    if (!allProducts.length)
        return <div className="text-white text-center mt-10">
            <div className='h-[480px] mx-auto'>
                <DotLottieReact
                    src="/empty.lottie"
                    loop
                    autoplay
                />
            </div>
            No data found.
        </div>;

    return (
        <div className="p-8 w-full">
            {props.searchText.length === 0 ? <h3 className="text-white text-2xl mb-4">
                All Products
            </h3> : <h3 className="text-white text-xl mb-4">
                Showing results for "{props.searchText}"
            </h3>}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
                {filteredProducts?.length > 0 ? filteredProducts.map((product, index) => (
                    <ProductCardComponent
                        key={index}
                        id={product.asin}
                        image={product.product_photo}
                        title={product.product_title}
                        price={product.product_price}
                        url={product.product_url}
                        rating={product.product_star_rating}
                        delivery={product.delivery}
                    />
                )) :
                    <div className='text-2xl flex flex-col col-span-1 md:col-span-3 lg:col-span-4 text-white items-center w-full justify-center'>
                        <div className='h-[480px] mx-auto'>
                            <DotLottieReact
                                src="/empty.lottie"
                                loop
                                autoplay
                            />
                        </div>

                        No Result Found
                    </div>}
            </div>
        </div>
    );
};

export default ProductListingComponent;
