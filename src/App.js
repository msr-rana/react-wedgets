import React from 'react';
import Accordion from './components/Accordion';


const items =[
    {
        title : 'What is React?',
        content : 'React is front end javaScript frameWork'
    },
    {
        title : 'Why use React?',
        content : 'React is a favorite JS Library amon engineers'
    },
    {
        title : 'How do you use React?',
        content : 'you use react for create component'
    },
    {
        title : 'What is React',
        content : 'React is front end javaScript frameWork'
    }
],

 App= ()=>{
    return (
        <div>
            <Accordion items={items}/>
        </div>
    );
}
export default App;