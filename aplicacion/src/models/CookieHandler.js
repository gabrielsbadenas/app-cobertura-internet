export default function CookieHandle(){
    let jsonUser = "{nombre:name}"
    //document.cookie = "docs=https://www.w3schools.com/js/js_cookies.asp"
    document.cookie = "user="+jsonUser
}