// const restaurant = [
//   { name:"Bakingo", rating:5, time:"45-50 min", image:"first", food:"Ice creams, Pizza", location:"Kamla Nagar" },
//   { name:"Domino's", rating:4, time:"30-35 min", image:"second", food:"Pizza", location:"Mukherjee Nagar" },
//   { name:"Burger King", rating:3, time:"25-30 min", image:"third", food:"Burgers", location:"GTB Nagar" },
//   { name:"KFC", rating:4, time:"30-40 min", image:"fourth", food:"Fried Chicken", location:"Hudson Lane" },
//   { name:"Haldiram's", rating:5, time:"20-25 min", image:"fifth", food:"North Indian", location:"Chandni Chowk" },
//   { name:"Subway", rating:3, time:"25-30 min", image:"sixth", food:"Sandwiches", location:"Rajouri Garden" },
//   { name:"McDonald's", rating:4, time:"20-30 min", image:"seventh", food:"Burgers", location:"Karol Bagh" },
//   { name:"Wow Momo", rating:5, time:"30-35 min", image:"eighth", food:"Momos", location:"Lajpat Nagar" },
//   { name:"Pizza Hut", rating:3, time:"35-45 min", image:"ninth", food:"Pizza", location:"Punjabi Bagh" },
//   { name:"Biryani Blues", rating:4, time:"40-45 min", image:"tenth", food:"Biryani", location:"CP" },

//   { name:"Belgian Waffle", rating:5, time:"20-25 min", image:"first", food:"Waffles", location:"Pitampura" },
//   { name:"Rolls King", rating:3, time:"25-30 min", image:"second", food:"Rolls", location:"Rohini" },
//   { name:"Chowringhee", rating:4, time:"35-40 min", image:"third", food:"Chinese", location:"Dwarka" },
//   { name:"Behrouz Biryani", rating:5, time:"40-50 min", image:"fourth", food:"Biryani", location:"Saket" },
//   { name:"Natural Ice Cream", rating:5, time:"20-25 min", image:"fifth", food:"Ice Creams", location:"Defence Colony" },
//   { name:"Faasos", rating:3, time:"30-35 min", image:"sixth", food:"Wraps", location:"Mayur Vihar" },
//   { name:"La Pino'z", rating:2, time:"35-40 min", image:"seventh", food:"Pizza", location:"Noida" },
//   { name:"BBQ Nation", rating:5, time:"50-55 min", image:"eighth", food:"BBQ", location:"Connaught Place" },
//   { name:"Bikanervala", rating:4, time:"25-30 min", image:"ninth", food:"Sweets", location:"Janakpuri" },
//   { name:"Cafe Coffee Day", rating:3, time:"20-25 min", image:"tenth", food:"Coffee", location:"Vasant Kunj" },

//   { name:"Sagar Ratna", rating:5, time:"30-35 min", image:"first", food:"South Indian", location:"INA" },
//   { name:"Punjabi Angithi", rating:4, time:"35-40 min", image:"second", food:"Punjabi", location:"Preet Vihar" },
//   { name:"Moti Mahal", rating:4, time:"40-45 min", image:"third", food:"North Indian", location:"Daryaganj" },
//   { name:"Giani's", rating:3, time:"20-25 min", image:"fourth", food:"Ice Creams", location:"Model Town" },
//   { name:"BTW", rating:2, time:"25-30 min", image:"fifth", food:"Street Food", location:"Ashok Vihar" },
//   { name:"Nando's", rating:5, time:"40-45 min", image:"sixth", food:"Chicken", location:"Select Citywalk" },
//   { name:"Burger Singh", rating:4, time:"30-35 min", image:"seventh", food:"Burgers", location:"Patel Nagar" },
//   { name:"Chaayos", rating:5, time:"20-25 min", image:"eighth", food:"Tea", location:"Laxmi Nagar" },
//   { name:"Dunkin'", rating:3, time:"25-30 min", image:"ninth", food:"Donuts", location:"Shahdara" },
//   { name:"Karim's", rating:5, time:"35-40 min", image:"tenth", food:"Mughlai", location:"Jama Masjid" },

