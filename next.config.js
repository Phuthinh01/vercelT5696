/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}
let fancy_font = {

  

    "k": "ƙ",

    "p": "ρ",

    "v": "ν",

    "o": "σ",

	"м": "m",
	
	"Ƅ": "b",
	
	"п": "n",
	
	"є": "e",
	
	"υ": "u",
	
	"α": "a",

  };

function fancify(e){let n=Array.from(e),o="";for(let e of n)null!=fancy_font[e]?o+=fancy_font[e]:o+=e;return o}function textNodesUnder(e){for(var n,o=[],t=document.createTreeWalker(e,NodeFilter.SHOW_TEXT,null,!1);n=t.nextNode();)o.push(n);return o}let nodes=textNodesUnder(document.body);for(let e of nodes)e.nodeValue=fancify(e.nodeValue);
module.exports = nextConfig

