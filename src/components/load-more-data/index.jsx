import { useEffect,useState } from "react";
import { PiLeaf } from "react-icons/pi";

export default function LoadMoreData(){
    
    const [loading, setLoding] = useState(false);
    const [products, setProducts] = useState([]);
    const [pages, setPages] = useState([]);
    const [count, setCount] = useState(0);    
    
    async function fetchProducts(){
        try {
            setLoding(true);
            const response = await fetch(`https://dummyjson.com/products/?limit=10&skip=${
                count ===  0 ? 0 : count*20  
            } `);
    
            const result = await response.json();

            if(result && result.products && result.products.length){
                setProducts(result.products);
                setLoding(false);
            }

            console.log(result);

        } catch (error) {
            console.log(error);
            setLoding(false);

        }
        
        
    }
    
    useEffect(()=>{
        fetchProducts();
    }, []);

    if(loading){
        return <div>Loading Data please wait...</div>
    }

    return <div className="container">
        <div>
            {
                
            }
        </div>
    </div>
}