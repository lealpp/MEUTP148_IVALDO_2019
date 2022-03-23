function validacao(){
	if (document.form.nome.value=="")
	{
		
		alert("gigite o nome")
		document.form.nome.focus(); 
		return false;
	}
	
	if (document.form.senha.value.length < 8)
	{
		alert("minimo 8 caracter")
		document.form.senha.focus(); 
		return false;
	}
    if (document.form.email.value == ""  || document.form.email.value.indexOf('@')==-1 || document.form.email.value.indexOf('.')==-1 )
		{
			alert("digite um e-mail valido")
		document.form.email.focus(); 
		return false;
		}
}