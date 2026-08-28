


import { useParams } from "react-router-dom"
import Hero1 from "./Hero1"
import Footer from "../Footer/Footer"
import { useEffect } from "react"
import { cartContext } from "./Hero30"
import { useContext } from "react"


function Hero12() {

    const { addToCart,wishList } = useContext(cartContext)

    useEffect(() => {
        window.scrollTo(0,0)
    }, [])


    const { id,cartId } = useParams()
    const products = [

        {
            id: 1,
            image: "https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-13.png&w=384&q=100",
            name: "Blazer And A Neck Scarf",
            description: "blue short sleeve basic midi dress featuring a crew neckline in a jersey fabric.",
            newPrice: 13,
            oldPrice: 23,

        },

        {
            id: 2,
            image: "https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-5.png&w=384&q=100",
            name: "12 Eco-Friendly Clothing Brands",
            description: "12 Eco-Friendly Clothing Brands That, has a scoop neck, sleeveless, straight hem",
            newPrice: 20,
            oldPrice: 28,
        },

        {
            id: 3,
            image: "https://chawkbazar.vercel.app/assets/images/products/p-22-m.png",
            name: "H&M Global Desi",
            description: "Blue solid woven regular top, curved hem with tassell detailing has shoulder straps, and sleeveless",
            newPrice: 30,
            oldPrice: 40,
        },

        {
            id: 4,
            image: "https://chawkbazar.vercel.app/assets/images/products/p-17-m.png",
            name: "Short Sleeve Shirts For Men",
            description: "From casual days out to parties, dinners and other events that call for a dressier look, a short sleeve shirt is a versatile piece that works for all kinds of occasions.",
            newPrice: 12,
            oldPrice: 18,
        },


        {
            id: 5,
            image: "https://chawkbazar.vercel.app/assets/images/products/p-7-m.png",
            name: "Regular Fit Crew-neck T-shirt",
            description: "Self-striped knitted midi A-line dress, has a scoop neck, T-shirt, straight hem",
            newPrice: 12,
            oldPrice: 16,
        },


        {
            id: 6,
            image: "https://chawkbazar.vercel.app/assets/images/products/p-15-m.png",
            name: "Scuba Stand Collar Topper Jacket",
            description: "Zara provides only the highest-quality selection of dresses, womens suits and suited separates.",
            newPrice: 12,
            oldPrice: 32,
        },

        {
            id: 7,
            image: "https://chawkbazar.vercel.app/assets/images/products/p-8-m.png",
            name: "Gucci Carlton UK",
            description: "Knitted midi A-line dress, has a scoop neck, sleeveless, straight hem",
            newPrice: 14,
            oldPrice: 20,
        },


        {
            id: 8,
            image: "https://chawkbazar.vercel.app/assets/images/products/p-1-m.png",
            name: "Nike Black",
            description: "Casual wear (casual attire or clothing) may be a Western code that’s relaxed, occasional, spontaneous and fitted to everyday use. Casual wear became popular within the Western world",
            newPrice: 11,
            oldPrice: 35,
        },


        {
            id: 9,
            image: "https://chawkbazar.vercel.app/assets/images/products/p-18-m.png",
            name: "Zara Solly White Shirt",
            description: "For a chic and smart look, don this white shirt from Solly by Allen Solly. Crafted from a cotton-nylon blend with a hint of stretch, this design features a dotted pattern. Wear this 3/4th sleeves shirt with trousers and wedges to a client meeting.",
            newPrice: 25,
            oldPrice: 32,
        },


        {
            id: 10,
            image: "https://chawkbazar.vercel.app/assets/images/products/p-11-m.png",
            name: "Armani Veni Vidi Vici",
            description: "Fendi began life in 1925 as a fur and leather speciality store in Rome.",
            newPrice: 18,
            oldPrice: 23,
        },


        {
            id: 11,
            image: "https://chawkbazar.vercel.app/assets/images/products/p-6-m.png",
            name: "Oversized W Sweater",
            description: "Constructed in cotton sweat fabric, this lovely piece, lacus eu mattis auctor, dolor lectus venenatis nulla, at tristique eros sem vel ante. Sed leo enim, iaculis ornare tristique non, vulputate sit amet ante.",
            newPrice: 45,
            oldPrice: 76,

        },

        {
            id: 12,
            image: "https://chawkbazar.vercel.app/assets/images/products/p-4-m.png",
            name: "Regular Fit Flannel Shirt",
            description: "The garments labelled as Committed are products that have been produced using sustainable fibers or processes, reducing their environmental impact. Mango's goal is to support the implementation of practices more committed to the environment.",
            newPrice: 11,
        }



    ]


    let item = null
    
   if(id){
    item = products.find((item)=> item.id === Number(id))
   }

   if(cartId){
    item = wishList.find((item)=> item.cartId === cartId)
   }

   if(!item){
   return(

    <div className="my-wishe">
    <Hero1 />
    <h2 className="my-wish"><i className="fa-solid fa-heart add"></i> Wishlist view product is empty</h2>
    <div className="fti">
        <Footer />
    </div>
    </div>
   )
   }

    return (
        <div>

            <Hero1 />


            <div className="product-detail">
                <img src={item.image} alt="" />
                <h2> {item.name}</h2>
                <p className="des">{item.description}</p>
                <p>Price: $ {item.newPrice}</p>
                {
                    item.oldPrice && (
                        <p>Price: <span className="old-price">$ {item.oldPrice}</span> </p>
                    )
                }
                <button onClick={() => addToCart(item)}>Add To Cart</button>
            </div>


            <div className="fti">
                <Footer />

            </div>




        </div>
    )
}

export default Hero12
