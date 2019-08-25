import { action, observable } from "mobx";

class ModalStore {
  @observable
  isShowModalSuccess = false;

  @observable
  isShowModalReviewSuccess = false;

  @observable
  isShowModalReview = false;

  @observable
  isShowModalDiscount = false;

  @observable
  isShowModalCall = false;

  @observable
  isShowModalWindowCalculator = false;

  @observable
  isShowModalBalconiesCalculator = false;

  @observable
  hideCodeDiscount = false;

  @action
  openModalBalconiesCalculator = () => {
    this.isShowModalBalconiesCalculator = true;
  };

  @action
  closeModalBalconiesCalculator = () => {
    this.isShowModalBalconiesCalculator = false;
  };

  @action
  openModalWindowCalculator = () => {
    this.isShowModalWindowCalculator = true;
  };

  @action
  closeModalWindowCalculator = () => {
    this.isShowModalWindowCalculator = false;
  };

  @action
  openModalReviewSuccess = () => {
    this.isShowModalReviewSuccess = true;
  };

  @action
  closeModalReviewSuccess = () => {
    this.isShowModalReviewSuccess = false;
  };

  @action
  openModalSuccess = () => {
    this.isShowModalSuccess = true;
  };

  @action
  closeModalSuccess = () => {
    this.isShowModalSuccess = false;
  };

  @action
  openModalReview = () => {
    this.isShowModalReview = true;
  };

  @action
  closeModalReview = () => {
    this.isShowModalReview = false;
  };

  @action
  openModalCall = () => {
    this.isShowModalCall = true;
  };

  @action
  closeModalCall = () => {
    this.isShowModalCall = false;
  };

  @action
  openModalDiscount = () => {
    this.isShowModalDiscount = true;
    if (!this.hideCodeDiscount) {
      this.hideCodeDiscount = true;
    }
  };

  @action
  closeModalDiscount = () => {
    this.isShowModalDiscount = false;
  };
}

const modalStore = new ModalStore();

export default modalStore;
export { ModalStore };
