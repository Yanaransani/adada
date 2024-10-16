import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background: linear-gradient(90deg, #ff7b54, #dc143c);
  width: 85%;
  margin: 0 auto;
  display: flex;
  border-radius: 25px;
  padding: 16px;
`;

const LeftColumn = styled.div`
  flex: 1;
`;

const RightColumn = styled.div`
  flex: 1;
`;

const Title = styled.h2`
  color: #fff;
  font-weight: bold;
`;

const Paragraph = styled.p`
  color: #fff;
`;

const SubscribeLabel = styled.div`
  background-color: #fff;
  width: 75%;
  margin: 0 auto;
  padding: 8px;
  display: flex;
  border-radius: 28px;
  margin-top: 50px;
  align-items: center;
`;

const Input = styled.input`
  ${'' /* width: 90%; */}
  width: 80%;
  padding: 0.75rem;
  background-color: #fff;
  border: 0.5px solid #d3d3d3;
  border-radius: 28px;
  color: #fff;
  margin: 0 auto;
  margin-right: 10px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background: linear-gradient(90deg, #dc143c, #ff7b54);
  border-radius: 25px;
  border: none;
  color: #fff;
  font-weight: bold;
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  transition: background-color 0.3s;

  &:hover {
    background: linear-gradient(90deg, #ff5252, #ff7a00);
  }
`;

const Subcribtion = () => {
  return (
    <Container>
      <LeftColumn>
        <Title>
          Subscribe <br />
          Our Newsletter
        </Title>
        <Paragraph>
          Subscribe to Adada Digital's newsletters for theatest updates,
          industry news, and xclusive offers Stay informed and ahead in the
          payment world!
        </Paragraph>
      </LeftColumn>
      <RightColumn>
        <SubscribeLabel>
          <Input name="email" placeholder="Enter email address " />
          <Button type="submit">SUBSCRIBE</Button>
        </SubscribeLabel>
      </RightColumn>
    </Container>
  );
};

export default Subcribtion;
