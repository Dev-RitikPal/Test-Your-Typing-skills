
var paragraphs = [
    "The Mahabharata is a story about a great battle between the Kauravas and the Pandavas. The battle was fought in Kurukshetra near Delhi. Many kings and princes took part in the battle. The Pandavas defeated the Kauravas. The Bhagvad Gita is a holy book of the Hindus. It is a part of the Mahabharata. Then, Lord Rama.  It is the longest epic in the world.",
    "A hawker is a person who moves from one place to another and sell their goods, by shouting on the streets. They work hard throughout the day. They move on the street on their bicycle and sometimes on foot and sell their products. We can see hawkers everywhere. They move everywhere selling their goods without caring about the weather. There is a hawker who sells vegetables on his bicycle in our locality. ",
    "The proverb has deep meaning, which is always useful for a successful life. It conveys the idea that we should always think and then act accordingly. Impulsive actions may lead us to embarrassing and odd situations. As we should always think before we speak, in the same way we should think before we act. Life is full of various factors, failure or the factors which can repel immediately but may be the stepping stones to success.",
    "There are many intelligent people in the economic field who would tell us that rising of prices is a phenomenon, which is characteristic of a developing economy. But inflation can be beneficial only if production and national income of the country also increase. But in our country, national income and production do not increase in proportion to the rise in price due to various diverse factors.",
    "A newspaper can be defined as a printed publication containing news articles about political, sports, entertainment, social and cultural events happening locally, nationally and globally. As a means of mass communication, newspapers inform and educate the public about essential occurrences and shape public opinion about certain events. Additionally, newspapers help citizens stay abreast of the current affairs occurring in their own country.",
    "Ants are found everywhere in the world. They make their home in buildings, gardens etc. They live in anthills. Ants are very hardworking insects. Throughout the summers they collect food for the winter season. Whenever they find a sweet lying on the floor they stick to the sweet and carry it to their home. Thus, in this way, they clean the floor.Ants are generally red and black in colour. ",
    "An elephant is the biggest living animal on land. It is quite huge in size. It is usually black or grey in colour. Elephants have four legs, a long trunk and two white tusks near their trunk. Apart from this, they have two big ears and a short tail. Elephants are vegetarian. They eat all kinds of plants especially bananas. They are quite social, intelligent and useful animals.They are used to carry logs of wood from one place to another.",
    "Horses are farm animals. They are usually black, grey, white and brown in colour. They are known as beasts of burden. They carry people and goods from one place to another. They have long legs, which are very strong. They can easily run long distances. Horses have hard hoofs which protect their feet. They like eating grass and grams they are used in sports like polo and hors riding.",
    "The Dog is a pet animal. It is one of the most obedient animals. There are many kinds of dogs in the world. Some of the are very friendly while some of them a dangerous. Dogs are of different color like black, red, white and brown. Some old them have slippery shiny skin and some have rough skin. Dogs are carnivorous animals. They like eating meat.They are loving animals. A dog is called man’s best friend.",
    "The peacock is the national bird of India. They have colourful feathers, two legs and a small beak. They are famous for their dance. When a peacock dances it spreads its feathers like a fan. It has a long shiny dark blue neck. Peacocks are mostly found in the fields they are very beautiful birds. The females are known as ‘Peahen1. Their feathers are used for making jackets, purses etc. We can see them in a zoo.",
]

var paragraph_no = Math.floor(Math.random() * 10);
function paragraph() {
    document.getElementById("para_txt").innerText = paragraphs[paragraph_no];
}
function timefun() {
    var seconds = document.getElementById("seconds").textContent;
    var countdown = setInterval(function () {
        seconds--;
        document.getElementById("seconds").textContent = seconds;
        if (seconds <= 0) clearInterval(countdown);
        // end of second function
        if (seconds == 0) {
            document.getElementById("seconds").innerText = 60; // 
            var inputtext = document.getElementById("input_text").value; // getting paragrah 
            var input_text_array = inputtext.replace(/[.,\s]/g, " ").split(" "); // converting paragraph string to array
            document.getElementById("word").innerText = input_text_array.length; //giving wpm through length
            // document.getElementById("input_text").value = ""
            accuracy();
        }
        function accuracy() {
            var sorted_array = paragraphs[paragraph_no].replace(/[.,\s]/g, " ").split(" ")
            var original_array = sorted_array.filter(word => word.trim().length > 0)
            var num = 0;
            for (let i in input_text_array) {
                for (let x in original_array) {
                    if (input_text_array[i] == original_array[x]) {
                        num++
                    }
                }
            }
            if (input_text_array.length == 1) {
                document.getElementById("word").innerText = 0
            }
            document.getElementById("accuracy").innerText = num + "%"
            result_fun();
            function result_fun() {
                var paragraph_div = document.getElementById("para_txt")
                var result_text_div = document.getElementById("result_div")
                // var result_div = document.getElementById("wpm").value
                // var result_div = document.getElementById("cpm").value
                var cpm = input_text_array.join("")
                var cpm_num = 0
                for (let i in cpm) {
                    // console.log(cpm[i])
                    cpm_num++
                }
//                 console.log(cpm_num)
                paragraph_div.style.display = "none"
                result_text_div.style.display = "contents"
                if (input_text_array.length < 30) {
                    document.getElementById("wpm").innerText = input_text_array.length;
                    document.getElementById("cpm").innerText = cpm_num
                    document.getElementById("acc").innerText = num + "%"
                    console.log(cpm_num)
                }
                else if (input_text_array.length > 30) {
                    document.getElementById("result_heading").innerText = "You're T-Rex"
                    document.getElementById("result_txt").innerText = "Nice... you typed with speed of "
                    document.getElementById("wpm").innerText = input_text_array.length;
                    document.getElementById("cpm").innerText = cpm_num
                    document.getElementById("acc").innerText = num + "%"
                    document.getElementById("input_text").value = ""
                }
            }

        }
    }, 1000);
}
function reload_window() {
    window.location.reload();
}
