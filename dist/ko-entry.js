/*
 Copyright (c) 2015, Ben Schulz
 License: BSD 3-clause (http://opensource.org/licenses/BSD-3-Clause)
*/
function l(h){return function(a){return a}(function(a){function d(d,h){return a.bindingHandlers[d]={init:function(e,d,b,f,p){var q=(f=a.unwrap(d()))&&f.from||b.has("from")&&b.get("from"),m=f&&f.as||b.has("as")&&b.get("as")||"entry";b={};b[m]=a.observable(null);var r=e.innerHTML,n=p.extend(b),k=!1;e.innerHTML="";var g=null,t=a.computed(function(){var c=a.unwrap(d()),b=(c=(c=a.unwrap(c&&c.identifiedBy||c))&&q.openOptionalEntryView(c))&&c.observable,f=!!(h||c&&b);if(f)n[m](b),k||(e.innerHTML=r,a.applyBindingsToDescendants(n,
e));else if(k)for(;e.firstChild;)a.removeNode(e.firstChild);g&&g.dispose();g=c;k=f});a.utils.domNodeDisposal.addDisposeCallback(e,function(){t.dispose();g&&g.dispose()});return{controlsDescendantBindings:!0}}}}d("optionalEntry",!0);return d("entry",!1)}(h))}"function"===typeof define&&define.amd?define(["knockout","ko-data-source"],l):window["ko-entry"]=l(window.ko);