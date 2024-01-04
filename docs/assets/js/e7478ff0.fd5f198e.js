"use strict";(self.webpackChunkrxdb=self.webpackChunkrxdb||[]).push([[3442],{7706:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>h,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=s(5893),o=s(1151);const a={title:"Questions and Answers",slug:"questions-answers.html"},r="Questions and answers",i={id:"questions-answers",title:"Questions and Answers",description:"Can't change the schema of a collection",source:"@site/docs/questions-answers.md",sourceDirName:".",slug:"/questions-answers.html",permalink:"/questions-answers.html",draft:!1,unlisted:!1,editUrl:"https://github.com/pubkey/rxdb/tree/master/docs-src/docs/questions-answers.md",tags:[],version:"current",frontMatter:{title:"Questions and Answers",slug:"questions-answers.html"},sidebar:"tutorialSidebar",previous:{title:"Node.js Database",permalink:"/nodejs-database.html"},next:{title:"Contribute to RxDB",permalink:"/contribution.html"}},h={},c=[{value:"Can&#39;t change the schema of a collection",id:"cant-change-the-schema-of-a-collection",level:2},{value:"Why is the PouchDB RxStorage deprecated?",id:"why-is-the-pouchdb-rxstorage-deprecated",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"questions-and-answers",children:"Questions and answers"}),"\n",(0,n.jsx)(t.h2,{id:"cant-change-the-schema-of-a-collection",children:"Can't change the schema of a collection"}),"\n",(0,n.jsxs)(t.p,{children:["When you make changes to the schema of a collection, you sometimes can get an error like\n",(0,n.jsx)(t.code,{children:"Error: addCollections(): another instance created this collection with a different schema"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"This means you have created a collection before and added document-data to it.\nWhen you now just change the schema, it is likely that the new schema does not match the saved documents inside of the collection.\nThis would cause strange bugs and would be hard to debug, so RxDB check's if your schema has changed and throws an error."}),"\n",(0,n.jsxs)(t.p,{children:["To change the schema in ",(0,n.jsx)(t.strong,{children:"production"}),"-mode, do the following steps:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Increase the ",(0,n.jsx)(t.code,{children:"version"})," by 1"]}),"\n",(0,n.jsxs)(t.li,{children:["Add the appropriate ",(0,n.jsx)(t.a,{href:"https://pubkey.github.io/rxdb/migration-schema.html",children:"migrationStrategies"})," so the saved data will be modified to match the new schema"]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["In ",(0,n.jsx)(t.strong,{children:"development"}),"-mode, the schema-change can be simplified by ",(0,n.jsx)(t.strong,{children:"one of these"})," strategies:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Use the memory-storage so your db resets on restart and your schema is not saved permanently"}),"\n",(0,n.jsxs)(t.li,{children:["Call ",(0,n.jsx)(t.code,{children:"removeRxDatabase('mydatabasename', RxStorage);"})," before creating a new RxDatabase-instance"]}),"\n",(0,n.jsxs)(t.li,{children:["Add a timestamp as suffix to the database-name to create a new one each run like ",(0,n.jsx)(t.code,{children:"name: 'heroesDB' + new Date().getTime()"})]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"why-is-the-pouchdb-rxstorage-deprecated",children:"Why is the PouchDB RxStorage deprecated?"}),"\n",(0,n.jsxs)(t.p,{children:["When I started developing RxDB in 2016, I had a specific use case to solve.\nBecause there was no client-side database out there that fitted, I created\nRxDB as a wrapper around PouchDB. This worked great and all the PouchDB features\nlike the query engine, the adapter system, CouchDB-replication and so on, came for free.\nBut over the years, it became clear that PouchDB is not suitable for many applications,\nmostly because of its performance: To be compliant to CouchDB, PouchDB has to store all\nrevision trees of documents which slows down queries. Also purging these document revisions ",(0,n.jsx)(t.a,{href:"https://github.com/pouchdb/pouchdb/issues/802",children:"is not possible"}),"\nso the database storage size will only increase over time.\nAnother problem was that many issues in PouchDB have never been fixed, but only closed by the issue-bot like ",(0,n.jsx)(t.a,{href:"https://github.com/pouchdb/pouchdb/issues/6454",children:"this one"}),". The whole PouchDB RxStorage code was full of ",(0,n.jsx)(t.a,{href:"https://github.com/pubkey/rxdb/blob/285c3cf6008b3cc83bd9b9946118a621434f0cff/src/plugins/pouchdb/pouch-statics.ts#L181",children:"workarounds and monkey patches"})," to resolve\nthese issues for RxDB users. Many these patches decreased performance even further. Sometimes it was not possible to fix things from the outside, for example queries with ",(0,n.jsx)(t.code,{children:"$gt"})," operators return ",(0,n.jsx)(t.a,{href:"https://github.com/pouchdb/pouchdb/pull/8471",children:"the wrong documents"})," which is a no-go for a production database\nand hard to debug."]}),"\n",(0,n.jsxs)(t.p,{children:["In version ",(0,n.jsx)(t.a,{href:"/releases/10.0.0.html",children:"10.0.0"})," RxDB introduced the ",(0,n.jsx)(t.a,{href:"/rx-storage.html",children:"RxStorage"})," layer which\nallows users to swap out the underlying storage engine where RxDB stores and queries documents from.\nThis allowed to use alternatives from PouchDB, for example the ",(0,n.jsx)(t.a,{href:"/rx-storage-dexie.html",children:"Dexie RxStorage"})," in browsers\nor even the ",(0,n.jsx)(t.a,{href:"/rx-storage-foundationdb.html",children:"FoundationDB RxStorage"})," on the server side.\nThere where not many use cases left where it was a good choice to use the PouchDB RxStorage. Only replicating with a\nCouchDB server, was only possible with PouchDB. But this has also changed. RxDB has ",(0,n.jsx)(t.a,{href:"/replication-couchdb.html",children:"a plugin"})," that allows\nto replicate clients with any CouchDB server by using the RxDB replication protocol. This plugins work with any RxStorage so that it is not necessary to use the PouchDB storage.\nRemoving PouchDB allows RxDB to add many awaited features like filtered change streams for easier replication and permission handling. It will also free up development time."]}),"\n",(0,n.jsx)(t.p,{children:"If you are currently using the PouchDB RxStorage, you have these options:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Migrate to another ",(0,n.jsx)(t.a,{href:"/rx-storage.html",children:"RxStorage"})," (recommended)"]}),"\n",(0,n.jsx)(t.li,{children:"Never update RxDB to the next major version (stay on older 14.0.0)"}),"\n",(0,n.jsxs)(t.li,{children:["Fork the ",(0,n.jsx)(t.a,{href:"/rx-storage-pouchdb.html",children:"PouchDB RxStorage"})," and maintain the plugin by yourself."]}),"\n",(0,n.jsxs)(t.li,{children:["Fix all the ",(0,n.jsx)(t.a,{href:"https://github.com/pouchdb/pouchdb/issues?q=author%3Apubkey",children:"PouchDB problems"})," so that we can add PouchDB to the RxDB Core again."]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},1151:(e,t,s)=>{s.d(t,{Z:()=>i,a:()=>r});var n=s(7294);const o={},a=n.createContext(o);function r(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);