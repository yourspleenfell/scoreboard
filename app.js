const players = [
    {
        name: "Dylan",
        id: 1,
    },
    {
        name: "Darb",
        id: 2,
    },
    {
        name: "Brad",
        id: 3,
    },
    {
        name: "LSP",
        id: 4,
    }

]

class Header extends React.Component {
    render() {
        return (
            <header>
                <h1>{ this.props.title }</h1>
                <span className="stats">Players: { this.props.totalPlayers }</span>
            </header>
        );
    }
}

class Player extends React.Component {
    render() {
        return (
            <div className="player">
                <span className="player-name">
                    <button
                        className="remove-player"
                        onClick={ () => this.props.removePlayer(this.props.id) }
                    >✖</button>
                    { this.props.playerName }
                </span>
    
            <Counter />
            </div>
        );        
    }
}

class Counter extends React.Component {

    constructor() {
        super();
        this.state = {
            score: 0,
        };
    }

    incrementScore = () => {
        this.setState( prevState => ({
            score: prevState.score + 1,
        }));
    }

    decrementScore = () => {
        this.setState( prevState => ({
            score: prevState.score - 1,
        }));
    }

    render() {
        return (
            <div className="counter">
                <button
                    className="counter-action decrement"
                    onClick={ this.decrementScore }
                > - </button>
                <span className="counter-score">{ this.state.score }</span>
                <button
                    className="counter-action increment"
                    onClick={ this.incrementScore }
                > + </button>
            </div>
        );
    }
}


class App extends React.Component {
    constructor(){
        super();
        this.state = {
            players: players,
        }
    }

    handleRemovePlayer = (id) => {
        this.setState( prevState => ({
            players: prevState.players.filter( p => p.id !== id ),
        }));
    }

    render() {
        return (
            <div className="scoreboard">
                <Header
                    title="Scoreboard"
                    totalPlayers={ this.state.players.length }
    
                />
                {/* Player list */}
                { this.state.players.map(player =>
                    <Player
                        key={ player.id.toString() }
                        id={ player.id }
                        playerName={ player.name }
                        removePlayer={ this.handleRemovePlayer }
                    />
                ) }
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
