import { Button } from "../../common/components/Button";
import { PageTitle } from "../../common/components/PageTitle";

export function OrdersPage(props) {

    return (
        <div>
            <PageTitle>Orders Page</PageTitle>
            <Button onClick={props.onSignOut} label="Sign Out"></Button>
        </div>
    );
}