import React from 'react';
import styled from 'styled-components';
import { Section } from '../../components';
import { Typography } from '../../GlobalStyle';

const AboutSectionWrapper = styled.div`
  height: calc(80vh - 70px);
  display: flex;
  width: 100%;
  .container {
    width: 100%;
    text-align: center;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;

    p {
      font-weight: 400;
      color: #333;
    }
  }
`;
const AboutSection = () => {
  return (
    <>
      <Section maxWidth="1000px">
        <AboutSectionWrapper>
          <div className="container">
            <Typography as="h1" fontSize="3rem" fontWeight="800">
              About Braga Hotels.
            </Typography>
            <Typography as="p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
              porro. Assumenda voluptate temporibus dolores praesentium deleniti
              ipsam consectetur eaque illum, molestiae unde soluta ut minus
              aliquam veritatis iste obcaecati cumque!
            </Typography>
            <Typography as="p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
              porro. Assumenda voluptate temporibus dolores praesentium deleniti
              ipsam consectetur eaque illum, molestiae unde soluta ut minus
              aliquam veritatis iste obcaecati cumque!
            </Typography>
          </div>
        </AboutSectionWrapper>
      </Section>
    </>
  );
};

export default AboutSection;
