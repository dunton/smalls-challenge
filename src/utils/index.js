export const dataIsInvalid = (data) => {
  if (!data.length) {
    return true;
  }

  return false;
};

export const updateProgress = (progress) => {
  document.querySelector(".progress").style.opacity = 1;
  document.querySelector("#progress-bar").style.width = `${progress}%`;
};
