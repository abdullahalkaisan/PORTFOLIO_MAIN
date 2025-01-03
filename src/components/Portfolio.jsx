import { Box } from "@mui/material";
import Portfolio_card from "./Portfolio_card";
import { portfolioData } from "../../portfolioData";




export default function Portfolio() {
  return (
    <Box sx={{display:"flex", width:1, height:1, flexWrap:"wrap", justifyContent:"center",  padding:0, overflow:"auto"}}>
    
        {portfolioData.map((item, index)=> <Portfolio_card key={index} items={item}/>)} 

    
    </Box>
  )
}
