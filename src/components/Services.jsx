import Chips from "./Chips";

export  const myServices = [
    {
        label:"Clean Interface",
        icon:"https://img.icons8.com/?size=100&id=QfpWr2gFM07s&format=png&color=000000"
    },
    {
        label:"Premium color shade",
        icon:"https://img.icons8.com/?size=100&id=IQEtfsQvBRZN&format=png&color=000000"
    },
    {
        label:"Fast loading",
        icon:"https://img.icons8.com/?size=100&id=VT8utPJnUBVC&format=png&color=000000"
    },
    {
        label:"Light-weight and compresed",
        icon:"https://img.icons8.com/?size=100&id=PLvn50bVGAlA&format=png&color=000000"
    },
    {
        label:"Accurate scal sizing.",
        icon:"https://img.icons8.com/?size=100&id=6PKrYaIuH1xd&format=png&color=000000"
    },
    {
        label:"Seo optimised",
        icon:"https://img.icons8.com/?size=100&id=KPmthqkeTgDN&format=png&color=000000"
    },
    {
        label:"Responsive all devices.",
        icon:"https://img.icons8.com/?size=100&id=18txcSQ3wJcU&format=png&color=000000"
    },

    {
        label:"Fast delevery",
        icon:"https://img.icons8.com/?size=100&id=iXgIlTTMZtTO&format=png&color=000000"
    },

    {
        label:"24/7 Chat Support",
        icon:"https://img.icons8.com/?size=48&id=13724&format=png"
    }
]



export default function Services() {

  return (
    <div style={{color:"#444", fontSize:"large"}}>


    {myServices.map((item, index) => {
        return <Chips
                  item={item}
                  key={index}
                />
      })}







{/* 
        <div style={{display:"flex", alignItems:"center", marginBottom:15}}>
        <MdOutlineLocationOn style={{marginRight:7, color:"royalblue"}}/>
            Dhaka, Bangladesh
        </div>
        <div style={{display:"flex", alignItems:"center", marginBottom:15}}>
        <MdTranslate style={{marginRight:7, color:"royalblue"}}/>
            English, Bengali, Hindi
        </div>


        <div style={{display:"flex", alignItems:"center", marginBottom:15}}>
            <MdLightbulbOutline style={{marginRight:7, color:"royalblue"}}/>
            Clean interface.
        </div>

        <div style={{display:"flex", alignItems:"center", marginBottom:15}}>
            <MdOutlineColorLens style={{marginRight:7, color:"royalblue"}}/>
            Premium color shade.
        </div>

        <div style={{display:"flex", alignItems:"center", marginBottom:15}}>
            <MdOutlineElectricBolt style={{marginRight:7, color:"royalblue"}}/>
            Fast loading.
        </div>

        <div style={{display:"flex", alignItems:"center", marginBottom:15}}>
            <MdOutlineFolderZip style={{marginRight:7, color:"royalblue"}}/>
            Light-weight and compresed.
        </div>

        <div style={{display:"flex", alignItems:"center", marginBottom:15}}>
            <IoMdResize style={{marginRight:7, color:"royalblue"}}/>
            Accurate scal sizing.
        </div>

        <div style={{display:"flex", alignItems:"center", marginBottom:15}}>
            <MdOutlineMobileScreenShare style={{marginRight:7, color:"royalblue"}}/>
            Responsive all devices.
        </div>

        <div style={{display:"flex", alignItems:"center", marginBottom:15}}>
            <IoMdSearch style={{marginRight:7, color:"royalblue"}}/>
            Seo optimised.
        </div>

        <div style={{display:"flex", alignItems:"center", marginBottom:15}}>
            <MdOutlineFireTruck style={{marginRight:7, color:"royalblue"}}/>
            Fast delevery.
        </div> */}



    </div>
  )
}
