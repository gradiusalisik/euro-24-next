import { action, observable } from "mobx";

class FormStore {
  @observable
  error = false;

  @observable
  titleWindow = "";

  @observable
  titleNets = "";

  @observable
  titleJalouse = "";

  @observable
  titleBalconies = "";

  @observable
  titleCupboard = "";

  @observable
  valueNets = "";

  @observable
  colorWindow = "";

  @observable
  loadState = false;

  @action
  send = data => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("phone", data.phone);
    formData.append("reviews", data.reviews);
    formData.append("video", data.video);
    formData.append("titleWindow", data.titleWindow);
    formData.append("colorWindow", data.colorWindow);
    formData.append("titleNets", data.titleNets);
    formData.append("valueNets", data.valueNets);
    formData.append("titleJalouse", data.titleJalouse);
    formData.append("titleBalconies", data.titleBalconies);
    formData.append("titleCupboard", data.titleCupboard);

    if (data.files) {
      data.files.forEach(file => {
        formData.append("files", file, file.name);
      });
    }

    this.loadState = true;
    fetch("form.php", { method: "post", body: formData })
      .then(
        action(() => {
          this.loadState = false;
        })
      )
      .catch(error =>
        action(() => {
          this.error = error;
          console.info(error);
          return error;
        })
      );
  };

  @action
  getTitleWindow = title => {
    this.titleWindow = title;
  };

  @action
  getTitleNets = title => {
    this.titleNets = title;
  };

  @action
  getTitleJalouse = title => {
    this.titleJalouse = title;
  };

  @action
  getTitleBalconies = title => {
    this.titleBalconies = title;
  };

  @action
  getTitleCupboard = title => {
    this.titleCupboard = title;
  };

  @action
  getValueNets = value => {
    this.valueNets = value;
  };

  @action
  getColorWindow = color => {
    this.colorWindow = color;
  };
}

const formStore = new FormStore();

export default formStore;
export { FormStore };
