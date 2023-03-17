import { Button } from "../../common/components/Button";
import { PageTitle } from "../../common/components/PageTitle";

export function GuestPage(props) {
    return (
        <div>
            <PageTitle>Guest Page</PageTitle>
            <Button onClick={props.onSignIn} label="Sign In"></Button>
        </div>
    );
}