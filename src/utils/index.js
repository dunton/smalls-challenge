export const dataIsInvalid = (data) => {
  if (!data.length) {
    return true;
  }

  return false;
};

export const updateProgress = (progress, isHome) => {
  if (isHome) {
    document.querySelector(".progress").style.opacity = 0;
  } else {
    document.querySelector(".progress").style.opacity = 1;
  }
  document.querySelector("#progress-bar").style.width = `${progress}%`;
};

export const urlParamIsInvalid = (name, data) => {
  const result = data.some((obj) => {
    return obj.name === name;
  });

  return !result;
};
