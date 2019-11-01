import React, { Component } from 'react'
import { Card, CardImg, CardTitle, Button } from 'reactstrap'
// import Iframe from 'react-iframe'
import './App.css'
import './card-config.css'
import './card-settings.css'
// import { render } from 'react-dom'

class App extends Component {
  // <h1 >sce services for members</h1>
  // href="https://calendar.google.com/calendar/embed?src=llv828585faitko1m2nh39s3js%40group.calendar.google.com&ctz=America%2FLos_Angeles"
  render () {
    return (
      <div className='tab'>
        <div className='App'>
          <div>
            <div className='text-center' id='title'>
              <h1 className='display-4'>sce services for members</h1>{' '}
            </div>
          </div>

          <div className='sec sec1'>
            {/* <h1 className='secN' /> */}
            <div className='services'>
              <Card id='shop' body outline color='secondary'>
                <CardTitle className='title'>SCE Shop</CardTitle>
                <CardImg
                  id='ishop'
                  src={require('./img/shop.png')}
                  alt='Shop'
                />
                <ul>
                  <li>Snacks and beverages</li>
                  <li>Frozen food</li>
                  <li>Lab supplies (ICs, Arduino Uno, wires, etc.)</li>
                </ul>
                <Button className='button' id='bshop'>
                  Shop
                </Button>
              </Card>
            </div>

            <div className='services'>
              <Card id='locker' body outline color='primary'>
                <CardTitle className='title'>SCE Lockers Service</CardTitle>
                <CardImg
                  id='ilocker'
                  src={require('./img/locker.png')}
                  alt='Locker'
                />
                <ul>
                  <li>$10 per person</li>
                  <li>3 members per locker</li>
                </ul>
                <Button className='button' id='blocker'>
                  Rent
                </Button>
              </Card>
            </div>

            <div className='services'>
              <Card id='techw' body outline color=''>
                <CardTitle className='title'>Technical Workshop</CardTitle>
                <CardImg
                  id='itechw'
                  src={require('./img/techw.png')}
                  alt='technical workshop'
                />
                <ul>
                  <li>Web design</li>
                  <li>Git workshop</li>
                  <li>linux workshop</li>
                  <li>Bash and Shell workshop, etc.</li>
                </ul>
                <Button className='button' id='btechw'>
                  View
                </Button>
              </Card>
            </div>
          </div>

          <div className='sec sec2'>
            {/* <h1 className='secN' /> */}
            <div className='services'>
              <Card id='d2' body outline color='success'>
                <CardTitle className='title'>2D-Printing Service</CardTitle>
                <CardImg
                  id='id2'
                  src={require('./img/printer.png')}
                  alt='Printer-2D'
                />
                <ul>
                  <li>30-pages limit per week</li>
                  <li>Reset every Sunday</li>
                </ul>
                <Button className='button' id='bd2'>
                  Print
                </Button>
              </Card>
            </div>

            <div className='services'>
              <Card id='d3' body outline color='info'>
                <CardTitle className='title'>3D-Printing Service</CardTitle>
                <CardImg
                  id='id3'
                  src={require('./img/3d-printer.png')}
                  alt='Printer-3D'
                />
                <ul>
                  <li>3D print services for SCE members</li>
                </ul>
                <Button className='button' id='bd3'>
                  Print
                </Button>
              </Card>
            </div>

            <div className='services'>
              <Card id='after' body outline color=''>
                <CardTitle className='title'>After Hour Room Access</CardTitle>
                <CardImg
                  id='iafter'
                  src={require('./img/clock.png')}
                  alt='after'
                />
                <ul>
                  <li>
                    Available studying room and hangout space with friends
                  </li>
                  <li>We also host party, movie, and game nights</li>
                </ul>
                <Button className='button' id='bafter'>
                  View
                </Button>
              </Card>
            </div>
          </div>

          <div className='sec sec3'>
            {/* <h1 className='secN' /> */}
            <div className='services'>
              <Card id='hardware' body outline color='warning'>
                <CardTitle className='title'>
                  Hardware Hacking Station
                </CardTitle>
                <CardImg
                  id='ihardware'
                  src={require('./img/hardware.png')}
                  alt='Hardware Station'
                />
                <ul>
                  <li>ESD benches</li>
                  <li>Soldering tools, Soldering irons, and fume fans</li>
                  <li>Power supplies and multimeters</li>
                </ul>
                <Button className='button' id='bhardware'>
                  Start Hacking
                </Button>
              </Card>
            </div>

            <div className='services'>
              <Card id='monitor' body outline color='danger'>
                <CardTitle className='title'>Monitors and Keyboards</CardTitle>
                <CardImg
                  id='imonitor'
                  src={require('./img/monitor.png')}
                  alt='Monitor'
                />
                <ul>
                  <li>Every table at SCE comes with a monitor for you</li>
                  <li>Keyboards available at request</li>
                </ul>
                <Button className='button' id='bmonitor'>
                  Monitor
                </Button>
              </Card>
            </div>

            <div className='services'>
              <Card id='equipm' body outline color=''>
                <CardTitle className='title'>Equipment Lending</CardTitle>
                <CardImg
                  id='iequipm'
                  src={require('./img/cart.png')}
                  alt='equipment'
                />
                <ul>
                  <li>Keyboards</li>
                  <li>linux laptops</li>
                  <li>Ethernet cables</li>
                  <li>Logic analyzers, etc.</li>
                </ul>
                <Button className='button' id='bequipm'>
                  Checkout
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App