import colors from "./utils/colors"

function ColorCards({activeThemeColors, updateActiveTheme, theme = 'light'}){

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