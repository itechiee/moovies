import React, { useState } from 'react';
import { Container } from '../style/Container';
import { MenuOutlined } from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';
import { useScreenSize } from '../helpers/useScreenSize';
import { Drawer, Badge } from 'antd';
import { HeaderWrapper } from '../style/HeaderWrapper';
import { connect } from 'react-redux';


const Header = ({numbersOfMovies}) => {
    const history = useLocation();

    const menuItems = [{title: 'Home', link: '/', active: ''},
                        {title: 'Movies', link: '/movies'},
                        {title: 'Watch List', link: '/watch-list'}];


    const screenSize = useScreenSize();

    const [visiablity, setVisiablity] = useState(false);

    const showDrawer = () => {
        setVisiablity(!visiablity);
      };
    
      const onClose = () => {
        setVisiablity(!visiablity);
      };

      return ( 
        <HeaderWrapper>
            <Container>
                <header>
                    <Link to="/">
                        <div className="title-header">
                           <svg className="moovie-logo" id="Layer_1_1_" version="1.1" viewBox="0 0 64 64" space="preserve" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink"><g/><path d="M49.693,53.165c-1.054-3.514-3.161-6.648-6.003-8.974C46.368,42.588,48,40.423,48,38v-1c0-0.435-0.07-0.858-0.171-1.275  l-1.033-13.481c0.21,0.008,0.438,0.033,0.64,0.033c1.049,0,1.989-0.103,2.807-0.307c4.396-1.099,6.563-5.343,6.652-5.523  c0.148-0.297,0.14-0.648-0.022-0.937c-0.163-0.29-0.458-0.479-0.789-0.507l-8.098-0.675c0.171-4.214-1.713-8.304-5.182-10.906  L41.172,2.2c-0.358-0.269-0.852-0.265-1.208,0.007c-0.355,0.272-0.486,0.749-0.32,1.165c0.803,2.006,0.973,4.182,0.552,6.261  c-5.12-1.873-11.351-1.938-15.849-0.144c-0.384-2.035-0.203-4.158,0.581-6.118c0.166-0.417,0.035-0.893-0.32-1.166  C24.252,1.935,23.759,1.93,23.4,2.2l-1.63,1.223c-3.433,2.575-5.318,6.607-5.191,10.775l-9.662,0.805  c-0.331,0.028-0.626,0.217-0.789,0.507c-0.162,0.289-0.171,0.64-0.022,0.937c0.09,0.18,2.256,4.424,6.652,5.523  c0.821,0.205,1.76,0.308,2.808,0.308c0.534,0,1.106-0.035,1.696-0.089l-1.08,13.497C16.074,36.115,16,36.552,16,37v1  c0,2.423,1.632,4.588,4.309,6.19c-2.841,2.326-4.949,5.46-6.003,8.974l-2.265,7.548c-0.091,0.303-0.033,0.631,0.155,0.885  C12.387,61.851,12.684,62,13,62h38c0.316,0,0.613-0.149,0.803-0.403c0.188-0.254,0.246-0.582,0.155-0.885L49.693,53.165z   M54.247,16.857c-0.865,1.124-2.375,2.644-4.489,3.172c-0.853,0.214-1.905,0.282-3.115,0.22l-0.169-2.21l0.295-0.059  c0.378-0.076,0.68-0.362,0.773-0.736l0.069-0.277c0.054-0.217,0.095-0.434,0.137-0.651L54.247,16.857z M45.75,16.145  c-1.98,0.393-3.986-0.493-5.046-2.171l0.354-0.709c1.196-2.392,1.613-5.076,1.236-7.678C45.268,8.214,46.599,12.24,45.75,16.145z   M39.626,11.55c-0.111,0.276-0.222,0.551-0.356,0.819l-0.592,1.184c-0.141,0.282-0.141,0.613,0,0.895  c1.123,2.246,3.374,3.646,5.803,3.766l1.069,13.953C42.743,29.647,37.782,28,32,28c-5.766,0-10.717,1.638-13.528,4.145l1.114-13.917  c0.057,0.001,0.114,0.008,0.17,0.008c2.558,0,4.964-1.439,6.139-3.789c0.141-0.282,0.141-0.613,0-0.895l-0.592-1.184  c-0.156-0.311-0.289-0.63-0.414-0.951C28.995,9.695,34.845,9.759,39.626,11.55z M22.277,5.587c-0.377,2.602,0.04,5.285,1.236,7.677  l0.354,0.709c-1.06,1.679-3.065,2.561-5.046,2.172C17.974,12.239,19.305,8.214,22.277,5.587z M13.242,20.03  c-2.114-0.529-3.625-2.049-4.489-3.172l8.043-0.67c0.049,0.261,0.1,0.522,0.165,0.781l0.069,0.275  c0.076,0.304,0.293,0.544,0.574,0.666l-0.18,2.25C15.759,20.339,14.344,20.306,13.242,20.03z M18.002,38.019l0.16-2.003  C19.154,32.669,25.079,30,32,30c6.942,0,12.882,2.685,13.847,6.046l0.151,1.97C45.98,41.803,39.578,45,32,45  C24.424,45,18.023,41.805,18.002,38.019z M14.344,60l1.879-6.261c1.026-3.421,3.181-6.429,6.078-8.546  C24.976,46.326,28.319,47,32,47s7.024-0.674,9.699-1.807c2.897,2.117,5.052,5.125,6.078,8.547L49.656,60H14.344z"/><rect height="2" width="2" x="26" y="24"/><rect height="2" width="2" x="36" y="24"/><path d="M24.5,35c-1.402,0-2.5,1.318-2.5,3s1.098,3,2.5,3s2.5-1.318,2.5-3S25.902,35,24.5,35z M24.5,39c-0.177,0-0.5-0.38-0.5-1  s0.323-1,0.5-1s0.5,0.38,0.5,1S24.677,39,24.5,39z"/><path d="M39.5,41c1.402,0,2.5-1.318,2.5-3s-1.098-3-2.5-3S37,36.318,37,38S38.098,41,39.5,41z M39.5,37c0.177,0,0.5,0.38,0.5,1  s-0.323,1-0.5,1S39,38.62,39,38S39.323,37,39.5,37z"/></svg>
                            <h6><span>moo</span>vies</h6>
                        </div>
                    </Link>
                    
                    <div className="menu-n-search">
                       {screenSize > 600 ? <div className="menu">
                            {menuItems.map(item=> {
                                if(item.title === 'Watch List'){
                                   return numbersOfMovies && <Badge key={item.title} className="badge-custom" count={numbersOfMovies.length}>
                                                <Link to={item.link} key={item.title} className={item.link === history.pathname ? `active` : null}>
                                                    {item.title}
                                                </Link>
                                            </Badge>
                                }
                                return <Link to={item.link} key={item.title} className={item.link === history.pathname ? `active` : null}>
                                                    {item.title}
                                                </Link>
                            })}
                        </div> : <MenuOutlined className="icon-menu" type="primary" onClick={showDrawer}/>}
                    </div>
                </header>
            </Container>
            <Drawer
                    className="drawer-mobile"
                    placement="left"
                    closable={false}
                    onClose={onClose}
                    visible={visiablity}>
                    <ul className="nav-items-mobile">
                    {menuItems.map(item=> <Link to={item.link} onClick={onClose} key={item.title} className={item.link === history.pathname ? `active` : null}>
                                                {item.title}
                                            </Link>)}
                </ul>
                </Drawer>
        </HeaderWrapper>
     );
}
 

const mapStateToProps = (state)=>{
    
    return{
        numbersOfMovies: state.watchList
    }
}

export default connect(mapStateToProps)(Header);