const shareIcon = [
  {
    img: "images/icon-facebook.svg",
    alt: "facebook",
  },
  {
    img: "images/icon-twitter.svg",
    alt: "facebook",
  },
  {
    img: "images/icon-pinterest.svg",
    alt: "facebook",
  },
];

const cardCon = document.querySelector(".card__share");
const footerCon = document.querySelector(".card__footer");

const socialmedia = (con, cssclass) => {
  const socialMediaContainer = document.createElement("div");
  socialMediaContainer.classList.add(cssclass);

  const textCont = document.createElement("span");
  textCont.textContent = "SHARE";

  socialMediaContainer.append(textCont);

  shareIcon.forEach((icon) => {
    const { img, alt } = icon;
    const image = document.createElement("img");

    image.setAttribute("src", img);
    image.setAttribute("alt", alt);
    socialMediaContainer.append(image);
  });

  con.append(socialMediaContainer);
};

const socialVisible = (classToggle) => {
  const cardSocial = document.querySelector(classToggle);
  cardCon.addEventListener("click", () => {
    cardSocial.classList.toggle("active");
  });
};

const clickBtn = () => {
  if (innerWidth === 375 && innerWidth <= 1199) {
    socialmedia(footerCon, "card__socialmedia");
    socialVisible(".card__socialmedia");
  }
  if (innerWidth >= 1200) {
    socialmedia(cardCon, "card__social");
    socialVisible(".card__social");
  }
};

window.addEventListener("load", clickBtn);
window.addEventListener("resize", clickBtn);
