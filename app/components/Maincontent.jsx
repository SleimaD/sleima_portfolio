import { useState } from 'react';
import Navbar from './Navbar'
import Works from './../works/page';
import Resume from './Resume';

function Maincontent() {
    const [activeComponent, setActiveComponent] = useState('works'); 

    const renderComponent = () => {
      switch (activeComponent) {
        case 'works':
          return <Works />;
        case 'resume':
          return <Resume />;
        default:
          return null;
      }
    };
  


  return (
    <div className="bg-[#000000cb] w-[75%] h-full mt-10 rounded-t-xl mx-4 backdrop-blur-sm ">
        <Navbar setActiveComponent={setActiveComponent} activeComponent={activeComponent} />
        <div className='main  h-full mt-10 mb-16 overflow-y-auto '>
            {renderComponent()}
        </div>
    </div>
)
}

export default Maincontent
