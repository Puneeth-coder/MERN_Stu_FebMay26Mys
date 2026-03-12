const translations = {
    kn: { title: "ಸ್ವಾಗತ", desc:"ಮೈಸೂರು ಒಂದು ಪ್ರಾಚೀನ ಸ್ಥಳ "},
    en: { title: "Welcom", desc:"Tumakuru is a place of coconut" },
    hi: {title :"स्वागत हे" , desc:"हे मेरा गली हे, हे येक प्राचीन स्थल हे"}
};

const title = document.getElementById("title");
const desc = document.getElementById("desc");
const out = document.getElementById("out");

function render(lang){
    const t = translations[lang] || translations.en;
    document.documentElement.lang = lang;
    title.textContent = t.title;
    desc.textContent = t.desc;
    out.textContent = "Current UI lang: "+lang;
    console.log("Render lang:",lang);
};

document.getElementById("langSelect").addEventListener("change",function(){
    render(this.value);
});
document.getElementById("detectBtn").addEventListener("click",function(){
    const detected = (navigator.language || "en").slice(0,2).toLowerCase();
    render(detected);
});
render("en");