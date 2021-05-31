$(function() {

  $.validator.setDefaults({
    errorClass: 'invalid-feedback',
    highlight: function(element) {
      $(element)

        .addClass('is-invalid');
    },
    unhighlight: function(element) {
      $(element)

        .removeClass('is-invalid');
    },
    errorPlacement: function (error, element) {
      if (element.prop('type') === 'checkbox') {
        error.insertAfter(element.parent());
      } else {
        error.insertAfter(element);
      }
    }
  });

  $.validator.addMethod('strongPassword', function(value, element) {
    return this.optional(element) 
      || value.length >= 6
      && /\d/.test(value)
      && /[a-z]/i.test(value);
  }, 'La contraseña debe tener mínimo 6 caracteres y mínimo número o una letra.')

  $("#register-form").validate({
    rules: {
        inputEmail: {
        required: true,
        email: true,
      },
        inputPass: {
        required: true,
        strongPassword: true
      },
        inputPass2: {
        required: true,
        equalTo: '#inputPass'
      },
      inputProvincia: {
        required: true,
        
      },
        inputUser: {
        required: true,
      },
      
      terms: {
        required: true
      }
    },
    messages: {
      "inputEmail": {
			required: "Este campo es obligatorio.",
			email: "Por favor, escribe una dirección de correo válida"
		},
		"inputPass": {
			required: "Este campo es obligatorio.",
			minlength: "Por favor, no escribas menos de {0} caracteres."
		},
		"inputPass2": {
			required: "Este campo es obligatorio.",
			minlength: "Por favor, no escribas menos de {0} caracteres.",
			equalTo: "La contraseña no coincide. "
		},
		"inputProvincia":{
			required: "Selecciona una provincia.",
			
		},
		"inputUser":{
			required: "Este campo es obligatorio."
		},
	
		"terms": {
        	required:"Este campo es obligatorio."
      }
	
    }
  });

	$("#register-form").on('submit', function() {
		if ($('#register-form').valid()) {
			alert("formulario válido");
		} else {
			alert("formulario no válido");
		}
	});

});




