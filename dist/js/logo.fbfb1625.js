(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["logo"],{"02a8":function(e,t,o){"use strict";o.r(t);var s=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"connecter",role:"main"}},[s("img",{attrs:{id:"fondconnexion",src:o("e351"),alt:"bureau",role:"img"}}),s("form",{attrs:{id:"contact",action:"",method:"post"}},[s("div",{staticClass:"container"},[s("h1",{staticClass:"title"},[e._v("Connectez vous à votre compte")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.login.mail,expression:"login.mail"}],staticClass:"input",attrs:{placeholder:"  Veuillez entrer votre adresse mail Capgemini  ",type:"email",required:""},domProps:{value:e.login.mail},on:{input:function(t){t.target.composing||e.$set(e.login,"mail",t.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:e.login.password,expression:"login.password"}],staticClass:"input",attrs:{type:"password",placeholder:"  Veuillez entrer votre mot de passe  ",required:""},domProps:{value:e.login.password},on:{input:function(t){t.target.composing||e.$set(e.login,"password",t.target.value)}}}),e._m(0),s("button",{attrs:{id:"submit"},on:{click:e.handleSubmit}},[s("span",[e._v("Connexion")])]),s("p",[e._v(e._s(e.msgError))]),e._m(1)])])])},n=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"souvenir"}},[o("input",{staticClass:"souvenir",attrs:{type:"checkbox",name:"souvenir",checked:""}}),o("label",{attrs:{for:"souvenir"}},[e._v("Se Souvenir de moi")])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("span",{attrs:{id:"links"}},[o("a",{attrs:{href:"#"}},[e._v("S'inscrire")]),o("a",{attrs:{href:"#"}},[e._v("Mot de passe oublié ?")])])}],a="Authorization",r="/login",i=function(){return window.localStorage.getItem(a)},l=function(e){window.localStorage.setItem(a,"Bearer "+e)},u=function(){window.localStorage.removeItem(a)},c=function(e){u(),e.$router.push({path:r})},p=function(){return Boolean(i())},m={deleteLocalToken:u,getLocalToken:i,isLoggedIn:p,logUserOut:c,setLocalToken:l},d=o("8206"),v=o.n(d),g={data:function(){return{msgError:"",logins:{},login:{mail:"",password:""}}},methods:{connexion:function(e,t){var o=this;console.log(e),console.log(t),v.a.post("http://localhost:8181/ano/connexion",t).then(function(e){console.log("sucess",e),console.log(e.data),m.setLocalToken(e.data),o.$router.push("mon-profil")}).catch(function(e){o.msgError=e.data,console.log("erreur",e)})},handleSubmit:function(e){if(e.preventDefault(),!this.login.mail||!this.login.password)return console.log("error"),this.displayMessage("Vous devez remplir tout les champs","warning");this.connexion(this.login,this.login),console.log("methode password")}}},f=g,h=(o("e24c"),o("2877")),w=Object(h["a"])(f,s,n,!1,null,"5de46c3d",null);t["default"]=w.exports},"0aed":function(e,t,o){},"12ac":function(e,t,o){"use strict";o.r(t);var s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"projets"})},n=[],a={name:"projets"},r=a,i=o("2877"),l=Object(i["a"])(r,s,n,!1,null,null,null);t["default"]=l.exports},3659:function(e,t,o){},"3ab7":function(e,t,o){"use strict";o.r(t);var s=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"rectangles"},[s("img",{attrs:{id:"salariesconnexion",src:o("7f37"),alt:"bureau",role:"img"}}),s("form",{attrs:{id:"formcontactes",method:"post"}},[s("h1",{staticClass:"titre"},[e._v(" Rejoignez notre Communaute")]),s("br"),s("p",{staticClass:"slogan"},[e._v("Nous utiliserons ces informations pour vous proposer des évènements et des projets près de chez vous.")]),s("p",[e._v(e._s(e.message))]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.employee.lastname,expression:"employee.lastname"}],staticClass:"nom",attrs:{placeholder:"  Votre Nom  ",required:""},domProps:{value:e.employee.lastname},on:{input:function(t){t.target.composing||e.$set(e.employee,"lastname",t.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:e.employee.firstname,expression:"employee.firstname"}],staticClass:"prenom",attrs:{placeholder:"  Votre prenom  ",required:""},domProps:{value:e.employee.firstname},on:{input:function(t){t.target.composing||e.$set(e.employee,"firstname",t.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:e.employee.login,expression:"employee.login"}],attrs:{placeholder:"  Votre pseudo  ",required:""},domProps:{value:e.employee.login},on:{input:function(t){t.target.composing||e.$set(e.employee,"login",t.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:e.employee.mail,expression:"employee.mail"}],attrs:{placeholder:"  Votre adresse mail Capgemini  ",type:"email",required:""},domProps:{value:e.employee.mail},on:{input:function(t){t.target.composing||e.$set(e.employee,"mail",t.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:e.passwordOne,expression:"passwordOne"}],attrs:{type:"password",placeholder:"  mot de passe  ",required:""},domProps:{value:e.passwordOne},on:{input:function(t){t.target.composing||(e.passwordOne=t.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:e.passwordTwo,expression:"passwordTwo"}],attrs:{type:"password",placeholder:"  Veuillez confirmer votre mot de passe  ",required:""},domProps:{value:e.passwordTwo},on:{input:function(t){t.target.composing||(e.passwordTwo=t.target.value)}}}),s("select",{directives:[{name:"model",rawName:"v-model",value:e.employee.idCity,expression:"employee.idCity"}],staticClass:"yes",attrs:{name:"titre",required:""},on:{change:function(t){var o=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.$set(e.employee,"idCity",t.target.multiple?o:o[0])}}},[s("option",{attrs:{value:"ville",selected:"selected"}},[e._v("Ville")]),s("option",{attrs:{value:"1"}},[e._v("Paris")]),s("option",{attrs:{value:"2"}},[e._v("Marseille")]),s("option",{attrs:{value:"3"}},[e._v("Lyon")])]),s("select",{directives:[{name:"model",rawName:"v-model",value:e.employee.idOrganization,expression:"employee.idOrganization"}],staticClass:"yes2",attrs:{name:"titre",required:""},on:{change:function(t){var o=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.$set(e.employee,"idOrganization",t.target.multiple?o:o[0])}}},[s("option",{attrs:{value:"organization",selected:"selected"}},[e._v("Entité")]),s("option",{attrs:{value:"1"}},[e._v("Buisness")]),s("option",{attrs:{value:"2"}},[e._v("Sogeti")])]),s("button",{staticClass:"inscription",attrs:{name:"submit",type:"submit",id:"newcontactsubmit","data-submit":"...Sending"},on:{click:e.handleSubmit}},[s("span",[e._v("Inscription")])])])])},n=[],a=(o("6762"),o("8206")),r=o.n(a),i={data:function(){return{msg:null,msgCls:null,message:"",employees:[],passwordOne:"",passwordTwo:"",employee:{id:null,login:"",passwordHash:"",mail:"",lastname:"",firstname:"",idOrganization:null,idCity:null}}},methods:{displayMessage:function(e,t){if(!e)return console.error("the message is required !");var o=["success","warning","error"];o.includes(t)?(this.msgCls=t,this.msg=e):console.warning("".concat(t," is not a valid css class for messages"))},createEmployee:function(e){var t=this;console.log(this.employee),console.log(e),r.a.post("http://localhost:8181/ano/post",this.employee).then(function(e){t.employees=e.data,console.log("sucess",e)}).catch(function(e){console.log("erreur",e)})},password:function(){return console.log("password"),this.passwordOne===this.passwordTwo&&null!=this.passwordOne?(console.log("success password"),this.employee.passwordHash=this.passwordOne,this.createEmployee(this.employee)):(console.log("fail"),this.message="mot de passe différent")},handleSubmit:function(e){if(e.preventDefault(),!(this.employee.login&&this.employee.mail&&this.employee.firstname&&this.employee.lastname&&this.employee.idCity&&this.employee.idOrganization))return console.log("error"),this.displayMessage("Vous devez remplir tout les champs","warning");this.password(),console.log("methode password")}}},l=i,u=(o("6a20"),o("2877")),c=Object(u["a"])(l,s,n,!1,null,"35d971d7",null);t["default"]=c.exports},6762:function(e,t,o){"use strict";var s=o("5ca1"),n=o("c366")(!0);s(s.P,"Array",{includes:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}}),o("9c6c")("includes")},"6a20":function(e,t,o){"use strict";var s=o("7802"),n=o.n(s);n.a},7802:function(e,t,o){},"7f37":function(e,t,o){e.exports=o.p+"img/wonderful_world.d001dff4.jpg"},"8cc6":function(e,t,o){e.exports=o.p+"img/Capture.350d6c50.png"},c3bc:function(e,t,o){"use strict";var s=o("3659"),n=o.n(s);n.a},e24c:function(e,t,o){"use strict";var s=o("0aed"),n=o.n(s);n.a},e351:function(e,t,o){e.exports=o.p+"img/Redimension.7512ebab.jpg"},f820:function(e,t,o){"use strict";o.r(t);var s=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},n=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"about"},[s("div",{attrs:{id:"unique"}},[s("img",{attrs:{id:"proposconnexion",src:o("8cc6"),alt:"bureau",role:"img"}}),s("div",{attrs:{id:"propos"}},[s("h2",[e._v("\n              Notre plateforme à "),s("br"),s("span",[e._v("votre service")])]),s("p",[e._v("\n            Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là, mais la majeure partie d'entre elles a été altérée par l'addition d'humour ou de mots aléatoires qui ne ressemblent pas une seconde à du texte standard. Si vous voulez utiliser un passage du Lorem Ipsum, vous devez être sûr qu'il n'y a rien d'embarrassant caché dans le texte. Tous les générateurs de Lorem Ipsum sur Internet tendent à reproduire le même extrait sans fin, ce qui fait de lipsum.com le seul vrai générateur de Lorem Ipsum. Iil utilise un dictionnaire de plus de 200 mots latins, en combinaison de plusieurs structures de phrases, pour générer un Lorem Ipsum irréprochable. Le Lorem Ipsum ainsi obtenu ne contient aucune répétition, ni ne contient des mots farfelus, ou des touches d'humour.\n           \n          ")])])])])}],a=(o("c3bc"),o("2877")),r={},i=Object(a["a"])(r,s,n,!1,null,"ed1586f4",null);t["default"]=i.exports}}]);
//# sourceMappingURL=logo.fbfb1625.js.map