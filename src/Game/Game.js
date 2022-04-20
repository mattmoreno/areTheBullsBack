import React, { Component } from 'react';
import Moment from 'react-moment';
//import preloader from '../images/preloader.svg';

const urlForUsername = 'http://arethebullsback.com/feed/2122/bulls_schedule.json';

class Game extends Component {
  constructor(props) {
    super(props)
    this.state = {
      requestFailed: false,
      gameNum: 2 + 82 + 4
    }
  }

  componentDidMount() {
      //this.intervalId = setInterval(() => this.loadData(), 5000);
      this.loadData(); // also load one immediately
  }

  componentWillUnmount() {
      clearInterval(this.intervalId);
  }

  loadData() {
    fetch(urlForUsername)
      .then(response => {
        if (!response.ok) {
          throw Error("Network request failed")
        }

        return response
      })
      .then(data => data.json())
      .then(data => {
        this.setState({
          games: data.gscd.g,
          myTeamGame: this.state.gameNum - 1
        })
      }, () => {
        this.setState({
          requestFailed: true,
        })
      })
  }

  render() {
    if (this.state.requestFailed) return null
    if (!this.state.games) return null

    console.log(this.state.games);

    const myTeamGame = this.state.games[this.state.myTeamGame];

    //console.log(myTeamGame);

    /* ARE THE BULLS HOME OR AWAY
    ======================================== */
    var myTeam = '';
    var opponent = '';

    if (myTeamGame.v.ta === 'CHI') {
      myTeam = myTeamGame.v;
      opponent = myTeamGame.h;
    } else {
      myTeam = myTeamGame.h;
      opponent = myTeamGame.v;
    }

    //console.log(myTeam);


    /* GET SCORE OF THE GAME
    ======================================== */
    var genNoWords = ["No", "Nope", "Nah", "Nay", "No Chance", "No Way", "Umm no", "Get Real", "Yea Right", "Ugh", "Bruh"];
    var	genNo = genNoWords[Math.floor(Math.random() * genNoWords.length)];

    var genYesWords = ["Yes", "Yea", "Uh-Huh", "Yup", "We Back", "Yessir", "Totally", "You Bet", "Totes", "You know it", "You Betcha", "Oh Yeah!", "That's Right", "Booyah", "Let's Go!"];
    var	genYes = genYesWords[Math.floor(Math.random() * genYesWords.length)];

    var genNotSureWords = ["..."];
    var	genNotSure = genNotSureWords[Math.floor(Math.random() * genNotSureWords.length)];

    function MyTeamWin() {
      return <h2>{genYes}</h2>
    }

    function MyTeamLoss() {
      return <h2>{genNo}</h2>
    }

    function MyTeamInGame() {
      return <h2>{genNotSure}</h2>
    }

    var myTeamScore = parseInt(myTeam.s, 10);
    var opponentScore = parseInt(opponent.s, 10);

    function DidMyTeamWin() {
      if ((myTeamGame.st === "3") && myTeamScore > opponentScore) {
        return <MyTeamWin />
      }
      if ((myTeamGame.st === "3") && myTeamScore < opponentScore) {
        return <MyTeamLoss />
      }
      return <MyTeamInGame />
    }


    function AwayScore() {
      if (myTeamGame.st === "3") {
        return <div className="score">{myTeamGame.v.s}</div>
      }
      return null
    }

    function HomeScore() {
      if (myTeamGame.st === "3") {
        return <div className="score">{myTeamGame.h.s}</div>
      }
      return null
    }

    return (
      <React.Fragment>
        <div className="section ucbg">
        <div className="container">
          <div className="align-items-center justify-content-center">
          <h1>Are the Bulls Back?</h1>
          <div className="arethey">
            <DidMyTeamWin />
            {/* <h2>God damn right we are!</h2> */}
          </div>

          <div className="boxscore row justify-content-center">
            <div className="col-md-6 col-lg-5">

              <div className="gameinfo text-center">
                <h4 id="gamedate"><Moment format="dddd, MMMM D, YYYY">{myTeamGame.etm}</Moment></h4>
                <h5 id="gamearena">{myTeamGame.an} | {myTeamGame.ac}, {myTeamGame.as}</h5>
                <h5 id="gameseries" className="gamespace">{myTeamGame.seri}</h5>
              </div>

              <div className="gamescores row">
                <div id="vis" className="col">
                  <div className={'team ' +  myTeamGame.v.ta.toLowerCase()}>
                        <img src={'https://i.cdn.turner.com/nba/nba/assets/logos/teams/primary/web/' + myTeamGame.v.ta.toLowerCase() +'.svg'} alt={myTeamGame.v.tn} className="img-fluid mx-auto d-block" />
                  </div>
                  <AwayScore />
                </div>
                <div id="home" className="col">
                  <div className={'team ' +  myTeamGame.h.ta.toLowerCase()}>
                        <img src={'https://i.cdn.turner.com/nba/nba/assets/logos/teams/primary/web/' + myTeamGame.h.ta.toLowerCase() +'.svg'} alt={myTeamGame.h.tn} className="img-fluid mx-auto d-block" />
                  </div>
                  <HomeScore />
                </div>
              </div>

              <div id="fullbox" className="fullbox">
                    <a href={'https://www.nba.com/game/' + myTeamGame.v.ta.toLowerCase() + '-vs-' + myTeamGame.h.ta.toLowerCase() + '-' + myTeamGame.gid} target="_blank" rel="noopener noreferrer">Full Game Details</a>
              </div>

            </div>
          </div>

          </div>
        </div>
        </div>



      </React.Fragment>
    )
  }
}

export default Game;
