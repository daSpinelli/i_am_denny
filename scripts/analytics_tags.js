/*let ga_m_id = process.env.GOOGLE_ANALYTICS_MEASUREMENT_ID
let script = document.createElement('script');
script.src = 'https://www.googletagmanager.com/gtag/js?id='+ga_m_id;
document.body.append(script);

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', ga_m_id);
console.log("Inicio dos listeners");
document.addEventListener("click", function(event){
    if (event.target.tagName === "A") {
        gtag('event', 'link_click', {
            'link_text' : event.target.innerText,
            'link_id': event.target.id
        });
    }
}); */