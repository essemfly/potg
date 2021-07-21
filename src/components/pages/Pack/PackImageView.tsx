import styled from 'styled-components';

const PackImage = styled.img`
  width: 50%;
  height: 50%;
  display: block;
  margin: 30px auto;
  padding: 30px;
  border: 2px solid #e8ecfc;
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
