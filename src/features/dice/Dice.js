import React,{useState} from 'react';

function Dice(props) {
    const [gameStarted, setGameStarted] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();
    const [dice, setDice] = useState(1);
    const [error, setError] = useState(null);
    const [score, setScore] = useState(0);
    const numbers = [1, 2, 3, 4, 5, 6];
  
    const startGameHandler = () => {
      setGameStarted(true);
    };
  
    const onNumberClicked = (value) => {
      setSelectedNumber(value);
      setError(null);
    };
  
    const genRandomNo = () => {
      if (selectedNumber) {
        const genratedNo = Math.ceil(Math.random() * 6);
        setDice(genratedNo);
  
        if (selectedNumber === genratedNo) {
          setScore((prev) => prev + genratedNo);
        } else {
          setScore((prev) => prev - 2);
        }
      } else {
        setError("Please Select Number");
      }
    };
    return (
        <>
        {gameStarted ? (
          <>
            <div
              justify="center"
              align="center"
              maxW="1300px"
              mx="auto"
              h="100vh"
            >
              <h1
                as="h1"
                color={error ? "red" : "black"}
                fontSize="6xl"
                mb="8"
              >
                {error ? error : "Select Number"}
              </h1>
              <div>
                {numbers.map((value) => (
                  <button
                    style={{
                        justifyContent:"center",
                        background:selectedNumber === value ? "green" : "black",
                        width:"45px",
                        marginRight:"10px",
                        border:"none",
                        color:"#fff",
                        height:"40px"
                    }}
                    onClick={() => onNumberClicked(value)}
                  >
                    {value}
                  </button>
                ))}
              </div>
              <div h="150px" width="150px" style={{marginTop:"20px"}}>
                <img src={`/dice/dice${dice}.png`} alt="icons" onClick={genRandomNo} style={{cursor:"pointer"}}/>
              </div>
  
              <p as="p" fontSize="xl">
                Click on dice to roll
              </p>
  
              <p
                color={score > 0 ? "green" : "red"}
                fontSize="8xl"
                fontWeight="bold"
              >
                {score}
              </p>
              <p fontSize="6xl" fontWeight="bold">
                Total Score
              </p>
              <button onClick={() => setScore(0)} style={{background:"green",color:"#fff",border:"none",padding:"10px"}}>Reset Score</button>
            </div>
           
          </>
        ) : (
          <div justify="center" align="center" style={{marginBottom:"30px"}}>
            <img width="50%" src="/dices.png" alt="img"/>
            <div>
              <h1 fontSize="7xl" as="h1">
                {" "}
                The Dice Game
              </h1>
              <button
                onClick={startGameHandler}
                style={{background:"purple",color:"#fff",border:"none",padding:"10px"}}
              >
                Start Game
              </button>
            </div>
          </div>
        )}
      </>    );
}

export default Dice;