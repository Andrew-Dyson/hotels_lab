import styled from 'styled-components';
import HotelBox from './containers/HotelBox';
import './App.css';


function App() {
  return (
    <AppBox>
      <HotelBox></HotelBox>
    </AppBox>
  );
}

export const AppBox = styled.div`
background-color: rgba(255,0,0,0.5);
`

export default App;
