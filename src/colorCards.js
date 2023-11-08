import { useEffect, useState } from "react"
import colors from "./utils/colors"

function ColorCards({theme = 'light'}){
    const [activeTheme, setActiveTheme] = useState({})

    useEffect(()=>{
        setActiveTheme({})
    }, [theme])

    function updateActiveTheme(newTheme){
        if(Object.keys(activeTheme).length){
            setActiveTheme({})
        } else {
            setActiveTheme(newTheme)
        }
    }


    return (
        <div className="flex gap-5 flex-wrap">
            {
                !!Object.keys(activeTheme).length ?
                    <div className="flex gap-4">
                        <div className="cursor-pointer" style={{display: "block", width: "16rem", height: "16rem"}}
                            onClick={()=>updateActiveTheme(activeTheme)}>
                            <div style={{backgroundColor: activeTheme['color1'], display: "block", width: "16rem", height: "6rem"}}></div>
                            <div style={{backgroundColor: activeTheme['color2'], display: "block", width: "16rem", height: "4rem"}}></div>
                            <div style={{backgroundColor: activeTheme['color3'], display: "block", width: "16rem", height: "3rem"}}></div>
                            <div style={{backgroundColor: activeTheme['color4'], display: "block", width: "16rem", height: "2rem"}}></div>
                        </div>
                        <div className="flex items-start flex-col">
                            <p>{activeTheme['color1']}</p>
                            <p>{activeTheme['color2']}</p>
                            <p>{activeTheme['color3']}</p>
                            <p>{activeTheme['color4']}</p>
                        </div>
                    </div> :
                    colors[theme].map(color => {
                        return (
                            <div onClick={()=>updateActiveTheme(color)} key={`${color['color1']}-${color['color2']}-${color['color3']}-${color['color4']}`}>
                                <div>

                                </div>
                                <div className="cursor-pointer" style={{display: "block", width: "16rem", height: "16rem"}}>
                                    <div style={{backgroundColor: color['color1'], display: "block", width: "16rem", height: "6rem"}}></div>
                                    <div style={{backgroundColor: color['color2'], display: "block", width: "16rem", height: "4rem"}}></div>
                                    <div style={{backgroundColor: color['color3'], display: "block", width: "16rem", height: "3rem"}}></div>
                                    <div style={{backgroundColor: color['color4'], display: "block", width: "16rem", height: "2rem"}}></div>
                                </div>
                            </div>
                        )
                })
            }
        </div>
    )
}

export default ColorCards