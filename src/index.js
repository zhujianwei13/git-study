
import "./style.css"
import bgimg from "./1.gif"

import * as names from "./component/test1"
var div=document.createElement("div")



div.innerHTML="<h1>hellow webpack"+names.name+"</h1> <img src='"+bgimg+"'/> "

document.body.appendChild(div)






console.log("执行了2222")