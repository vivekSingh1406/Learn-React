
function Parent() {
    const message = "Hello from Parent";
    return (
        <div>
            <Child message={message} />
        </div>
    );
}

function Child({ message }) {
    return (
        <div>
            <Grandchild message={message} />
        </div>
    );
}

function Grandchild({ message }) {
    return (
        <div>
            <p>Message: {message}</p>
        </div>
    );
}

export default function PropDrilling() {
    return (
        <div>
            <Parent />
        </div>
    );
}