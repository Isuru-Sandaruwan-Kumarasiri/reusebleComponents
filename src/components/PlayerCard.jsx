function PlayerCard({cricketerName,score,ininngs,average}) {
    return ( 
        <div>
            <div className="container">
                <div className="content" style={{display:"flex", justifyContent:"center",alignItems:"center"}}>
                    <div className="right">
                         <img src="" alt="" />
                    </div>
                    <div className="left">
                          <h3>{cricketerName}</h3>
                          <h2>{score}</h2>
                          <div style={{display:"flex", justifyContent:"center",alignItems:"center"}}>
                            <div><h6  style={{margin:"15px"}}><span>Ininng :</span>{ininngs}</h6></div>
                            <div ><h6  style={{margin:"15px"}}><span>Average :</span>{average}</h6></div>
                          </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default PlayerCard;