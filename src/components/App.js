import React, { Component } from 'react';
import logo from '../logo.png';
import './App.css';
import Web3 from 'web3'



class App extends Component {

    async componentWillMount() {
        let web3 = new Web3('https://mainnet.infura.io/v3/7acd42ff4e6f448a821d784cab3a93ec')
        let latestBlock = await web3.eth.getBlock('latest')
        console.log('latest Block', latestBlock)
        this.setState({
            blockNumber: latestBlock.number,
            difficulty: latestBlock.difficulty
        })
        let gasPrice = await web3.eth.getGasPrice()
        this.setState({
                gasPrice: gasPrice
            })
            // Fetch latest 10 blocks
        let block
        let latestBlocks = []
        for (let i = 0; i < 10; i++) {
            block = await web3.eth.getBlock(latestBlock.number - i)
            console.log(block)
            latestBlocks.push(block)
        }
        this.setState({
            latestBlocks: latestBlocks
        })

    }
    constructor(props) {
        super(props);
        this.state = {
                blockNumber: 0,
                difficulty: 0,
                gasPrice: 0,
                latestBlocks: []
            }
            // this.handleChange=this.handleChange.bind(this);
            // this.handleSubmit=this.handleSubmit.bind(this);
    }

    render() {
        return ( <
            div >
            <
            nav className = "navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow" >
            <
            a className = "navbar-brand col-sm-3 col-md-2 mr-0"
            href = "Made with Love by Rakshit"
            target = "_blank"
            rel = "noopener noreferrer" >
            Wanna Learn Blockchain ? <
            /a> < /
            nav > <
            div className = "container-fluid mt-5" >
            <
            div className = "row" >
            <
            main role = "main"
            className = "col-lg-12 d-flex text-center" >

            <
            div className = "content mr-auto ml-auto"
            style = {
                { width: '800px' }
            } >
            <
            h1 class = "jumbotron" > Ethereum Blockchain Explorer < /h1> 

            <
            h4 > The Latest Block, Difficulty and Gas Price is : < /h4> <
            div className = "row" >
            <
            div className = "col-4" >
            <
            div className = "bg-light pt-4 pb-3 m-1" >
            <
            h5 > Latest Block < /h5> <
            p > { this.state.blockNumber } < /p> < /
            div > <
            /div> < /
            div >

            <
            div className = "row" >
            <
            div className = "col-4" >
            <
            div className = "bg-light pt-4 pb-3 m-1" >
            <
            h5 > Difficulty < /h5> <
            p > {
                this.state.difficulty
            } < /p> < /
            div > <
            /div> < /
            div >


            <
            div className = "row" >
            <
            div className = "col-4" >
            <
            div className = "bg-light pt-4 pb-3 m-1" >
            <
            h5 > Gas Price < /h5> <
            p > {
                this.state.gasPrice
            } < /p> < /
            div > <
            /div> 



            <
            /div>  <
            div className = "row" >
            <
            div className = "col-lg-12 mt-3" >
            <
            div className = "bg-light pt-4 pb-3 m-1" >
            <
            div className = "card" >
            <
            div className = "class-header" >
            <
            h5 > LATEST BLOCKS < /h5> < /
            div > <
            div className = "card-body" >
            <
            table className = "table" >
            <
            thead >
            <
            tr >
            <
            th scope = "col" > # < /th> <
            th scope = "col" > Hash < /th> <
            th scope = "col" > Miner < /th> <
            th scope = "col" > Timestamp < /th>

            <
            /tr> < /
            thead > <
            tbody > {
                this.state.latestBlocks.map((block, key) => {
                    return ( <
                        tr key = { key } >
                        <
                        th scope = "row" > { block.number } < /th> <
                        td > { block.hash.substring(0, 20) }... < /td> <
                        td > {
                            block.miner.substring(0, 20)
                        }... < /td> <
                        td > { block.timestamp } < /td> < /
                        tr >
                    )
                })
            } <
            /tbody>

            <
            /table> < /
            div > <
            /div>

            <
            /div> < /
            div > <
            /div>

            <
            /div>

            <
            /main > < /
            div > < /
            div > <
            /div>
        );
    }
}

export default App;