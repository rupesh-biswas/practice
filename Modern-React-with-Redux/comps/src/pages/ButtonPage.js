import Button from '../components/Button';
import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";


export default function ButtonPage() {

    function handleClick() { }

    return (
        <div>
            <div>
                <Button
                    success
                    rounded
                    outline
                    className="mb-5"
                    onClick={handleClick}
                >
                    <GoBell />
                    Click Me!
                </Button>
            </div>
            <div>
                <Button danger outline onMouseEnter={handleClick}>
                    <GoCloudDownload />
                    Buy Now!
                </Button>
            </div>
            <div>
                <Button warning onMouseLeave={handleClick}>
                    <GoDatabase />
                    See Deal!
                </Button>
            </div>
            <div>
                <Button secondary outline>
                    Hide Ads!
                </Button>
            </div>
            <div>
                <Button primary rounded>
                    Something!
                </Button>
            </div>
        </div>
    );
}
