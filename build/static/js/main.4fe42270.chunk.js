(this["webpackJsonpdojo-blog"]=this["webpackJsonpdojo-blog"]||[]).push([[0],{23:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(16),r=n.n(s),i=(n(23),n(6)),o=n.n(i),l=n(9),u=n(2),j=n(3),d=n(12),m=n(0),b=function(){return Object(m.jsxs)("div",{className:"header",children:[Object(m.jsxs)("h1",{className:"header-title",children:["Bibliotecas de Provas ",Object(m.jsx)("span",{className:"span-text-title",children:"UCAN"})]}),Object(m.jsxs)(j.c,{children:[Object(m.jsx)(j.a,{exact:!0,path:"/biblioteca-de-provas-e-materiais-site",children:Object(m.jsx)(d.b,{to:"/biblioteca-de-provas-e-materiais-site/contribute",className:"contribute-link",children:"Contribua"})}),Object(m.jsx)(j.a,{exact:!0,path:"/biblioteca-de-provas-e-materiais-site/contribute",children:Object(m.jsx)(d.b,{to:"/biblioteca-de-provas-e-materiais-site",className:"contribute-link",children:"Voltar"})})]})]})},O=function(e){var t=e.handleSearch,n=e.handleActualCourseChange,a=e.handleActualSubjectChange,s=e.handleActualDocumentType,r=e.actualCourse,i=(e.actualSubject,e.actualDocumentType,e.allCoursesStructure),j=Object(c.useState)(""),d=Object(u.a)(j,2),b=d[0],O=d[1],h=Object(c.useState)(""),f=Object(u.a)(h,2),p=f[0],x=f[1],v=Object(c.useState)([]),g=Object(u.a)(v,2),y=g[0],N=g[1],S=Object(c.useState)([]),k=Object(u.a)(S,2),C=k[0],E=k[1],w=Object(c.useState)([]),T=Object(u.a)(w,2),I=T[0],B=T[1],D=Object(c.useState)([]),F=Object(u.a)(D,2),A=F[0],q=F[1],R=Object(c.useState)({}),P=Object(u.a)(R,2),_=(P[0],P[1]),U=function(){var e=Object(l.a)(o.a.mark((function e(){var t,c,r,l,u=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:u.length>0&&void 0!==u[0]?u[0]:"",u.length>1&&void 0!==u[1]?u[1]:0,u.length>2&&void 0!==u[2]?u[2]:0,0!==(t=Object.keys(i)).length&&(_(i),N(t),c=t[0],r=Object.keys(i[c][c])[0],E(Object.keys(i[c][c])),O(r),l=Object.keys(i[c][c][r])[0],x(l),B(Object.keys(i[c][c][r])),q(Object.keys(i[c][c][r][l])),n(c),a(Object.keys(i[c][c][r][l])[0]),s("Frequ\xeancias"));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){U()}),[]),Object(m.jsxs)("div",{className:"search-container",children:[Object(m.jsxs)("div",{className:"search-container--top",children:[Object(m.jsx)("select",{onChange:function(e){n(e.target.value);var t=e.target.value;n(e.target.value),E(Object.keys(i[t][t])),B(Object.keys(i[t][t][b])),q(Object.keys(i[t][t][b][p]))},name:"course",id:"course",className:"search-container--element",children:y.map((function(e){return Object(m.jsx)("option",{value:e,children:e})}))}),Object(m.jsx)("select",{onChange:function(e){var t=e.target.value;O(t),B(Object.keys(i[r][r][t])),q(Object.keys(i[r][r][t][p]))},name:"ano",id:"ano",className:"search-container--element",children:C.map((function(e){return Object(m.jsxs)("option",{value:e,children:[e," \xba Ano"]})}))}),Object(m.jsx)("select",{onChange:function(e){var t=e.target.value;x(t),N(Object.keys(i[r][r][b][t]))},name:"semestre",id:"semestre",className:"search-container--element",children:I.map((function(e){return Object(m.jsxs)("option",{value:e,children:[e," \xba Semestre"]})}))}),Object(m.jsx)("select",{onChange:function(e){a(e.target.value)},name:"subject",id:"subject",className:"search-container--element",children:A.map((function(e){return Object(m.jsx)("option",{value:e,children:e})}))}),Object(m.jsxs)("select",{onChange:function(e){s(e.target.value)},name:"documentType",id:"documentType",className:"search-container--element",children:[Object(m.jsx)("option",{value:"Frequ\xeancias",children:"Frequ\xeancias"}),Object(m.jsx)("option",{value:"Exames",children:"Exames"}),Object(m.jsx)("option",{value:"Recursos",children:"Recursos"})]})]}),Object(m.jsx)("div",{className:"search-container--bottom",children:Object(m.jsx)("button",{onClick:t,className:"search-button",children:"Pesquisar"})})]})},h=function(e){var t=e.assigment,n=e.id,a=Object(c.useState)(!1),s=Object(u.a)(a,2);s[0],s[1];return Object(m.jsxs)("div",{className:"assigment-item",children:[Object(m.jsx)("img",{id:"img-"+n,src:t,alt:"",className:"assigment-item-preview"}),Object(m.jsx)("div",{className:"assigment-item-hover-container",children:Object(m.jsxs)("ul",{className:"hover-container-menu",children:[Object(m.jsx)("li",{className:"hover-container-menu--item",children:Object(m.jsx)("img",{src:"./img/fluent_eye-show-24-filled.svg",alt:"View assigment",className:"hover-container-menu--item-img"})}),Object(m.jsx)("a",{href:t,className:"hover-container-menu--item",download:t,children:Object(m.jsx)("img",{src:"./img/akar-icons_download.svg",alt:"Download assigment",className:"hover-container-menu--item-img"})})]})})]})},f=function(e){var t=e.assigments;return Object(m.jsx)("div",{className:"assigment-container",children:t.map((function(e,t){return Object(m.jsx)(h,{assigment:e,id:t})}))})},p=function(e){var t=e.id,n=e.handleDelete,a=e.allCoursesStructure,s=Object(c.useState)([]),r=Object(u.a)(s,2),i=r[0],j=r[1],d=Object(c.useState)([]),b=Object(u.a)(d,2),O=b[0],h=b[1],f=Object(c.useState)([]),p=Object(u.a)(f,2),x=p[0],v=p[1],g=Object(c.useState)([]),y=Object(u.a)(g,2),N=y[0],S=y[1],k=Object(c.useState)([]),C=Object(u.a)(k,2),E=C[0],w=C[1],T=Object(c.useState)(""),I=Object(u.a)(T,2),B=I[0],D=I[1],F=Object(c.useState)(""),A=Object(u.a)(F,2),q=A[0],R=A[1],P=Object(c.useState)(""),_=Object(u.a)(P,2),U=_[0],J=_[1],L=Object(c.useState)(""),V=Object(u.a)(L,2),M=V[0],X=V[1],z=Object(c.useState)(""),G=Object(u.a)(z,2),H=G[0],K=G[1],Q=Object(c.useState)({}),W=Object(u.a)(Q,2),Y=(W[0],W[1]),Z=function(){var e=Object(l.a)(o.a.mark((function e(){var t,n,c,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:0!==(t=Object.keys(a)).length&&(Y(a),j(t),n=t[0],R(n),c=Object.keys(a[n][n])[0],h(Object.keys(a[n][n])),J(c),s=Object.keys(a[n][n][c])[0],X(s),v(Object.keys(a[n][n][c])),K(Object.keys(a[n][n][c][s])[0]),S(Object.keys(a[n][n][c][s])));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),$=function(e){document.getElementById("sending-form-loader-container"+e).style.opacity="0",setTimeout((function(){document.getElementById("sending-form-loader-container"+e).style.display="none"}),600)},ee=function(e,t){e.preventDefault(),D("sending"),function(e){document.getElementById("sending-form-loader-container"+e).style.display="flex",document.getElementById("sending-form-loader-container"+e).style.opacity="1"}(t);var c=new FormData,a="".concat(document.getElementById("course").value,",").concat(document.getElementById("year").value,",").concat(document.getElementById("semestre").value,", ").concat(document.getElementById("subject").value,", ").concat(document.getElementById("documentType").value),s=document.getElementById("userEmail").value,r=document.getElementById("files"+t).files;c.append("destFolder",a),c.append("userEmail",s);for(var i=0;i<r.length;i++)c.append("files",r[i]);fetch("https://provas-ucan.herokuapp.com/upload/submission",{method:"POST",body:c}).then((function(e){return e.json()})).then((function(e){$(t),setTimeout((function(){n(t)}),600)})).catch((function(e){D("error"),setTimeout((function(){$(t)}),600)}))};return Object(c.useEffect)((function(){Z()}),[]),Object(m.jsxs)("form",{id:t,encType:"multipart/form-data",className:"form-container",method:"POST",onSubmit:function(e){ee(e,t)},children:[Object(m.jsx)("span",{className:"delete-button btn-standard",onClick:function(){n(t)},children:"Deletar"}),Object(m.jsx)("h1",{className:"subject-form-name",children:H}),Object(m.jsxs)("div",{className:"form-row-line",children:[Object(m.jsx)("select",{name:"course",id:"course",className:"search-container--element",children:i.map((function(e){return Object(m.jsxs)("option",{value:e,children:[" ",e," "]})}))}),Object(m.jsx)("select",{onChange:function(e){var t=e.target.value;J(t),v(Object.keys(a[q][q][t])),S(Object.keys(a[q][q][t][M]))},name:"year",id:"year",className:"search-container--element",children:O.map((function(e){return Object(m.jsxs)("option",{value:e,children:[" ",e,"\xba Ano"]})}))}),Object(m.jsx)("select",{onChange:function(e){var t=e.target.value;X(t),S(Object.keys(a[q][q][U][t]))},name:"semestre",id:"semestre",className:"search-container--element",children:x.map((function(e){return Object(m.jsxs)("option",{value:e,children:[" ",e,"\xba Semestre "]})}))}),Object(m.jsx)("select",{name:"subject",id:"subject",className:"search-container--element",children:N.map((function(e){return Object(m.jsxs)("option",{value:e,children:[" ",e," "]})}))}),Object(m.jsxs)("select",{name:"documentType",id:"documentType",className:"search-container--element",children:[Object(m.jsx)("option",{value:"Frequ\xeancias",children:"Frequ\xeancias"}),Object(m.jsx)("option",{value:"Exames",children:"Exames"}),Object(m.jsx)("option",{value:"Recursos",children:"Recursos"})]})]}),Object(m.jsxs)("span",{className:"add-more-content btn-standard",children:[Object(m.jsx)("input",{type:"file",name:"files",id:"files"+t,className:"files-input",onChange:function(){!function(e){for(var t=document.getElementById("files"+e).files,n=[],c=0;c<t.length;c++)n.push(t[c]);w(E.concat(n))}(t)},multiple:"true"}),"Adicionar Provas"]}),Object(m.jsx)("input",{type:"email",name:"userEmail",id:"userEmail",placeholder:"example@gmail.com",className:"input-field-text",hidden:"true"}),Object(m.jsx)("div",{className:"photo-container",children:E.map((function(e,t){return Object(m.jsxs)("div",{className:"individual-file-container",children:[Object(m.jsx)("img",{src:URL.createObjectURL(e),alt:"",className:"file-preview-img"}),Object(m.jsx)("button",{className:"individual-file-container-delete-button",onClick:function(){!function(e){var t=E.filter((function(t,n){return n!==e}));w(t)}(t)},children:"X"})]})}))}),Object(m.jsx)("button",{type:"submit",className:"send-form-submission btn-standard",children:"Enviar"}),Object(m.jsxs)("div",{id:"sending-form-loader-container"+t,className:"sending-form-loader-container",children:["sending"===B&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{className:"loader-spinner"}),Object(m.jsx)("h2",{className:"loader-spinner-text",children:"Enviando..."})]}),"error"===B&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{className:"error-signal-container"}),Object(m.jsx)("h2",{className:"loader-spinner-text error-text",children:"Algum erro aconteceu"})]})]})]})},x=function(e){var t=e.allCoursesStructure,n=Object(c.useState)([]),a=Object(u.a)(n,2),s=a[0],r=a[1],i=Object(c.useState)(0),o=Object(u.a)(i,2),l=o[0],j=o[1];function d(e){r(s.filter((function(t){return t.id!==e})))}return Object(m.jsxs)("div",{className:"contribute-container",children:[Object(m.jsx)("img",{src:"./img/undraw_Team_re_0bfe.svg",alt:"Contributers",className:"contributers-ilustration"}),Object(m.jsx)("button",{className:"create-new-form",onClick:function(){if(0!==Object.keys(t).length){var e=s;e.push({formId:"form-"+l,handleDelete:d,allCoursesStructure:t}),r(e),j(l+1)}else alert("Carrengando estrutura de cursos")},children:"Criar Form"}),Object(m.jsx)("div",{className:"contribute-form-container",children:s.map((function(e,t){return Object(m.jsx)(p,{id:e.formId,handleDelete:e.handleDelete,allCoursesStructure:e.allCoursesStructure},t)}))})]})},v=function(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(""),r=Object(u.a)(s,2),i=r[0],h=r[1],p=Object(c.useState)(!0),v=Object(u.a)(p,2),g=v[0],y=v[1],N=Object(c.useState)(""),S=Object(u.a)(N,2),k=S[0],C=S[1],E=Object(c.useState)(""),w=Object(u.a)(E,2),T=w[0],I=w[1],B=Object(c.useState)({}),D=Object(u.a)(B,2),F=D[0],A=D[1],q=function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://provas-ucan.herokuapp.com/courses/".concat(i,"/").concat(k,"/").concat(T));case 2:return t=e.sent,e.next=5,t.json();case 5:t=e.sent.result.filesUrls,a(t);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),R=function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:q();case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),P=function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://provas-ucan.herokuapp.com/courses/all");case 2:return t=e.sent,e.next=5,t.json();case 5:t=e.sent,A(t.courses),y(!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){P()}),[]),Object(m.jsx)(d.a,{children:Object(m.jsxs)("div",{className:"main-app-container",children:[!1===g&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(b,{}),Object(m.jsxs)(j.c,{children:[Object(m.jsxs)(j.a,{exact:!0,path:"/biblioteca-de-provas-e-materiais-site/",children:[Object(m.jsx)(O,{handleActualCourseChange:function(e){h(e)},handleActualSubjectChange:function(e){C(e)},handleActualDocumentType:function(e){I(e)},actualCourse:i,actualSubject:k,actualDocumentType:T,allCoursesStructure:F,handleSearch:R}),Object(m.jsx)(f,{assigments:n})]}),Object(m.jsx)(j.a,{exact:!0,path:"/biblioteca-de-provas-e-materiais-site/contribute",children:Object(m.jsx)(x,{allCoursesStructure:F})})]})]}),!0===g&&Object(m.jsx)("div",{id:"sending-form-loader-container0",className:"sending-form-loader-container",style:{display:"flex",opacity:"1"},children:Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{className:"loader-spinner"}),Object(m.jsx)("h2",{className:"loader-spinner-text",children:"Carregando ..."})]})})]})})};r.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(v,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.4fe42270.chunk.js.map