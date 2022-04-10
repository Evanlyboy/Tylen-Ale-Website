(() => {

    beerInfo = "",
    lightbox = document.querySelector("#lightbox"),
    hiddenLightbox = document.querySelector(".hiddenLightbox"),
    closeButton = document.querySelector("#close"),
    buttonLager = document.querySelector("#lager"),
    buttonRed = document.querySelector("#red"),
    buttonIpa = document.querySelector("#ipa"),
    buttonStout = document.querySelector("#stout");

    const lagerData = [
        "Nothing beats the crisp feel of a Tylen-Ale original Lager. This bad boy hits the spot for any occasion and makes all your pain go away",
        "lager.jpg"
    ]

    const redData = [
        "The red ale is a delicious beer. It is a hoppy, buttery beer that is a much dryer beer than the original, however it still captures that amazing Tylen-Ale taste we all love.",
        "red_ale.jpg"
    ]

    const ipaData = [
        "Brewed using only the finest hops, this pale ale is sure to leave your taste buds partying all night. This herbal and citrus ale is a must have for any and all beer lovers.",
        "ipa.jpg"
    ]

    const stoutData = [
        "The New Tylen-Ale Stout is sure to put some hair on your chest. This Dark Beer has a bitter taste but goes down as smooth as water",
        "stout.jpg"
    ]

    function childChecker() {
        // if there is more than one child in the employeebox, get rid of it
        if(lightbox.classList > 1) {
            lightbox.classList.remove("show-lightbox");
        }

        if(beerInfo != "") {
            // delete inner html that's already on the page
            document.getElementsByClassName("beerInfo").innerHTML = "";
            // delete everything in our variable
            beerInfo.innerHTML = "";
        }
    }

    // A conversion function that will take the name from the button and return an array based on that name
    function nameConverter(name) {
        if (name === "Lager") {
            return lagerData;
        }
        else if (name === "Red") {
            return redData;
        }
        else if (name === "IPA") {
            return ipaData;
        }
        else if (name === "Stout") {
            return stoutData;
        }
    }

    function showBeer(event, name) {
        childChecker();

        // converts the passed in name to an array we can use here
        let beerData = nameConverter(name);

        // the current info is the documentation we want to use on the page. Set up this way to flush later
        let currentInfo = document.createTextNode(beerData[0]);

        // target the specific beerinfo within the nameBox
        beerInfo = lightbox.getElementsByClassName("beerInfo")[0];
        beerImg = lightbox.getElementsByClassName("img")[0];

        // add the array information
        beerInfo.append(currentInfo);
        beerImg.src = `images/${beerData[1]}`

        // make everything visible
        // employeeBox.appendChild(lightbox);

        lightbox.classList.add("show-lightbox");
    }

    function closeLightbox() {
        lightbox.classList.remove("show-lightbox");
    }

    buttonLager.addEventListener("click", (event)=>showBeer(event,"Lager"));
    buttonRed.addEventListener("click", (event)=>showBeer(event,"Red"));
    buttonIpa.addEventListener("click", (event)=>showBeer(event,"IPA"));
    buttonStout.addEventListener("click", (event)=>showBeer(event,"Stout"));
    closeButton.addEventListener("click", closeLightbox);

})();