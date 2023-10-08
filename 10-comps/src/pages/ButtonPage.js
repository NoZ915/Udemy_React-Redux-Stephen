import Button from "../components/Button";
import { GoBellFill, GoHubot, GoPasskeyFill } from "react-icons/go";

function ButtonPage(){
    const handleClick = () => {
        console.log("Click!!");
    }
    return (
        <div>
            <div>
                <Button success rounded outline className="mb-10" onClick={handleClick}>
                    <GoBellFill />
                    Click Here !
                </Button>
            </div>
            <div>
                <Button danger outline onMouseEnter={handleClick}>
                    <GoHubot />
                    Buy Now !
                </Button>
            </div>
            <div>
                <Button warning>
                    <GoPasskeyFill onMouseOut={handleClick}/>
                    See Deal !
                </Button>
            </div>
            <div>
                <Button secondary outline>Hide Ads !</Button>
            </div>
            <div>
                <Button primary rounded>Something !</Button>
            </div>
        </div>
    )
}

export default ButtonPage;


