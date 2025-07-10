export const formatDateFromString = (dateString: string) => {
    if (!dateString) return 'Date invalide';
  
    const d = new Date(dateString); // Convertir la chaîne en Date
  
    if (isNaN(d.getTime())) {
      return 'Date invalide'; // Vérifier si la conversion a échoué
    }
  
    const day = d.getDate().toString().padStart(2, '0'); // Ajoute un zéro si < 10
    const month = (d.getMonth() + 1).toString().padStart(2, '0'); // Ajoute un zéro si < 10
    const year = d.getFullYear();
  
    return `${day}-${month}-${year}`;
  };