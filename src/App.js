import logo from './logo.svg';
import './App.css';

import { useEffect, useState } from "react";
import { contract, providers } from "ethers";

function App() {
  const [isWalletInstalled, setIsWalletInstalled] = useState(false);
  // state for keeping track of current connected account.
  const [account, setAccount] = useState(null);
 
  useEffect(() => {
        if (window.ethereum) {
            setIsWalletInstalled(true);
        }
    }, []);
 
  async function connectWallet() {
        window.ethereum
            .request({
                method: "eth_requestAccounts",
            })
            .then((accounts) => {
                setAccount(accounts[0]);
            })
            .catch((error) => {
                alert("Something went wrong");
            });
    }
    if (account === null) {
      return (
        <div className="App" style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%"        
        }}>
          { 
            isWalletInstalled ? (
              <button onClick={connectWallet} >Connect Wallet</button>
            ) : (
              <div>
              <p>Install Metamask wallet</p>
              <iframe src="https://giphy.com/embed/IhIsxGk9FqOSI7a0Nn" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/agt-nbc-americas-got-talent-IhIsxGk9FqOSI7a0Nn"></a></p>
              </div>
            )
          }
        </div>
      );
    }

    return (
      <div className="App" style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)"
      }}> 
        <p>Connected as: {account}</p>
        <iframe src="https://giphy.com/embed/3ohs87wLvHrng88PrG" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/bbcamerica-bbc-america-dirk-gently-3ohs87wLvHrng88PrG"></a></p>
      </div>
    ); 
}

export default App;
