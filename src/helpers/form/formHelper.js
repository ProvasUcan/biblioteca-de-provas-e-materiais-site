export const generateRemoteDestFolder = (course, year, semestre, subject, documentType) => {
  const destFolder = `${course},${year},${semestre}, ${subject}, ${documentType}`;

  return destFolder;
}