require(['jquery','plugin/text!resource/message.txt'],function($,message){

  $('#content').append('<h2>' + message + '</h2>')

})