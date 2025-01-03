import { Divider } from '@mui/material'
import Chips from './Chips';





export default function SkillsChips() {



  const frontEndSkills = [
    {
      label: "HTML",
      icon: "https://img.icons8.com/color/48/000000/html-5--v1.png",
      know: true,
    }, {
      label: "CSS",
      icon: "https://img.icons8.com/color/48/000000/css3.png",
      know: true,
    }, {
      label: "Scss",
      icon: "https://img.icons8.com/color/48/000000/sass.png",
      know: true,
    }, {
      label: "Bootstrap",
      icon: "https://img.icons8.com/color/48/000000/bootstrap.png",
      know: true,
    }, {
      label: "Tailwind",
      icon: "https://img.icons8.com/color/48/000000/tailwindcss.png",
      know: true,
    }
    , {
      label: "daisy UI",
      icon: "https://img.icons8.com/color/48/000000/tailwindcss.png",
      know: true,
    },
    {
      label: "Javascript",
      icon: "https://img.icons8.com/color/48/000000/javascript--v1.png",
      know: true,
    }, {
      label: "Typescript",
      icon: "https://img.icons8.com/color/48/000000/typescript.png",
      know: true,
    }, {
      label: "Jquery",
      icon: "https://img.icons8.com/ios-filled/50/000000/jquery.png",
      know: true,
    }, {
      label: "React",
      icon: "https://img.icons8.com/color/48/000000/react-native.png",
      know: true,
    },
    {
      label: "Redux toolkit",
      icon: "https://miro.medium.com/v2/resize:fit:1200/1*guMcXaOp43Ko9ZL7AdXmZg.png",
      know: true,
    },
    {
      label: "Zustand",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpHj4UwTW4ANSlNjzQOiiOqfDa6kal9RpF0A&s",
      know: true,
    },
    

    // {
    //   label:"Redux",
    //   icon:"https://img.icons8.com/color/48/000000/redux.png",
    //   know:false,
    // },


    {
      label: "Vite",
      icon: "https://img.icons8.com/color/48/000000/vite.png",
      know: true,
    }

    , {
      label: "Mui",
      icon: "https://mui.com/static/logo.png",
      know: true,
    },

    // {
    //   label: "Wordpress",
    //   icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/WordPress_blue_logo.svg/1200px-WordPress_blue_logo.svg.png",
    //   know: true,
    // },

    {
      label: "Git, Github",
      icon: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
      know: true,
    },

    {
      label: "Linux, Terminal",
      icon: "https://cdn2.iconfinder.com/data/icons/user-interface-204/76/icon-61-512.png",
      know: true,
    },


    // {
    //   label:"Angular",
    //   icon:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png",
    //   know:false,
    // },

    // {
    //   label:"Vue",
    //   icon:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png",
    //   know:true,
    // },

    // {
    //   label:"OpenGL",
    //   icon:"https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png",
    //   know:true,
    // }


  ]

  const databaseSkills = [
    {
      label: "Firebase",
      icon: "https://img.icons8.com/color/48/000000/firebase.png",
      know: true,
    },{
      label:"OAuth",
      icon:"https://static-00.iconduck.com/assets.00/oauth-icon-512x511-baa2vilm.png",
      know:true
    }
    ,{
      label:"Axios",
      icon:"https://cdn.prod.website-files.com/64c40e72929042f5e772ac61/64c40e72929042f5e772adb5_Axios-Icon-Webclip.png",
      know:true
    }
    ,{
      label:"Jwt",
      icon:"https://ps.w.org/simple-jwt-auth/assets/icon-256x256.png?rev=3179287",
      know:true
    },
    {
      label:"MongoDB",
      icon:"https://img.icons8.com/color/48/000000/mongodb.png",
      know:true,
    },    
    {
      label:"Mongoose",
      icon:"https://media.licdn.com/dms/image/v2/D4D12AQEk8opKsyHhRQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1693917399837?e=2147483647&v=beta&t=L_IQgiz-aKgF-m3L2lYQxNFCwIKvn09DwxghjuWIF-I",
      know:true
    },
    {
      label:"Express",
      icon:"https://img.icons8.com/color/512/express-js.png",
      know:true
    },
    {
      label:"Node",
      icon:"https://static-00.iconduck.com/assets.00/node-js-icon-1817x2048-g8tzf91e.png",
      know:true
    },
    // {
    //   label:"GraphQl",
    //   icon:"https://static-00.iconduck.com/assets.00/node-js-icon-1817x2048-g8tzf91e.png",
    //   know:false
    // },
    // {
    //   label:"Socket.io",
    //   icon:"https://static-00.iconduck.com/assets.00/node-js-icon-1817x2048-g8tzf91e.png",
    //   know:false
    // }
    // ,
    // {
    //   label:"WebRTC",
    //   icon:"https://static-00.iconduck.com/assets.00/node-js-icon-1817x2048-g8tzf91e.png",
    //   know:false
    // }
    // ,
    // {
    //   label:"Next",
    //   icon:"https://static-00.iconduck.com/assets.00/node-js-icon-1817x2048-g8tzf91e.png",
    //   know:false
    // } ,
    // {
    //   label:"Astro",
    //   icon:"https://static-00.iconduck.com/assets.00/node-js-icon-1817x2048-g8tzf91e.png",
    //   know:false
    // },
    // {
    //   label:"Cypress",
    //   icon:"https://static-00.iconduck.com/assets.00/node-js-icon-1817x2048-g8tzf91e.png",
    //   know:false
    // },
    // {
    //   label:"React Native",
    //   icon:"https://static-00.iconduck.com/assets.00/node-js-icon-1817x2048-g8tzf91e.png",
    //   know:false
    // },
    // {
    //   label:"VPS",
    //   icon:"https://static-00.iconduck.com/assets.00/node-js-icon-1817x2048-g8tzf91e.png",
    //   know:false
    // }


  ]


  const uxuxAndOthers = [
    {
      label: "Figma",
      icon: "https://img.icons8.com/color/48/000000/figma--v1.png",
      know: true,
    },
    {
      label: "Photoshop",
      icon: "https://img.icons8.com/color/480/000000/adobe-photoshop--v1.png",
      know: true,
    },
    {
      label: "Premiere pro",
      icon: "https://img.icons8.com/color/48/000000/adobe-premiere-pro--v1.png",
      know: true,
    },
    {
      label: "After Effects",
      icon: "https://img.icons8.com/color/48/000000/adobe-after-effects--v1.png",
      know: true,
    },
  ]



  return (
    <>

      <Divider textAlign="center" sx={{ marginBottom: 2, opacity: "70%" }}>Frontend</Divider>
      {frontEndSkills.map((item, index) => {
        return <Chips
                  item={item}
                  key={index}
                />
      })}



      <Divider textAlign="center" sx={{ marginBottom: 2, marginTop: 6, opacity: "70%" }}>Backend</Divider>
      {databaseSkills.map((item, index) => {
        return <Chips
                  item={item}
                  key={index}
                />
      })}




      <Divider textAlign="center" sx={{ marginBottom: 2, marginTop: 6, opacity: "70%" }}>UX UI and others</Divider>
      {uxuxAndOthers.map((item, index) => {
        return <Chips
                  item={item}
                  key={index}
                />
      })}







    </>
  )
}
