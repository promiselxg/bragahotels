import React from 'react';
import { Image, Section } from '../../components';
import styled from 'styled-components';
import { Typography } from '../../GlobalStyle';

const CategoryWrapper = styled.div`
  height: 100%;
  padding: 80px 0;
  text-align: center;
  display: flex;
  flex-wrap: wrap;

  .container {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;

    h2 {
      margin-bottom: 2px;
    }
  }
  .card {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    gap: 10px;
  }
`;
const Card = styled.div`
  width: 320px;
  height: 450px;
  display: flex;
  border-radius: 10px;
  overflow: hidden;
  margin-top: 8px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const Category = () => {
  return (
    <>
      <Section maxWidth="1000px" bg="var(--yellow)">
        <CategoryWrapper>
          <div className="container">
            <Typography as="h2" fontSize="2rem" fontWeight="800">
              Browse Rooms by Category
            </Typography>
            <Typography as="p" fontSize="0.8rem">
              We give professional services and top notch entertainment to the
              best level
            </Typography>
          </div>
          <div className="card">
            <Card>
              <Image
                img="https://images.unsplash.com/photo-1650173419393-a3d85d494399?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                alt="image"
              />
            </Card>
            <Card>
              <Image
                img="https://images.unsplash.com/photo-1650173419393-a3d85d494399?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                alt="image"
              />
            </Card>
            <Card>
              <Image
                img="https://images.unsplash.com/photo-1650173419393-a3d85d494399?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                alt="image"
              />
            </Card>
          </div>
        </CategoryWrapper>
      </Section>
    </>
  );
};

export default Category;
