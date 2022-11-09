import { useEffect } from "react"

const useTitle = title => {

    useEffect(() => {
        document.title = `${title} - Aka's Kitchen`;
    }, [title])
}
export default useTitle;