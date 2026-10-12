import pic from '../../image/studjpg.jpg';
function Detail(){
    var mystyle={textAlign:'center'};
    var imgstyle={ borderRadius: '50%'}
    return (
        <div>
            <img src={pic} alt="pic" width="150" style={imgstyle}/>
            <h3 style={mystyle}>Rania Elmorabit</h3>
            <p> student id : 2004081215520 <br />
                class      :  dev   <br />
                section    :   2
            </p>
        </div>
    )
}
export default Detail;