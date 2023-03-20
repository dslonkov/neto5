import './App.css';
import Card from "./components/task1/Card";
import CardContent from "./components/task1/CardContent";
import Collapse from "./components/task3/Collapse";
import CollapseComp from "./components/task3/CollapseComp";
// import MainNews from "./components/task2/MainNews";
// import Date from "./components/task2/Data";
// import NewsList from "./components/task2/NewsList";
// import NewsItem from "./components/task2/NewsItem";
// import RateList from "./components/task2/RateList";
// import RateItem from "./components/task2/RateItem";
// import Copyright from "./components/task2/Copyright";
// import Nav from "./components/task2/Nav";
// import NavItem from "./components/task2/NavItem";
// import Search from "./components/task2/Search";
// import SubSearch from "./components/task2/SubSearch";
// import Banner from "./components/task2/Banner";
// import AnotherNewsBlockWithProps from "./components/task2/AnotherNewsBlockWithProps";

function App() {
  // const src = './img.jpeg';

  return (
    // <Card img={src}>
    //   <CardContent />
    // </Card>

    // <>
    //   <div className="header">
    //     <MainNews />
    //     <Date />
    //   </div>
    //
    //   <div className="hero">
    //     <NewsList>
    //       <NewsItem img={img} src={src} text={text} />  // Ну или мапаем массив с данными
    //       <NewsItem img={img} src={src} text={text} />
    //       <NewsItem img={img} src={src} text={text} />
    //       <NewsItem img={img} src={src} text={text} />
    //       <NewsItem img={img} src={src} text={text} />
    //       <NewsItem img={img} src={src} text={text} />
    //     </NewsList>
    //
    //     <RateList>
    //       <RateItem product={product} rate={rate} inc={inc} />  // Ну или мапаем массив с данными
    //       <RateItem product={product} rate={rate} inc={inc} />
    //       <RateItem product={product} rate={rate} inc={inc} />
    //     </RateList>
    //
    //     <Copyright />
    //   </div>
    //
    //   <div className="main">
    //     <Logo />
    //
    //     <Nav>
    //       <NavItem link={link} text={text} />  // Ну или мапаем массив с данными
    //       <NavItem link={link} text={text} />
    //       <NavItem link={link} text={text} />
    //     </Nav>
    //
    //     <Search />
    //
    //     <SubSearch />
    //
    //     <Banner />
    //   </div>
    //
    //   <div className="footer">
    //     <Controls>
    //       <AnotherNewsBlockWithProps />
    //       <AnotherNewsBlockWithProps />
    //       <AnotherNewsBlockWithProps />
    //       <AnotherNewsBlockWithProps />
    //     </Controls>
    //   </div>
    // </>


      <>
        <Collapse />
      </>

  );
}

export default App;
