(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["logo"],{"02a8":function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},n=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"connecter",role:"main"}},[s("img",{attrs:{id:"fondconnexion",src:r("e351"),alt:"bureau",role:"img"}}),s("form",{attrs:{id:"contact",action:"",method:"post"}},[s("div",{staticClass:"container"},[s("h1",{staticClass:"title"},[e._v("Connectez vous à votre compte")]),s("input",{staticClass:"input",attrs:{placeholder:"  Veuillez entrer votre adresse mail Capgemini  ",type:"email",required:""}}),s("input",{staticClass:"input",attrs:{placeholder:"  Veuillez entrer votre mot de passe  ",type:"tel",required:""}}),s("div",{attrs:{id:"souvenir"}},[s("input",{staticClass:"souvenir",attrs:{type:"checkbox",name:"souvenir",checked:""}}),s("label",{attrs:{for:"souvenir"}},[e._v("Se Souvenir de moi")])]),s("button",{attrs:{id:"submit"}},[s("span",[e._v("Connexion")])]),s("span",{attrs:{id:"links"}},[s("a",{attrs:{href:"#"}},[e._v("S'inscrire")]),s("a",{attrs:{href:"#"}},[e._v("Mot de passe oublié ?")])])])])])}],i={name:"connecter"},a=i,o=(r("2c64"),r("2877")),u=Object(o["a"])(a,s,n,!1,null,"03c797c7",null);t["default"]=u.exports},"0785":function(e,t,r){},"12ac":function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"projets"})},n=[],i={name:"projets"},a=i,o=r("2877"),u=Object(o["a"])(a,s,n,!1,null,null,null);t["default"]=u.exports},"26ae":function(e,t,r){},"2c64":function(e,t,r){"use strict";var s=r("0785"),n=r.n(s);n.a},"35b3":function(e,t,r){"use strict";var s=r("26ae"),n=r.n(s);n.a},"3ab7":function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},n=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"rectangles"},[s("img",{attrs:{id:"salariesconnexion",src:r("7f37"),alt:"bureau",role:"img"}}),s("form",{attrs:{id:"formcontactes",method:"post"}},[s("h1",{staticClass:"titre"},[e._v(" Rejoignez notre Communaute")]),s("p",{staticClass:"slogan"},[e._v("Nous utiliserons ces informations pour vous proposer des évènements et des projets près de chez vous.")]),s("input",{staticClass:"nom",attrs:{placeholder:"  Votre Nom  ",required:""}}),s("input",{staticClass:"prenom",attrs:{placeholder:"  Votre prenom  ",required:""}}),s("input",{attrs:{placeholder:"  Votre pseudo  ",required:""}}),s("input",{attrs:{placeholder:"  Votre adresse mail Capgemini  ",type:"email",required:""}}),s("input",{attrs:{placeholder:"  mot de passe  ",required:""}}),s("input",{attrs:{placeholder:"  Veuillez confirmer votre mot de passe  ",required:""}}),s("input",{attrs:{placeholder:"  Votre ville  ",required:""}}),s("input",{attrs:{placeholder:"  Votre entité Capgemini  ",required:""}}),s("button",{attrs:{name:"submit",type:"submit",id:"newcontactsubmit","data-submit":"...Sending"}},[s("span",[e._v("Connexion")])])])])}],i=(r("7f7f"),r("6762"),{name:"incrire",computed:{data:function(){}},methods:{displayMessage:function(e,t){if(!e)return console.error("the message is required !");var r=["success","warning","error"];r.includes(t)?(this.msgCls=t,this.msg=e):console.warning("".concat(t," is not a valid css class for messages"))},createSalaried:function(){var e=this;this.$store.dispatch("addSalaried",this.salaried).then(function(t){e.displayMessage("new salaried has been created","success")}).catch(function(t){e.displayMessage("error during salaried creation","error")})},handleSubmit:function(e){if(e.preventDefault(),!this.user.name||!this.user.lastname)return this.displayMessage("Sorry, name AND lastname are required","warning");this.$route.params.id?this.updateUser():this.createUser()}},props:["title"]}),a=i,o=(r("52f9"),r("2877")),u=Object(o["a"])(a,s,n,!1,null,"7755fff5",null);t["default"]=u.exports},"52f9":function(e,t,r){"use strict";var s=r("8897"),n=r.n(s);n.a},6762:function(e,t,r){"use strict";var s=r("5ca1"),n=r("c366")(!0);s(s.P,"Array",{includes:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}}),r("9c6c")("includes")},"7f37":function(e,t,r){e.exports=r.p+"img/wonderful_world.d001dff4.jpg"},"7f7f":function(e,t,r){var s=r("86cc").f,n=Function.prototype,i=/^\s*function ([^ (]*)/,a="name";a in n||r("9e1e")&&s(n,a,{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(e){return""}}})},8897:function(e,t,r){},"8cc6":function(e,t,r){e.exports=r.p+"img/Capture.350d6c50.png"},e351:function(e,t,r){e.exports=r.p+"img/Redimension.7512ebab.jpg"},f820:function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},n=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"about"},[s("div",{attrs:{id:"unique"}},[s("img",{attrs:{id:"proposconnexion",src:r("8cc6"),alt:"bureau",role:"img"}}),s("div",{attrs:{id:"propos"}},[s("h2",[e._v("\n              Notre plateforme à "),s("br"),s("span",[e._v("votre service")])]),s("p",[e._v("\n            Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là, mais la majeure partie d'entre elles a été altérée par l'addition d'humour ou de mots aléatoires qui ne ressemblent pas une seconde à du texte standard. Si vous voulez utiliser un passage du Lorem Ipsum, vous devez être sûr qu'il n'y a rien d'embarrassant caché dans le texte. Tous les générateurs de Lorem Ipsum sur Internet tendent à reproduire le même extrait sans fin, ce qui fait de lipsum.com le seul vrai générateur de Lorem Ipsum. Iil utilise un dictionnaire de plus de 200 mots latins, en combinaison de plusieurs structures de phrases, pour générer un Lorem Ipsum irréprochable. Le Lorem Ipsum ainsi obtenu ne contient aucune répétition, ni ne contient des mots farfelus, ou des touches d'humour.\n           \n          ")])])])])}],i=(r("35b3"),r("2877")),a={},o=Object(i["a"])(a,s,n,!1,null,"ae2b2844",null);t["default"]=o.exports}}]);
//# sourceMappingURL=logo.f09db133.js.map