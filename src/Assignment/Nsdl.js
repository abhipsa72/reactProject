import React, { useState } from 'react';
import '../Assignment/nsdl.css'
import { FaAngleDown ,FaElementor} from 'react-icons/fa';
import  Banners  from '../Assignment/carasoul/Webassignment.png'
function Nsdl()  {
    const [carsoIndex,setCarsoindex]=useState(0)
 
    return (
        <div className="conainer-fluid">
            
            <div className="container sticky-area ">
            <ul className="sticky">
                    <li>
                        <img src="/pictures/search.png" alt="no" />
                        <p>search about us</p>
                    </li>
                    <li>
                        <span>
                        <img src="/pictures/facebook-circle.png" alt="no" /> 
                    <p>like us on facebook</p>
                        </span>
                    
                     </li>
                    <li>
                    <img src="/pictures/youtube.png" alt="no" />
                    <p>subscribe to our channel</p>
                    </li>
                    <li>
                    <img src="/pictures/feedback.png" alt="no" />
                    <p>
                        give us your feedback
                    </p>
                    </li>
                    <li>
                    <img src="/pictures/calc.png" alt="no" />
                    </li>
                </ul>
            </div>
            
           
            <header>
            
                <div className="container-fluid row">
                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12"><img className="logo" src="/pictures/pro-logo.png"  alt="no" /></div>
                <div className="col-lg-1 col-md-1"></div>
                <div className="logo2-content col-lg-7 col-md-7 col-sm-12 col-xs-12">
                    <div className="logo2"> <img  src="/pictures/nps_new.png" alt="no" /></div>
                   
                    <div className="nav-bar hidden-xs">
                    <nav>
                    <ul className="menubar">
                        <li>
                            <a href="#">Home <FaAngleDown/></a>
                            <div className="submenu">
                                <ul>
                                    <li>a</li>
                                    <li>a</li>
                                    <li>a</li>
                                    <li>a</li>
                                </ul>
                            </div>
                            
                        </li>
                        <li>
                            <a href="#">About Us <FaAngleDown/></a>
                            <div className="submenu">
                                <ul>
                                    <li>a</li>
                                    <li>a</li>
                                    <li>a</li>
                                    <li>a</li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <a href="#">Subscribe <FaAngleDown/></a>
                            <div className="submenu">
                                <ul>
                                    <li>areghrehtuirhtiurht5</li>
                                    <li>a</li>
                                    <li>a</li>
                                    <li>a</li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <a href="#">Gallery <FaAngleDown/></a>
                            <div className="submenu">
                                <ul>
                                    <li>a</li>
                                    <li>a</li>
                                    <li>a</li>
                                    <li>a</li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <a href="#">Circular <FaAngleDown/></a>
                            <div className="submenu">
                                <ul>
                                    <li>a</li>
                                    <li>a</li>
                                    <li>a</li>
                                    <li>a</li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <a href="#">Login <FaAngleDown/></a>
                            <div className="submenu">
                                <ul>
                                    <li>a</li>
                                    <li>a</li>
                                    <li>a</li>
                                    <li>a</li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </nav>
                    </div>
                    
                    <div className="navi visible-xs">
                     <FaElementor width="50px"/>
                    </div>
                </div>
                </div>
                
            </header>
  
  <div className="carousel-area" style={{backgroundImage: "url(" + Banners + ")"}}>
  
  </div>
            <div className="round-area container-fluid">
            
                <div className="row p-3">
                 <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2"></div>
                 <div className="circlspace1 col-lg-2 col-md-2 col-sm-2 col-xs-12">
                     <div className="circular">
                     <img className="round-img" src="/pictures/g.jpeg"  alt="no" />
                    
                     </div>
                     <div className="service-text p-2" >
                         <h4>
                            Goverment sector
                         </h4>
                     </div>
                 </div>
                 <div className="circlspace1 col-lg-2 col-md-2 col-sm-2 col-xs-2">
                     <div className="circular">
                     <img className="round-img" src="/pictures/all.jpeg" alt="no" />
                    
                     </div>
                     <div className="service-text p-2" >
                         <h4>
                            All citizen of India
                         </h4>
                     </div>
                 </div>
                 <div className="circlspace1 col-lg-2 col-md-2 col-sm-2 col-xs-2">
                     <div className="circular">
                     <img className="round-img" src="/pictures/corp.jpeg"  alt="no" />
                     </div>
                     <div className="service-text p-2" >
                         <h4>
                            Corporate sector
                         </h4>
                     </div>
                 </div>
                 <div className="circlspace1 col-lg-2 col-md-2 col-sm-2 col-xs-2">
                     <div className="circular">
                     <img className="lround-img" src="/pictures/nps.jpeg"  alt="no" />
                     </div>
                     <div className="service-text p-2" >
                         <h4>
                            NPS Lite/APY
                         </h4>
                     </div>
                 </div>
                </div>
            </div>
      
      <div className=" card-area">
          <div className="card-header container-fluid">
<h3 className="card-heading">
    Important Links
</h3>
          </div>

          <div className="cards-body row m-0 container-fluid">
              <div className="col-4"></div>
              <div className="col-8 card-box">
              
                  <div className="row ">
             <div className="card-1">
             <div style={{width: "200px"}}>
                  <div>unattended</div>
                    <div>20</div>
                </div>
                <div style={{width: "200px"}}> <img className="cardImage-1" src="/pictures/card-1.png"  alt="no" /></div>
             </div>
              <div className="card-2"></div>
              <div className="card-3"></div>
              <div className="card-4"></div>
                  </div>
              <div className="row">
              <div className="card-5"></div>
              <div className="card-6"></div>
              <div className="card-3"></div>
              <div className="card-4"></div>
              </div>
              <div className="row">
              <div className="card-1"></div>
              <div className="card-2"></div>
              <div className="card-3"></div>
              </div>
              
              </div>
             <div className="col-1"></div>
          </div>
      </div>
      <footer>
          <div className="row">

          </div>
      </footer>
        </div>



    );
};

export default Nsdl;