//   { name:"Anand Sweets", rating:4, time:"20-25 min", image:"first", food:"Sweets", location:"Rajinder Nagar" },
//   { name:"Biryani By Kilo", rating:5, time:"45-50 min", image:"second", food:"Biryani", location:"Indirapuram" },
//   { name:"Ghar Ka Khana", rating:3, time:"30-35 min", image:"third", food:"Home Style", location:"Shalimar Bagh" },
//   { name:"Street Za", rating:2, time:"35-40 min", image:"fourth", food:"Pizza", location:"Malviya Nagar" },
//   { name:"Wow China", rating:3, time:"30-35 min", image:"fifth", food:"Chinese", location:"Uttam Nagar" },
//   { name:"Pind Balluchi", rating:5, time:"40-45 min", image:"sixth", food:"Punjabi", location:"CP" },
//   { name:"Cafe Delhi Heights", rating:4, time:"35-40 min", image:"seventh", food:"Continental", location:"Khan Market" },
//   { name:"Bercos", rating:4, time:"30-35 min", image:"eighth", food:"Asian", location:"Nehru Place" },
//   { name:"Saravana Bhavan", rating:5, time:"25-30 min", image:"ninth", food:"South Indian", location:"RK Puram" },
//   { name:"Mother Dairy", rating:1, time:"15-20 min", image:"tenth", food:"Desserts", location:"Patparganj" },
//   { name:"Food Villa", rating:4, time:"30-35 min", image:"first", food:"North Indian", location:"Ramesh Nagar" },
//   { name:"Spice Hub", rating:3, time:"35-40 min", image:"second", food:"Indian, Chinese", location:"Tilak Nagar" },
//   { name:"Tandoori Flames", rating:5, time:"40-45 min", image:"third", food:"Tandoori", location:"Rajouri Garden" },
//   { name:"Urban Bites", rating:2, time:"25-30 min", image:"fourth", food:"Fast Food", location:"Shadipur" },
//   { name:"Curry House", rating:4, time:"35-40 min", image:"fifth", food:"Indian Curry", location:"Naraina" },
//   { name:"Grill Nation", rating:5, time:"45-50 min", image:"sixth", food:"Grill, BBQ", location:"Pitampura" },
//   { name:"Masala Junction", rating:3, time:"30-35 min", image:"seventh", food:"Indian", location:"Uttam Nagar" },
//   { name:"Taste of China", rating:4, time:"30-35 min", image:"eighth", food:"Chinese", location:"Paschim Vihar" },
//   { name:"Pizza Express", rating:2, time:"25-30 min", image:"ninth", food:"Pizza", location:"Vikaspuri" },
//   { name:"Burger Point", rating:3, time:"20-25 min", image:"tenth", food:"Burgers", location:"Dwarka" },

//   { name:"South Spice", rating:5, time:"30-35 min", image:"first", food:"South Indian", location:"RK Puram" },
//   { name:"Chaat Bazaar", rating:4, time:"20-25 min", image:"second", food:"Street Food", location:"Lajpat Nagar" },
//   { name:"Royal Rasoi", rating:5, time:"40-45 min", image:"third", food:"Rajasthani", location:"Karol Bagh" },
//   { name:"Hot Wok", rating:3, time:"30-35 min", image:"fourth", food:"Asian", location:"Mayur Vihar" },
//   { name:"Desi Dhaba", rating:4, time:"35-40 min", image:"fifth", food:"Punjabi", location:"Najafgarh" },
//   { name:"Wrap & Roll", rating:2, time:"20-25 min", image:"sixth", food:"Wraps", location:"Janakpuri" },
//   { name:"Gravy Story", rating:4, time:"30-35 min", image:"seventh", food:"North Indian", location:"Kalkaji" },
//   { name:"Momo Magic", rating:5, time:"25-30 min", image:"eighth", food:"Momos", location:"Kamla Nagar" },
//   { name:"Pasta Street", rating:3, time:"35-40 min", image:"ninth", food:"Italian", location:"Saket" },
//   { name:"Cafe Brew", rating:4, time:"20-25 min", image:"tenth", food:"Coffee, Snacks", location:"Green Park" },

