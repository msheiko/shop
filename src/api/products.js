import axios from "axios";
const url = 'http://194.87.94.216/'

export default {
    getProducts: ()=> axios.get(url+'api/products')
}