

export const dateTimeToString = ( dateTime ) => {
  
    const fechaHora = new Date(dateTime);

    // Obtener los componentes de la fecha y hora
    var dia = fechaHora.getDate();
    var mes = fechaHora.getMonth() + 1; // Los meses van de 0 a 11, así que sumamos 1
    var año = fechaHora.getFullYear();
    var horas = fechaHora.getHours();
    var minutos = fechaHora.getMinutes();
    var segundos = fechaHora.getSeconds();

    // Formatear los componentes para asegurar que tengan 2 dígitos
    if (dia < 10) {
        dia = '0' + dia;
    }
    if (mes < 10) {
        mes = '0' + mes;
    }
    if (horas < 10) {
        horas = '0' + horas;
    }
    if (minutos < 10) {
        minutos = '0' + minutos;
    }
    if (segundos < 10) {
        segundos = '0' + segundos;
    }

    return dia + "/" + mes + "/" + año + " " + horas + ":" + minutos
}