//   { name:"The Curry Leaf", rating:5, time:"35-40 min", image:"first", food:"South Indian", location:"CR Park" },
//   { name:"Hungry Head", rating:3, time:"25-30 min", image:"second", food:"Fast Food", location:"Rohini" },
//   { name:"Spicy Treat", rating:4, time:"30-35 min", image:"third", food:"Chinese, Indian", location:"Model Town" },
//   { name:"Grill & Chill", rating:5, time:"40-45 min", image:"fourth", food:"BBQ", location:"Noida Sector 18" },
//   { name:"Chai Point", rating:4, time:"15-20 min", image:"fifth", food:"Tea, Snacks", location:"Vaishali" },
//   { name:"Food Adda", rating:2, time:"25-30 min", image:"sixth", food:"Street Food", location:"Seelampur" },
//   { name:"Rice Bowl", rating:3, time:"30-35 min", image:"seventh", food:"Asian Bowls", location:"Indraprastha" },
//   { name:"Punjabi Tadka", rating:5, time:"35-40 min", image:"eighth", food:"Punjabi", location:"Patel Nagar" },
//   { name:"Zesty Zing", rating:4, time:"25-30 min", image:"ninth", food:"Continental", location:"Greater Kailash" },
//   { name:"Daily Delight", rating:1, time:"20-25 min", image:"tenth", food:"Home Food", location:"Trilokpuri" }
// ];

// const restaurant = [
//   { name:"Bakingo", rating:5, time:"45-50 min", image:"first", image2:"star.png", food:"Ice creams, Pizza", location:"Kamla Nagar" },
//   { name:"Domino's", rating:4, time:"30-35 min", image:"second", image2:"star.png", food:"Pizza", location:"Mukherjee Nagar" },
//   { name:"Burger King", rating:3, time:"25-30 min", image:"third", image2:"star.png", food:"Burgers", location:"GTB Nagar" },
//   { name:"KFC", rating:4, time:"30-40 min", image:"fourth", image2:"star.png", food:"Fried Chicken", location:"Hudson Lane" },
//   { name:"Haldiram's", rating:5, time:"20-25 min", image:"fifth", image2:"star.png", food:"North Indian", location:"Chandni Chowk" },
//   { name:"Subway", rating:3, time:"25-30 min", image:"sixth", image2:"star.png", food:"Sandwiches", location:"Rajouri Garden" },
//   { name:"McDonald's", rating:4, time:"20-30 min", image:"seventh", image2:"star.png", food:"Burgers", location:"Karol Bagh" },
//   { name:"Wow Momo", rating:5, time:"30-35 min", image:"eighth", image2:"star.png", food:"Momos", location:"Lajpat Nagar" },
//   { name:"Pizza Hut", rating:3, time:"35-45 min", image:"ninth", image2:"star.png", food:"Pizza", location:"Punjabi Bagh" },
//   { name:"Biryani Blues", rating:4, time:"40-45 min", image:"tenth", image2:"star.png", food:"Biryani", location:"CP" },

//   { name:"Belgian Waffle", rating:5, time:"20-25 min", image:"first", image2:"star.png", food:"Waffles", location:"Pitampura" },
//   { name:"Rolls King", rating:3, time:"25-30 min", image:"second", image2:"star.png", food:"Rolls", location:"Rohini" },
//   { name:"Chowringhee", rating:4, time:"35-40 min", image:"third", image2:"star.png", food:"Chinese", location:"Dwarka" },
//   { name:"Behrouz Biryani", rating:5, time:"40-50 min", image:"fourth", image2:"star.png", food:"Biryani", location:"Saket" },
//   { name:"Natural Ice Cream", rating:5, time:"20-25 min", image:"fifth", image2:"star.png", food:"Ice Creams", location:"Defence Colony" },
//   { name:"Faasos", rating:3, time:"30-35 min", image:"sixth", image2:"star.png", food:"Wraps", location:"Mayur Vihar" },
//   { name:"La Pino'z", rating:2, time:"35-40 min", image:"seventh", image2:"star.png", food:"Pizza", location:"Noida" },
//   { name:"BBQ Nation", rating:5, time:"50-55 min", image:"eighth", image2:"star.png", food:"BBQ", location:"Connaught Place" },
//   { name:"Bikanervala", rating:4, time:"25-30 min", image:"ninth", image2:"star.png", food:"Sweets", location:"Janakpuri" },
//   { name:"Cafe Coffee Day", rating:3, time:"20-25 min", image:"tenth", image2:"star.png", food:"Coffee", location:"Vasant Kunj" },

