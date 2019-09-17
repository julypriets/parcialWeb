import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

import Menu from './Components/Menu/Menu';
import TweetList from './Components/TweetList/TweetList';
import Search from './Components/Search/Search';
import TrendList from './Components/TrendList/TrendList';
import ToFollow from './Components/ToFollow/ToFollow';
import Footer from './Components/Footer/Footer'

class App extends Component {
  state = {
    menu: [],
    toFollow: [],
    trends:[],
    tweets: [],
  }

  constructor(props){
    super(props);
        fetch('https://gist.githubusercontent.com/josejbocanegra/36d259fe4a9908c2bda367b5ee9f4ed6/raw/63f9d7c460d09cb22f4299b879b1b868159efff3/tweets.json')
          .then(response => response.json())
          .then((jsonData) => {
          // jsonData is parsed json object received from url
          console.log(jsonData)
    
          //Cambio el estado de la aplicación 
          this.setState(
            {
              menu: jsonData.menu, 
              toFollow: jsonData.tofollow, 
              trends: jsonData.trends, 
              tweets: jsonData.tweets 
            }
          )
          console.log("The state is")
          console.log(this.state)
      })
      .catch((error) => {
        // handle your errors here
          console.error(error)
      })
  }

  render () {

    const menuItems = this.state.menu.map((item, index) => {
      return < Menu image={item.image} text={item.text} key={index} />
    })

    const tweets = this.state.tweets.map((item, index) => {
      return <TweetList 
                avatar={item.avatar} 
                first_name={item.first_name} 
                last_name={item.last_name} 
                nick={item.nick} 
                date={item.date} 
                content={item.content} 
                retweets={item.retweets} 
                favs={item.favs}
                key={item.index}
                />
    })

    const trends = this.state.trends.map((item, index) => {
      return <TrendList 
              hashtag={item.hashtag} 
              teweets={item.teweets}
              key={index} />
    })

    const toFollow = this.state.toFollow.map((item, index) => {
      return <ToFollow 
              avatar={item.avatar}
              first_name={item.first_name}
              last_name={item.last_name}
              nick={item.nick}
              key={index} />
    })

    return (
      <div className="App">
        <Container fluid={true}>
          <Row>
            <Col lg={2}> {menuItems} </Col>
            <Col lg={7}><h1>{tweets}</h1></Col>
            <Col lg={3}><Search/> {trends} {toFollow} <Footer /></Col>
          </Row>
        </Container>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
