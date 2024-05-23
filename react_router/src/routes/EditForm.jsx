import React from "react";
import { useParams } from "react-router-dom";

export default function EditForm() {

    const { id } = useParams();
    return(
        <div>
            Editando o produto: {id}
        </div>
    )
}