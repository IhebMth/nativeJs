// ==================     Content Section   ===================


let parent = document.createElement("div")
parent.id = "content"
parent.style.cssText=
"display: flex;padding:20px;flex-wrap:wrap;align-items:center;gap:20px;min-height:calc(100vh - 142px) / 3;box-sizing:border-box;background-color:#ECECEC;"
document.body.appendChild(parent)



for (let i=1; i<=15; i++)
{
    let childArr = []
    let child = document.createElement("div")
    child.className = "product"
    child.style.cssText=
    "padding:2px;background-color:rgb(255, 255, 255); border: 1px solid rgb(221, 221, 221); width: calc((110vh )/ 4); box-sizing: border-box; text-align:center; color: rgb(136, 136, 136); border-radius: 6px"
    parent.appendChild(child)

    let childNumber = document.createElement("span")
    childNumber.style.cssText= 
    "font-size: 40px; color:black; text-align:center; font-wieght:normal; display:block; margin-bottom: 10px; margin-top:10px;"
    
    let one = document.createTextNode(i)
    childNumber.appendChild(one)
    child.appendChild(childNumber)
    
    
    let childText = document.createElement("span")
    childText.style.cssText= 
    "font-size: 40px; color:black; font-wieght:normal; display:block; margin-bottom: 10px; margin-top:10px;"
    
    let product = document.createTextNode("product")
    child.appendChild(product)
    child.appendChild(childText)
    
    childArr.push[child]
    let node = document.getElementById("content")
    let clone =  node.cloneNode()
    node.appendChild(clone)
    
}