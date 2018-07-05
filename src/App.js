import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './App.css';
import { Layout, Menu, Icon, Card, Avatar, Col, Row, Timeline, Carousel, Button } from 'antd';
const { Header, Content, Footer } = Layout;
const { Meta } = Card;


class App extends Component {
    render() {
        return (
            <div>
                <Layout>
                    <Header>
                        <Menu
                            mode="horizontal" theme="dark"
                            style={{ lineHeight: '64px' }}
                        >
                            <Menu.Item key="home">
                                <Avatar style={{ color: 'white', backgroundColor: 'grey' }}>MW</Avatar>
                            </Menu.Item>
                            <Menu.Item key="resume">Resume</Menu.Item>
                            <Menu.Item key="video">Video</Menu.Item>
                            <Menu.Item key="photo">Photos</Menu.Item>
                            <Menu.Item key="creator">Creator</Menu.Item> 
                            <Menu.Item key="insta">Instagram <Icon type="camera-o" />
                                <a href="https://instagram.com/tarzanwynn" target="_blank" rel="noopener noreferrer"></a>                
                            </Menu.Item>
                            <Menu.Item key="tube">Youtube <Icon type="youtube" />
                                <a href="https://www.youtube.com/watch?v=q2O3giPoJU0" target="_blank" rel="noopener noreferrer"></a>                
                            </Menu.Item>
                            <Menu.Item key="twitter">Twitter <Icon type="twitter" />
                                <a href="https://twitter.com/mikewynn" target="_blank" rel="noopener noreferrer"></a>                
                            </Menu.Item>
                        </Menu> 
                    </Header>
                    <Layout>
                        <div style={{ background: 'DimGrey', padding: '60px' }}>
                            <Row gutter={16}>
                                <Col span={8}>
                                    <Card
                                        bordered={false}
                                        hoverable
                                        style={{ width: 500 }}
                                        cover={<img alt="example" src="https://lh3.googleusercontent.com/rX76KCo5uwa4n12T-gca8hiAcklv_NMkUjStYGHhOqmrQJLE6rogk7d4n4qi9PSiOB7hRQ723eQbJ_cYJWdfuCvlmABKif6vQ--Z-AnpfVclJQgmTXJb-GjzbcVJQXy0ttZzR713iuIHMNzi491FSEbthF-PT_7EIPmn_1FfqUGFqSilhxQkGwn-GhmuN-gzkFD2i5pncF41rHTGRwCmib_4SExsTv3zN5wPp_bFAPsgSW5Bk5johPZ83vPcmUh2uy3T3vN9vqDfrx6TcyE6SA0a3KWE5yiGJqqGyHNG7ZXeXR-DSa8ZYguBX3vGPMVFrLPPnw8bPaQuOrULbPtOYIIFT7bSSOLrO5Tis2tz6gubqw2ousPQteN-rpTqn_bEddnCR3agJhZTmVtDXGJx0oA_xymAFX0DYBEeRjEAyr8aA3sUczvtAb1lD1bBxpDzDCOKlzWRC-6-yvvg46nIS1TWUffHmltGMllSpCKnQiHm_A89xqLRcuqxG52rLjV8Ak3CyclXOZGG-1_AC5FxmGCumWFygzZAtJy6ue837azS1HvCpTmqjJ69Ryyee798iwEUBUZ59D5z6IPj6tUdbRoLGYuK7T8Ybkh-2Fnp=w720-h911-no" />}
                                    >
                                        <Meta
                                            title="MIKE WYNN"
                                            description="ACROBAT"
                                        />
                                    </Card>
                                </Col>
                                <Col span={16}>
                                    <p style= {{ fontSize: 70, fontFamily: 'helvetica', backgroundColor: 'white' }}>MIKE WYNN:ACROBAT</p>
                                    <p style= {{ fontSize: 50, fontFamily: 'helvetica', color: 'white' }}>Welcome!</p>
                                    <p style= {{ fontSize: 20, fontFamily: 'helvetica', color: 'white' }}>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
                                        in culpa qui officia deserunt mollit anim id est laborum.
                                    </p>
                                    <p style= {{ fontSize: 20, fontFamily: 'helvetica', color: 'white' }}>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
                                        in culpa qui officia deserunt mollit anim id est laborum.
                                    </p>
                                </Col>
                            </Row>
                        </div>
                        <Layout>
                            <div style={{ background: '#001529', padding: '60px' }}>
                                <p style= {{ fontSize: 70, color: 'white', fontFamily: 'helvetica', backgroundColor: 'Dimgrey' }}>RESUME</p>
                                <Row gutter={16}>
                                    <Col span={7}>
                                        <Timeline style={{color: 'white', fontFamily: 'helvetica', fontSize: 20 }}>
                                            <Timeline.Item color="crimson" style={{color: 'white', fontFamily: 'helvetica', fontSize: 20  }}>"DIAVOLO": Acrobat - Jacques Heim</Timeline.Item>
                                            <Timeline.Item color="crimson" style={{color: 'white', fontFamily: 'helvetica', fontSize: 20  }}>"LE REVE": Acrobatic Generalist</Timeline.Item>
                                            <Timeline.Item color="crimson"  style={{color: 'white', fontFamily: 'helvetica', fontSize: 20  }}>"CIRQUE DE LA MER": Captain/Apparatus Designer</Timeline.Item>
                                            <Timeline.Item color="crimson"  style={{color: 'white', fontFamily: 'helvetica', fontSize: 20  }}>"ILLUMINIGHT": Stilt Acrobat - Bonnie Story</Timeline.Item>
                                            <Timeline.Item color="crimson"  style={{color: 'white', fontFamily: 'helvetica', fontSize: 20  }}>"CIRQUE MECHANICS CABARET": Comedy Acrobat</Timeline.Item>
                                            <Timeline.Item color="crimson"  style={{color: 'white', fontFamily: 'helvetica', fontSize: 20  }}>"CIRCO LUCI": Character/Acrobat</Timeline.Item>
                                            <Timeline.Item color="crimson"  style={{color: 'white', fontFamily: 'helvetica', fontSize: 20  }}>"VALITAR": Acrobat</Timeline.Item>
                                            <Timeline.Item color="crimson"  style={{color: 'white', fontFamily: 'helvetica', fontSize: 20  }}>"DISNEYS BLOCK PARTY BASH": Swing Acrobat</Timeline.Item>
                                            <Timeline.Item color="crimson"  style={{color: 'white', fontFamily: 'helvetica', fontSize: 20  }}>"TOURNAMENT OF KINGS": Acrobat - Excalibur</Timeline.Item>
                                            <Timeline.Item color="crimson"  style={{color: 'white', fontFamily: 'helvetica', fontSize: 20  }}>"DODGEBALL" Movie: Cheerleader/Tumbler</Timeline.Item>
                                            <Timeline.Item color="crimson"  style={{color: 'white', fontFamily: 'helvetica', fontSize: 20  }}>"MALL COP" Movie: Le Reve Acrobat</Timeline.Item>
                                            <Timeline.Item color="crimson"  style={{color: 'white', fontFamily: 'helvetica', fontSize: 20  }}>"Wild West Stunt Show": Stunt Actor</Timeline.Item>
                                        </Timeline>,
                                    </Col>
                                    <Col span={8}>
                                        <Timeline style={{color: 'white', fontFamily: 'helvetica' }}>
                                            <Timeline.Item color="crimson" style={{color: 'white', fontFamily: 'helvetica', fontSize: 21  }}>AGT Finalist, Le Plus Grande Cabaret Du Monde</Timeline.Item>
                                            <Timeline.Item color="crimson" style={{color: 'white', fontFamily: 'helvetica', fontSize: 18  }}>High Dive(80'/24M), Bar Dismounts, Hand Balancing, Acro Dance</Timeline.Item>
                                            <Timeline.Item color="crimson"  style={{color: 'white', fontFamily: 'helvetica', fontSize: 20  }}>Flying Trapeze Dismounts, Chinese Poles, Trampwall</Timeline.Item>
                                            <Timeline.Item color="crimson"  style={{color: 'white', fontFamily: 'helvetica', fontSize: 20  }}>Flipping Jumping Stilts</Timeline.Item>
                                            <Timeline.Item color="crimson"  style={{color: 'white', fontFamily: 'helvetica', fontSize: 20  }}>Comedy/Clown Mini Tramp</Timeline.Item>
                                            <Timeline.Item color="crimson"  style={{color: 'white', fontFamily: 'helvetica', fontSize: 20  }}>Character Acrobat</Timeline.Item>
                                            <Timeline.Item color="crimson"  style={{color: 'white', fontFamily: 'helvetica', fontSize: 20  }}>TrampWall</Timeline.Item>
                                            <Timeline.Item color="crimson"  style={{color: 'white', fontFamily: 'helvetica', fontSize: 20  }}>Bungee, Trampoline</Timeline.Item>
                                            <Timeline.Item color="crimson"  style={{color: 'white', fontFamily: 'helvetica', fontSize: 20  }}>Dirt Ring Tumbler</Timeline.Item>
                                            <Timeline.Item color="crimson"  style={{color: 'white', fontFamily: 'helvetica', fontSize: 20  }}>Tumbling, Acting</Timeline.Item>
                                            <Timeline.Item color="crimson"  style={{color: 'white', fontFamily: 'helvetica', fontSize: 20  }}>Dance, various LE REVE Acts</Timeline.Item>
                                            <Timeline.Item color="crimson"  style={{color: 'white', fontFamily: 'helvetica', fontSize: 20  }}>Stunt Combat, High Falls, Firearms, Mic'd Acting</Timeline.Item>
                                        </Timeline>,
                                    </Col>
                                    <Col span={4}>
                                        <Timeline style={{color: 'white', fontFamily: 'helvetica', fontSize: 20 }}>
                                            <Timeline.Item color="crimson" style={{color: 'white', fontFamily: 'helvetica', fontSize: 20  }}>2017 - Present</Timeline.Item>
                                            <Timeline.Item color="crimson" style={{color: 'white', fontFamily: 'helvetica', fontSize: 20  }}>2013 - 2017</Timeline.Item>
                                            <Timeline.Item color="crimson"  style={{color: 'white', fontFamily: 'helvetica', fontSize: 20  }}>2007 - 2013</Timeline.Item>
                                            <Timeline.Item color="crimson"  style={{color: 'white', fontFamily: 'helvetica', fontSize: 20  }}>2017</Timeline.Item>
                                            <Timeline.Item color="crimson"  style={{color: 'white', fontFamily: 'helvetica', fontSize: 20  }}>2018</Timeline.Item>
                                            <Timeline.Item color="crimson"  style={{color: 'white', fontFamily: 'helvetica', fontSize: 20  }}>2007 - 2009</Timeline.Item>
                                            <Timeline.Item color="crimson"  style={{color: 'white', fontFamily: 'helvetica', fontSize: 20  }}>2012</Timeline.Item>
                                            <Timeline.Item color="crimson"  style={{color: 'white', fontFamily: 'helvetica', fontSize: 20  }}>2005 - 2007</Timeline.Item>
                                            <Timeline.Item color="crimson"  style={{color: 'white', fontFamily: 'helvetica', fontSize: 20  }}>2010</Timeline.Item>
                                            <Timeline.Item color="crimson"  style={{color: 'white', fontFamily: 'helvetica', fontSize: 20  }}>2004</Timeline.Item>
                                            <Timeline.Item color="crimson"  style={{color: 'white', fontFamily: 'helvetica', fontSize: 20  }}>2015</Timeline.Item>
                                            <Timeline.Item color="crimson"  style={{color: 'white', fontFamily: 'helvetica', fontSize: 20  }}>2006-2007</Timeline.Item>
                                        </Timeline>,
                                    </Col>
                                </Row>
                                <Button type="danger" icon="download" size='large'>Download FULL Resume PDF</Button>
                            </div>
                            <Layout>
                                <div style={{ background: 'crimson', padding: '60px' }}>
                                    <p style= {{ fontSize: 70, color: 'crimson', fontFamily: 'helvetica', backgroundColor: 'white' }}>SHOWREEL</p>
                                    <Row gutter={16}>
                                        <Col span={8}>
                                        </Col>
                                        <Col span={8}>
                                            <Content>
                                                <iframe width="640" height="400" src="https://www.youtube.com/embed/q2O3giPoJU0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                                            </Content>,
                                        </Col>
                                        <Col span={8}>
                                        </Col>
                                    </Row>
                                </div>
                                <Layout>
                                    <div style={{ background: 'black', padding: '60px' }}>
                                        <p style= {{ fontSize: 70, color: 'white', fontFamily: 'helvetica', backgroundColor: 'Dimgrey' }}>PHOTOS</p>
                                        <Row gutter={16}>
                                            <Col span={8}>
                                                <Carousel effect="fade" autoplay>
                                                    <div><img src='http://via.placeholder.com/550x350'></img></div>
                                                    <div><img src='http://via.placeholder.com/550x350'></img></div>
                                                    <div><img src='http://via.placeholder.com/550x350'></img></div>
                                                    <div><img src='http://via.placeholder.com/550x350'></img></div>
                                                </Carousel>,
                                            </Col>
                                            <Col span={8}>
                                                <Carousel effect="fade" autoplay>
                                                    <div><img src='http://via.placeholder.com/550x350'></img></div>
                                                    <div><img src='http://via.placeholder.com/550x350'></img></div>
                                                    <div><img src='http://via.placeholder.com/550x350'></img></div>
                                                    <div><img src='http://via.placeholder.com/550x350'></img></div>
                                                </Carousel>,
                                            </Col>
                                            <Col span={8}>
                                                <Carousel effect="fade" autoplay>
                                                    <div><img src='http://via.placeholder.com/550x350'></img></div>
                                                    <div><img src='http://via.placeholder.com/550x350'></img></div>
                                                    <div><img src='http://via.placeholder.com/550x350'></img></div>
                                                    <div><img src='http://via.placeholder.com/550x350'></img></div>
                                                </Carousel>,
                                            </Col>
                                        </Row>
                                    </div>
                                    <Layout>
                                        <Footer style={{ textAlign: 'left' }}>
                                            &copy;2005-{new Date().getFullYear()} Coded by Mike Wynn in React/JavaScript/ANTDesign
                                        </Footer>
                                    </Layout>
                                </Layout>
                            </Layout>
                        </Layout>
                    </Layout>
                </Layout>
            </div>

        );
    }
}

export default App;
