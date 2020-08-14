import React from 'react'
import ReactDOM from 'react-dom'
import Card from './Card'
import './index.css'
import Demodata from './Demodata'

console.log(Demodata, 'abhay2')



ReactDOM.render(
    <>
        <section>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <h2>My favourit Pokemons</h2>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className="container">
                {/* row 1 */}
                <div className="row">
                    <div className="col-md-4">
                        <Card img={Demodata[0].img} title={Demodata[0].title} link={Demodata[0].link} about={Demodata[0].about}></Card>
                    </div>
                    <div className="col-md-4">
                        <Card img={Demodata[1].img} title={Demodata[1].title} link={Demodata[1].link} about={Demodata[1].about}></Card>
                    </div>
                    <div className="col-md-4">
                        <Card img={Demodata[2].img} title={Demodata[2].title} link={Demodata[2].link} about={Demodata[2].about}></Card>
                    </div>
                </div>
                {/* row 2 */}
                <div className="row">
                    <div className="col-md-4">
                        <Card img={Demodata[3].img} title={Demodata[3].title} link={Demodata[3].link} about={Demodata[3].about}></Card>
                    </div>
                    <div className="col-md-4">
                        <Card img={Demodata[4].img} title={Demodata[4].title} link={Demodata[4].link} about={Demodata[4].about}></Card>
                    </div>
                    <div className="col-md-4">
                        <Card img={Demodata[5].img} title={Demodata[5].title} link={Demodata[5].link} about={Demodata[5].about}></Card>
                    </div>
                </div>
                {/* row 2 */}
                <div className="row">
                    <div className="col-md-4">
                        <Card img={Demodata[6].img} title={Demodata[6].title} link={Demodata[6].link} about={Demodata[6].about}></Card>
                    </div>
                    <div className="col-md-4">
                        <Card img={Demodata[7].img} title={Demodata[7].title} link={Demodata[7].link} about={Demodata[7].about}></Card>
                    </div>
                    <div className="col-md-4">
                        <Card img={Demodata[8].img} title={Demodata[8].title} link={Demodata[8].link} about={Demodata[8].about}></Card>
                    </div>
                </div>
                {/* row 2 */}
                <div className="row">
                    <div className="col-md-4">
                        <Card img={Demodata[9].img} title={Demodata[9].title} link={Demodata[9].link} about={Demodata[9].about}></Card>
                    </div>
                    <div className="col-md-4">
                        <Card img={Demodata[10].img} title={Demodata[10].title} link={Demodata[10].link} about={Demodata[10].about}></Card>
                    </div>
                    <div className="col-md-4">
                        <Card img={Demodata[11].img} title={Demodata[11].title} link={Demodata[11].link} about={Demodata[11].about}></Card>
                    </div>
                </div>
            </div>
        </section>
        <footer>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <ul>
                                        <li><a href="#"><i className="fab fa-facebook-f icon"></i></a></li>
                                        <li><a href="#"><i className="fab fa-twitter icon"></i></a></li>
                                        <li><a href="#"><i className="fab fa-linkedin-in icon"></i></a></li>
                                        <li><a href="#"><i class="fab fa-github icon"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </>,
    document.getElementById('root')
);