//   { name:"Sagar Ratna", rating:5, time:"30-35 min", image:"first", image2:"star.png", food:"South Indian", location:"INA" },
//   { name:"Punjabi Angithi", rating:4, time:"35-40 min", image:"second", image2:"star.png", food:"Punjabi", location:"Preet Vihar" },
//   { name:"Moti Mahal", rating:4, time:"40-45 min", image:"third", image2:"star.png", food:"North Indian", location:"Daryaganj" },
//   { name:"Giani's", rating:3, time:"20-25 min", image:"fourth", image2:"star.png", food:"Ice Creams", location:"Model Town" },
//   { name:"BTW", rating:2, time:"25-30 min", image:"fifth", image2:"star.png", food:"Street Food", location:"Ashok Vihar" },
//   { name:"Nando's", rating:5, time:"40-45 min", image:"sixth", image2:"star.png", food:"Chicken", location:"Select Citywalk" },
//   { name:"Burger Singh", rating:4, time:"30-35 min", image:"seventh", image2:"star.png", food:"Burgers", location:"Patel Nagar" },
//   { name:"Chaayos", rating:5, time:"20-25 min", image:"eighth", image2:"star.png", food:"Tea", location:"Laxmi Nagar" },
//   { name:"Dunkin'", rating:3, time:"25-30 min", image:"ninth", image2:"star.png", food:"Donuts", location:"Shahdara" },
//   { name:"Karim's", rating:5, time:"35-40 min", image:"tenth", image2:"star.png", food:"Mughlai", location:"Jama Masjid" },

//   { name:"Anand Sweets", rating:4, time:"20-25 min", image:"first", image2:"star.png", food:"Sweets", location:"Rajinder Nagar" },
//   { name:"Biryani By Kilo", rating:5, time:"45-50 min", image:"second", image2:"star.png", food:"Biryani", location:"Indirapuram" },
//   { name:"Ghar Ka Khana", rating:3, time:"30-35 min", image:"third", image2:"star.png", food:"Home Style", location:"Shalimar Bagh" },
//   { name:"Street Za", rating:2, time:"35-40 min", image:"fourth", image2:"star.png", food:"Pizza", location:"Malviya Nagar" },
//   { name:"Wow China", rating:3, time:"30-35 min", image:"fifth", image2:"star.png", food:"Chinese", location:"Uttam Nagar" },
//   { name:"Pind Balluchi", rating:5, time:"40-45 min", image:"sixth", image2:"star.png", food:"Punjabi", location:"CP" },
//   { name:"Cafe Delhi Heights", rating:4, time:"35-40 min", image:"seventh", image2:"star.png", food:"Continental", location:"Khan Market" },
//   { name:"Bercos", rating:4, time:"30-35 min", image:"eighth", image2:"star.png", food:"Asian", location:"Nehru Place" },
//   { name:"Saravana Bhavan", rating:5, time:"25-30 min", image:"ninth", image2:"star.png", food:"South Indian", location:"RK Puram" },
//   { name:"Mother Dairy", rating:1, time:"15-20 min", image:"tenth", image2:"star.png", food:"Desserts", location:"Patparganj" }
// ];

