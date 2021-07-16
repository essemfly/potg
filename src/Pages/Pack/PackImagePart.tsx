import { Pack } from "../../Models/Card"


interface ImageUrlProps {
    imageUrl: string;
}


const PackImagePart: React.FC<ImageUrlProps> = ({ imageUrl }): JSX.Element => {
    return <div>
        <img src={imageUrl} alt="" />
    </div>
}

export default PackImagePart