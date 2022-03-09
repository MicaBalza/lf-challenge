export const imageUploaded = (file) => {
  let base64String = '';
  const reader = new FileReader();
      
  reader.onload = function () {
    base64String = reader.result.replace('data:', '').replace(/^.+,/, '');
    console.log(base64String);
  };
  reader.readAsDataURL(file);
  return base64String;
};
