import './style.css';
import { useState } from 'react';


const faqs = [
  {
    title: "where are these chairs assembled?",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
  },
  {
    title: "How long do I have to return my chair?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porta augue eu lorem varius, ut consequat velit interdum. Sed ullamcorper placerat ligula."
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porta augue eu lorem varius, ut consequat velit interdum. Sed ullamcorper placerat ligula."
  },
]

export default function App() {
  return (
    <div>
      <Accordion data={faqs}/>
    </div>
  );
}

function Accordion({data}) {
  return <div className="accordion">
    {data.map((el, i) => <AccordionItem title={el.title} text={el.text} num={i} key={el.title}/>)}
  </div>
} 

function AccordionItem({num, title, text}) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen((isOpen) => !isOpen)
  }

  return (
    <div className={`item ${isOpen ? "open": ""}`} onClick={handleToggle}>
      <p className="number">{num < 9 ? `0${num + 1}`: num +1}</p>
      <p className="title ">{title}</p>
      <p className="icon">{isOpen ? '-': '+'}</p>
      {isOpen && <div className="content-box">{text}</div>}
    </div>
  )
}
