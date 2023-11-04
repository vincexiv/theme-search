

function ColorCards({theme = 'light'}){

    function randomColor(theme){
        if(theme === 'light'){
            const val1 = Math.round(Math.random()*125, 0) + 125
            const val2 = Math.round(Math.random()*125, 0) + 125
            const val3 = Math.round(Math.random()*125, 0) + 125
    
            return `rgb(${val1}, ${val2}, ${val3})`
        } else if (theme === 'dark'){
            const val1 = Math.round(Math.random()*125, 0)
            const val2 = Math.round(Math.random()*125, 0)
            const val3 = Math.round(Math.random()*125, 0)   
            
            return `rgb(${val1}, ${val2}, ${val3})`
        } else if (theme === 'warm'){
            const val1 = Math.round(Math.random()*255, 0)
            const val2 = Math.round(Math.random()*255, 0) * 0.7
            const val3 = Math.round(Math.random()*255, 0) * 0.4
            
            return `rgb(${val1}, ${val2}, ${val3})`           
        } else if (theme === 'cold'){
            const val1 = Math.round(Math.random()*255, 0) * 0.4
            const val2 = Math.round(Math.random()*255, 0) * 0.7
            const val3 = Math.round(Math.random()*255, 0)   
            
            return `rgb(${val1}, ${val2}, ${val3})`             
        }
    }

    return (
        <div className="flex gap-5 flex-wrap">
            {
                [...Array(12).keys()].map(id => {
                    return (
                        <div style={{display: "block", width: "16rem", height: "16rem"}}>
                            <div style={{backgroundColor: randomColor(theme), display: "block", width: "16rem", height: "6rem"}}></div>
                            <div style={{backgroundColor: randomColor(theme), display: "block", width: "16rem", height: "4rem"}}></div>
                            <div style={{backgroundColor: randomColor(theme), display: "block", width: "16rem", height: "3rem"}}></div>
                            <div style={{backgroundColor: randomColor(theme), display: "block", width: "16rem", height: "2rem"}}></div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ColorCards