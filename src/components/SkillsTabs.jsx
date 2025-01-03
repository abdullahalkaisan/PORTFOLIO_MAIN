

import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import SkillsChips from './SkillsChips';
import HobbiesChips from './HobbiesChips';
import About from './About';
import Contact from './Contact';
import Services from './Services';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function SkillsTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', paddingX:2 }}>
        <Tabs 
        value={value} 
        onChange={handleChange} 
        aria-label="basic tabs example"
        variant="scrollable"
        scrollButtons="auto"
        >
          <Tab label="Skills" {...a11yProps(0)} />
          <Tab label="Services" {...a11yProps(1)} />
          <Tab label="About" {...a11yProps(2)} />
          <Tab label="Hobbies" {...a11yProps(3)} />
          <Tab label="Contact" {...a11yProps(4)} />
        </Tabs>
      </Box>


      <CustomTabPanel value={value} index={0}>
        <SkillsChips/>
      </CustomTabPanel>


      <CustomTabPanel value={value} index={1}>
        <Services/>
      </CustomTabPanel>


      <CustomTabPanel value={value} index={2}>
        <About/>
      </CustomTabPanel>


      <CustomTabPanel value={value} index={3}>
        <HobbiesChips/>
      </CustomTabPanel>


      <CustomTabPanel value={value} index={4}>
        <Contact/>
      </CustomTabPanel>

    </Box>
  );
}