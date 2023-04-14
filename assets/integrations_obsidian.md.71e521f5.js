import{_ as t,c as l,a as e,b as i,t as s,d as n,o}from"./app.bdf37425.js";const v=JSON.parse('{"title":"Sync all your reading to Obsidian","description":"","frontmatter":{"title":"Sync all your reading to Obsidian","editLink":true},"headers":[{"level":2,"title":"Features","slug":"features","link":"#features","children":[]},{"level":2,"title":"Installation","slug":"installation","link":"#installation","children":[]},{"level":2,"title":"Customizing which data is synced from Omnivore to Obsidian","slug":"customizing-which-data-is-synced-from-omnivore-to-obsidian","link":"#customizing-which-data-is-synced-from-omnivore-to-obsidian","children":[]},{"level":2,"title":"Controlling the layout of the data imported to Obsidian","slug":"controlling-the-layout-of-the-data-imported-to-obsidian","link":"#controlling-the-layout-of-the-data-imported-to-obsidian","children":[{"level":3,"title":"Mustache template language","slug":"mustache-template-language","link":"#mustache-template-language","children":[]},{"level":3,"title":"Variables available in the template","slug":"variables-available-in-the-template","link":"#variables-available-in-the-template","children":[]}]}],"relativePath":"integrations/obsidian.md","lastUpdated":1681443184000}'),r={name:"integrations/obsidian.md"},h={id:"frontmatter-title",tabindex:"-1"},p=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=n(`<p>Omninove integrates with Obsidian via the <a href="https://github.com/omnivore-app/obsidian-omnivore" target="_blank" rel="noreferrer">obsidian-omnivore</a> plugin. The plugin allows for customizing the data synced from Omnivore to Obsidian and controlling the layout of the data.</p><nav class="table-of-contents"><ul><li><a href="#features">Features</a></li><li><a href="#installation">Installation</a></li><li><a href="#customizing-which-data-is-synced-from-omnivore-to-obsidian">Customizing which data is synced from Omnivore to Obsidian</a></li><li><a href="#controlling-the-layout-of-the-data-imported-to-obsidian">Controlling the layout of the data imported to Obsidian</a><ul><li><a href="#mustache-template-language">Mustache template language</a></li><li><a href="#variables-available-in-the-template">Variables available in the template</a></li></ul></li></ul></nav><h2 id="features" tabindex="-1">Features <a class="header-anchor" href="#features" aria-hidden="true">#</a></h2><ul><li>Import your highlights and saved article</li><li>Create graphs based on Omnivore data</li><li>Filter imported data using Omnivores <a href="https://omnivore.app/help/search" target="_blank" rel="noreferrer">advanced search syntax</a></li><li>Custom templates for imported data</li></ul><h2 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-hidden="true">#</a></h2><ol><li>Install the plugin from the commnunity or build it from source and load unpacked plugin</li><li>Sign up for an <a href="https://omnivore.app" target="_blank" rel="noreferrer">Omnivore account</a></li><li>Go to <a href="https://omnivore.app/settings/api" target="_blank" rel="noreferrer">Omnivore</a> and create an API key</li><li>Open settings and add your api key</li></ol><h2 id="customizing-which-data-is-synced-from-omnivore-to-obsidian" tabindex="-1">Customizing which data is synced from Omnivore to Obsidian <a class="header-anchor" href="#customizing-which-data-is-synced-from-omnivore-to-obsidian" aria-hidden="true">#</a></h2><p><a href="./images/obsidian-sync-filter.png">Obsidian Sync Filter</a></p><p>The Omnivore Obsidian plugin offers three options for which data is imported:</p><ul><li>import all my articles: This will import every article you save to Omnivore and the labels (tags), highlights, and notes you have added to the article.</li><li>import just highlights: This will import every article you have saved that has highlights</li><li>advanced: This allows you to define a search filter to import. For example, import just Newsletters by using <code>label:Newsletter</code>.</li></ul><h2 id="controlling-the-layout-of-the-data-imported-to-obsidian" tabindex="-1">Controlling the layout of the data imported to Obsidian <a class="header-anchor" href="#controlling-the-layout-of-the-data-imported-to-obsidian" aria-hidden="true">#</a></h2><p>The Omnivore Obsidian plugin uses the <a href="https://mustache.github.io/" target="_blank" rel="noreferrer">mustache</a> template language to define how imported data is saved to Obsidian. The plugin settings allow you to define the template for a article layout. The default templates will be used if you do not define your own.</p><h3 id="mustache-template-language" tabindex="-1">Mustache template language <a class="header-anchor" href="#mustache-template-language" aria-hidden="true">#</a></h3><p>Mustache is a simple and logic-less templating language that allows you to create templates that are easy to read and maintain. Mustache templates consist of tags, which are placeholders that are replaced with actual values when the template is rendered.</p><p>There are several types of Mustache tags, including:</p><div><ul><li><code>{{ variable }}</code>: Renders the value of a variable.</li><li><code>{{# section }}</code> ... <code>{{/ section }}</code>: Renders a section of the template if the value of the section is true, such as an array or an object.</li><li><code>{{^ inverted section }}</code> ... <code>{{/ inverted section }}</code>: Renders a section of the template if the value of the section is false.</li><li><code>{{! comment }}</code>: Adds a comment to the template, which is ignored when the template is rendered.</li></ul><p>In addition to the basic Mustache tags, there are also several built-in Mustache functions that you can use in your templates, such as:</p><ul><li><code>{{# list }}</code> ... <code>{{/ list }}</code>: Renders a section of the template for each item in a list.</li><li><code>{{^ emptyList }}</code> ... <code>{{/ emptyList }}</code>: Renders a section of the template if a list is not empty.</li><li><code>{{&amp; variable }}</code> or <code>{{{ variable }}}</code>: Renders the value of a variable without escaping HTML characters.</li><li><code>{{&gt; partial }}</code>: Renders a partial template, which is a reusable template that can be included in other templates.</li></ul></div><h3 id="variables-available-in-the-template" tabindex="-1">Variables available in the template <a class="header-anchor" href="#variables-available-in-the-template" aria-hidden="true">#</a></h3><ul><li>id: The id of the article. This will be used as the id of the file in frontmatter</li><li>title: The title of the article</li><li>omnivoreUrl: The URL of the article in Omnivore</li><li>siteName: The name of the site the article was saved from</li><li>originalUrl: The URL of the original article</li><li>author: The author of the article</li><li>dateSaved: The date the article was saved to Omnivore in your perferrred date format</li><li>description: The description of the article</li><li>content: The content of the article in Markdown format</li><li>labels: A list of labels attached to the page <ul><li>name: The name of the label, for example <code>Newsletter</code></li></ul></li><li>note: The note attached to the article</li><li>type: The type of page, for example <code>ARTICLE</code> or <code>FILE</code></li><li>datePublished: The date the article was published in your perferrred date format</li><li>dateRead: The date the article was read in your perferrred date format</li><li>fileAttachment: The file attachment attached to the article</li><li>highlights: A list of highlights attached to the article <ul><li>text: The text of the highlight</li><li>highlightUrl: The URL of the highlight in Omnivore</li><li>labels: A list of labels attached to the highlight <ul><li>name: The name of the label, for example <code>Newsletter</code></li></ul></li><li>note: The note attached to the highlight</li><li>dateHighlighted: The date the highlight was created in your perferrred date format</li></ul></li></ul><p>Default template:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">---</span></span>
<span class="line"><span style="color:#A6ACCD;">id: {{{id}}}</span></span>
<span class="line"><span style="color:#A6ACCD;">title: {{{title}}}</span></span>
<span class="line"><span style="color:#A6ACCD;">{{#author}}</span></span>
<span class="line"><span style="color:#A6ACCD;">author: {{{author}}}</span></span>
<span class="line"><span style="color:#A6ACCD;">{{/author}}</span></span>
<span class="line"><span style="color:#A6ACCD;">{{#labels.length}}</span></span>
<span class="line"><span style="color:#A6ACCD;">tags:</span></span>
<span class="line"><span style="color:#A6ACCD;">{{#labels}} - {{{name}}}</span></span>
<span class="line"><span style="color:#A6ACCD;">{{/labels}}</span></span>
<span class="line"><span style="color:#A6ACCD;">{{/labels.length}}</span></span>
<span class="line"><span style="color:#A6ACCD;">date_saved: {{{dateSaved}}}</span></span>
<span class="line"><span style="color:#A6ACCD;">{{#datePublished}}</span></span>
<span class="line"><span style="color:#A6ACCD;">date_published: {{{datePublished}}}</span></span>
<span class="line"><span style="color:#A6ACCD;">{{/datePublished}}</span></span>
<span class="line"><span style="color:#A6ACCD;">---</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># {{{title}}}</span></span>
<span class="line"><span style="color:#A6ACCD;">#Omnivore</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">[Read on Omnivore]({{{omnivoreUrl}}})</span></span>
<span class="line"><span style="color:#A6ACCD;">[Read Original]({{{originalUrl}}})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">{{#highlights.length}}</span></span>
<span class="line"><span style="color:#A6ACCD;">## Highlights</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">{{#highlights}}</span></span>
<span class="line"><span style="color:#A6ACCD;">&gt; {{{text}}} [⤴️]({{{highlightUrl}}}) {{#labels}} #{{name}} {{/labels}}</span></span>
<span class="line"><span style="color:#A6ACCD;">{{#note}}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">{{{note}}}</span></span>
<span class="line"><span style="color:#A6ACCD;">{{/note}}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">{{/highlights}}</span></span>
<span class="line"><span style="color:#A6ACCD;">{{/highlights.length}}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,20);function c(a,u,m,g,f,b){return o(),l("div",null,[e("h1",h,[i(s(a.$frontmatter.title)+" ",1),p]),d])}const C=t(r,[["render",c]]);export{v as __pageData,C as default};
