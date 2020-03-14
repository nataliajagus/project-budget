import styled from 'styled-components';

const IconButton = styled.button`
  display: block;
  width: 20px;
  height: 20px;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: contain;
  border: none;
  cursor: pointer;
  margin-top: 15px;
  background-color: #fff;
`;

export default IconButton;