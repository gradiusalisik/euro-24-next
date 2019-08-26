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
  isShowModalCallWindow = false;

  @observable
  isShowModalCallNets = false;

  @observable
  isShowModalCallJalouse = false;

  @observable
  isShowModalCallBalconies = false;

  @observable
  isShowModalCallCupboard = false;

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
  openModalCallWindow = () => {
    this.isShowModalCallWindow = true;
  };

  @action
  closeModalCallWindow = () => {
    this.isShowModalCallWindow = false;
  };

  @action
  openModalCallNets = () => {
    this.isShowModalCallNets = true;
  };

  @action
  closeModalCallNets = () => {
    this.isShowModalCallNets = false;
  };

  @action
  openModalCallJalouse = () => {
    this.isShowModalCallJalouse = true;
  };

  @action
  closeModalCallJalouse = () => {
    this.isShowModalCallJalouse = false;
  };

  @action
  openModalCallBalconies = () => {
    this.isShowModalCallBalconies = true;
  };

  @action
  closeModalCallBalconies = () => {
    this.isShowModalCallBalconies = false;
  };

  @action
  openModalCallCupboard = () => {
    this.isShowModalCallCupboard = true;
  };

  @action
  closeModalCallCupboard = () => {
    this.isShowModalCallCupboard = false;
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
