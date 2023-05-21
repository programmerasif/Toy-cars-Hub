import { useEffect } from "react"

const useTitlt = (title )=> {
useEffect(() =>{
    document.title =title
},[title])
}
export default useTitlt