import './Description.scss';
import views from "../../assets/images/Icons/views.svg";
import likes from "../../assets/images/Icons/likes.svg";

function Description() {
   return (
       <section class="description">
           <h1 class="description__title">BMX Rampage: 2021 Highlights</h1>
           <div class="description__items">
               <div class="description__container">
                   <p class="description__author">By Red Crow</p>
                   <p class="description__details">07/11/202</p>
               </div>
               <div class="description__container">
                   <div class="description__subcontainer">
                       <img src={views} alt="Eye Icon"></img>
                       <p class="description__details">1,001,023</p>
                   </div>
                   <div class="description__subcontainer">
                       <img src={likes} alt="Eye Icon"></img>
                       <p class="description__details">110,985</p>
                   </div>
               </div>
           </div>
           <p class="description__text">On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title</p>
       </section>
   );
 }
  export default Description;