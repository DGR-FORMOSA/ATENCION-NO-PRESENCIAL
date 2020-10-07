document.querySelector("#submit").addEventListener("click", e => {
  e.preventDefault();

  //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
  let telefono = "5493704404352";

  let contribuyente = document.querySelector("#contribuyente").value;
  let celular = document.querySelector("#celular").value;
  let caracter = document.querySelector("#caracter").value;
  let CUIT = document.querySelector("#CUIT").value;
  let resp = document.querySelector("#respuesta");

  resp.classList.remove("fail");
  resp.classList.remove("send");

  let url = `https://api.whatsapp.com/send?phone=+5493704404352&text=
		*_ATENCION_NO_PRESENCIAL_*%0A
		*GESTION*%0A%0A
		*¿Cuál es tu nombre y apellido?*%0A
		${contribuyente}%0A
		*Ingresá tu N° de celular*%0A
		${celular}%0A
		*La consulta, la efectúas en carácter de:*%0A
		${caracter}%0A
		*Ingresá el N° de CUIT*%0A
		${CUIT}%0A`;

  if (contribuyente === "" || celular === "" || CUIT === "") {
    resp.classList.add("fail");
    resp.innerHTML = `Faltan algunos datos, ${cliente}`;
    return false;
  }
  resp.classList.remove("fail");
  resp.classList.add("send");
  resp.innerHTML = `Tu consulta ha sido iniciada, ${contribuyente}`;

  window.open(url);
});
