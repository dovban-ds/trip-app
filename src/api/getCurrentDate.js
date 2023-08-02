export const getCurrentDate = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear().toString().slice(-2).padStart(2, "0");
  const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
  const day = currentDate.getDate().toString().padStart(2, "0");

  return `20${year}-${month}-${day}`;
};
