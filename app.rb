require 'sinatra'
require 'data_mapper'
require 'json'

set :port, 8080

# DATABASE
DataMapper::setup(:default, "sqlite3://#{Dir.pwd}/books.db")

class Book
  include DataMapper::Resource
  property :id, Serial
  property :title, Text, :required => true
  property :author, Text, :required => true
  property :owner, Text, :required => true
  property :location, Text
end

DataMapper.finalize.auto_upgrade!


# ROUTING
get '/' do
  erb :home
end

get '/api/books' do
  @books = Book.all
  JSON.generate(@books)
end

post '/api/books' do
  b = Book.new
  b.title = params[:title]
  b.author = params[:author]
  b.owner = params[:owner]
  b.location = params[:location]
  b.save
  redirect '/'
end
