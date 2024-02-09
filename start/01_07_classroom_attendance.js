const classrom = ["Rashida","John", "Susanna", "Mikael", "Sara"];


function getStudents(hasAssistent = false) {
  if(hasAssistent) {
    const [teacher, assistent, ...students] = classrom;
    return `Techer: ${teacher} assistent: ${assistent} students: ${students}`
  } else {
    const [teacher, ...students] = classrom;
        return `Techer: ${teacher} students: ${students}`

  }
}
  console.log( getStudents(true));
