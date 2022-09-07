import TestClientChild from "./TestClientChild.client";

export default function TestClientParent() {
    return (
        <div>
            <h1>TestClientParent</h1>
            <TestClientChild />
        </div>
    )
}