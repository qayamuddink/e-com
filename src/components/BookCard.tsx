

import type React from "react";
import { Link } from "react-router-dom";

interface BookCardProps {
    id: string;
    title:string;
    image:string;
    price:number
}

const BookCard:React.FC<BookCardProps> = ({id , title , price , image} ) => {
    return (
        <div className="border p-4 rounded">

            <Link to={`/product/${id}`}>
                <img src={image} alt={title} className="w-full h-12 object-cover mb-2"/>
            
                <h2 className="font-bold"> {title} </h2>
                <p> ${price} </p>

            </Link>

        </div>
        
    )
}


export default BookCard