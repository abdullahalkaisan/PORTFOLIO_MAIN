import { Chip } from '@mui/material'

export default function Chips(props) {

    const handleClick = () => {
        console.info('You clicked the Chip.');
      };

    const {item, type} = props;

  return (
    <Chip 
      onClick={handleClick}
      icon={<img style={{height:24}} src={item.icon}/>}
      label={item.label} 
      variant="outlined"
      sx={{
        borderRadius:444, 
        // border:"1px solid #00000020", 
        border:"none",
        margin:0.5, paddingY:2.5, paddingX:0.8, 
        // opacity:`${item.know ? 1 : "30%"}`,
        fontSize:"15px",
        // backgroundColor:"#f1f1f180"
      }}
       />
  )
}
