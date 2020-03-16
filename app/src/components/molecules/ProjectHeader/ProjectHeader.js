import React, { Component } from 'react';
import styled from 'styled-components';


import Paragraph from 'components/atoms/Paragraph/Paragraph';
import RemainingAmount from 'components/atoms/RemainingAmount/RemainingAmount';

import IconButton from 'components/atoms/IconButton/IconButton';

import Edit from 'assets/edit.svg';

const HeaderWrapper = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    max-width: 500px;
    flex-direction: column;
    margin: 50px auto;
`;

const RemainingWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;


class ProjectHeader extends Component {

    render() {
        return (
            <HeaderWrapper>
                <Paragraph center>Pozostałe środki</Paragraph>
                <RemainingWrapper>
                    <RemainingAmount>1367 zł</RemainingAmount>
                    <IconButton icon={Edit} />
                </RemainingWrapper>
                <Paragraph bold center>z 2000 zł</Paragraph>
            </HeaderWrapper>
        )
    }

}

export default ProjectHeader;