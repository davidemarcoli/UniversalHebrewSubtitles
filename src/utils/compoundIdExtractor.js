const extractCompoundID = (compoundID) => {
    const [id, season, episode] = compoundID.split(":");
    
    return [id, season, episode];
};


export default extractCompoundID;