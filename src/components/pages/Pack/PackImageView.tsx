import styled from 'styled-components';

const PackImage = styled.img`
  width: 65%;
  height: 65%;
  display: block;
  margin: 30px auto;
  padding: 30px;
`;

interface ImageUrlProps {
  imageUrl: string;
}

const PackImageView: React.FC<ImageUrlProps> = ({ imageUrl }): JSX.Element => {
  return (
    <div>
      <PackImage src={imageUrl} alt="" />
    </div>
  );
};

export default PackImageView;
