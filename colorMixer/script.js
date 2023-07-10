function mixColors(){
  let color1 = document.getElementById('i1').value;
  let color2 = document.getElementById('i2').value;
  
  let result = document.getElementById('result');
  
  switch (color1) {
    case "red":
      switch (color2) {
        case "blue":
          result.style.backgroundColor = "purple";
          break;
        case "yellow":
          result.style.backgroundColor = "orange";
          break;
        default:
          result.style.backgroundColor = "Invalid color combination";
          break;
      }
      break;
    case "blue":
      switch (color2) {
        case "red":
          result.style.backgroundColor = "purple";
          break;
        case "yellow":
          result.style.backgroundColor = "green";
          break;
        default:
          result.style.backgroundColor = "Invalid color combination";
          break;
      }
      break;
    case "yellow":
      switch (color2) {
        case "red":
          result.style.backgroundColor = "orange";
          break;
        case "blue":
          result.style.backgroundColor = "green";
          break;
        default:
          result.style.backgroundColor = "Invalid color combination";
          break;
      }
      break;
    default:
      result.style.backgroundColor = "Invalid color combination";
      break;
  }
  
  
  
}