const restaurant = [
  { name:"Chocolate Truffle Cake", rating:5, time:"45-50 min", image:"first", image2:"star.png", food:"Chocolate Cake", location:"Kamla Nagar" },
  { name:"Vanilla", rating:4, time:"30-35 min", image:"second", image2:"star.png", food:"Black Forest", location:"Mukherjee Nagar" },
  { name:"Black Forest Cake", rating:3, time:"25-30 min", image:"third", image2:"star.png", food:"Red Velvet", location:"GTB Nagar" },
  { name:"Butterscotch Cake", rating:4, time:"30-40 min", image:"fourth", image2:"star.png", food:"Butterscotch", location:"Hudson Lane" },
  { name:"Pineapple Cream Cake", rating:5, time:"20-25 min", image:"fifth", image2:"star.png", food:"Pineapple", location:"Chandni Chowk" },
  { name:"Vanilla Bean Cake", rating:3, time:"25-30 min", image:"sixth", image2:"star.png", food:"Vanilla", location:"Rajouri Garden" },
  { name:"Oreo Chocolate Cake", rating:4, time:"20-30 min", image:"seventh", image2:"star.png", food:"Oreo Chocolate", location:"Karol Bagh" },
  { name:"KitKat Blast Cake", rating:5, time:"30-35 min", image:"eighth", image2:"star.png", food:"KitKat Chocolate", location:"Lajpat Nagar" },
  { name:"Blueberry Cheesecake", rating:3, time:"35-45 min", image:"ninth", image2:"star.png", food:"Blueberry", location:"Punjabi Bagh" },
  { name:"Belgian Chocolate Cake", rating:4, time:"40-45 min", image:"tenth", image2:"star.png", food:"Belgian Chocolate", location:"CP" },

  { name:"Strawberry Cake", rating:5, time:"20-25 min", image:"first", image2:"star.png", food:"Strawberry", location:"Pitampura" },
  { name:"Coffee Mocha Cake", rating:3, time:"25-30 min", image:"second", image2:"star.png", food:"Coffee Mocha", location:"Rohini" },
  { name:"Dark Chocolate Ganache", rating:4, time:"35-40 min", image:"third", image2:"star.png", food:"Chocolate Ganache", location:"Dwarka" },
  { name:"Ferrero Rocher Cake", rating:5, time:"40-50 min", image:"fourth", image2:"star.png", food:"Ferrero Chocolate", location:"Saket" },
  { name:"Mango Delight Cake", rating:5, time:"20-25 min", image:"fifth", image2:"star.png", food:"Mango", location:"Defence Colony" },
  { name:"Rainbow Party Cake", rating:3, time:"30-35 min", image:"sixth", image2:"star.png", food:"Rainbow Cake", location:"Mayur Vihar" },
  { name:"Nutella Fantasy Cake", rating:2, time:"35-40 min", image:"seventh", image2:"star.png", food:"Nutella Chocolate", location:"Noida" },
  { name:"Chocolate Lava Cake", rating:5, time:"50-55 min", image:"eighth", image2:"star.png", food:"Lava Chocolate", location:"Connaught Place" },
  { name:"Caramel Almond Cake", rating:4, time:"25-30 min", image:"ninth", image2:"star.png", food:"Caramel Almond", location:"Janakpuri" },
  { name:"Classic Plum Cake", rating:3, time:"20-25 min", image:"tenth", image2:"star.png", food:"Plum Cake", location:"Vasant Kunj" },

  { name:"Honey Walnut Cake", rating:5, time:"30-35 min", image:"first", image2:"star.png", food:"Honey Walnut", location:"INA" },
  { name:"Rasmalai Cake", rating:4, time:"35-40 min", image:"second", image2:"star.png", food:"Rasmalai Fusion", location:"Preet Vihar" },
  { name:"Gulab Jamun Cake", rating:4, time:"40-45 min", image:"third", image2:"star.png", food:"Gulab Jamun Fusion", location:"Daryaganj" },
  { name:"Dates & Walnut Cake", rating:3, time:"20-25 min", image:"fourth", image2:"star.png", food:"Dates Walnut", location:"Model Town" },
  { name:"Chocolate Chip Cake", rating:2, time:"25-30 min", image:"fifth", image2:"star.png", food:"Chocolate Chips", location:"Ashok Vihar" },
  { name:"Royal Chocolate Cake", rating:5, time:"40-45 min", image:"sixth", image2:"star.png", food:"Premium Chocolate", location:"Select Citywalk" },
  { name:"Marble Chocolate Cake", rating:4, time:"30-35 min", image:"seventh", image2:"star.png", food:"Marble Chocolate", location:"Patel Nagar" },
  { name:"Vanilla Strawberry Cake", rating:5, time:"20-25 min", image:"eighth", image2:"star.png", food:"Vanilla Strawberry", location:"Laxmi Nagar" },
  { name:"Blackcurrant Bliss Cake", rating:3, time:"25-30 min", image:"ninth", image2:"star.png", food:"Blackcurrant", location:"Shahdara" },
  { name:"Triple Chocolate Cake", rating:5, time:"35-40 min", image:"tenth", image2:"star.png", food:"Triple Chocolate", location:"Jama Masjid" },

  { name:"Almond Crunch Cake", rating:4, time:"20-25 min", image:"first", image2:"star.png", food:"Almond Crunch", location:"Rajinder Nagar" },
  { name:"Hazelnut Chocolate Cake", rating:5, time:"45-50 min", image:"second", image2:"star.png", food:"Hazelnut Chocolate", location:"Indirapuram" },
  { name:"Fresh Fruit Cake", rating:3, time:"30-35 min", image:"third", image2:"star.png", food:"Seasonal Fruits", location:"Shalimar Bagh" },
  { name:"Chocolate Orange Cake", rating:2, time:"35-40 min", image:"fourth", image2:"star.png", food:"Chocolate Orange", location:"Malviya Nagar" },
  { name:"White Forest Cake", rating:3, time:"30-35 min", image:"fifth", image2:"star.png", food:"White Forest", location:"Uttam Nagar" },
  { name:"Lotus Biscoff Cake", rating:5, time:"40-45 min", image:"sixth", image2:"star.png", food:"Biscoff", location:"CP" },
  { name:"Chocolate Mousse Cake", rating:4, time:"35-40 min", image:"seventh", image2:"star.png", food:"Chocolate Mousse", location:"Khan Market" },
  { name:"Blueberry Vanilla Cake", rating:4, time:"30-35 min", image:"eighth", image2:"star.png", food:"Blueberry Vanilla", location:"Nehru Place" },
  { name:"Raspberry Cake", rating:5, time:"25-30 min", image:"ninth", image2:"star.png", food:"Raspberry", location:"RK Puram" },
  { name:"Chocolate Pastry Cake", rating:1, time:"15-20 min", image:"tenth", image2:"star.png", food:"Chocolate Pastry", location:"Patparganj" }
];


