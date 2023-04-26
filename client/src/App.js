import styled from 'styled-components';
import HotelBox from './containers/HotelBox';
import './App.css';


function App() {
  return (
    <AppBox>
      <Hotelbox></Hotelbox>
    </AppBox>
  );
}

export const AppBox = styled.div`
background-color: red;
`

export default App;
