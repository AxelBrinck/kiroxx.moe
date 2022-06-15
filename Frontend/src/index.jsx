import { render } from 'solid-js/web';
import { createSignal } from 'solid-js';

const App = () => {
    const [counter, setCounter] = createSignal(0);
    return (
        <>
            <h1>Counter</h1>
            <p>{counter}</p>
            <button onClick={() => {
                setCounter(counter => counter + 1);
            }}>Increment</button>
        </>
    );
}

render(App, document.body)
