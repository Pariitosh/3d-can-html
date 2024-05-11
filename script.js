import gsap from "gsap"
import { TextPlugin } from "gsap/TextPlugin"
gsap.registerPlugin(TextPlugin)

const heading1=document.getElementById('heading1')
const heading2=document.getElementById('heading2')
const heading3=document.getElementById('heading3')

gsap.to(heading1, {duration: 2,text: {value: "Classic craft beers,",newClass: "class2",delimiter: "",}});
gsap.from(heading1,{y:-100,duration:2})
gsap.from(heading2,{y:-100,duration:2})
gsap.from(heading3,{y:-100,duration:2})
gsap.to(heading2, {duration: 2,text: {value: "brewed without",newClass: "class2",delimiter: "",}});
gsap.to(heading3, {duration: 2,text: {value: "fuss",newClass: "class2",delimiter: "",}});
