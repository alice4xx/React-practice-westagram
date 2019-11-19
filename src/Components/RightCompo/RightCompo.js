import React, { Component } from 'react';
import styled from 'styled-components';
import mine from '../../Images/mine.png';
import liveimg from '../../Images/liveimg.png';
import other from '../../Images/other.png';
import catail from '../../Images/catail.png';
import jay from '../../Images/jay.png';
import jina from '../../Images/jina.png';
import momo from '../../Images/momo.png';


class RightCompo extends Component {
  render() {
    return (
      <>
        <RightPortion1>
          <Mypage>
            <IdOfMine>
              <MyPhoto src={mine} />
            </IdOfMine>
            <MyName>Taylor</MyName>
          </Mypage>
          <StoryContainer>
            <StoryHead>
              <StoryTitle1>스토리</StoryTitle1>
              <StoryTitle2>모두보기</StoryTitle2>
            </StoryHead>
            <StoryMem>
              <Onlive>
                <LiveImg src={liveimg} />
                <LiveName>
                  <Follow>kyliejenner</Follow>
                  <FollowHour>19시간전</FollowHour>
                </LiveName>
              </Onlive>
              <Onlive>
                <LiveImg src={catail} />
                <LiveName>
                  <Follow>catail</Follow>
                  <FollowHour>10시간전</FollowHour>
                </LiveName>
              </Onlive>
              <Onlive>
                <LiveImg src={jay} />
                <LiveName>
                  <Follow>tweety_jayy</Follow>
                  <FollowHour>9시간전</FollowHour>
                </LiveName>
              </Onlive>
              <Onlive>
                <LiveImg src={jina} />
                <LiveName>
                  <Follow>jina sim</Follow>
                  <FollowHour>9시간전</FollowHour>
                </LiveName>
              </Onlive>
              <Onlive>
                <LiveImg src={momo} />
                <LiveName>
                  <Follow>momopoodle</Follow>
                  <FollowHour>5시간전</FollowHour>
                </LiveName>
              </Onlive>
            </StoryMem>
          </StoryContainer>
          <StoryContainer1>
            <StoryHead2>
              <StoryTitle3>회원님을 위한 추천</StoryTitle3>
              <StoryTitle4>모두보기</StoryTitle4>
            </StoryHead2>
            <StoryMem2>
              <Onlive2>
                <LiveImg2 src={other} />
                <LiveName2>
                  <Follow2>alicelee</Follow2>
                  <FollowHour2>회원님을 팔로우합니다</FollowHour2>
                </LiveName2>
                <TheWord>팔로우</TheWord>
              </Onlive2>
            </StoryMem2>
          </StoryContainer1>
        </RightPortion1>
      </>
    );
  }
}
export default RightCompo;

const RightPortion1 = styled.div`
display : flex;
flex-direction : column;
position : fixed;
/* right : 253px; */
max-width : 293px;
width : 100%;
margin-left : 645px; 
padding: 0 0 0 5px;
/* border : 1px solid black; */
`;
const Mypage = styled.div`
  display: flex;
  align-items: center;
  /* border : 1px solid blue; */
`;
const IdOfMine = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin: 0 3px 12px;
`;
const MyPhoto = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;
const MyName = styled.p`
  display: flex;
  align-items: center;
  margin-left: 8px;
  font-weight: 500;
`;
const StoryContainer = styled.div`
  margin: 4px 0 15px;
  border: 1px solid #efefef;
  width: 100%;
  height: 223px;
  background-color: #ffffff;
  overflow: scroll;
`;
const StoryHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 12px 0 0;
  margin-left : 0px;
  padding: 4px 10px;
  position: fixed;
  top: 202px;
  /* right: 253px;  */
  width: 282px;
  height: 40px;
  background-color: white;
  z-index: 10;
`;
const StoryTitle1 = styled.p`
  font-weight: 500;
  font-size: 14px;
  color: #999999;
`;
const StoryTitle2 = styled.p`
  font-weight: 600;
  font-size: 12px;
`;
const StoryMem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 45px 0 0;
  padding-left: 1px;
  width: 100%;
`;
const Onlive = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  padding: 0 0 0 4px;
  width: 100%;
  height: 44px;
`;
const LiveImg = styled.img`
  margin-left: 1px;
  border-radius: 50%;
  width: 58px;
  height: 52px;
`;
const LiveName = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 3px;
  width: 235px;
`;
const Follow = styled.p`
  margin-bottom: 4px;
  font-size: 14px;
  font-weight: 600;
s`;
const FollowHour = styled.p`
  font-size: 10px;
  letter-spacing: 1px;
  color: #999999;
`;
const StoryContainer1 = styled.div`
  margin: 4px 0 15px;
  border: 1px solid #efefef;
  width: 100%;
  height: 197px;
  background-color: #ffffff;
  overflow: scroll;
`;
const StoryHead2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 12px 0 0;
  margin-left : 0;
  padding: 4px 10px;
  position: fixed;
  top: 445px;
  /* right: 253px; */
  width: 282px;
  height: 40px;
  background-color: white;
  z-index: 10;
`;
const StoryTitle3 = styled.p`
  font-weight: 500;
  font-size: 14px;
  color: #999999;
`;
const StoryTitle4 = styled.p`
  font-weight: 600;
  font-size: 12px;
`;
const StoryMem2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 45px 0 0;
  padding-left: 1px;
  width: 100%;
`;
const Onlive2 = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  padding: 0 0 0 4px;
  width: 100%;
  height: 44px;
`;
const LiveImg2 = styled.img`
  margin-left: 1px;
  border-radius: 50%;
  width: 54px;
  height: 52px;
`;
const LiveName2 = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 3px;
  width: 180px;
`;
const Follow2 = styled.p`
  margin-bottom: 4px;
  font-size: 14px;
  font-weight: 600;
`;
const FollowHour2 = styled.p`
  font-size: 12px;
  letter-spacing: 1px;
  color: #999999;
`;
const TheWord = styled.p`
  font-size: 13px;
  font-weight: 500;
  color: #3897f0;
`;