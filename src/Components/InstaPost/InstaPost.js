import React, { Component } from 'react';
import styled from 'styled-components';
import data from './data';

import lei from '../../Images/leilei.png';
import dot from '../../Images/dot.png';
import cat from '../../Images/thecat.png';
import msg from '../../Images/msg.png';
import love from '../../Images/loveImg.png';
import down from '../../Images/downlod.png';
import like from '../../Images/like.png';

class InstaPost extends Component {
  constructor() {
    super();
    this.state = {
      commentValue: '',
      commentArr: [],
    };
  }
  IdCounter = 0;

  textValue = e => {
    this.setState({ commentValue: e.target.value });
  };

  handleSubmit = () => {
    this.setState({
      commentValue: '',
      commentArr: [
        ...this.state.commentArr,
        {
          id:++this.IdCounter,
          name: 'kyoi',
          message: this.state.commentValue,
        },
      ],
    });
  };

  deleteCmmt = e => {
    let commentId = Number(e.target.dataset.commentId);
//  debugger;
    let foundIndex = this.state.commentArr.findIndex(
      value => value.id === commentId,
    );
    if (foundIndex !== -1) this.state.commentArr.splice(foundIndex, 1);
    this.setState({
      comentArr: this.state.commentArr,
    });
  };

  render() {
    const { imgName, src, commentUser, text } = this.props.info;
    return (
      <>
        <MainLeft>
          <LeftHeader>
            <LeftCircle>
              <ImgLei src={lei} alt="lei" />
            </LeftCircle>
            <OtherBlock>
              <NameLocationWrap>
                <UserName>{imgName}</UserName>
                <Location>Seoul, South Korea</Location>
              </NameLocationWrap>
              <MoreDot src={dot} />
            </OtherBlock>
          </LeftHeader>
          <PhotoWrap>
            <Photoes src={src} />
          </PhotoWrap>
          <Icons>
            <LoveMsg>
              <Love src={love} />
              <Msg src={msg} />
              <Down src={down} />
            </LoveMsg>
            <Like src={like} />
          </Icons>
          <TheRestOf>
            <CountWrap>
              <CountLikes>좋아요 364개</CountLikes>
            </CountWrap>
            <Comments>
              {this.state.commentArr.map((e, i) => {
                return (
                  <>
                    <CommentWrap>
                      <Wrap>
                        <UserId key={i}>{e.name}</UserId>
                        <UserComment key={i}>{e.message}</UserComment>
                      </Wrap>
                      <DeleteKey 
                        data-comment-id={e.id}

                        onClick={this.deleteCmmt}
                      >
                        삭제
                      </DeleteKey>
                    </CommentWrap>
                  </>
                );
              })}
            </Comments>
            <HoursWrap>
              <CommentsHours>11시간 전</CommentsHours>
            </HoursWrap>
            <InputWrap>
              <InputCmmt
                placeholder="댓글 달기..."
                onChange={this.textValue}
                value={this.state.commentValue}
              />
              <Bttn onClick={this.handleSubmit}>게시</Bttn>
            </InputWrap>
          </TheRestOf>
        </MainLeft>
      </>
    );
  }
}
export default InstaPost;

const MainLeft = styled.div`
  margin-bottom: 60px;
  width: 614px;
`;
const LeftHeader = styled.div`
  display: flex;
  border: 1px solid #e8e8e8;
  padding: 8px;
  width: 100%;
  height: 60px;
  background-color: white;
`;
const LeftCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 3px;
  border-radius: 50%;
  width: 42px;
  /* border : 1px solid red; */
`;
const ImgLei = styled.img`
  width: inherit;
  border-radius: 100%;
`;
const OtherBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 16px;
  width: 534px;
`;
const NameLocationWrap = styled.span`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;
const UserName = styled.a`
  padding: 0 0 0 5px;
  color: #262625;
  font-weight: 600;
  font-size: 15px;
`;
const Location = styled.a`
  padding: 0 0 0 5px;
  margin-top: 3px;
  font-size: 12px;
  color: #262625;
`;
const PhotoWrap = styled.div`
  width: 614px;
  height: 767.5px;
`;
const MoreDot = styled.img`
  width: 24px;
  margin-right: 8px;
`;
const Photoes = styled.img`
  width: 100%;
  height: 100%;
  line-height: 0;
`;

const Icons = styled.div`
  display: flex;
  justify-content: space-between;
  border-left: 1px solid #efefef;
  border-right: 1px solid #efefef;
  align-items: center;
  padding: 0 16px;
  width: 614px;
  height: 40px;
  background-color: white;
`;
const LoveMsg = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 110px;
  margin: 0;
`;
const Love = styled.img`
  margin: 0;
  width: 26px;
  height: 26px;
`;
const Msg = styled.img`
  width: 26px;
  height: 26px;
`;
const Down = styled.img`
  width: 26px;
  height: 26px;
`;
const Like = styled.img`
  width: 24px;
  height: 28px;
  margin-right: 8px;
`;
const TheRestOf = styled.div`
  border-left: 1px solid #efefef;
  border-right: 1px solid #efefef;
  border-bottom: 1px solid #efefef;
  width: 614px;
  background-color: white;
`;
const CountWrap = styled.div`
  display: flex;
  align-items: center;

  margin: 0 0 8px;
  padding: 0 16px;
  width: 100%;
  height: 24px;
`;
const CountLikes = styled.p`
  width: 100%;
  height: 100%;
`;
const Comments = styled.div`
  padding: 0 16px;
  width: 100%;
`;
const CommentWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 578px;
  padding: 0;
  border : 1px solid yellow;
`;
const Wrap = styled.div``;
const UserId = styled.a`
  margin: 0 4px 0 -5px;
  padding: 0 0 0 5px;
  width: 84px;
  height: 15px;
  font-weight: 600;
  font-size: 15px;
`;
const UserComment = styled.span`
  padding: 0;
  line-height: 18px;
`;
const DeleteKey = styled.span`
  padding: 0 8px;
  font-size: 12px;
  cursor: pointer;
  border : 1px solid blue;
`;
const HoursWrap = styled.div`
  padding: 0 16px;
  margin: 0 0 12px;
`;
const CommentsHours = styled.p`
  margin-top: 4px;
  font-size: 9px;
  color: #999999;
`;
const InputWrap = styled.div`
  display: flex;
  align-items: center;
  border-top: 1px solid #efefef;
  padding: 14px 16px;
  margin: 12px 0 0;
  height: 60px;
`;
const InputCmmt = styled.input`
  border: none;
  width: 540px;
  height: 18px;
  font-size: 14px;
  font-weight: 500;
`;
const Bttn = styled.button`
  border: none;
  color: #3897f0;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
`;
