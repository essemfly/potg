import { samplePack } from "../Models/Mockdata";
import PackIncludePart from "../Pages/Pack/PackIncludePart";
import PackImagePart from "../Pages/Pack/PackImagePart";
import PackDescriptionPart from "../Pages/Pack/PackDescriptionPart";


const PackInfoPage: React.FC = (): JSX.Element => {
  return <div>
    <PackImagePart imageUrl={samplePack.imageUrl.toString()} />
    <PackDescriptionPart pack={samplePack} />
    <PackIncludePart cardInfos={samplePack.cardInfos} />
  </div>;
};

export default PackInfoPage;
