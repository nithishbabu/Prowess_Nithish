import './css/Banner.css'
function Scoreboard(){
    let player=[{
        playername:"virat kohli",
        team:"RCB",
        runs:900
    },

    
    {
        playername:"dhawan",
        team:"SRH",
        runs:700
    },

    {   playername:"rishabh",
        team:"DC",
        runs:400
    },

    {
        playername:"warner",
    team:"srh",
    runs:800
    },
    {
        playername:"gill",
    team:"kkr",
    runs:1000
    },

    {
        playername:"pant",
        team:"dl",
        runs:400
    }




]

player.sort((a,b)=>{
    return b.runs-a.runs;

}
);

    return(
    <div class="content-ctn">
<table>
    <tr class="table-heading">
        <th>playername</th>
        <th>team</th>
        <th>runs</th>
    </tr>
    <tr>
        <td>{player[0].playername}</td>
        <td>{player[0].team}</td>
        <td>{player[0].runs}</td>
    </tr>
    <tr>
        <td>{player[1].playername}</td>
        <td>{player[1].team}</td>
        <td>{player[1].runs}</td>
    </tr>
    <tr>
        <td>{player[2].playername}</td>
        <td>{player[2].team}</td>
        <td>{player[2].runs}</td>
    </tr>
    <tr>
        <td>{player[3].playername}</td>
        <td>{player[3].team}</td>
        <td>{player[3].runs}</td>
    </tr>

    <tr>
        <td>{player[4].playername}</td>
        <td>{player[4].team}</td>
        <td>{player[4].runs}</td>
    </tr>
    <tr>
        <td>{player[5].playername}</td>
        <td>{player[5].team}</td>
        <td>{player[5].runs}</td>
    </tr>
    
   
    
</table>

    </div>

 )

}export default Scoreboard