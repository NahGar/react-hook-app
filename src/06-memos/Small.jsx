import { memo } from "react";

//memo solo redibuja el componente si se modificó alguna property
export const Small = memo( ({ value }) => {

    console.log("Me redibujé");
    
    return (
        <small>{ value }</small>
    )
})
