
function getDateNow(){
  const data = new Date()
  const dia = data.getDate().toString()
  const  diaF = (dia.length == 1) ? '0' + dia : dia
  const  mes = (data.getMonth() + 1).toString()
  const  mesF = (mes.length == 1) ? '0' + mes : mes
  const  anoF = data.getFullYear();

  return diaF + "/" + mesF + "/" + anoF;
}

export default getDateNow;
