import heroLeft from "../assets/images/heroLeft.webp";
import heroMiddle from "../assets/images/heroMiddle.webp";
import heroRight from "../assets/images/heroRight.webp";
import Riverside from "../assets/images/330Riverside.svg";
import HeroBottom1 from "../assets/images/heroBottom.webp";
import HeroBottom from "../assets/images/main.webp";
import headerWave from "../assets/images/headerCurve3.svg";
import handover from "../assets/icons/handover.svg";
import price from "../assets/icons/price.svg";
import paymentplan from "../assets/icons/book.svg";
export const data = {
  // this will be filled if the design is like southtown houses or jlt
  textSlider: [
    {
      icon: price,

      title: [
        { lng: "ar", value: "AED3.2M" },
        { lng: "fa", value: "AED3.2M" },
        { lng: "en", value: "AED3.2M" },
        { lng: "ru", value: "3.2 млн дирхамов ОАЭ" },
      ],
      subTitle: [
        { lng: "ar", value: "Starting Price" },
        { lng: "fa", value: "Starting Price" },
        { lng: "en", value: "Starting Price" },
        { lng: "ru", value: "Начальная цена" },
      ],
    },
    {
      icon: paymentplan,
      title: [
        { lng: "ar", value: "5 Years" },
        { lng: "en", value: "5 Years" },
        { lng: "fa", value: "5 Years" },
        { lng: "ru", value: "5 лет" },
      ],
      subTitle: [
        { lng: "ar", value: "Payment Plans" },
        { lng: "en", value: "Payment Plans" },
        { lng: "fa", value: "Payment Plans" },
        { lng: "ru", value: "Планы оплаты" },
      ],
    },
    {
      icon: handover,
      title: [
        { lng: "ar", value: "Q3 2026" },
        { lng: "en", value: "Q3 2026" },
        { lng: "fa", value: "Q3 2026" },
        { lng: "ru", value: "3 квартал 2026 г" },
      ],
      subTitle: [
        { lng: "ar", value: "Handover" },
        { lng: "en", value: "Handover" },
        { lng: "fa", value: "Handover" },
        { lng: "ru", value: "Сдавать" },
      ],
    },
  ],
  // this will be filled if the design is like 330
  titles: [
    [
      { lng: "ar", value: "انغمس في تجربة تناشد الحواس" },
      { lng: "en", value: "Unveil a soul-stirring experience" },
      { lng: "fa", value: "پرده برداری از یک تجربه منحصر به فرد" },
      { lng: "ru", value: "Unveil a soul-stirring experience" },
    ],
    [
      { lng: "ar", value: "مناظر خلاّبة تأسر القلوب" },
      { lng: "en", value: "A spectacular sight that delights" },
      { lng: "fa", value: "منظره دیدنی" },
      { lng: "ru", value: "A spectacular sight that delights" },
    ],
    [
      { lng: "ar", value: "مساكن تخاطب الروح" },
      { lng: "en", value: "Specially Designed Residences" },
      { lng: "fa", value: "طراحی خاص ومتفاوت فضای مسکونی" },
      { lng: "ru", value: "Specially Designed Residences" },
    ],
  ],
  // this will be filled if the design is like 330
  subTitles: [
    [
      {
        lng: "ar",
        value:
          "و تنعّم بإقامة باعثة على الاسترخاء حيث تحيط بك المياه الرقراقة من كلّ حدبٍ و صوب",
      },
      {
        lng: "en",
        value:
          "as you surrender to the enchanting call of the water in your vicinity",
      },
      { lng: "fa", value: "دید ابدی به دریاچه و فضای سبز" },
      {
        lng: "ru",
        value:
          "as you surrender to the enchanting call of the water in your vicinity",
      },
    ],
    [
      {
        lng: "ar",
        value:
          "تم تصميم المجمّع على شكل هلال مدبّب و ينعكس تصميمه الرائع بأبهى حلّة على المياه المتلألئة, حيث يمكنك أن تمتّع ناظريك بأروع الإطلالات بينما تستمع بإقامة في مسكن ينضح فخامة.",
      },
      {
        lng: "en",
        value:
          "Designed like a tapered crescent, catch the reflected hues of the cluster, dazzle in the reflections of the crystal-clear water as you unwind in luxury",
      },
      {
        lng: "fa",
        value:
          "امکانات منحصر به فرد و لاکچری شامل دریاچه مصنوعی ، فضای سبز ، کلاب گلف ...غیره",
      },
      {
        lng: "ru",
        value:
          "Designed like a tapered crescent, catch the reflected hues of the cluster, dazzle in the reflections of the crystal-clear water as you unwind in luxury",
      },
    ],
  ],
  //this will be filled in all cases {NOTE} => if the design has only one image we put it in this array
  images: [
    Riverside,
    heroLeft,
    heroMiddle,
    heroRight,
    HeroBottom1,
    headerWave,
    HeroBottom,
  ],
};
