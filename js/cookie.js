window.addEventListener('load', function(){
  window.cookieconsent.initialise({
   revokeBtn: "<div class='cc-revoke'></div>",
   type: "opt-in",
   theme: "classic",
   palette: {
       popup: {
           background: "#000",
           text: "#fff"
        },
       button: {
           background: "#fd0",
           text: "#000"
        }
    },
   content: {
       link: "Сookie policy",
       href: "https://2gdpr.com/cookies"
    },
    onInitialise: function(status) {
      if(status == cookieconsent.status.allow) myScripts();
    },
    onStatusChange: function(status) {
      if (this.hasConsented()) myScripts();
    }
  })
});

function myScripts() {

(function(f,n) { n = document.createElement('script'); n.src = 'https://fcdn.answerly.io/fn.js'; n.setAttribute('data-companyId', f); document.getElementsByTagName('html')[0].insertAdjacentElement('beforeend', n); })('9997e9cf-f871-4b9c-b56a-eae356d319cb');

}
