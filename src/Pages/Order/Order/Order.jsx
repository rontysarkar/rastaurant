import Cover from "../../Sherd/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import orderCoverImg from '../../../assets/shop/banner2.jpg'
import { useState } from "react";
import OrderTabs from "../OrderTabs/OrderTabs";
import { useParams } from "react-router-dom";
import useMenu from "../../../hooks/useMenu";




const Order = () => {
    const categories = ['salad','pizza','soup','dessert','drink']
    const {category} = useParams()
    const initialIndex = categories.indexOf(category)
    const [tabindex,setTabIndex] = useState(initialIndex)
    const [menuItem] = useMenu()
    
    const salads = menuItem.filter(d => d.category === 'salad')
    const drinks = menuItem.filter(d => d.category === 'drinks')
    const soups = menuItem.filter(d => d.category === 'soup')
    const pizzas = menuItem.filter(d => d.category === 'pizza')
    const desserts = menuItem.filter(d => d.category === 'dessert')

    return (
        <div>
            <Cover title={'Order now'} img={orderCoverImg} />
            <Tabs defaultIndex={tabindex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>SALAD</Tab>
                    <Tab>PIZZA</Tab>
                    <Tab>SOUP</Tab>
                    <Tab>DESSERT</Tab>
                    <Tab>DRINKS</Tab>
                    
                </TabList>
                <TabPanel>
                    <OrderTabs item={salads}/>
                </TabPanel>
                <TabPanel>
                <OrderTabs item={pizzas}/>
                </TabPanel>
                <TabPanel>
                <OrderTabs item={soups}/>
                </TabPanel>
                <TabPanel>
                <OrderTabs item={desserts}/>
                </TabPanel>
                <TabPanel>
                <OrderTabs item={drinks}/>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;