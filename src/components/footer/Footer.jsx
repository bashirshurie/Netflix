import footerData from "../../content/footerLinks.json"
import FooterLinks from "./FooterLinks"

const Footer = () => {
  return (
    <div className="mt-10 mb-16 sm:mx-auto sm:max-w-screen-lg">
        <h1 className="text-[#6c6c6c]">Questions? Contect Us</h1>
        <div className="mx-10 grid grid-cols-2 sm:grid-cols-4">
            {footerData.columns.map((data) => (
                <FooterLinks links={data}/>
            ))}
        </div>
        <p className="my-1 text-sm text-[#6c6c6c]">Netflix in SOmalia</p>
    </div>
  )
}

export default Footer