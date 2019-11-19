import React, { Component } from 'react';
import styled from 'styled-components';
import data from '../../Components/InstaPost/data';
import InstaPost from '../../Components/InstaPost';
import RightCompo from '../../Components/RightCompo';

class Main extends Component {
  render() {
    return (
      <>
        <MainContainer>
          <MainWidth>
            <LeftPortion>
              {data.map((el, i) => {
                return (
                  <>
                    <InstaPost info={el} key={i} />
                  </>
                );
              })}
            </LeftPortion>
            <RightCompo />
          </MainWidth>
        </MainContainer>
      </>
    );
  }
}
export default Main;

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 77px;
  height: 100vh;
  overflow: scroll;
  background-color: #fafafa;
`;
const MainWidth = styled.div`
  display: flex;
  position: relative;
  max-width: 935px;
  width: 100%;
  padding: 60px 0;
`;
const LeftPortion = styled.div`
  max-width: 614px;
  width: 100%;
`;
