import React from "react";

const Connected = (props) => {
    return (
        <div className="connected-container">
            <h1 className="connected-header">Wallet connected, you can vote now!</h1>
            <p className="connected-account"><u>Account ID: {props.account}</u></p>
            <p className="connected-account consun"><b>Voting closes in {props.remainingTime} Days</b></p>
            {props.showButton ? (
                <p className="connected-account">Thanks for your vote.</p>
            ) : (
                <div>
                    <div>
                        <label for="candidates">Select Emirate:</label>
                        <form>
                            <select value={props.number} onChange={props.handleNumberChange} name="Emirate" id="candidate">
                                {props.candidates.map((candidate) => (
                                    <option value={candidate.index}>{candidate.name}</option>

                                ))}
                            </select>
                        </form>
                    </div><br></br>
                    <div className="column">
                        <button className="vote-button" onClick={props.voteFunction}>Vote</button>
                    </div>
                </div>
            )}

            <br></br>

            <div className="row">
                {props.candidates.map((candidate, index) => (
                    <div className="column">
                        <div className="card">
                            <h4><b>{candidate.name}</b></h4>
                            <p>Votes: {candidate.voteCount}</p>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    )
}

export default Connected;