import { Link } from "react-router-dom";

export function FaqPage() {
    return (
        <div>
            <h1>FAQ</h1>
            <ol>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
            </ol>
            <Link to="/">Sign In</Link>
        </div>
    );
}