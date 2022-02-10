const cards =document.querySelectorAll(".card");

let matchCard = 0;
let cardOne, cardTwo;
let disableDeck = false;

function flipCard(e) {
    let clickedCard = e.target;// getting user clicked card
    if(clickedCard !== cardOne && !disableDeck){
        clickedCard.classList.add("flip")
        if(!cardOne){
            return cardOne = clickedCard;
        }
        cardTwo = clickedCard;
        disableDeck = true;
        let cardOneImg = cardOne.querySelector("img").src,
        cardTwoImg = cardTwo.querySelector("img").src;
        matchCards(cardOneImg, cardTwoImg);
    }
}

function matchCards(img1, img2){
    if(img1 === img2){
        matchCard++;
        // if(matchCard == 8) {
        //     setTimeout(() => {
        //         return shuffleCard();
        //     }, 1000);
        // }
        cardOne.removeEventListener("click", flipCard);
        cardTwo.removeEventListener("click", flipCard);
        cardOne = cardTwo = "";
        return disableDeck = false;
    }
    //if both cards are not matched
    setTimeout(() => {
        //adding to both class after 400ms
        cardOne.classList.add("shake");
        cardTwo.classList.add("shake");
    }, 400);
    setTimeout(() => {
        //removing shake and flip class after 1.2 seconds
        cardOne.classList.remove("shake","flip");
        cardTwo.classList.remove("shake","flip");
        //setting value for blank
        cardOne = cardTwo = "";
        disableDeck = false;
    }, 1200);
}
function shuffleCard() {
    matchCard = 0;
    cardOne = cardTwo = "";
    disableDeck = false;

    dragon_bone();
}
function dynasty() {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8,];
    let amn = arr.sort(() => Math.random() > 0.5 ? 1 : -1);

    let ard = [];

    for (var i in arr) {
        ard.push(arr[i]);
        //console.log(arr[i]);
    }
    console.log(ard);
    
    let j = -1;
    cards.forEach(card => {
        j++;
        let imgTag = card.querySelector("img");
        imgTag.src = `images/img-${ard[j]}.png`;
        console.log(j);
        console.log(imgTag);
    })
}
    
    // (cards, arr).forEach(card, () => {
        
    // });
   
    // cards.forEach(card => {
    //     let imgTag = card.querySelector("img");
    //     imgTag.src = 'images/img-${amn[i2]}.png';
    //     console.log(imgTag);
    // });

    // cards.forEach(card => {
    //     card.classList.remove("flip");
    //     card.addEventListener("click", flipCard);
    // });
    



function dragon_bone() {
    cards.forEach(card  => {
        card.classList.remove("flip");
        card.addEventListener("click", flipCard);
    });
    
    dynasty();
}

shuffleCard();


// function trubl_count() {
//     let arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8,];
//     arr.sort(() => Math.random() > 0.5 ? 1 : -1);
//     cards.forEach(i => {
//         let imgTag = card.querySelector("img");
//         imgTag.src = 'image/img-${arr[i]}.png';
//     });
// }
cards.forEach(card => {//adding click event to all cards
    card.addEventListener("click",flipCard);
});
