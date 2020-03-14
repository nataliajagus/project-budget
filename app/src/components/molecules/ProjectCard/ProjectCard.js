import React, { Component } from 'react';
import styled from 'styled-components';

import GreenButton from 'components/atoms/GreenButton/GreenButton';
import IconButton from 'components/atoms/IconButton/IconButton';
import ProjectName from 'components/atoms/ProjectName/ProjectName';
import ClientName from 'components/atoms/ClientName/ClientName';
import BudgetSmall from 'components/atoms/BudgetSmall/BudgetSmall';

import Right from 'assets/right.svg';
import Edit from 'assets/edit.svg';
import Delete from 'assets/delete.svg';

const CardWrapper = styled.div`
    background: #fff;
    border-radius: 30px;
    box-shadow: 1px 1px 12px #0000000d;
    width: 295px;
    min-height: 200px;
    display: flex;
    padding: 20px 20px 20px 30px;
    margin: 15px;

    @media (min-width: 992px) {
        margin: 15px 0;
    }
`;

const ButtonsWrapper = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

const TextWrapper = styled.div`
    flex-grow: 3;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

class ProjectCard extends Component {

    render() {
        return (
            <CardWrapper>
                <TextWrapper>
                    <div>
                        <ProjectName>Projekt 1 </ProjectName>
                        <ClientName>Nazwa klienta</ClientName>
                    </div>
                    <BudgetSmall>990 zł / 1000 zł</BudgetSmall>
                </TextWrapper>    
                <ButtonsWrapper>
                    <div>
                        <IconButton icon={Edit} />
                        <IconButton icon={Delete} />
                    </div>
                    <GreenButton icon={Right} />
                </ButtonsWrapper>
            </CardWrapper>
        )
    }

}

export default ProjectCard;