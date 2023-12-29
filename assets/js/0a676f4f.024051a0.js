"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[7242],{462:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>t,metadata:()=>c,toc:()=>l});var a=s(5893),r=s(1151);const t={sidebar_position:2},i="SSH Key",c={id:"linux/generalGuides/sshKey",title:"SSH Key",description:"Generar una nueva clave SSH",source:"@site/docs/linux/generalGuides/sshKey.md",sourceDirName:"linux/generalGuides",slug:"/linux/generalGuides/sshKey",permalink:"/test/docs/linux/generalGuides/sshKey",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/linux/generalGuides/sshKey.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"linuxSidebar",previous:{title:"Versiones de NodeJS",permalink:"/test/docs/linux/generalGuides/node"},next:{title:"Compresi\xf3n en rar",permalink:"/test/docs/linux/generalGuides/rarCompress"}},o={},l=[{value:"Generar una nueva clave SSH",id:"generar-una-nueva-clave-ssh",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"ssh-key",children:"SSH Key"}),"\n",(0,a.jsx)(n.h2,{id:"generar-una-nueva-clave-ssh",children:"Generar una nueva clave SSH"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",metastring:'title="Ejecutar en terminal"',children:'ssh-keygen -t rsa -b 4096 -C "your_email@example.com"\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Cuando se te indique ",(0,a.jsx)(n.code,{children:"Ingresar un archivo donde guardar la clave"}),", presiona Intro. Al hacerlo aceptas la ubicaci\xf3n predeterminada del archivo."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",metastring:'title="Ejecutar en terminal"',children:'eval "$(ssh-agent -s)"\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",metastring:'title="Ejecutar en terminal"',children:"ssh-add ~/.ssh/id_rsa\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Copiar el contenido del archivo ",(0,a.jsx)(n.code,{children:"id_rsa.pub"})," dentro de la carpeta ",(0,a.jsx)(n.code,{children:"home/USER/.ssh/"})," e ingresarlo en ",(0,a.jsx)(n.a,{href:"https://bitbucket.org/",children:"BitBucket"})]})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>i});var a=s(7294);const r={},t=a.createContext(r);function i(e){const n=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);