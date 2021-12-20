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
     lifeStyle: [`Deposita tu voto en la sociedad en la que quieres vivir`, 
     `No necesitamos un puñado de personas haciendo un zerowaste perfecto,
     sino miles de personas haciéndolo de forma imperfecta.`,
    `Para que desaparezca el plástico hay que dejar de consumirlo`,
    `El mejor residuo es aquel que no se genera`,
],
     practicalUse: [
         `Apaga las luces. Junta el Máximo de miembros de la familia en una habitación. Promueves el diálogo y lazos familiares y sólo iluminas una estancia`,
         `Ahorra agua. Duchas cortas, lavar platos aprovechando el agua de unos a otros para enjaguar previo a enjabonar.`,
         `Lava la ropa solo cuando necesario y con agua fría. Airéala y quizás puedas darle más usos antes de lavar`,
         `No desperdicies comida. Usa los vegetales completos. Lleva un tupper al restaurante. Usa apps para evitar desperdicio.`,
         `Reduce o elimina la ingesta de carne y pescado. Verás como baja la despesa de la compra`],
     fiveRs: [
    `Rechazar: 
     🧜‍♀️🧜Para que desaparezca el plástico hay que dejar de consumirlo🧜🧜‍♀️🐠
     Por eso hay que empezar por RECHAZAR, es gratis y una de las medidas más importantes hacía un futuro más sostenible.
     RECHAZA lo que no necesitas`,
    `Reducir: 
    + Analizar si eso lo necesitamos o sólo estamos siendo víctimas del marketing. 
    La felicidad jamás te la darán elementos externos. Por más que te lo intenten hacer creer en ese anuncio de coches, móviles, etc 🚗🚗🚗
    + Cuanto menos tengamos menos tenemos que ordenar y limpiar.
    + Y si crees que un armario cápsula no es para ti, no pasa nada yo tampoco lo tengo. 
    Pero todos podemos reducir un poco aquellas cosas que creíamos necesarias
    + La clave es SIMPLIFICAR.`,
    `Reutilizar:
    Hacer un objecto nuevo implica SIEMPRE un gasto energético ⚡️🔌 e hídrico 💦🚿 
    independientemente de si sus materias primas son o no recicladas y de la huella de carbono asociada a su producción. ♻️ 
    Por lo que es más sostenible no depender de nueva producción y REUTILIZAR al máximo los productos que ya están creados.
    Así que si algo ya lo tienes en casa usalo al máximo. 
    Y si tienes que comprar algo prefiere invertir en materiales de calidad que sean durables y se pueden reusar durante muchos años. 
    Al final de saldrá más barato a ti, al planeta y a todxs los que lo habitamos.
    Como siempre dicen mis padres “lo barato sale caro” eso es lo que pasa con los productos de mala calidad diseñadlos para unos pocos usos
    CAMBIEMOS EL PARADIGMA DE USAR Y TIRAR Y EMPEZEMOS A REUTILIZAR 🔂`,
    `Reparar:
    Antes de deshacernos de algo siempre pensamos si podemos darle otra oportunidad y alargar su vida REPARANDO o REPROPOSITANDO.
    Ahorramos dinero 💸💸 y disminuimos nuestro impacto contributivo a la Crisis Climática.
    Enfin, que debemos acabar con el paradigma de usar y tirar.`,
    `Reciclar:
    Sólo un 9% del plástico producido mundialmente se llega a reciclar. 
    Por eso creemos que no podemos depender tanto de este material.
    Recuerda para llegar al reciclaje tienes que pasar por los 4 pasos anteriores si quieres jugar el juego de la sustentabilidad. 👾🕹🎮
    En el nivel final está solucionar la Crisis Climática y de ello depende la supervivencia humana en la Tierra 🌍
    Ahí solo tenemos 1 vida así que no podemos arriesgarnos a un GAME OVER 💣💥`    
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