import Chips from "./Chips"


export default function Contact() {

    const socialMedia = [
        {
          label: "Linkend",
          icon: "https://img.icons8.com/color/48/000000/linkedin.png",
        },
        {
            label: "Github",
            icon: "https://img.icons8.com/ios-glyphs/480/000000/github.png",
        },
        {
            label: "Gmail",
            icon: "https://img.icons8.com/fluency/48/gmail-new.png",
        },
      ]



  return (
    <>

    {socialMedia.map((item, index) => {
        return <Chips
                  item={item}
                  key={index}
                />
      })}

    
    </>
  )
}
