import { Avatar, Box, Button, CardActionArea, Typography } from "@mui/material";
// import { Paperclip } from "lucide";


export default function ProfilePicture() {
  return (
    <Box sx={{display:"flex", flexDirection:"column", alignItems:"center", marginTop:5}}>
  <CardActionArea
  sx={{height:150, width: 150, borderRadius:15}}
  >
    <Avatar sx={{height:150, width: 150, borderRadius:15, pointerEvents:"none"}} src="https://pbs.twimg.com/media/GgDh85JaYAE7oBQ?format=png&name=900x900" />
  </CardActionArea>
  <Box sx={{display:"flex", marginY:3}}>
    <Box sx={{cursor:"pointer"}}>
      <Typography sx={{fontWeight:"bold"}} variant="h5" component="h1">
        Abdullah Al Kaisan
      </Typography>
      <Typography sx={{
        color:"#777", width:"max-content"}} variant="subtitle1" component="h2">
        Front-end | UX UI
      </Typography>
    </Box>

    <Box>
      <a href="https://drive.google.com/file/d/1c5xGQmrtb73iwyv73dKmUrnXt9vSpoXv/view?usp=sharing" target="_blank" rel="noopener noreferrer">
        <Button sx={{
          borderRadius:3, 
          fontWeight:"bold", 
          marginX:2,
          backgroundColor:"#333",
          "&:hover":{backgroundColor:"#444"}
          }} size='small' variant="contained">
            <Box sx={{marginRight:0.5}}>
              Resume
            </Box>
            {/* <Paperclip/> */}
            {/* <Paperclip /> */}
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-paperclip"><path d="M13.234 20.252 21 12.3"/><path d="m16 6-8.414 8.586a2 2 0 0 0 0 2.828 2 2 0 0 0 2.828 0l8.414-8.586a4 4 0 0 0 0-5.656 4 4 0 0 0-5.656 0l-8.415 8.585a6 6 0 1 0 8.486 8.486"/></svg>
          </Button>    
      </a>
    </Box>
  </Box>
</Box>
  )
}
