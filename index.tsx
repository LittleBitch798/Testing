
import { createGlobalStyle } from 'styled-components';
import InputComponent from './InputComponent';
import CounterComponent from './CounterComponent';
import StateDisplayComponent from './StateDisplayComponent';
import useGlobalState from './store.tsx';

// Define global styles
const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
    padding: 20px;
  }
  .box {
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    height: 200px;
    margin-bottom: 20px;
  }
`;

// Define the Tpp component
function Tpp() {
  try {
    const { backgroundColor } = useGlobalState();

    return (
      <div >
        <GlobalStyle />
        <div className="box">
          <InputComponent />
        </div>
        <div className="box">
          <CounterComponent />
        </div>
        <div className="box">
          <StateDisplayComponent />
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error fetching global state:', error);
    return <div>Error loading components</div>;
  }
}

export default Tpp;