import { Button } from "@mui/material"

export default function BodyColor() {
    const handleClick = () => {
        document.body.style.backgroundColor = "blue";
        document.body.style.color = "white";
    }

    return (
        <div className="advice">
            <Button variant="text" onClick={handleClick}>Text</Button>
        </div>)
}