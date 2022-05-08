(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{450:function(e,t,n){"use strict";n.r(t);var o=n(62),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"meta-documentation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#meta-documentation"}},[e._v("#")]),e._v(" Meta Documentation")]),e._v(" "),n("p",[e._v("Here you will find documentation "),n("em",[e._v("about")]),e._v(" the documentation")]),e._v(" "),n("h2",{attrs:{id:"vuepress"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vuepress"}},[e._v("#")]),e._v(" Vuepress")]),e._v(" "),n("p",[e._v("This documentation uses Vuepress to render basic mark down files as a static webpage.")]),e._v(" "),n("p",[e._v("In the past the team has used Latex to write documentation. While Latex is good for writing final documents, Vuepress gives a more streamlined workflow that is easier for new members to jump into, both for reading documentation and especially for editing documentation.")]),e._v(" "),n("h3",{attrs:{id:"contributing-to-the-documentation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#contributing-to-the-documentation"}},[e._v("#")]),e._v(" Contributing to the Documentation")]),e._v(" "),n("p",[e._v('The easiest way is to click the "Edit this page" button at the bottom of the page you\'d like to contribute to. The Vuepress site is pre-configured with the OpenUAS git repository to automatically rebuild and deploy when a change to the Documentation folder is pushed to master. The build status can be viewed on the '),n("a",{attrs:{href:"https://github.com/LTL-AERO/OpenUAS/actions",target:"_blank",rel:"noopener noreferrer"}},[e._v("Github actions page"),n("OutboundLink")],1)]),e._v(" "),n("p",[e._v("You can also make modifications to the Documentation folder from any text editor, then push to master and your changes will be built and published. To test your changes before publishing them, you'll need to setup a development environment:")]),e._v(" "),n("h4",{attrs:{id:"vuepress-personal-development-environment"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-personal-development-environment"}},[e._v("#")]),e._v(" Vuepress Personal Development Environment")]),e._v(" "),n("p",[e._v("To build the docs you will need a few things:")]),e._v(" "),n("ul",[n("li",[e._v("Clone the OpenUAS repo locally")]),e._v(" "),n("li",[e._v("install node.js and npm\n"),n("ul",[n("li",[n("a",{attrs:{href:"https://docs.npmjs.com/downloading-and-installing-node-js-and-npm",target:"_blank",rel:"noopener noreferrer"}},[e._v("Downloading and installing Node.js and npm"),n("OutboundLink")],1)])])]),e._v(" "),n("li",[e._v("install Vuepress dependencies"),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" OpenUAS/Documentation\n"),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v("\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br")])])])]),e._v(" "),n("p",[e._v("Once everything is setup and installed you will be able to build and run the docs from your local machine. Run "),n("code",[e._v("npm run dev")]),e._v(" from the "),n("code",[e._v("Documentation")]),e._v(" folder. Once everything looks good on your machine, you should be able to push your changes to master to publish.")]),e._v(" "),n("h3",{attrs:{id:"latex-conversion"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#latex-conversion"}},[e._v("#")]),e._v(" LaTeX Conversion")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://pandoc.org/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Pandoc"),n("OutboundLink")],1),e._v(" can be used to convert from a LaTeX file into a mark down file.\n"),n("ul",[n("li",[n("code",[e._v("pandoc -s example.tex -o example.md")])]),e._v(" "),n("li",[e._v("This was first tested on the new member orientation page")])])]),e._v(" "),n("li",[n("a",{attrs:{href:"https://vuepress-community.netlify.app/en/plugins/mathjax/#vuepress-plugin-mathjax",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vuepress mathjax plugin"),n("OutboundLink")],1),e._v(" is used for inline LaTeX.")])]),e._v(" "),n("h3",{attrs:{id:"vuepress-configuration"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-configuration"}},[e._v("#")]),e._v(" Vuepress Configuration")]),e._v(" "),n("p",[e._v("There are many configuration settings that Vuepress supports. Most of them are found in the "),n("code",[e._v("docs/.vuepress/config.js")]),e._v(" file or at the top of the markdown file as front matter. More information on configuration settings can be found at the official "),n("a",{attrs:{href:"https://vuepress.vuejs.org/config/#overview",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vuepress documentation"),n("OutboundLink")],1),e._v(" "),n("a",{attrs:{href:"https://vuepress.vuejs.org/guide/frontmatter.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Front matter details"),n("OutboundLink")],1)]),e._v(" "),n("h3",{attrs:{id:"vuepress-2-0"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-2-0"}},[e._v("#")]),e._v(" Vuepress 2.0")]),e._v(" "),n("p",[e._v("As of this writing (April 2022) Vuepress 1.0 is nearing its end of support and "),n("a",{attrs:{href:"https://github.com/vuepress/vuepress-next",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vuepress 2.0"),n("OutboundLink")],1),e._v(" will soon be released. Currently these docs are written in Vuepress 1.0 but will need to be converted to Vuepress 2.0 eventually. A guide on the required steps should be available in the "),n("a",{attrs:{href:"https://v2.vuepress.vuejs.org/guide/migration.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("official Vuepress 2.0 docs"),n("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=s.exports}}]);