import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Advoza`;
    }, [title])
};

export default useTitle;