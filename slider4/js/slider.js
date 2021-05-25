function Slider() {
  this.imagesUrls = [];
  this.currentImageIndex = 0;
  this.showPrevBtn = null;
  this.showNextBtn = null;
  this.slideImage = null;
  this.start = function (elId) {
    var that = this;

    var elSelector = "#" + elId;
    var el = document.querySelector(elSelector);

    this.showPrevBtn = el.querySelector(".show-prew-btn");
    this.showNextBtn = el.querySelector(".show-next-btn");
    this.slideImage = el.querySelector(".slide-image");

    this.showPrevBtn.addEventListener("click", function (e) {
      that.onShowPrevBtnClick(e);
    });

    this.showNextBtn.addEventListener("click", function (e) {
      that.onShowNextBtnClick(e);
    });

    this.imagesUrls.push(
      "https://the-tech.kz/wp-content/uploads/2020/12/SONATA-hero-option1-764A5360-edit.jpg"
    );
    this.imagesUrls.push(
      "https://www.driving.co.uk/s3/st-driving-prod/uploads/2020/02/2020-Vauxhall-Corsa-SRi-UK-01-1024x638.jpg"
    );
    this.imagesUrls.push(
      "https://cdn.motor1.com/images/mgl/g6wem/s3/most-expensive-lead.jpg"
    );
    this.imagesUrls.push(
      "https://www.aitrends.com/wp-content/uploads/2019/09/9-13SportsCar-2.jpg"
    );

    this.slideImage.src = this.imagesUrls[this.currentImageIndex];
    this.showPrevBtn.disabled = true;
  };

  this.onShowPrevBtnClick = function (e) {
    this.currentImageIndex--;
    this.slideImage.src = this.imagesUrls[this.currentImageIndex];
    this.showNextBtn.disabled = false;

    if (this.currentImageIndex === 0) {
      this.showPrevBtn.disabled = true;
    }
  };

  this.onShowNextBtnClick = function (e) {
    this.currentImageIndex++;
    this.slideImage.src = this.imagesUrls[this.currentImageIndex];
    this.showPrevBtn.disabled = false;

    if (this.currentImageIndex === this.imagesUrls.length - 1) {
      this.showNextBtn.disabled = true;
    }
  };
}
