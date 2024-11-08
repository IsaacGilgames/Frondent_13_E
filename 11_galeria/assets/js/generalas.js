const galeria = {
    "kep1": "1d85eb2cb05589639f9bb25612f0d545.jpg",
    "kep2": "1_7pOJASJU_lOfG_xV-tlHGQ.webp",
    "kep3": "22471fc1b1b4e82482bc37420946ad72.jpg",
    "kep4": "37cec6b4dd409209183241b69c67b732.jpg",
    "kep5": "45294ebcc5288a6e3ca7ff83db348c0b.png",
    "kep6": "464111520_546380344805580_8767188009038180009_n.jpg",
    "kep7": "464728322_551205434323071_3906015964867959420_n.jpg",
    "kep8": "6bc480b3acff390aa34be673ff15d412.jpg",
    "kep9": "76ccadf5ab528b1ec66c2705730663df.jpg",
    "kep10": "7f12801ea0b1569bcb1bf6fda939b083.jpg",
    "kep11": "8790d8f6b1491f4ed732e88fed3355df.jpg",
    "kep12": "aHR0cHM6Ly9jbXNjZG4uYXBwLmNvbnRlbnQucHJpdmF0ZS9jb250ZW50LzhlZjZkZTJlZGIwNDRhNWRiNGNkNGNiODc0MDNiOTE4_1_.jpg",
    "kep13": "b2065f9f3ecb0d9f4bda9a28ec88cb20.jpg",
    "kep14": "b275094885af294e8b8354a68baec5ad.jpg",
    "kep15": "c786300187136488e3707a053cb9df3a.jpg",
    "kep16": "css-grid-poster.png",
    "kep17": "custom_css_styles_for_responsive_grid_layouts.png",
    "kep18": "e78d36886cb96dd599206748a7675cd0.jpg",
    "kep19": "Firefly panda krumplipürét eszik a tengeren 33582.jpg",
    "kep20": "Front-end-Vs-Back-end-1024x533.webp",
    "kep21": "media_24135.jpg",
    "kep22": "media_24136.jpg",
    "kep23": "media_24137.jpg",
    "kep24": "media_24159.jpg",
    "kep25": "media_24161.jpg",
    "kep26": "media_24166.jpg",
    "kep27": "media_24168.jpg",
    "kep28": "media_24169.jpg",
    "kep29": "media_24175.jpg",
    "kep30": "media_24197.jpg",
    "kep31": "media_24198.jpg",
    "kep32": "media_24201.jpg",
    "kep33": "media_24205.jpg",
    "kep34": "media_24244.jpg",
    "kep35": "Mopsz-Pug-fajtaleiras.jpg",
    "kep36": "Mopsz_1200x1200px.jpg",
    "kep37": "petchef-mopsz-.jpg",
    "kep38": "pexels-brett-sayles-1264937.jpg",
    "kep39": "pexels-guiirossi-1755691.jpg",
    "kep40": "pexels-kpaukshtite-983297.jpg",
    "kep41": "pexels-marta-dzedyshko-1042863-2067402.jpg",
    "kep42": "pexels-steshkawillems-2553651.jpg",
    "kep43": "taRt42RHeXdFXP31.jpg"
    }

//Galéria legenerálása kódból

document.body.onload = () => {
    document.body.innerHTML= ""
    let galeria_div = document.createElement("div")
    galeria_div.setAttribute("id", "galeria")
    console.log("mükszik?")
    let cim = document.createElement("h1")
    cim.innerHTML = "Galéria"
    galeria_div.appendChild(cim)
    let galeria_box = document.createElement("div")
    galeria_box.setAttribute("class", "galeria_box")
    galeria_div.appendChild(galeria_box)
    document.body.appendChild(galeria_div)
    console.log(galeria_div)

    let belso = ""
    for (let item in galeria){
        //console.log(galeria[item])
        /*
        let img = document.createElement("img")
        img.setAttribute("src", "assets/img/" + galeria[item])
        img.setAttribute("id", item)
        document.querySelector(".galeria_box").appendChild(img)
        */
        belso += `<img src="assets/img/${galeria[item]}" alt="${item} id="${item}"></img>`

    }
    document.querySelector(".galeria_box").innerHTML = belso

}