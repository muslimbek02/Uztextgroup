import FetchService from "../../Services/FetchService";
import { useEffect, useState } from "react";
export default function Loader({ isBackground, setResultCallback, actionCallback }) {
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setIsLoading(true)
        actionCallback
            .then(res => setResultCallback(res.data))
            .catch(console.log)
            .finally(() => setIsLoading(false));
    }, []);

    return <>
        dfgdfg
        {isLoading && !isBackground ? <p>Qora ekran bo'lib bloklanadi</p> : <p>Blokdan ochiladi</p>}
    </>
}