import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchAll, productSelect} from "./store/productSlice";

export default function Products() {
    const products = useSelector(productSelect)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchAll())
    },[])
    return <ul>
        {products.map(p => <li key={p.id}>{p.title} <img src={p.image} alt=""/></li>)}
    </ul>
}