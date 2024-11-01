export const createHomepage = () =>{
    
    const content = document.querySelector("#content");
    content.classList.add("homepage");

    const title = document.createElement("div");
    title.className = "title";
    content.appendChild(title);
    title.textContent = "Tây Restaurant";

    const resImg = document.createElement("div");
    resImg.className = "resImg";
    content.appendChild(resImg);

    const introduction = document.createElement("div");
    introduction.className = "intro";
    content.appendChild(introduction);

    const inText = document.createElement("div");
    inText.className = "inText";
    
    inText.textContent = `A fine-dining restaurant located at the heart of a metropolitan city, 
                            the Tây's team is dedicated to serving the classic and creative dishes from the Western Culture to Viet Nam.
                            
                            Beautiful decorations paying tribute to the city's long historic heritage and 
                            front view of the City's Square with aesthetically pleasing city's nightlight, 
                            Tây aims to create a magical, memorable dining experience every time.`
    const inRes = document.createElement("div");
    inRes.className = "inRes"
    introduction.appendChild(inText);
    introduction.appendChild(inRes);

    const review = document.createElement("div");
    review.className = "review";
    content.appendChild(review);
    review.textContent = "'A perfect mix of both Vietnamese Culture and Western Culture.'"

    const author = document.createElement("div");
    review.appendChild(author);
    author.className = "author";
    author.textContent = "-The Now Times"

    const hours = document.createElement("div");
    hours.className = "hours";
    content.appendChild(hours);
    hours.textContent = "Hours"

    const address = document.createElement("div");
    address.className = "address";
    hours.appendChild(address);
    address.textContent = "123, Brm Street, Haha"

    const mon_fri = document.createElement("div");
    hours.appendChild(mon_fri);
    mon_fri.textContent = "Monday - Friday: 5pm - 11pm";
    const sar = document.createElement("div");
    hours.appendChild(sar);
    sar.textContent = "Saturday: 6pm - 2am";
    const sun = document.createElement("div");
    hours.appendChild(sun);
    sun.textContent = "Sunday: 12pm - 11pm";
    
}