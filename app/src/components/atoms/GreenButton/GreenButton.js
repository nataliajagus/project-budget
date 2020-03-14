import styled from 'styled-components';

const GreenButton = styled.button`
  display: block;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 40%;
  background-color: #2FE220;
  border: none;
  cursor: pointer;
`;

export default GreenButton;