// function getrestaurant(restaurant){
//    const root=document.querySelector('.root');
//    restaurant.forEach(element => {
//       //create a card
//       const div=document.createElement('div');
//       div.classList.add('card')

//       //create a image
//       const img=document.createElement('img')
//       img.id='pix'
//       img.src=`./${element.image}.avif`
//       div.appendChild('img')

//       //create h1
//       const h1=document.createElement('h1')
//       h1.innerHTML=element.name
//        h1.classList.add('name')
//        div.appendChild('h1')

//        //create div2
//        const div2=document.createElement('div');
//       div2.classList.add('card2')
//       div2.style.display='flex'


//       const img2=document.createElement('img')
//       img2.id='pix2'
//       img2.src=`./${element.image2}.png`

//       const rating=document.createElement('h2')
//       rating.innerHTML=element.rating
//       rating.id='rating'


//       const time=document.createElement('h2')
//       time.innerHTML=`.${element.time}`
//       time.id='time'

//       div2.appendChild(img2)
//       div2.appendChild(rating)
//       div2.appendChild(time)

//       div.appendChild(div)


//       //create food
//       const h3=document.createElement('h3');
//       h3.innerHTML=element.food

//       div.appendChild(h3);

//       //create location
//       const h4=document.createElement('h3');
//       h4.innerHTML=element.food
//       div.appendChild(h4);


//       root.appendChild(div)

   
//    });

