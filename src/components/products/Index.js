import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchAll, productSelect} from "../../store/productSlice";
import Card from "./Card";
import '../../styles/products/card.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../../styles/products/rating.css';
export default function Index() {
    const products = useSelector(productSelect)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchAll())
    },[])
    return <main className='products-container'>
        {products.map(p => <Card key={p.id} product={p} />)}
    </main>
}