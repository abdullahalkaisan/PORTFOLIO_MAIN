
import Box from '@mui/material/Box';
import ProfilePicture from './components/ProfilePicture';
import SkillsTabs from './components/SkillsTabs';
import Portfolio from './components/Portfolio';
import Marquee from 'react-fast-marquee';
import { myServices } from './components/Services';
import Chips from './components/Chips';


function App() {


  return (


    <Box sx={{
      // backgroundColor:"#f1f1f1", 
      height:"100vh", 
      width:"100vw", 
      overflow: {md:"hidden", xs:"auto"},
      display:"flex",
      flexWrap: {md:"nowrap", xs:"wrap"}
      }}>



        <Box sx={{
          backgroundColor:"white",
          width:{md:"600px", xs:1},
          overflowY:"auto",
        }}>
          <ProfilePicture/>
          <SkillsTabs/>
        </Box>


              <Box sx={{
                width:'100%',
                // paddingY:5
                overflowY:"auto",
                }}>
                  <Box sx={{flexDirection:'column', display:"flex", width:1}}>
                    <Marquee gradient>
                      <Box sx={{width:1, py:2}}>
                        {myServices.map((item, index) => {
                              return <Chips
                                        item={item}
                                        key={index}
                                      />
                            })}
                      </Box>
                    </Marquee>
                    <Portfolio/>
                  </Box>
              </Box>
      
    </Box>
  )
}

export default App
