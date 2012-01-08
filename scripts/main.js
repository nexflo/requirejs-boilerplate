require(['jquery','plugin/text!resource/message.txt'],function($,message){

  $('body').append('<h1>' + message + '</h1>')

})