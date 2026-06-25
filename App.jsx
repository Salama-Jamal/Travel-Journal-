import Header from "./components/Header.jsx"
import Contact from "./component-test/Contact.jsx"


export default function App() {
    return (
        <>
            <Header />
            <Contact
                img="https://unsplash.com/photos/black-and-white-cat-lying-on-brown-bamboo-chair-inside-room-gKXKBY-C-Dk"
                name= "Mr. Whiskerson"
                phone= "(212) 555-1234"
                email= "mr.whiskaz@catnap.meow"
             />  
            <Contact
                img = "https://unsplash.com/photos/close-up-photo-of-tabby-cat-cWOzOnSoh6Q"
                name = "Fluffykins"
                phone = "(212) 555-2345"
                email = "fluffykins@catnap.meow"
             />     
            <Contact
                img = "https://unsplash.com/photos/silver-tabby-cat-IuJc2qh2TcA"
                name = "Felix"
                phone = "(212) 555-4567"
                email = "thecat@hotmail.com"
             />
            <Contact
                img = "https://unsplash.com/photos/russian-blue-cat-wearing-yellow-sunglasses-yMSecCHsIBc"
                name = "Pumpkin"
                phone = "(008) Cat King"
                email = "pumpkin@catnap.meow"
             />
               
          
        </>
    )
}


// function App() {
//     return (
//         <div className="contacts">
//             <article className="contact-card">
//                 <img 
//                     src="./images/mr-whiskerson.png"
//                     alt="Photo of Mr. Whiskerson"
//                 />
//                 <h3>/h3>
//                 <div className="info-group">
//                     <img 
//                         src="./images/phone-icon.png" 
//                         alt="phone icon" 
//                     />
//                     <p>(212) 555-1234</p>
//                 </div>
//                 <div className="info-group">
//                     <img 
//                         src="./images/mail-icon.png" 
//                         alt="mail icon"
//                     />
//                     <p>mr.whiskaz@catnap.meow</p>
//                 </div>
//             </article>
            
//             <article className="contact-card">
//                 <img 
//                     src="./images/fluffykins.png"
//                     alt="Photo of Fluffykins"
//                 />
//                 <h3></h3>
//                 <div className="info-group">
//                     <img 
//                         src="./images/phone-icon.png" 
//                         alt="phone icon" 
//                     />
//                     <p>(212) 555-2345</p>
//                 </div>
//                 <div className="info-group">
//                     <img 
//                         src="./images/mail-icon.png" 
//                         alt="mail icon"
//                     />
//                     <p>fluff@me.com</p>
//                 </div>
//             </article>
            
//             <article className="contact-card">
//                 <img 
//                     src="./images/felix.png"
//                     alt="Photo of Felix"
//                 />
//                 <h3>Felix</h3>
//                 <div className="info-group">
//                     <img 
//                         src="./images/phone-icon.png" 
//                         alt="phone icon" 
//                     />
//                     <p>(212) 555-4567</p>
//                 </div>
//                 <div className="info-group">
//                     <img 
//                         src="./images/mail-icon.png" 
//                         alt="mail icon"
//                     />
//                     <p>thecat@hotmail.com</p>
//                 </div>
//             </article>
            
//             <article className="contact-card">
//                 <img 
//                     src="./images/pumpkin.png"
//                     alt="Photo of Pumpkin"
//                 />
//                 <h3>Pumpkin</h3>
//                 <div className="info-group">
//                     <img 
//                         src="./images/phone-icon.png" 
//                         alt="phone icon" 
//                     />
//                     <p>(0800) CAT KING</p>
//                 </div>
//                 <div className="info-group">
//                     <img 
//                         src="./images/mail-icon.png" 
//                         alt="mail icon"
//                     />
//                     <p>pumpkin@scrimba.com</p>
//                 </div>
//             </article>
            
//         </div>
//     )
// }