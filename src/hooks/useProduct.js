import { useEffect, useState } from "react"

const useProduct = () => {
    const [products, setProducts] = useState([]);
    const [isReload, setReload] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/product')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[isReload])

    return [products, setProducts, isReload, setReload];
}

export default useProduct;