import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifts";

export const useFetchGifs = ( category ) => {

    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState( true );

    const getImages = async () => {
        const data= await getGifs(category);
        setImages(data);
        setIsLoading(false);
    }
    
    useEffect(() => {
        getImages()

    }, [])

    return{
            images,
            isLoading
            }
}
