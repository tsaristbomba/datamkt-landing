import heroImg from "../images/data-1.svg";
import infoCustomImg from "../images/data-2.svg";
import infoImg1 from "../images/data-3.svg";
import infoImg2 from "../images/data-4.svg";
import testimonialImg from "../images/testimonial.jpg";

export const HeroObj = {
  img: heroImg,
  heading: "Data To Power Marketing Campaigns.",
  description:
    "DATAMKT is behind some of the world's most advanced marketing teams.",
  alt: "Data",
};

export const InfoCustomObj = {
  img: infoCustomImg,
  id: "about",
  alt: "Data2",
  heading: "Qualify leads and attribute traffic",
  description:
    "Turn your database of leads into actionable information by enriching with DATAMKT data. Segment leads based on more than 100 person & company properties we return, such as gender, location and company information.",
};

export const InfoObj = {
  img: infoImg1,
  BgColor: "#fff",
  darkColor: true,
  imgStart: true,
  lineThrough: true,
  id: "functionality",
  alt: "Data3",
  heading: "Enrichment",
  description:
    "Our Enrichment product takes an email address or domain and returns rich person and company information. Run all of your sign-ups though us, we'll enrich the emails and send the data to your CRM or Marketing Automation Platform, say Marketo.",
  description2:
    "Once all your leads are enriched, you can segment and route leads, perform targeted campaigns, and qualify customers.",
};

export const InfoObj2 = {
  img: infoImg2,
  BgColor: "#fff",
  darkColor: true,
  imgStart: false,
  lineThrough: false,
  alt: "Data4",
  id: "",
  heading: "Reveal",
  description:
    "Our Reveal Product takes an IP address and return company information. Reveal deanonymizes the visitors on your website and shows you which companies are visiting, as well as informations about the category and size.",
  description2:
    "Reveal will then pipe the information into Google Analytics and you will start to extract real business value.",
};

export const TestimonialObj = {
  img: testimonialImg,
  BgColor: "#3f3d56",
  darkColor: false,
  imgStart: true,
  lineThrough: false,
  alt: "Testimonial",
  id: "testimonial",
  heading: "",
  description:
    '"DATAMKT saves me a ton of time in lead research, and having full lead profiles automatically available is amazing. I Recommend DATAMKT to our users daily."',
  description2: "",
  description3: "- John Doe, Big Company Co.",
};
