function bookComponent(btn) {
    
    var e = document.getElementById(btn);

    if (e.innerHTML === "Show Description") {
        e.innerHTML = "Hide Description";
        e.style.background="#d9534f";
        document.getElementById("description").innerHTML="<b>Description</b>";
        document.getElementById("plot").innerHTML=bookDetail[btn];

    } else {
        e.innerHTML = "Show Description";
        e.style.background="#0275d8";
        document.getElementById("description").innerHTML="";
        document.getElementById("plot").innerHTML="";
    }
}

var bookDetail=[
    "The son of a zookeeper, Pi Patel has an encyclopedic knowledge of animal behavior and a fervent love of stories. This audacious novel tells the improbable survivor's tale of Pi Patel.",
    "Frank Money is a twenty-four-year-old Korean War veteran, traveling home to rescue his sister Cee from an unknown catastrophe. Morrison teaches us the value and dignity in a life.",
    "Brilliant and entertaining, Outliers is a landmark work that will simultaneously delight and illuminate. In Outliers, Gladwell examines the factors that contribute to high levels of success.",
    "Paulo Coelho's masterpiece tells the mystical story of Santiago, an Andalusian shepherd boy who yearns to travel in search of a worldly treasure.",
    "Set in Panem, The Hunger Games follows young Katniss Everdeen (District 12) who volunteers for the 74th Hunger Games in place of her younger sister Primrose Everdeen."
];
