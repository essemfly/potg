import { Pack } from "../../Models/Card"

interface PackInfoProps {
    pack: Pack;
}


const PackDescriptionPart: React.FC<PackInfoProps> = ({ pack }): JSX.Element => {
    return <div>
        <div>
            <h2>{pack.name}</h2>
            가격: {pack.price}
        </div>
        구매하기
    </div>
}

export default PackDescriptionPart