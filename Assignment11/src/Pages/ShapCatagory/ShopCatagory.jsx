import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Sportscars from '../CarsPages/Cars/Sportscars';
import BusCar from '../CarsPages/Cars/BusCar';
import PrivateCar from '../CarsPages/Cars/PrivateCar';

const ShopCatagory = () => {
    return (
        <div className='bg-[#F1F6F9]'>
            <Tabs>
    <div className='mx-auto flex justify-center items-center'>
    <TabList>
      <Tab>Sports Cars</Tab>
      <Tab>Bus</Tab>
      <Tab>Private Cars</Tab>
    </TabList>
    </div>

   <div className='mx-auto flex justify-center items-center'>
   <TabPanel>
    {/* sports cars contain */}
      <div>
        <Sportscars />
      </div>
    </TabPanel>
    <TabPanel>
      {/* bus car container */}
      <div>
        <BusCar />
      </div>
    </TabPanel>
    <TabPanel>
     {/* private cars */}
     <div>
        <PrivateCar />
     </div>
    </TabPanel>
   </div>
  </Tabs>
        </div>
    );
};

export default ShopCatagory;