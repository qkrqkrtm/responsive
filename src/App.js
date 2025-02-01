import './App.css';
import './css.css';
import React, { useState, useEffect } from'react';

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // 화면 크기가 변경될 때마다 업데이트
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const cardData = [
    {image : "딸기 말차 밀크티.png", title : "딸기 말차 밀크티",views : 261, likes : "2k"},
    {image : "딸기 말차 크러쉬.png", title : "딸기 말차 크러쉬",views : 261, likes : "2k"},
    {image : "딸기 듬뿍 밀크티.png", title : "딸기 듬뿍 밀크티",views : 261, likes : "2k"},
    {image : "하트 스트로베리 라떼.png", title : "하트 스트로베리 라떼",views : 261, likes : "2k"},
    {image : "하트 그레이프 샹그리아.png", title : "하트 그레이프 샹그리아",views : 261, likes : "2k"},
    {image : "그레이프 뱅쇼.png", title : "그레이프 뱅쇼",views : 261, likes : "2k"},
    {image : "얼그레이티.png", title : "얼그레이티",views : 261, likes : "2k"},
    {image : "얼그레이 아메리카노.png", title : "얼그레이 아메리카노",views : 261, likes : "2k"},
    {image : "얼그레이 아메리카노.png", title : "얼그레이 아메리카노",views : 261, likes : "2k"},
  ]

  return (
    <div className="wrapper">
      <div className="top-navi">
        <div className="menus">
          {(windowWidth >= 901) ? (<>{(windowWidth >= 901 && windowWidth <= 1200) ? (<img src="./image/공차.png" alt="Logo" className="logo2"/>) : ""}
          <div>Brand</div>
          <div>Member</div>
          <div>Store</div>
          <div>MemberShip</div>
          <div>Event & News</div></>) : (<span className="material-icons hamburger">
menu
</span>)}
          
        </div>

        {windowWidth >= 1201 ? (<img src="./image/공차.png" alt="Logo" className="logo"/>) : ""}
        

    <div className="user">
    {windowWidth >= 1201 ? (
  <SearchBox />
) : (
  <span className="material-icons">search</span>
)}

{windowWidth >= 581 ? (<><Button1 text="Log in" backGround="white" color="black"></Button1>
  <Button1 text="Sign up" backGround="black" color="white"></Button1></>) : null}

        
        <div></div>
      </div>
    </div>

    <div className="contents">
        <div className="title-contents">
          <div className="titles-container">
            <div className="title">
              황실에 바치는 차(茶), 공차를 소개합니다.
            </div>
            <div className="sub-title">
              貢茶는 바칠 공, 차 차의 뜻으로 중국 황실에서만 맛 볼 수 있던
              프리미엄 퀄리티의 차(茶)를 바친다는 의미를 지니고 있습니다.
              <br />
              중국 황실에 진상하던 프리미엄 잎차를 신선하게 우려낸 차, 그것이
              바로 공차랍니다.
            </div>
          </div>
          <Button1
            text="Learn more"
            backGround="#FD797B"
            color="white"
          ></Button1>
        </div>

        <div className="cards-container">
          {cardData.map((card, index) => {
            return <Card key={index} card={card}></Card>;
          })}
        </div>
      </div>
    </div>
  );
}

const Button1 = (props) =>{
  const text = props.text;
  const backGround = props.backGround;
  const color = props.color;

  return(
    <button className="btn1" 
    style={{backgroundColor: backGround, color: color}}
    >{text}
    </button>
  )
}

const SearchBox = (props) => {

  return(
  <div className="search-container">
   <input type="text">
   
   </input>
   <span className="material-icons">search</span>
  </div>
  )
}

const Card = (props) => {
  const card = props.card;

  const image = card.image;
  const title = card.title;
  const views = card.views;
  const likes = card.likes;

  return (
    <div className="card">
      <img className="card-img" src={"./image/" + image} alt={title} />
      <div className="card-info">
        <p className="price-name">{title}</p>
        <div className="rating">
          <span className="material-icons">visibility</span>
          <div>{views}</div>
          <span className="material-icons">favorite</span> 
          <div>{likes}</div>
        </div>
      </div>
    </div>
  );
};

export default App;
