export const getCurrentTime = () => {
  
    

    const now = new Date();

    const hours = String(now.getHours()).padStart(2, '0'); // Horas (2 dígitos)
    const minutes = String(now.getMinutes()).padStart(2, '0'); // Minutos (2 dígitos)
    const seconds = String(now.getSeconds()).padStart(2, '0'); // Segundos (2 dígitos)
    return `${hours}:${minutes}:${seconds}`; // Devuelve la hora formateada
   
}