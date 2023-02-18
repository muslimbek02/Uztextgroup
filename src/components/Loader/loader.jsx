import {FetchService} from "../../Services/FetchService";
import { useEffect, useState } from "react";
import Loader1 from '../loader1/loader1'
export default function Loader({ isBackground, setResultCallback, actionCallback }) {
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setIsLoading(true)
        actionCallback
            .then(res => setResultCallback([...res.data]))
            .catch(console.log)
            .finally(() => setIsLoading(false));
    }, []);

    return <>
        {isLoading && !isBackground ? <Loader1 /> : null}
    </>
}