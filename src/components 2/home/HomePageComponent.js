import React from 'react';
import HomeCarousel from './HomeCarouselComponent';
import VideoCarousel from './VideoCarouselComponent';
import { Row, Col } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons'; 

function HomePage() {
return(
    <div className='App'>
        <HomeCarousel />
        <VideoCarousel />
        <Row>
            <Col sm={12} md={12} className='hp-soundcloud-player'>
                <div className='hp-player'style={{ marginTop: 40, marginLeft: 40}}>
                    {/* soundcloud player */}
                    <iframe width="85%" height="166" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1249308064&color=%2354041c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" title="Walt &amp; Jackie cover You've Got A Friend"></iframe>
                    <div style={{ fontSize: '10px', color: '#cccccc', lineBreak: 'anywhere', wordBreak: 'normal', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', fontFamily: 'Interstate', fontWeight: 100 }}>
                        <a href="https://soundcloud.com/user-371562063" title="Walt &amp; Jackie" target="_blank" rel="noreferrer" style={{ color: '#cccccc', textDecoration: 'none' }}>Walt &amp; Jackie</a> · <a href="https://soundcloud.com/user-371562063/youve-got-a-friend" title="You&#x27;ve Got A Friend" target="_blank" rel="noreferrer" style={{ color: '#cccccc', textDecoration: 'none'}}>You&#x27;ve Got A Friend</a>
                    </div>
                </div>
            </Col>
            {/* <Col sm={12} md={6} style={{ marginTop: 60, paddingLeft: 60, textAlign: 'center'}}>               
                <h3 style={{ fontSize: '3rem' }}>Booking:</h3>
                <a className='email' style={{ fontFamily: 'Playfair Display', fontSize: '2rem', color: '#A3956D'}} href="mailto:waltandjackie@gmail.com">waltandjackie@gmail.com</a> 
            </Col> */}
        </Row>
        <Row>
            <Col sm={6}>
                <h1 style={{ textAlign: 'left', marginLeft: 80, marginTop: 40, color: '#A3956D'}}>About Walt &amp; Jackie</h1>
                <p className='home-about-text' style={{ marginLeft: 60, marginBottom: 40 }}>Walt &amp; Jackie, voted "Simply the Best" Entertainers in Johnstown, PA, is an acoustic duo known for their excellent covers and engaging original songs. Their song selections, spanning over six decades of music, entertain audiences with music from artists like Elvis Presley, Adele, Neil Diamond, Carole King, Lady Antebellum, and so many more! Playing venues ranging from theaters to festivals to wineries to bars, Walt &amp; Jackie have a special chemistry and ease that captivates audiences to the last song. They play a variety of instruments, including piano, ukulele, guitar and Walt's famous bongos, and they move easily from old country to new pop, bringing a fresh take to live acoustic music.
                <br /> 
                <br /> 
                Walt &amp; Jackie have headlined shows at the Pasquerilla Performing Arts Center four times, presenting a popular holiday show, as well as a show that they created called "Legends", which was picked up by the Garrett Lakes Arts Festival in Maryland. They were also featured local artists at the Flood City Music Festival in 2018, and have performed at the PPG Paints Arena for a Pittsburgh Penguins fundraiser.
                <br />
                <br />
                Walt Churchey and Jackie Kopco are seasoned performers with a combined 60+ years of experience between them. They are dependable and charismatic - consummate professionals.Powerful vocalists and musicians in their own right, these two solo artists struck the perfect chord when they blended Jackie's melodic range and soaring style with Walt's raw passion and bold cadence for an unexpectedly original sound, one that's built an enthusiastic following across Western Pennsylvania.
                </p>
            </Col>
            <Col sm={6} style={{ marginTop: 100 }}>
                {/* reverbnation email widget */}
                <div class="widget_iframe" style={{ display:'inline-block', width:'300px', height:'185px', marginLeft: 50 }}>
                    <iframe class="widget_iframe" src="https://www.reverbnation.com/widget_code/html_widget/artist_1090826?widget_id=54&amp;posted_by=artist_1090826&pwc[design]=customized&pwc[background_color]=%23666666&pwc[size]=custom" width="100%" height="100%" frameborder="0" title="Reverbnation email list signup" ></iframe>
                    <div class="footer_branding" style={{ marginTop:'-5px', fontSize: '10px', fontFamily: 'Arial' }}>
                        <center>
                            <a href="https://www.reverbnation.com/band-promotion/fanreach?utm_campaign=a_features_fanreach&utm_medium=widget&utm_source=HTML5_Fan_Collector&utm_content=widgetfooter_Email newsletters for bands at ReverbNation.com" target="_blank" rel="noreferrer" style={{ textDecoration:'none', color:'#444' }}>Email newsletters for bands at ReverbNation.com</a>
                        </center>
                    </div>
                </div>
                <br />
                <br />
                <div style={{ marginLeft: 50 }}>
                    <SocialIcon url= 'https://www.facebook.com/waltandjackie' style={{ margin: 9 }}/>
                    <SocialIcon url= 'https://www.bandsintown.com/a/4261532-walt-and-jackie?came_from=257&utm_medium=web&utm_source=home&utm_campaign=search_bar' style={{ margin: 9 }}/>
                    <SocialIcon url= 'https://www.youtube.com/channel/UClZEqPxlRZEqVerkh2MYiFQ' style={{ margin: 9 }}/>
                </div>
            </Col>
        </Row>
        <Row style={{ marginBottom: 20 }}>
            <Col sm={12}>
                <p className='photo-credits'>Photo credits: <a style={{ color: '#7d7c7c'}} href='https://www.scottmillerphotography.com/' target='blank'>Scott Miller Photography</a> ~ <a style={{ color: '#7d7c7c'}} href='https://www.lynncraneportrait.com/' target='blank'>Lynn Crane Portrait</a> ~ <a style={{ color: '#7d7c7c'}} href='http://philipbalko.com/' target='blank'>Photography By Balko</a> ~ Jennifer Solensky  ~  Drawing by Jim Price
                </p>
            </Col>
        </Row>
		<div style={{ marginTop: 20 }} className='shows'>
			<Row style={{ marginBottom: 10 }}>
				<h2 style={{ fontFamily: 'Fredericka the Great' }}>Shows</h2>
			</Row>
			<hr />
            <br />
            {/* <Row>
                <Col>
                <h4>Nothing to see here</h4>
                <p style={{ fontSize:100 }}>&#128542;</p>
                </Col>
            </Row> */}
            {/* <Row className="justify-content-center" style={{ marginTop: 20 }}>
                <Col xs={12} md={3} style={{ alignItems: 'right' }}>
					<h4>8 December</h4>
					<h5>8:30pm</h5>
                    <hr className='hide-hr' style={{ marginTop: 30, marginBottom: 30}}></hr>
				</Col>
				<Col xs={12} md={3}>
					<h4>Home For The Holidays</h4>
                    <hr className='hide-hr' style={{ marginTop: 10, marginBottom: 30}}></hr>
				</Col>
                <Col xs={12} md={3}>
					<h4>Arbutus Park Retirement Community</h4>
					<p>207 Ottawa St<br />Johnstown, PA</p>
                    <hr className='hide-hr' style={{ marginTop: 10, marginBottom: 30}}></hr>
				</Col>			
			</Row> */}
            {/* <hr />
            <br /> */}
            {/* <Row className="justify-content-center" style={{ marginTop: 20 }}>
				<Col xs={12} md={3} style={{ alignItems: 'right' }}>
					<h4>14 July</h4>
                    <h5>6:00pm - 7:00pm</h5>
                    <hr className='hide-hr' style={{ marginTop: 30, marginBottom: 30}}></hr>
				</Col>
				<Col xs={12} md={3}>
					<h4>Roxbury Bandshell Summer Concert Series</h4>
                    <hr className='hide-hr' style={{ marginTop: 10, marginBottom: 30}}></hr>
				</Col>
                <Col xs={12} md={3}>
                    <h4>Roxbury Bandshell</h4>
                    <p>1430 Franklin Street<br />Johnstown, PA</p>
                    <hr className='hide-hr' style={{ marginTop: 10, marginBottom: 30}}></hr>
				</Col>
			</Row>
            <hr />
            <br /> */}
            <Row className="justify-content-center" style={{ marginTop: 20 }}>
				<Col xs={12} md={3} style={{ alignItems: 'right' }}>
					<h4>25 June</h4>
                    <h5>7:00pm - 10:00pm</h5>
                    <hr className='hide-hr' style={{ marginTop: 30, marginBottom: 30}}></hr>
				</Col>
				<Col xs={12} md={3}>
					<h4>The Fifth Local Eatery And Alehouse</h4>
                    <hr className='hide-hr' style={{ marginTop: 10, marginBottom: 30}}></hr>
				</Col>
                <Col xs={12} md={3}>
                    <p>1424 Scalp Avenue<br />Johnstown, PA</p>
                    <hr className='hide-hr' style={{ marginTop: 10, marginBottom: 30}}></hr>
				</Col>
			</Row>
            <hr />
            <br />
            {/* <Row>
                <Col>
                <h4>Nothing to see here</h4>
                <p style={{ fontSize:100 }}>&#128542;</p>
                </Col>
            </Row> */}            
            <Row className="justify-content-center" style={{ marginTop: 20 }}>
				<Col xs={12} md={3} style={{ alignItems: 'right' }}>
					<h4>14 August</h4>
					<h5>6:00pm</h5>
                    {/* <h3 style={{ marginTop: 40 }}><a className="ticket-link" href="https://www.galleryongazebo.org/sip-savor-evenings-2023/" rel="noreferrer" target="_blank">Get Your Tickets</a></h3> */}
                    <hr className='hide-hr' style={{ marginTop: 30, marginBottom: 30}}></hr>
				</Col>
				<Col xs={12} md={3}>
					<h4>Sip &amp; Savor</h4>
                    <h6>Music begins at 6 PM under the twinkling lights of the Piazza, inside the Gallery, or across Gazebo Place under the Roof of the Central Park Gazebo. Plan now to attend. Dress is informal. Adults only. $25 donation includes culinary and liquid delights.</h6>
                    <hr className='hide-hr' style={{ marginTop: 10, marginBottom: 30}}></hr>
				</Col>
                <Col xs={12} md={3}>
					<h4>Gallery On Gazebo</h4>
					<p>140 Gazebo Place<br />Johnstown, PA</p>
                    <hr className='hide-hr' style={{ marginTop: 10, marginBottom: 30}}></hr>
				</Col>
			</Row>
            <hr />
            <br />
            {/* <Row>
                <Col>
                    <Button 
                        className='btn-shows'
                        variant="default"
                        style={{ color: "#A3956D", borderColor: "#A3956D", fontFamily: "Avenir-light", fontSize: '1.25rem', margin: 16 }}
                        
                        size="lg"
                        href="mailto:waltandjackie@gmail.com">
                        Request A Show
                    </Button>
                </Col>
            </Row>
            <br /> */}
			<hr />
		</div>
    </div>
    );
}

export default HomePage;