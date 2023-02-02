import './css/practice.css'
function Header()
{
    const dish="veg"
    if(dish=="veg")
    {
        return(
            <div>
                <h1 class="veg">this is veg</h1>
            </div>
        )
    }
        else{
            return(
                <div>
                    <h1 class="non=veg">this is non-veg</h1>
                </div>
            )
        }
    
}
export default Header;