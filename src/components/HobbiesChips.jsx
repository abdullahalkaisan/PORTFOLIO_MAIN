import Chips from "./Chips"


export default function HobbiesChips() {

    const myHobbiles = [
        {
            label: "Coding",
            icon: "https://img.icons8.com/fluency/48/000000/console.png",

        },
        {
            label: "Traveling",
            icon: "https://img.icons8.com/fluency/48/000000/beach.png",
        },
        {
            label: "Drawing",
            icon: "https://img.icons8.com/fluency/48/000000/pencil-tip.png",
        },
        {
            label: "Books",
            icon: "https://img.icons8.com/?size=512&id=RtVsNpVhmJeJ&format=png",
        },
        {
            label: "Astronomy",
            icon: "https://img.icons8.com/fluency/48/000000/telescope.png",
        },
        {
            label: "Physics",
            icon: "https://img.icons8.com/?size=100&id=AXQu7hxeCZqY&format=png&color=000000",
        },
        {
            label: "Rubik's cube",
            icon: "https://img.icons8.com/fluency/48/000000/rubiks-cube.png",
        },
        {
            label: "Psychology",
            icon: "https://img.icons8.com/?size=100&id=pcD8bVCCf7dC&format=png&color=000000",
        },
        {
            label: "Philosophy",
            icon: "https://img.icons8.com/?size=100&id=9RCWPfJjT72Z&format=png&color=000000",
        },
        {
            label: "Badminton",
            icon: "https://img.icons8.com/fluency/48/000000/shuttercock.png",
        },
        {
            label: "Martial art",
            icon: "https://img.icons8.com/external-icongeek26-flat-icongeek26/64/000000/external-martial-art-martial-arts-icongeek26-flat-icongeek26.png",
        },
        {
            label: "Body building",
            icon: "https://img.icons8.com/external-gradient-icons-maxicons/85/000000/external-body-fitness-gradient-gradient-icons-maxicons-2.png",
        },
        {
            label: "Business",
            icon: "https://img.icons8.com/?size=100&id=XZuM8TlbYPPS&format=png&color=000000",
        },
        {
            label: "Religion",
            icon: "https://img.icons8.com/?size=100&id=EwqBHhfacGtU&format=png&color=000000",
        },{
            label: "Languages",
            icon: "https://img.icons8.com/?size=100&id=mEjjp0oFPnvc&format=png&color=000000",
        }
        
]



  return (
    <>

        {myHobbiles.map((item, index) => {
                return <Chips
                        item={item}
                        key={index}
                        />
        })}
    
    
    </>
  )
}
