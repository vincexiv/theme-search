import { useEffect, useState } from "react"
import colors from "./data"

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

    // Function to convert RGB to Hex
  function rgbToHex(rgb) {
    const rgbArray = rgb.match(/\d+/g).map(Number);
    const hex = rgbArray.map((component) => {
      const hexValue = component.toString(16);
      return hexValue.length === 1 ? '0' + hexValue : hexValue;
    });
    return '#' + hex.join('');
  }

    return (
        <div className="flex gap-5 flex-wrap">
            {
                !!Object.keys(activeTheme).length ?
                    <div className="flex gap-4">
                        <div className="cursor-pointer" style={{display: "block", width: "16rem", height: "16rem"}}
                            onClick={()=>updateActiveTheme(activeTheme)}>
                            <div style={{backgroundColor: activeTheme['color1'], display: "block", width: "16rem", height: "6rem"}}>{rgbToHex(activeTheme['color1'])}</div>
                            <div style={{backgroundColor: activeTheme['color2'], display: "block", width: "16rem", height: "4rem"}}>{rgbToHex(activeTheme['color2'])}</div>
                            <div style={{backgroundColor: activeTheme['color3'], display: "block", width: "16rem", height: "3rem"}}>{rgbToHex(activeTheme['color3'])}</div>
                            <div style={{backgroundColor: activeTheme['color4'], display: "block", width: "16rem", height: "2rem"}}>{rgbToHex(activeTheme['color4'])}</div>
                        </div>
                        <div className="flex items-start flex-col" >
                        <table>
                            <thead>
                            <tr style={{ borderBottom: '5px solid #ddd'}}>
                                <th>Details</th>
                                <th>Primary</th>
                                <th>Secondary</th>
                                <th>Tertiary</th>
                                <th>Other</th>
                                
                            </tr>
                            </thead>
                            <tbody>
                            <tr style={{ borderBottom: '5px solid #ddd'}}>
                                <td>Color Dot</td>
                                <td style={{ textAlign: 'center' }}>
                                <div
                                    style={{
                                    backgroundColor: activeTheme['color1'],
                                    width: '20px',
                                    height: '20px',
                                    borderRadius: '50%',
                                    margin: '0 auto',
                                    }}
                                />
                                </td>
                                <td style={{ textAlign: 'center' }}>
                                <div
                                    style={{
                                    backgroundColor: activeTheme['color2'],
                                    width: '20px',
                                    height: '20px',
                                    borderRadius: '50%',
                                    margin: '0 auto',
                                    }}
                                />
                                </td>
                                <td style={{ textAlign: 'center' }}>
                                <div
                                    style={{
                                    backgroundColor: activeTheme['color3'],
                                    width: '20px',
                                    height: '20px',
                                    borderRadius: '50%',
                                    margin: '0 auto',
                                    }}
                                />
                                </td>
                                <td style={{ textAlign: 'center' }}>
                                <div
                                    style={{
                                    backgroundColor: activeTheme['color4'],
                                    width: '20px',
                                    height: '20px',
                                    borderRadius: '50%',
                                    margin: '0 auto',
                                    }}
                                />
                                </td>
                                                               
                                
                            </tr>
                            <tr style={{ borderBottom: '5px solid #ddd' }}>
                                <td>Hex</td>
                                <td>{rgbToHex(activeTheme['color1'])}</td>
                                <td>{rgbToHex(activeTheme['color2'])}</td>
                                <td>{rgbToHex(activeTheme['color3'])}</td>
                                <td>{rgbToHex(activeTheme['color4'])}</td>
                                
                                
                                
                            </tr>
                            <tr style={{ borderBottom: '5px solid #ddd' }}>
                                <td>RGB</td>
                                <td>{activeTheme['color1']}</td>
                                <td>{activeTheme['color2']}</td>
                                <td>{activeTheme['color3']}</td>
                                <td>{activeTheme['color4']}</td>                                
                                
                                
                            </tr>
                            </tbody>
                        </table>
                        </div>

                    </div> :
                    colors[theme].map(color => {
                        return (
                            <div onClick={()=>updateActiveTheme(color)} key={`${color['color1']}-${color['color2']}-${color['color3']}-${color['color4']}`}>
                                <div>
                                <div>
                                  
                                    </div>
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