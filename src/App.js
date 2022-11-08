import { useEffect, useState } from "react";
import ListCard from "./ListCard";

import './App.scss';
import { Logo, Ruler, Globe, Medal, Search, Campaign, Percentage, Typography, Idea } from "./icons";
const listItem = [
    {
        itemIcon: <Logo />,
        itemTitel: 'The TLD',
        itemDescription: 'Does the domain extension math the language of the domain name?',
    },
    {
        itemIcon: <Ruler />,
        itemTitel: 'Domain Length',
        itemDescription: 'Is the domain short enough to remember?',
    },
    {
        itemIcon: <Globe />,
        itemTitel: 'Language',
        itemDescription: 'How complex is the actual domain name?',
    },
    {
        itemIcon: <Medal />,
        itemTitel: 'International recognition',
        itemDescription: 'Can the domain name be used on an international scale?',
    },
    {
        itemIcon: <Search />,
        itemTitel: 'Search engine',
        itemDescription: 'Does the domain follow the search engine guidelines?',
    },
    {
        itemIcon: <Campaign />,
        itemTitel: 'Advertising Potential',
        itemDescription: 'Could the domain be used for advertising campaigns?',
    },
    {
        itemIcon: <Percentage />,
        itemTitel: 'Sales Opportunities',
        itemDescription: 'Can the domain name be used on an international scale?',
    },
    {
        itemIcon: <Typography />,
        itemTitel: 'Typo susceptibility',
        itemDescription: 'How high is the risk of mistyping the domain name?',
    },
    {
        itemIcon: <Idea />,
        itemTitel: 'Business potential',
        itemDescription: 'Can the domain name be used as your company address',
    },
]
const App = () => {
    return (
        <div className="app">
            <div className="list_items-wrapper">
                {listItem.map(function (item) {
                    return (
                        <ListCard itemIcon={item.itemIcon} itemTitel={item.itemTitel} itemDescription={item.itemDescription}></ListCard>
                    )
                })}
            </div>
        </div>
    );
}

export default App;