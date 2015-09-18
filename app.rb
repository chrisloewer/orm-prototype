require 'sinatra'
require 'data_mapper'
require 'handlebars'

set :port, 8080


handlebars = Handlebars::Context.new


main = File.read(File.join('public', 'templates/template.hbs'))
element = File.read(File.join('public', 'templates/template2.hbs'))


template = handlebars.compile(main)
template_two = handlebars.compile(element)


get '/' do
  template.call(:say => template_two.call(:content => 'TEST'), :what => 'one!')
end
