import { useEffect, useState } from "react"

export const useForm = ( initialForm = {} ) => {

    const [formState, setFormState] = useState( initialForm );
    
    const onInputChange = (event) => {
        setFormState({
            ...formState,
            [ event.target.name ]: event.target.value,
        });
    }

    const onResetForm = (event) => {
        setFormState( initialForm );
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm
    }
}