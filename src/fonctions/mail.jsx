
import emailjs from "emailjs-com";

(function () {   //Initiailisation du l'ID user EmailJS
    emailjs.init("o-J1CUqgUNLGy4M6h");
})();
 export default function sendMail(subject,name,email,valeur,unite){  //Fonction d'envoie de mail
    console.log("2")
    emailjs.send("service_689h6zi", "template_8olugfz", {
        subject: subject,
        name: name,
        email:email,
        unite: unite,
        valeur: valeur,
    }).then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
   }, function(error) {
      console.log('FAILED...', error);
   });
}