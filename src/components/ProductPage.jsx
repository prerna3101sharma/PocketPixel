import { useEffect, useState } from "react"
import Footer from "./Footer"
import Header from "./Header"
import { data } from "../utils/data"
import { useParams } from "react-router"
import { IoIosStar } from "react-icons/io";
import { CiDeliveryTruck } from "react-icons/ci";
import { AiFillAmazonSquare } from "react-icons/ai";
// import { DotLottiePlayer, Controls } from '@dotlottie/react-player';

import { DotLottieReact } from '@lottiefiles/dotlottie-react';

function ProductPage() {
    const [product, setProduct] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        const foundProduct = data.data.products.find((item) => item.asin === id)
        setProduct(foundProduct)
    }, [id])

    return (
        <div>
            <Header />
            <div className="bg-[#333333] min-h-[90vh] text-white md:grid md:grid-cols-2 flex   flex-col">
                {product ? (
                    <>
                        <div className="object-contain py-10 w-full px-5 pb-0">
                            <img src={product.product_photo} alt={product.product_title} className="w-full md:w-[70%] rounded md:h-[70%] h-[300px] my-2 md:my-0 mx-auto object-contain" />
                            <button className="bg-orange-600 text-white text-30 mt-10 w-full md:w-[70%] rounded-md p-3 md:mx-[15%] lg:mx-[15%]" onClick={() => {
                                window.open(`${product.product_url}`, "_blank")
                            }}>Buy Now</button>

                        </div>
                        <div className="px-4 py-10">
                            <h2 className="text-xl md:text-2xl font-bold mb-4">{product.product_title}</h2>
                            <div className="flex">

                                {product.product_star_rating && <i className='text-white bg-green-600 w-15 text-center rounded-md my-4 flex justify-items-center align-middle p-1.5'>{Number(product?.product_star_rating)?.toFixed(1)} <div className='p-1 flex'><IoIosStar /></div></i>}

                                {product?.product_num_ratings === 0 ? <>No Ratings Yet!</> : <i className='text-white w-15 text-center my-3 flex justify-items-center align-middle p-1.5'>{product?.product_num_ratings}&nbsp;Ratings</i>}
                            </div>
                            {product.is_amazon_choice && <div className="text-10 text-white bg-orange-600 w-45 text-center rounded-md my-4 flex justify-items-center align-middle p-1.5"><AiFillAmazonSquare size={30} /> Amazon's Choice</div>}

                            {product.climate_pledge_friendly && <div className="text-10 text-white bg-green-600 w-35 rounded-md my-4 flex justify-items-center align-middle p-2 place-content-center"> Climate Friendly</div>}

                            <p className="italic">
                                {product.sales_volume}
                            </p>
                            <p className="text-2xl text-green-400 my-3 font-semibold">{product.product_price}</p>

                                <span className='text-white p-1 flex'>

                                    <CiDeliveryTruck size={20} className='text-white' />
                                    &nbsp;
                                    {product.delivery?.split("Or")[0]?.toUpperCase()}
                                </span>
                                <span className='text-white text-10 rounded-sm my-3 p-1.5 flex'>
                                    {product.delivery.split("Or")[1] ? <><CiDeliveryTruck size={20} /><>&nbsp;{product.delivery?.split("Or")[1]?.toUpperCase()}</></> : <></>}
                                </span>

                                <span className='text-white text-10 rounded-sm my-3 p-1.5 flex'>
                                {product.delivery?.split("Only ")[1]?<>•&nbsp;ONLY&nbsp;{product.delivery?.split("Only ")[1]?.toUpperCase()}</>:<></>}
                                </span>
      


                        </div>
                    </>
                ) : (
                    <div className="col-span-2 text-center py-10 text-xl">Loading or product not found...</div>
                )}
            </div>
            <Footer />
        </div>
    )
}

export default ProductPage
