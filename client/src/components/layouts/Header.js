import React from 'react';
import styled from 'styled-components';

const Header = () => {
    return (
        <MainContainer>
            <h1>
                The Home of Doug <br />
                Rosenberg's Music
            </h1>
        </MainContainer>
    );
};

export default Header

// main container
const MainContainer = styled.header`
    background: url(../../images/albumcover.jpg)no-repeat center/cover;
    height: 40rem;
    background-position: center;
    background-repeat: no-repeat;
h1 {
    transform: translate(-50%, -50%);
    color: #fff;
    font-weight: 900;
    position: absolute;
    top: 45%;
    left: 25%
}

`;