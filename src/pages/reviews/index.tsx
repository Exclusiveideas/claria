import ReviewComponent from '../../components/reviewComponent';
import './reviews.css'; 

const Reviews = () => {
  const reviews = [
    {
      author: "Maurice, Janeth",
      date: "02.12.2020",
      text: `
      I have been cooperating with CLARIA for more than a year. 
      I would like to note: the quality of tailoring and fabrics, a large and weekly updated assortment, in accordance with fashion trends! 
      Attentive, polite, competent managers who will always pick up exactly what you need!!! 
      `,
      reverse: true
    },
    {
      author: "Andrew, Silver",
      date: "06.12.2020",
      text: `
      I have been working with the CLARIA company for about 3 years, I was not mistaken in choosing a factory. 
      Very pleased with the weekly product updates. Very pleased with the weekly product updates. 
      Affordable prices and a variety of assortment attract our customers. I wish your company further prosperity, many new ideas, inspiration for your designers. 
      Special thanks to your managers for understanding, patience and attentiveness to customers. 
      `,
      reverse: false
    },
    {
      author: "Gabriel, Simmons",
      date: "13.01.2021",
      text: `
      I would like to thank you for a quality product. My store has been working with you for a year!
      I really like that you often update the assortment and always have a good selection of fashionable clothes.
      Operational work of managers, which is rare in our time, and accurate and fast delivery of goods.
      Qualitatively selected patterns, matching the size grid and a good price make you an excellent supplier.
      `,
      reverse: true
    },
    {
      author: "Rose, Hugh",
      date: "13.01.2021",
      text: `
      Very pleased with the weekly product updates. 
      Affordable prices and a variety of assortment attract our customers.
      I would like to note: the quality of tailoring and fabrics, a large and weekly updated assortment, in accordance with fashion trends! 
      Attentive, polite, competent managers who will always pick up exactly what you need!!! 
      `,
      reverse: false
    },
    {
      author: "Luisa, Martinez",
      date: "19.01.2021",
      text: `
      I have been working with the CLARIA company for about 3 years, I was not mistaken in choosing a factory. 
      Very pleased with the weekly product updates.  I wish your company further prosperity, many new ideas, inspiration for your designers. 
      Special thanks to your managers for understanding, patience and attentiveness to customers. 
      `,
      reverse: true
    },
    {
      author: "Carolina, Gomez",
      date: "23.01.2021",
      text: `
      Working with CLARIA, I was not mistaken in choosing a factory. 
      Very pleased with the weekly product updates. Very pleased with the weekly product updates. 
      Affordable prices and a variety of assortment attract our customers. I wish your company further prosperity, many new ideas, inspiration for your designers. 
      Special thanks to your managers for understanding, patience and attentiveness to customers. 
      `,
      reverse: false
    },
    {
      author: "Hanna, Tucker",
      date: "07.03.2021",
      text: `
      I would like to thank you for a quality product. My store has been working with you for a year!
      I really like that you often update the assortment and always have a good selection of fashionable clothes.
      Operational work of managers, which is rare in our time, and accurate and fast delivery of goods.
      Qualitatively selected patterns, matching the size grid and a good price make you an excellent supplier.
      `,
      reverse: true
    },
  ]
  return (
    <div className='reviews_page'>
      {reviews.map((rev, i) => (
      <ReviewComponent key={i} review={rev} />
    ))}
    </div>
  )
}

export default Reviews;