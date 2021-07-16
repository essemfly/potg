import { CardInfo, Pack } from "../../Models/Card"

interface PackInfoProps {
    cardInfos: CardInfo[];
}


const PackIncludePart: React.FC<PackInfoProps> = ({ cardInfos }): JSX.Element => {
    return <div>
        구매하기
    </div>
}

export default PackIncludePart