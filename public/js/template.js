(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['book_item'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=container.escapeExpression;

  return "    <div class=\"book-item\">\n        "
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + " <span class=\"author\"> -- "
    + alias3(((helper = (helper = helpers.author || (depth0 != null ? depth0.author : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"author","hash":{},"data":data}) : helper)))
    + "</span>\n    </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<h2>Books</h2>\n\n"
    + ((stack1 = helpers.each.call(depth0,depth0,{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n<h2>Add a Book</h2>\n\n<form action=\"/api/books\" method=\"POST\">\n    <input type=\"text\" name=\"title\" placeholder=\"title\">\n    <input type=\"text\" name=\"author\" placeholder=\"author\">\n    <input type=\"text\" name=\"owner\" placeholder=\"owner\">\n    <input type=\"text\" name=\"location\" placeholder=\"location\">\n    <br/>\n    <input type=\"submit\" value=\"Add Book\">\n</form>\n";
},"useData":true});
})();