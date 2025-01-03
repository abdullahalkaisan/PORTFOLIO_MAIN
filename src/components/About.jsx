import { Divider, Typography } from "@mui/material";
import { MdOutlineLocationOn, MdTranslate } from "react-icons/md";
import Typewriter from "react-ts-typewriter";





export default function About() {
  return (
    <div style={{color:"#444"}}>


    <div style={{marginBottom:20, marginLeft:20}}>
        <div style={{display:"flex", alignItems:"center", marginBottom:10}}>
        <MdOutlineLocationOn style={{marginRight:7, color:"royalblue"}}/>
            Dhaka, Bangladesh
        </div>
        <div style={{display:"flex", alignItems:"center", marginBottom:10}}>
        <MdTranslate style={{marginRight:7, color:"royalblue"}}/>
            English, Bengali, Hindi
        </div>
    </div>




<Divider textAlign="center" sx={{ marginBottom: 2, marginTop: 2, opacity: "70%" }}>About me</Divider>

{/* <Typewriter

typeSpeed={1000}


text={`

With over six years of expertise in UX/UI design, I specialize in crafting captivating user interfaces that not only entice your audience but also foster engagement, enhancing the overall user experience. 



My focus is on creating visually appealing designs that seamlessly guide users through your website, compelling them to explore further and interact with your products or services.

Reach out to me today to elevate your online presence with the best-in-class design solutions tailored to meet your specific needs. Thank you for considering my services.
`} 

/> */}








<Typography variant="body1" component="p">


With over six years of expertise in UX/UI design, I specialize in crafting captivating user interfaces that not only entice your audience but also foster engagement, enhancing the overall user experience. 

<br />
<br />

My focus is on creating visually appealing designs that seamlessly guide users through your website, compelling them to explore further and interact with your products or services.

<br />
<br />

Reach out to me today to elevate your online presence with the best-in-class design solutions tailored to meet your specific needs. 

</Typography>

<br />



<Typewriter

typeSpeed={1000}

text={`Thank you for considering my services.`
    } 

/>
        


    </div>
  )
}
