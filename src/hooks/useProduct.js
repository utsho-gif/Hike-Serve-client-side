import { useEffect, useState } from "react"

const useProduct = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://aqueous-taiga-75883.herokuapp.com/product')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    return [products, setProducts];
}

export default useProduct;