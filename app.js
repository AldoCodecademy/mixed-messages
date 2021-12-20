const phrasesDB = {
    inspirational: [`You have power over your mind not ouside events.
    Realize this, and you will find strength. 
    "Marcus Aurelius"`,
    `Let not your mind run on what you lack as much as on what you have already.
    "Marcus Aurelius"`,
    `Never pretend to a love which you do not actually feel,
     for love is not ours to command. 
     "Alan Watts"`,
     `Nothing is worth more than this day. 
     "Johann Wolfgang von Goethe"`,
     `Live your beliefs and you can turn the world around. 
     "Henry David Thoreau"`,
     `Whoever is happy will make others happy too.
     "Anna Frank"`,
     `Each day provides its own gifts. 
     "Marcus Aurelius"`,
     `Somewhere, something incredible is waiting to be know.
     "Sharon Begley"`,
     `The handicap of deafness is not in the ear;
     it is in the  mind. 
     "Marlee Matlin"`],
     lifeStyle: [`Your money is your vote. Cast your vote in the society in which you want to live`,
     `We don't need a bunch of people making a perfect zerowaste,
     but thousands of people doing it imperfectly.`,
    `For the plastic to disappear you have to stop consuming it`,
    `The best waste is the one that is not generated`,
],
     practicalUse: [
        `Turn off the lights. Gather the Maximum of family members in one room. You promote dialogue and family ties and only illuminate a room`,
        `Save water. Short showers, washing dishes taking advantage of each other's water to rinse before lathering.`,
        `Wash clothes only when necessary and in cold water. Air it out and maybe you can give it more uses before washing.`,
        `Don't waste food. Use whole vegetables. Bring a tupperware to the restaurant. Use apps to avoid waste.`,
        `Reduce or eliminate your intake of meat and fish. You will see how the shopping receipt of the purchase goes down.`],
     fiveRs: [
    `Refuse:
    🧜‍♀️🧜To make the plastic disappear you have to stop consuming it🧜🧜‍♀️🐠
    That is why we must start by REJECT, it is free and one of the most important measures towards a more sustainable future.
    REJECT what you don't need`,
    `Reduce:
    + Analyze if we need it or we are just being victims of marketing.
    Happiness will never be given to you by external elements. No matter how hard they try to make you believe in that advertisement for cars, mobiles, etc 🚗🚗🚗
    + The less we have, the less we have to order and clean.
    + And if you think that a capsule wardrobe is not for you, it's okay, I don't have it either.
    But we can all reduce a little those things that we thought necessary
    + The key is to SIMPLIFY.`,
    `Re-use:
    Making a new object ALWAYS involves spending energy ⚡️🔌 and water 💦🚿
    regardless of whether or not their raw materials are recycled and the carbon footprint associated with their production. ♻️
    So it is more sustainable not to depend on new production and to REUSE to the maximum the products that are already created.
    So if you already have something at home, use it to the fullest.
    And if you have to buy something, you prefer to invest in quality materials that are durable and can be reused for many years.
    In the end, it will be cheaper for you, the planet and all of us who inhabit it.
    As my parents always say "cheap is expensive" that is what happens with poor quality products designed for a few uses
    LET'S CHANGE THE PARADIGM OF USE AND PULL AND BEGIN TO REUSE 🔂`,
    `Repair:
    Before getting rid of something we always think if we can give it another chance and extend its life by REPAIRING or REPROPOSING.
    We save money 💸💸 and reduce our contributory impact to the Climate Crisis.
    Anyway, we must end the throwaway paradigm.`,
    `Recycle:
    Only 9% of the plastic produced worldwide is recycled.
    That is why we believe that we cannot depend so much on this material.
    Remember to get to recycling you have to go through the previous 4 steps if you want to play the game of sustainability. 👾🕹🎮
    At the final level is to solve the Climate Crisis and human survival on Earth depends on it 🌍
    There we only have 1 life so we can't risk a GAME OVER 💣💥`    
    ]
};

const selectCategory = () =>{
    const CatName = Math.floor(Math.random()*4);
    //console.log(CatName);
    let category='';
    switch (CatName) {
        case 0:
            category = 'inspirational';
            break;
        case 1:
            category = 'lifeStyle';
            break;
        case 2:
            category = 'practicalUse';
            break;
        case 3:
            category = 'fiveRs';
            break;    
        default:
            break;
    }
    return category;
}

const selectPhrase = (phraseDB) => {
    const category = selectCategory();
    const catLength = phraseDB[category].length;
    const phrase = Math.floor(Math.random() * catLength);
    //console.log(phrase);
    //console.log(phraseDB[category][phrase]);
    return (phraseDB[category][phrase]);
}

const phrase = selectPhrase(phrasesDB);

module.exports = {phrase};