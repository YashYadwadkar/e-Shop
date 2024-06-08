import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';

const App = () => {
  return (
    <>
      <Header />
      <main className='py-3'>{/*py-3 padding on Y axis */}
        <Container>
         <HomeScreen />
        </Container>
      </main>
      <Footer />
    </>
    
  )
}

export default App

