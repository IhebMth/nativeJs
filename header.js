// ==================    Header Section   ===================
let header = document.createElement("header")
header.style.cssText = "display: flex ; justify-content: space-between; align-items:center "

let span = document.createElement("span")
span.style.cssText = "color: #13613F; font-size: 2.3vw"

let myText = document.createTextNode("Elzero")

let nav = document.createElement("nav")
nav.className = "navigation"
nav.style.cssText = " font-size: 1.4vw;"



// add the header to body
document.body.appendChild(header)
// add the span to header
header.appendChild(span)
// add the text to span
span.appendChild(myText)
// add the nav to header
header.appendChild(nav)





// *************** Home Link ***************
 // Create anchor element.
 var Home = document.createElement('a'); 
                  
 // Create the text node for anchor element.
 var link = document.createTextNode("Home");
   
 // Append the text node to anchor element.
 Home.appendChild(link); 
   
 // Set the title.
 Home.title = "Home"; 
   
 // Set the href property.
 Home.href = "#"; 
 
  // Set the className .
  Home.className = "link"; 

 // Append the anchor element to the body.
  nav.appendChild(Home); 


  
 // ***************** Service Link *************
  // Create anchor element.
 var services = document.createElement('a'); 
                  
 // Create the text node for anchor element.
 var link1 = document.createTextNode("services");
   
 // Append the text node to anchor element.
 services.appendChild(link1); 
   
 // Set the title.
 services.title = "Services"; 
   
 // Set the href property.
 services.href = "#"; 
   
  // Set the classname .
  services.className = "link"; 
 // Append the anchor element to the body.
  nav.appendChild(services); 


  // ***************** About Link *************
  // Create anchor element.
 var About = document.createElement('a'); 
                  
 // Create the text node for anchor element.
 var link1 = document.createTextNode("About");
   
 // Append the text node to anchor element.
 About.appendChild(link1); 
   
 // Set the title.
 About.title = "About"; 
   
 // Set the href property.
 About.href = "#"; 
   
  // Set the classname .
  About.className = "link"; 
 // Append the anchor element to the body.
  nav.appendChild(About); 

  // ***************** Contact Link *************
  // Create anchor element.
 var Contact = document.createElement('a'); 
                  
 // Create the text node for anchor element.
 var link1 = document.createTextNode("Contact");
   
 // Append the text node to anchor element.
 Contact.appendChild(link1); 
   
 // Set the title.
 Contact.title = "Contact"; 
   
 // Set the href property.
 Contact.href = "#"; 
   
  // Set the classname .
  Contact.className = "link"; 
 // Append the anchor element to the body.
  nav.appendChild(Contact); 

    // control the links css in the header
  let navigation_a = document.getElementsByTagName("a")
    for(let i= 0 ; i< navigation_a.length ; i++)
    {
        navigation_a[i].style.cssText = "padding-right:30px; text-decoration:none; color:#0C0C0D"
    }
