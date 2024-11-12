import { useState, useEffect } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import './styles.css'

export default function ImageSlider({ url, limit = 5,page = 1}){

    const [images, setImages] = useState([]);
    const [currentSlider, setCurrentSlider] = useState(0);
    const [errorMsg, setErrorMsg] = useState(null);
    const [loading, setLoading] = useState(false);

    async function fetchImages(getUrl){
        try {
            setLoading(true);
            const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
            const data = await response.json();

            // if(data.length > limit){
            //     setImages(data.slice(0, limit));
            // } else {
            //     setImages(data);
            // }
            if(data){
                setImages(data);
                setLoading(false);
            }

        } catch (error) {
            setErrorMsg(error.messsage);
            setLoading(false);
        }
    }

   

    useEffect(() => {
        if(url !== ''){
        fetchImages(url);   
        }
    },[url]);

    console.log(images);
    

    if(loading){
        return <div>Loading Data...! please wait</div>;
    }
    if(errorMsg !== null){
        return <div>Error occured ! {errorMsg}</div>;
    }

    return <div className="container">
        <BsArrowLeftCircleFill className="arrow arrow-left"/>

        {
            images && images.length ?
            images.map(imageItem =>(
                <img
                key={imageItem.id}
                alt={imageItem.download_url}
                src={imageItem.download_url}
                className="current-image"
                />
            )) : null
        }
        
        <BsArrowRightCircleFill className="arrow arrow-right"/> 
        <span className="circcle-indicators">
            {
                images && images.length ?
                images.map((_, index) => <button 
                key={index}
                className="current-indicator"
                ></button>)  
                : null
            }
        </span>
        

    </div>;

}