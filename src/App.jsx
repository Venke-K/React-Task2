import React,{useState} from 'react'
import NavBar from './Components/Navbar'
import Header from './Components/Header'
import Card from './Components/Card'
import Footer from './Components/Footer'


function App() {

let data = [
  
  {
   
        "id": 1,
        "image": "https://cdn.dummyjson.com/products/images/laptops/Apple%20MacBook%20Pro%2014%20Inch%20Space%20Grey/thumbnail.png",
        "title": "Apple MacBook Pro 14 Inch Space Grey",
        "price": "$1999.99",
       "description": "The Apple MacBook Pro packs 512GB of SSD storage. Connectivity options include Wi-Fi 802.11 ac, Bluetooth and it comes with 2 USB ports (2 x USB 3.0), Mic In ports. As of 6th June 2024, Apple MacBook Pro price in India starts at Rs. 159,900.",        
      },

      {
   
        "id": 1,
        "image": "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Airpods/thumbnail.png",
        "title": "Apple Airpods",
        "price": "$399.99",
       "description": " Up to 2x more Active Noise Cancellation.Transparency mode to hear the world around.All-new Adaptive Audio intelligently tailors noise control to your environment. Spatial Audio takes immersion to a remarkably personal level.And a single charge delivers 6 hours of battery life.",        
      },

      {
   
        "id": 1,
        "image": "https://cdn.dummyjson.com/products/images/laptops/Huawei%20Matebook%20X%20Pro/thumbnail.png",
        "title": "Huawei Matebook X Pro",
        "price": "$1399.99",
       "description": "Storage:512 GB or 1TB NVMe PCIe SSD.immersive display 13.9 3000 x 2000 (260PPI) LTPS. Intel UHD Graphics NVIDIA GeForce MX150 with 2 GB GDDR5 NVIDIA GeForce MX250 with 2 GB GDDR5. 1 MP front facing camera.Width: 304 mm Height: 217 mm Depth: 14.6 mm",        
      },


      {
   
        "id": 1,
        "image": "https://cdn.dummyjson.com/products/images/smartphones/Samsung%20Galaxy%20S10/thumbnail.png",
        "title": "Samsung Galaxy S10",
        "price": "$699.99",
       "description": "The secret of the Galaxy S10's state-of-the-art technology is in its screen. The Galaxy S10's sensors are embedded beneath the display, so it has more room for a wider screen, with a 19:9 aspect ratio. Push your viewing experience to the edge with the Galaxy S10. ",        
      },


      {
   
        "id": 1,
        "image": "https://cdn.dummyjson.com/products/images/mens-shoes/Sports%20Sneakers%20Off%20White%20Red/thumbnail.png",
        "title": "Sports Sneakers Off White Red",
        "price": "$123.99",
       "description": "Sports Sneakers Off White Red with comfortable for running and jogging. witha reusable materials Air Jordan is a line of basketball shoes produced by Nike, Inc. Related apparel and accessories are marketed under the Jordan Brand. The silhouette of Michael Jordan served as inspiration to create the ",        
      },


      {
   
        "id": 1,
        "image": "https://cdn.dummyjson.com/products/images/mens-shoes/Nike%20Air%20Jordan%201%20Red%20And%20Black/thumbnail.png",
        "title": "Nike Air Jordan 1 Red And Black",
        "price": "$567.99",
       "description": "Air Jordan is a line of basketball shoes produced by Nike, Inc. Related apparel and accessories are marketed under the Jordan Brand. The silhouette of Michael Jordan served as inspiration to create the Michael Jordan's success on the basketball court helped to cement the Air Jordan brand's place in pop culture.",        
      },

      {
   
        "id": 1,
        "image": "https://media.vogue.in/wp-content/uploads/2021/10/Air-Jordans-2.jpg",
        "title": "Air Jordan Air 2",
        "price": "$888.99",
       "description": "Air Jordan is a line of basketball shoes produced by Nike, Inc. Related apparel and accessories are marketed under the Jordan Brand. The silhouette of Michael Jordan served as inspiration to create the Michael Jordan's success on the basketball court helped to cement the Air Jordan brand's place in pop culture. ",        
      },

      {
   
        "id": 1,
        "image": "https://di2ponv0v5otw.cloudfront.net/posts/2022/06/30/62bdde0ff3fd664a29156973/m_62bde2846f6c910898839c73.jpeg",
        "title": "Adidas Super Star",
        "price": "$899.99",
       "description": "Air Jordan is a line of basketball shoes produced by Nike, Inc. Related apparel and accessories are marketed under the Jordan Brand. The silhouette of Michael Jordan served as inspiration to create the Michael Jordan's success on the basketball court helped to cement the Air Jordan brand's place in pop culture.",        
      },
     
]  

let [cart, setCart] = useState(0)
  return <> 
   
   <NavBar cart = {cart}/>
   <Header/>
  <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                  {
                     data.map((e,i)=>{
                     return <Card data={e}  key={i} cart= {cart} setCart = {setCart}/>
                     })
                     
                  }
               
             </div>  
            </div>
        </section>
        <Footer/>
  
  
   
      


</>
   
}

export default App
