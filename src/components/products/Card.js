import Rating from "./rating";

export default function Card({product}){
    return (
        <div className="card product-card">
            <div className="image-wrap">
                <img src={product.image} alt=""/>
            </div>
            <div className="info-wrap">
                <p className='title'> {product.title} {product.screen_size}" RAM {product.ram} {product.hsard}GB</p>
                <Rating value={product.rating} />
            </div>
            <div className="bottom-wrap">
                <span className='price'>$ {product.price}</span>
                <div className="buttons-container">
                    <i className="bi bi-cart"></i>
                    <i className="bi bi-heart"></i>
                </div>
            </div>
        </div>
    )
}