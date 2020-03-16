import styled from 'styled-components';

const Paragraph = styled.p`
    font-size: 1rem;
    color: #292929;
    font-weight: ${props => props.bold ? "bold" : "normal"};
    text-align: ${props => props.center ? "center" : "left"};
`;

export default Paragraph;

