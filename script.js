$(document).ready(function(){
  $('button').click(function(){

    $('p').removeClass('red')
  })
  $('#formulario').submit(function(e){
    e.preventDefault();
    let data = {
      name: $('#name').val(),
      phone: $('#phone').val(),
      email: $('#email').val(),
    }
    console.log('Nome: ', data.name)
    console.log('Telefone: ', data.phone)
    console.log('E-mail: ', data.email)

  })
})
