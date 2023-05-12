let btn=document.querySelector('#new_quote');
let quote=document.querySelector('.quote');
let person=document.querySelector('.person');

const quotes=[
    {
        quote:"I do not read advertisements. I would spend all of my time wanting things",
        person: "Franz Kafka"
    },

    {
        quote:"A non-writing writer is a monster courting insanity.",
        person: "Franz Kafka"
    },

    {
        quote:"A non-writing writer is a monster courting insanity.",
        person: "Franz Kafka"
    },

    {
        quote:"Every thing that you love, you will eventually lose, but in the end, love will return in a different form.",
        person: "Franz Kafka"
    },

    {
        quote:"i am a cage in search of a bird",
        person: "Franz Kafka"
    },

    {
        quote:"Isolation is a way to know ourselves.",
        person: "Franz Kafka"
    },

    {
        quote: "I have the true feeling of myself only when I am unbearably unhappy.",
        person: "Franz Kafka"
    }
];

btn.addEventListener('click', function(){
    let random=Math.floor(Math.random()*quotes.length);
    quote.innerText=quotes[random].quote;
    person.innerText=quotes[random].person;
})

