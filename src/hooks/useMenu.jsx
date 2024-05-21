import { useEffect, useState } from "react"

 const useMenu = () =>{
    const [menuItem,setMenuItem] = useState([])
    const [loader,setLoader] = useState(true)
    useEffect(()=>{
        fetch('http://localhost:5000/menu')
        .then(res=>res.json())
        .then(data=>{
            setMenuItem(data)
            setLoader(false)
        })
    },[])

    return [menuItem,loader]
 }

 export default useMenu;