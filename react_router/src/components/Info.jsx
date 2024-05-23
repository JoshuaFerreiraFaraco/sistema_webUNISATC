import React from "react";
import { useParams } from "react-router-dom";

export default function Info() {

    const { id } = useParams();
    return(
        <div>
            Informações sobre o produto: {id}
        </div>
    )
}