// }

function getrestaurant(restaurant){
   const root=document.querySelector('.root');
   restaurant.forEach(element => {
      //create a card
      const div1=document.createElement('div');
      div1.classList.add('card')

      //create a image
      const img=document.createElement('img')
      img.id='pix'
      img.src=`./${element.image}.avif`
      div1.appendChild(img)

      //create h1
      const h1=document.createElement('h1')
      h1.innerHTML=element.name
       h1.classList.add('name')
       div1.appendChild(h1)

       //create div2
       const div2=document.createElement('div');
      div2.classList.add('card2')
      div2.style.display='flex'


      const img2=document.createElement('img')
      img2.id='pix2'
      img2.style.height='30px'
      img2.style.borderRadius='50%'
      img2.src=element.image2

      const rating=document.createElement('h2')
      rating.innerHTML=element.rating
      rating.id='rating'


      const time=document.createElement('h2')
      time.innerHTML=`.  ${element.time}`
      time.id='time'

      div2.appendChild(img2)
      div2.appendChild(rating)
      div2.appendChild(time)

      div1.appendChild(div2)


      //create food
      const h3=document.createElement('h3');
      h3.innerHTML=element.food
      h3.style.color="grey"

      div1.appendChild(h3);

      //create location
      const h4=document.createElement('h3');
      h4.innerHTML=element.location
      h4.style.color="grey"
      div1.appendChild(h4);


      root.appendChild(div1)

   
   });

}
 getrestaurant(restaurant)



document.getElementById('cake').addEventListener('click',()=>{
   document.querySelector('.body').innerHTML=" ";
   document.querySelector('#nextpage').classList.remove('hidden')
   document.body.style.backgroundColor="whitesmoke";

//    function getrestaurant(restaurant){
//    const root=document.querySelector('.root');
//    restaurant.forEach(element => {
//       //create a card
//       const div1=document.createElement('div');
//       div1.classList.add('card')

//       //create a image
//       const img=document.createElement('img')
//       img.id='pix'
//       img.src=`./${element.image}.avif`
//       div1.appendChild(img)

//       //create h1
//       const h1=document.createElement('h1')
//       h1.innerHTML=element.name
//        h1.classList.add('name')
//        div1.appendChild(h1)

//        //create div2
//        const div2=document.createElement('div');
//       div2.classList.add('card2')
//       div2.style.display='flex'


//       const img2=document.createElement('img')
//       img2.id='pix2'
//       img2.style.height='30px'
//       img2.style.borderRadius='50%'
//       img2.src=element.image2

//       const rating=document.createElement('h2')
//       rating.innerHTML=element.rating
//       rating.id='rating'


//       const time=document.createElement('h2')
//       time.innerHTML=`.  ${element.time}`
//       time.id='time'

//       div2.appendChild(img2)
//       div2.appendChild(rating)
//       div2.appendChild(time)

//       div1.appendChild(div2)


//       //create food
//       const h3=document.createElement('h3');
//       h3.innerHTML=element.food
//       h3.style.color="grey"

//       div1.appendChild(h3);

//       //create location
//       const h4=document.createElement('h3');
//       h4.innerHTML=element.location
//       h4.style.color="grey"
//       div1.appendChild(h4);


//       root.appendChild(div1)

   
//    });

// }

//   getrestaurant(restaurant)


})

document.getElementById('SortBy').addEventListener('click',()=>{
   document.querySelector('#sorting').classList.remove('hidden');
})


document.getElementById('Apply').addEventListener('click',()=>{
const check=document.querySelector('input[name="select"]:checked')
  const answer=check.value;
  if(answer=='rating'){
    restaurant.sort((a,b)=>b.rating-a.rating);
    document.querySelector('.root').innerHTML=" "
    getrestaurant(restaurant)
  }
//   if(answer=='Deliverytime'){
//     restaurant.sort((a,b)=>Number(b.Deliverytime)-Number(a.Deliverytime));
//     document.querySelector('.root').innerHTML=" "
//     getrestaurant(restaurant)
//   }
})

                     




