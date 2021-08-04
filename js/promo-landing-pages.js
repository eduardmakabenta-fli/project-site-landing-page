// FORM FIELD VARIABLES
const sellerInformation = document.getElementById("seller-information")
const hasSellerInfo = document.getElementById("hasSellerInfo")
const sellerName = document.getElementById("sellerName")
const sellerEmailAddress = document.getElementById("sellerEmailAddress")

// PROMO VARIABLES
const promoImage = document.getElementsByClassName("promo-image")
const popUpContainer = document.getElementById("pop-up-container")
const popUpImage = document.getElementById("pop-up-image")


const promos = document.getElementsByClassName("promo-select-button")
const promoDetails = document.getElementsByClassName("promo-details")

const selectedPromo = document.getElementById("selected-promo")

//ADD EVENT LISTENER TO CHECKBOX AND SHOW SELLER INFORMATION FIELD IF CHECKED
hasSellerInfo.addEventListener("click",function(){
    // IF CHECKBOX IS CHECKED, SHOW SELLER FIELDS
    if (this.checked){
        sellerInformation.style.display = "block"
        sellerName.required = true
        sellerEmailAddress.required = true
    }
    // IF CHECKBOX IS UNCHECKED, HIDE SELLER FIELDS
    else{
        sellerInformation.style.display = "none"
        sellerName.required = false
        sellerEmailAddress.required = false
    }
    return
})

// LOOP THROUGH EACH PROMO IMAGE AND PLACE AN EVENT LISTENER ON ALL OF THEM
for(let i=0;i<promoImage.length;i++){
    promoImage[i].addEventListener("click",function(){
        popUpContainer.style.display = "grid";
        popUpImage.src = this.src;
        return
    })
}


function validateFields(){
    const mobileNumber = document.getElementById("mobileNumber")
    if(mobileNumber.value.length != 11 || 13){
        console.log("Incorrect character count. ")
    }
}

// Close the pop-up window when clicked outside the content
window.addEventListener("click", function(event){
    if (event.target == popUpContainer){
        popUpContainer.style.display = "none";
    }
})



// De-select the outlined promo
function resetPromoOutline(elementClass){
    let i = 0;
    for (i;i<elementClass.length;i++){
        elementClass[i].style.outline = "none";
    }
}

// Add event listeners to all of the select buttons
for (let i=0;i<promos.length;i++){
    promos[i].addEventListener("click",function(){
        resetPromoOutline(promoDetails)
        this.parentElement.style.outline = "thick solid #0000FF";
        console.log(this.getAttribute("promo"))
        selectedPromo.value = this.getAttribute("promo");
        console.log(selectedPromo)
        return
    })
}