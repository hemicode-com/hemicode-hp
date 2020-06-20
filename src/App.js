import React, {Fragment} from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import styledNormalize from 'styled-normalize';
import Particles from 'react-particles-js';

const GlobalStyle = createGlobalStyle`
    ${styledNormalize}

  h1 {
    font-family: Kanit, sans-serif;
    font-size: 52px;
    cursor: default;
    user-select: none;
  }
  
  h2, a, p {
    font-family: Raleway, sans-serif;
    cursor: default;
    user-select: none;
    
  }
`;

const Wrapper = styled.div`
  height: 100vh;
  background: linear-gradient(
    45deg,
    rgb(188, 188, 188) 0%,
    rgb(132, 132, 132) 100%
  );
  padding: 16px;
  box-sizing: border-box;
`;

const ContainerMain = styled.main`
  position: relative;
  background: linear-gradient(45deg, rgb(68, 71, 76) 0%, rgb(29, 29, 29) 100%);
  box-shadow: 2px 8px 20px 0px rgba(0, 0, 0, 0.7);
  height: 100%;
  border-radius: 4px;
  display: flex;

  .cw {
    width: 100%;
    height: 100%;
    position: relative;
    opacity: 0.8
  }
`;

const ContainerText = styled.div`
  position: absolute;
  justify-content: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
`;

const TextTitle = styled.h1`
  color: #ddd9d8;
  text-shadow: 3px 3px #f33f3f;
  margin: 0 0 20px;
  text-align: center;
  cursor: default;

  @media screen and (min-width: 568px) {
    font-size: 72px;
  }

  @media screen and (min-width: 768px) {
    font-size: 92px;
    text-shadow: 4px 4px #f33f3f;
  }

  @media screen and (min-width: 1024px) {
    font-size: 112px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 136px;
    text-shadow: 5px 5px #f33f3f;
  }
`;

const TextMission = styled.h2`
  color: #ddd9d8;
  text-shadow: 1px 1px rgba(0, 0, 0, 0.35);
  line-height: 1.5;
  font-size: 13px;
  margin-bottom: 30px;
`;

const TextLink = styled.a`
  position: relative;
  text-decoration: none;
  color: #ddd9d8;
  font-size: 13px;
  margin-bottom: 25px;
  cursor: pointer;
  user-select: all;
  width: 140px;

  &:after {
    content: '';
    position: absolute;
    background: #151515;
    top: -2px;
    left: -4px;
    z-index: -1;
    height: 19px;
    width: 140px;
    transform: skew(-9deg, 0);
    box-shadow: 3px 3px 0px 0px #f33f3f;
  }

  &:hover {
    opacity: 0.9;
  }
`;

const TextDate = styled.p`
  color: #ddd9d8;
  font-family: Kanit, sans-serif;
  font-size: 12px;
`;

const particlesParams = {
  particles: {
    number: {
      value: 30
    },
    size: {
      value: 1
    }
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: 'repulse'
      }
    }
  }
};

const App = () => {
    const year = new Date().getFullYear();

    return (
        <Fragment>
            <GlobalStyle/>
            <Wrapper>
                <ContainerMain>
                    <Particles
                        className="cw"
                        width="100%"
                        height="100%"
                        params={particlesParams}
                    />
                    <ContainerText>
                        <TextTitle>HEMICODE</TextTitle>
                        <TextMission>
                            Building web applications
                            <br/>
                            with cutting-edge technologies.
                            <br/>
                            Quality within a stone{`'`}s throw.
                        </TextMission>
                        <TextLink href="mailto:hello@hemicode.com">
                            hello@hemicode.com
                        </TextLink>
                        <TextDate>&#169; {year}</TextDate>
                    </ContainerText>
                </ContainerMain>
            </Wrapper>
        </Fragment>
    );
};

export default App;
