import { useEffect, useState } from "react";

const useProduct = () => {
  const [products, setProducts] = useState([]);
  const [isReload, setReload] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://aqueous-taiga-75883.herokuapp.com/product")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, [isReload]);

  return [products, setProducts, isReload, setReload, loading];
};

export default useProduct;
