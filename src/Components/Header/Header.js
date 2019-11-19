import React, { Component } from 'react';
import styled from 'styled-components';
import photo from '../../Images/photoimg.png';
import logo from '../../Images/westagram.png';
import compass from '../../Images/compassImg.png';
import human from '../../Images/humanImg.png';
import love from '../../Images/loveImg.png';
import magnify from '../../Images/magnifyingImg.png';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      toggle: true,
      searchInput: '',
    };
  }
  toggleSearch = () => {
    this.setState({ toggle: !this.state.toggle });
  };
  searchVal = e => {
    this.setState({ searchInput: e.target.value });
  };

  render() {
    return (
      <>
        <HeaderContainer>
          <HeaderWrap>
            <HeaderPortion>
              <FirstBlock>
                <FirstPhoto src={photo} alt="photo" />
                <SecondPhoto />
                <ThirdPhoto src={logo} alt="logo" />
              </FirstBlock>
            </HeaderPortion>
            <HeaderPortion2>
              <InputWrap onClick={this.toggleSearch}>
                {!this.state.toggle === false ? (
                  <Display>
                    <InputDisplay src={magnify} />
                    <InputWord>검색</InputWord>
                  </Display>
                ) : (
                  <InputA placeholder="검색" onChange={this.searchVal} />
                )}
              </InputWrap>
            </HeaderPortion2>
            <HeaderPortion3>
              <ImageWrap>
                <FirstImg src={compass} alt="compass" />
                <SecondImg src={love} alt="love" />
                <ThirdImg src={human} alt="human" />
              </ImageWrap>
            </HeaderPortion3>
          </HeaderWrap>
        </HeaderContainer>
      </>
    );
  }
}
export default Header;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0%;
  border-bottom: 1px solid #efefef;
  width: 100vw;
  height: 77px;
  background-color: white;
  z-index: 99;
`;
const HeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1010px;
  width: 100%;
`;
const HeaderPortion = styled.div`
  display: flex;
  align-items: center;
  width: 40%;
  height: 36px;
`;
const FirstBlock = styled.div`
  display: flex;
  align-items: center;
  margin-left: 17px;
  width: 25px;
`;
const FirstPhoto = styled.img`
  width: 100%;
`;
const SecondPhoto = styled.div`
  margin-left: 17px;
  border-left: 1px solid black;
  height: 28px;
`;
const ThirdPhoto = styled.img`
  width: 105px;
  margin-left: 17px;
  margin-top: 5px;
`;
const HeaderPortion2 = styled.div`
  width: 25%;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
`;
const InputWrap = styled.div`
  display: flex;
  justify-content: center;
  width: 215px;
  height: 28px;
`;
const Display = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  cursor: text;
  background-color: #fafafa;
`;
const InputDisplay = styled.img`
  margin-right: 5px;
  width: 15px;
  height: 15px;
  text-align: center;
  background-color: #fafafa;
`;
const InputWord = styled.span`
  background-color: #fafafa;
  font-size: 12px;
  color: #999999;
  text-align: center;
`;

const InputA = styled.input`
  width: 100%;
  height: 28px;
  padding: 7px;
  border-radius: 2px;
  //outline: none;
  border: 1px solid #e8e8e8;
  background-color: white;
`;

const HeaderPortion3 = styled.div`
  display: flex;
  justify-content: flex-end;

  width: 40%;
  height: 36px;
`;
const ImageWrap = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 160px;
  margin-right: 5px;
  //padding: 0 0 0 16px;
`;
const FirstImg = styled.img`
  width: 27px;
  margin-right: 2px;
`;
const SecondImg = styled.img`
  width: 27px;
  margin-right: 2px;
`;
const ThirdImg = styled.img`
  width: 27px;
  margin-right: 2px;
`;
