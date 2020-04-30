import React, { Component } from 'react';
import Media from 'react-media';
import './App.css';
import inst from './images/inst.png';
import mainI from './images/mainI.png';
import gmail from './images/gmail.png';
import axe from './images/axe.png';
import hammer from './images/hammer.png';
import screw from './images/screw.png';
import reel from './images/reel.png';






// function App() {
//     return (
//         <div  className="container"></div>
//     );
// }


class App extends Component {
    render() {
        return (
            <div>
                {/*<Media query="(max-width: 599px)" render={() =>*/}
                {/*    (*/}
                {/*        <img className='mainI' src={mainI} alt="img1"/>*/}
                {/*    )}*/}
                {/*/>*/}
                <div className="topory">Топоры и молотки ручной работы<br/>
                и заводского производства</div>
                <img className='mainI' src={mainI}/>
                <img className="inst" src={inst}/>
                <img className="gmail" src={gmail}/>

                {/*<div className="cat">*/}
                <div className="catalog">КАТАЛОГ</div>
                <img className="axe" src={axe}/>
                <div className="axeCaption">Топоры</div>
                <img className="hammer" src={hammer}/>
                <img className="screw" src={screw}/>
                <img className="reel" src={reel}/>
                {/*</div>*/}

                <div className="GreenBlock"></div>
                <div className="GreenBlockText">Заказать инструмент.<br/><br/>
                    Заполните форму обратной связи или свяжитесь с нами по телефону.<br/><br/>
                    Мы ответим на вопросы, которые вас интересуют, а также поможем с выбором товара.<br/><br/>
                    Больше информации по телефону:<br/><br/>
                    +380964030009</div>
                <div className="GreyBlock"></div>
                <div className="GreyBlockText">ЗАДАТЬ ВОПРОС<br/>

                </div>
            </div>




            // <div className="img1"></div>
            // <div style={{back}}></div>
            // <div className="home-container">
            //     <div className="home-content">
            //         <div className="home-text"></div>
            //         <div className="home-arrow">
            //             {/*<div styles={{ backgroundImage:'url(${img1})' }}></div>*/}
            //             <div className="container" style={{ backgroundImage: 'url(require("/images/img1.png"))' }}></div>
            //
            //
            //             <div id="adress">ул. Ак. Корольова 76, Южный Рынок</div>
            //             <div id="adress1">41 контейнер хоз.ряд</div>
            //             <div id="phone">+380962916835</div>
            //             {/*<img id={this.props.img1} src={"/images/img1.png"} />*/}
            //             <div id="mainT">Топоры и молотки ручной работы</div>
            //             <div id="mainT1">и заводского производства</div>
            //             {/*<img id="inst" src={"/images/inst.png"}/>*/}
            //             {/*<img id="gmail" src={"/images/gmail.png"}/>*/}
            //
            //                 <div id="catalog">Каталог</div>
            //                 {/*<img id="img2" src={"/images/img2.png"}/>*/}
            //                 {/*<img id="img3" src={"/images/img3.png"}/>*/}
            //                 {/*<img id="img4" src={"/images/img4.png"}/>*/}
            //                 {/*<img id="img5" src={"/images/img5.png"}/>*/}
            //
            //         </div>
            //     </div>
            // </div>

        );
    }
}

export default App;
