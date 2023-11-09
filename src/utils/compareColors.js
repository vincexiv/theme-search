import { minWeightAssign } from 'munkres-algorithm';
import websiteURLs from './websiteUrls';

// const what = require('munkres-algorithm')

function getWebsiteSimilarityRanks(themeColors){
    console.log("theme colors: ", themeColors)
    if(themeColors){
        const sortedWebUrls =  websiteURLs.sort((urlA, urlB) => {
            return compareColors(themeColors, urlA.colors) - compareColors(themeColors, urlB.colors)
        })
    
        return sortedWebUrls.map(url => url.url)
    }else {
        return []
    }
}

function compareColors(themeColors, websiteColors){
    console.log("\ncomparing colors")
    console.log("theme colors: ", themeColors)
    console.log("website colors: ", websiteColors)
    console.log("\n")
    const constMatrix = []
    getTopFourColors(websiteColors).forEach(webColor => {
        const webRGBColor = hexToRgb(webColor)
        
        const colorDistance = []
        Object.keys(themeColors).forEach(themeColor => {
            const weight = websiteColors[webColor]
            const distance = getEuclideanDistance(webRGBColor, getRGBObject(themeColors[themeColor]))

            // If it has a bigger weight, we want the distance to be smaller
            // Picture an image that is 100% red. If we get this as a match,
            // we want the distance beteween the two colors to be smaller than
            // another image where red only covers 20% of the area
            colorDistance.push(distance/weight)
        })

        constMatrix.push(colorDistance)
    })

    console.log("hat wahtlhsghl : ", constMatrix)
    const {assignmentsWeight} = minWeightAssign(constMatrix)


    return assignmentsWeight
}

function getEuclideanDistance(val1, val2){
    // Val1 and Val2 are in the form {red: 10, green: 30, blue: 40}

    const red = (parseInt(val1.red) - parseInt(val2.red))**2
    const blue = (parseInt(val1.blue) - parseInt(val2.blue))**2
    const green = (parseInt(val1.green) - parseInt(val2.green))**2

    return Math.sqrt(red + blue + green)
}

function hexToRgb(hex) {
    // Remove the hash (#) if it exists in the input
    hex = hex.replace(/^#/, '');
  
    // Parse the hexadecimal string to an integer
    const hexValue = parseInt(hex, 16);
  
    // Extract the red, green, and blue components
    const red = (hexValue >> 16) & 255;
    const green = (hexValue >> 8) & 255;
    const blue = hexValue & 255;
  
    return {red, green, blue}
}

function getRGBObject(themeColor){
    const color = themeColor.replace("rgb", "").replace("(", "").replace(")", "").replace(/ /g, "")
    const [red, green, blue] = color.split(",")
    return {red, green, blue}
}

function getTopFourColors(websiteColors){
    let arr = []
    Object.keys(websiteColors).forEach(color => {
        arr.push({color: color, weight: websiteColors[color]})
    })

    arr = arr.sort((a, b) => {
        return b.weight - a.weight
    })

    let count = 0
    arr = arr.filter(a => {
        if(count >= 4){
            return false
        }else {
            count += 1
            return true
        }
    })

    return arr.map(color => color.color)
}

export default getWebsiteSimilarityRanks;