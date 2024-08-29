import featureData from "../../content/features.json";
import Feature from "./Feature";

const Features = () => {
  return (
    <div>
        {
            featureData.map((feature) => (
                <Feature key={feature.id} {...feature}/>
            ))
        }
    </div>
  )
}

export default Features