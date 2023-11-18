import colors from "./utils/colors"
import { useState } from "react"
import { hexToRgb } from "./utils/compareColors"

function ColorCards({activeThemeColors, updateActiveTheme, theme = 'light'}){
    const [customColors, setCustomColors] = useState({color1: '', color2: '', color3: '', color4: ''})

    function updateCustomColor(e, x){
        const val = hexToRgb(e.target.value)
        setCustomColors((color) => ({...color, [x]: e.target.value}))
    }

    function addCustomColor(){
        const color1 = hexToRgb(customColors.color1)
        const color2 = hexToRgb(customColors.color1)
        const color3 = hexToRgb(customColors.color2)
        const color4 = hexToRgb(customColors.color3)

        colors['custom'].push({
            color1: `rgb(${color1.red}, ${color1.green}, ${color1.blue})`,
            color2: `rgb(${color2.red}, ${color2.green}, ${color2.blue})`,
            color3: `rgb(${color3.red}, ${color3.green}, ${color3.blue})`,
            color4: `rgb(${color4.red}, ${color4.green}, ${color4.blue})`
        })
    }

    return (
        <div className="flex gap-5 flex-wrap">
            {
                !!activeThemeColors && !!Object.keys(activeThemeColors).length ?
                    <div className="flex gap-3">
                        <div className="cursor-pointer" style={{display: "block", width: "15.2rem", height: "15.2rem"}}
                            onClick={()=>updateActiveTheme(null)}>
                            <div style={{backgroundColor: activeThemeColors['color1'], display: "block", width: "15.2rem", height: "5rem"}}></div>
                            <div style={{backgroundColor: activeThemeColors['color2'], display: "block", width: "15.2rem", height: "3.5rem"}}></div>
                            <div style={{backgroundColor: activeThemeColors['color3'], display: "block", width: "15.2rem", height: "2.5rem"}}></div>
                            <div style={{backgroundColor: activeThemeColors['color4'], display: "block", width: "15.2rem", height: "1.50rem"}}></div>
                        </div>
                        <div className="flex items-start flex-col">
                            <p>{activeThemeColors['color1']}</p>
                            <p>{activeThemeColors['color2']}</p>
                            <p>{activeThemeColors['color3']}</p>
                            <p>{activeThemeColors['color4']}</p>
                        </div>
                    </div> :

                    theme === 'new' ?
                            <div className="flex gap-10">
                                <div className="cursor-pointer" style={{display: "block", width: "15.2rem", height: "15.2rem"}}>
                                    <div style={{backgroundColor: customColors['color1'], display: "block", width: "15.2rem", height: "6rem"}}></div>
                                    <div style={{backgroundColor: customColors['color2'], display: "block", width: "15.2rem", height: "4rem"}}></div>
                                    <div style={{backgroundColor: customColors['color3'], display: "block", width: "15.2rem", height: "3rem"}}></div>
                                    <div style={{backgroundColor: customColors['color4'], display: "block", width: "15.2rem", height: "2rem"}}></div>
                                </div>
                                <div>
                                    <p>Pick custom theme</p>
                                    <div>
                                        <input  onChange={(e)=>updateCustomColor(e, 'color1')} value={customColors['color1']} type="color"/>
                                        <input onChange={(e)=>updateCustomColor(e, 'color2')} value={customColors['color2']} type="color"/>
                                        <input onChange={(e)=>updateCustomColor(e, 'color3')} value={customColors['color3']} type="color"/>
                                        <input onChange={(e)=>updateCustomColor(e, 'color4')} value={customColors['color4']} type="color"/>
                                    </div>

                                    {
                                        customColors['color1'] && customColors['color2'] && customColors['color3'] && customColors['color4'] ?

                                        <button onClick={addCustomColor}>Save</button> : ''
                                    }

                                </div>
                            </div> :
                    colors[theme].map(color => {
                        return (
                            <div onClick={()=>updateActiveTheme(color)} key={`${color['color1']}-${color['color2']}-${color['color3']}-${color['color4']}`}>
                                <div>

                                </div>
                                <div className="cursor-pointer" style={{display: "block", width: "15.2rem", height: "15.2rem"}}>
                                    <div style={{backgroundColor: color['color1'], display: "block", width: "15.2rem", height: "6rem"}}></div>
                                    <div style={{backgroundColor: color['color2'], display: "block", width: "15.2rem", height: "4rem"}}></div>
                                    <div style={{backgroundColor: color['color3'], display: "block", width: "15.2rem", height: "3rem"}}></div>
                                    <div style={{backgroundColor: color['color4'], display: "block", width: "15.2rem", height: "2rem"}}></div>
                                </div>
                            </div>
                        )
                })
            }
        </div>
    )
}

export default ColorCards