
import './App.css';
import FullName from './components/FullName';
import Adress from './components/Adress';
import Image from './components/Image';
function App() {
  return (
    <div className="App">
      <header className="App-header">
       
      
       <FullName/>
       <Adress/>
       <Image>
       <img src='https://media-exp1.licdn.com/dms/image/C4D03AQFFBJNHNGZZBg/profile-displayphoto-shrink_800_800/0/1663409858916?e=1674691200&v=beta&t=c0EJ19IM8c8NelkRWbDCUD6RzBXHi89AeTzlWNyugSA' className='Img' alt="myimage" width={'50%'} />

       </Image>
      </header>
    </div>
  );
}

export default App;
