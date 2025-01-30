import React, { useState, useRef, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import BackgroundImage from "./Images/Corporatebanner.jpg";
import { Button, Form, Input, Select, message, Space, Collapse } from "antd";
import { motion } from "framer-motion"; // Import framer-motion for animations
import "./App.css";
import { useInView } from "react-intersection-observer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footerlogo from "./Images/Footerlogo.png";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import CountUp from "react-countup";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import Upskillanddriveresults from "./Images/Upskillanddriveresults2.png";
import ADNOC from "./Images/ADNOC.png";
import AIRASTANA from "./Images/AIRASTANA.png";
import alfanar from "./Images/alfanar.png";
import ALMASAOOD from "./Images/ALMASAOOD.png";
import aramex from "./Images/aramex.png";
import dafz from "./Images/dafz.png";
import DNATA from "./Images/DNATA.png";
import DPWorld from "./Images/DPWorld.png";
import DSV from "./Images/DSV.png";
import Du from "./Images/Du.png";
import Dubal from "./Images/Dubal.png";
import EMIRATES from "./Images/EMIRATES.png";
import Fedex from "./Images/Fedex.png";
import INTERVEL from "./Images/INTERVEL.png";
import jafza from "./Images/jafza.png";
import Legoland from "./Images/Legoland.png";
import MOIBahrain from "./Images/MOI Bahrain.png";
import NGI from "./Images/NGI.png";
import Nirvana from "./Images/Nirvana.png";
import noon from "./Images/noon.png";
import PGST from "./Images/PGST.png";
import SNOC from "./Images/SNOC.jpg";
import course1 from "./Images/Course1.png";
import course2 from "./Images/Course2.png";
import course3 from "./Images/Course3.png";
import course4 from "./Images/Course4.png";
import course5 from "./Images/Course5.png";
import course6 from "./Images/Course6.png";
import course7 from "./Images/Course7.png";
import course8 from "./Images/Course8.png";
import course9 from "./Images/Course9.png";
import course10 from "./Images/Course10.png";
import course11 from "./Images/Course11.png";
import award from "./Images/award.jpg";
import invest from "./Images/Invest.png";
import CorporateTraining1 from "./Images/CorporateTraining1.png";
import CorporateTraining2 from "./Images/CorporateTraining2.png";
import CorporateTraining03 from "./Images/CorporateTraining03.jpg";
import CorporateTraining04 from "./Images/CorporateTraining04.jpg";
import CorporateTraining3 from "./Images/CorporateTraining3.png";
import CorporateTraining4 from "./Images/CorporateTraining4.png";
import CorporateTraining5 from "./Images/CorporateTraining5.png";
import CorporateTraining6 from "./Images/CorporateTraining6.png";
import CorporateTraining7 from "./Images/CorporateTraining7.png";
import CorporateTraining8 from "./Images/CorporateTraining8.png";
import CorporateTraining9 from "./Images/CorporateTraining9.png";
import CorporateTraining10 from "./Images/CorporateTraining10.png";
import CorporateTraining11 from "./Images/CorporateTraining11.png";
import CorporateTraining12 from "./Images/CorporateTraining12.png";
import CorporateTraining13 from "./Images/CorporateTraining13.png";
import CorporateTraining14 from "./Images/CorporateTraining14.png";
import CorporateTraining15 from "./Images/CorporateTraining15.png";
import CorporateTraining16 from "./Images/CorporateTraining16.png";
import CorporateTraining17 from "./Images/CorporateTraining17.jpg";
import CorporateTraining18 from "./Images/CorporateTraining18.png";
import CorporateTraining19 from "./Images/CorporateTraining19.png";
import CorporateTraining20 from "./Images/CorporateTraining20.png";
import CorporateTraining21 from "./Images/CorporateTraining21.png";
import CorporateTraining22 from "./Images/CorporateTraining22.png";
import CorporateTraining23 from "./Images/CorporateTraining23.png";
import CorporateTraining24 from "./Images/CorporateTraining24.png";
import CorporateTraining25 from "./Images/CorporateTraining25.png";
import "./App.css";
// import WingsBanner from "./Images/WingsWayBanner.jpg";
// import CourseContent from "./Images/Course Content.jpg";
import EntryQualification from "./Images/Entry Qualification.jpeg";
import LearningOutcomes from "./Images/Learning Outcomes.jpeg";
// import CareerOpportunities from "./Images/Career Opportunities.jpg";
import KeyTopics from "./Images/Key Topics.jpg";
import LearnerProfile from "./Images/Learner’s Profile.jpeg";
import ISO from "./Images/ISOCertified.png";
import KHDA from "./Images/KHDA.png";
import DET from "./Images/DET.png";
import contactsvg from "./Images/Contactsvg.svg";
import Contactbanner from "./Images/Contactbanner.png";
import ElevateImage from "./Images/ElevateImage.png";
import Testimonial1 from "./Images/Testimonial1.png";
import Testimonial2 from "./Images/Testimonial2.png";
import Testimonial3 from "./Images/Testimonial3.png";
import Testimonial4 from "./Images/Testimonial4.png";
import Testimonial5 from "./Images/Testimonial5.png";
import Testimonial6 from "./Images/Testimonial6.png";

import Enquire from "./Images/EnquireNow.jpg";

const text1 = `Our trainings are customisable to fit individual and organisational needs.`;
const text2 = `Our trainers have experience working with organisations of different sizes and in various industries.`;
const text3 = `Case studies, real-world examples, and role-play.`;
const text4 = `Access all your study material and notes on our student learning management system.`;
const text5 = `We use various tech-based solutions and games to conduct our classes for faster and improved learning.`;

const items = [
  {
    key: "1",
    label: (
      <h4 className="accordion-label" style={{ color: "white" }}>
        Personalised Training Just for You
      </h4>
    ),
    children: <p style={{ fontSize: "18px" }}>{text1}</p>,
  },
  {
    key: "2",
    label: (
      <h4 className="accordion-label" style={{ color: "white" }}>
        Expert-Led Training
      </h4>
    ),
    children: <p style={{ fontSize: "18px" }}>{text2}</p>,
  },
  {
    key: "3",
    label: (
      <h4 className="accordion-label" style={{ color: "white" }}>
        Real-World Simulations
      </h4>
    ),
    children: <p style={{ fontSize: "18px" }}>{text3}</p>,
  },
  {
    key: "4",
    label: (
      <h4 className="accordion-label" style={{ color: "white" }}>
        Access to Learning Management System
      </h4>
    ),
    children: <p style={{ fontSize: "18px" }}>{text4}</p>,
  },
  {
    key: "5",
    label: (
      <h4 className="accordion-label" style={{ color: "white" }}>
        Tech-Driven Learning
      </h4>
    ),
    children: <p style={{ fontSize: "18px" }}>{text5}</p>,
  },
];

export default function Home({ handleModalOpen }) {
  const [form] = Form.useForm(); // useForm hook for handling form operations
  const [formData, setFormData] = useState(null); // State to store submitted data
  const [phoneNumber, setPhoneNumber] = useState(""); // State for phone number input
  const [countryCode, setCountryCode] = useState("+971"); // Default country code

  const [hasViewed, setHasViewed] = useState(false); // Track if the element is in view
  const [selectWidth, setSelectWidth] = useState("30%");
  const [dropdownWidth, setDropdownWidth] = useState("30%");

  const [isCounterVisible, setIsCounterVisible] = useState(false);
  const counterSectionRef = useRef(null);
  const { Option } = Select;

  const onChange = (key) => {
    // console.log(key);
  };
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsCounterVisible(true);
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the section is visible
      }
    );

    if (counterSectionRef.current) {
      observer.observe(counterSectionRef.current);
    }

    return () => {
      if (counterSectionRef.current) {
        observer.unobserve(counterSectionRef.current);
      }
    };
  }, []);

  const handleFooterLinkClick = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const navbarHeight = document.querySelector(".navbar").offsetHeight || 0;
      const targetPosition = targetElement.offsetTop - navbarHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleEnquireClick = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const navbarHeight = document.querySelector(".navbar").offsetHeight || 0;
      const targetPosition = targetElement.offsetTop - navbarHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger only once when the element is in view
    onChange: (inView) => {
      if (inView) setHasViewed(true); // Set to true when the element enters the viewport
    },
  });

  const [hasViewedSlide, setHasViewedSlide] = useState({
    zeroElement: false,
    myElement: false,
    secondElement: false,
    thirdElement: false,
    fourthElement: false,
    fifthElement: false,
    sixthElement: false,
    seventhElement: false,
    eigthElement: false,
    ninethElement: false,
    tenthElement: false,
    eleventhElement: false,
    twelfthElement: false,
    thirteenthElement: false,
  });

  const { ref: myRef0, inView: zeroElementIsVisible } = useInView({
    triggerOnce: true,
    onChange: (inView) => {
      if (inView && !hasViewedSlide.zeroElement) {
        setHasViewedSlide((prev) => ({ ...prev, zeroElement: true }));
      }
    },
  });

  const { ref: myRef1, inView: myElementIsVisible } = useInView({
    triggerOnce: true,
    onChange: (inView) => {
      if (inView && !hasViewedSlide.myElement) {
        setHasViewedSlide((prev) => ({ ...prev, myElement: true }));
      }
    },
  });

  const { ref: myRef2, inView: secondElementIsVisible } = useInView({
    triggerOnce: true,
    onChange: (inView) => {
      if (inView && !hasViewedSlide.secondElement) {
        setHasViewedSlide((prev) => ({ ...prev, secondElement: true }));
      }
    },
  });

  const { ref: myRef3, inView: thirdElementIsVisible } = useInView({
    triggerOnce: true,
    onChange: (inView) => {
      if (inView && !hasViewedSlide.thirdElement) {
        setHasViewedSlide((prev) => ({ ...prev, thirdElement: true }));
      }
    },
  });

  const { ref: myRef4, inView: fourthElementIsVisible } = useInView({
    triggerOnce: true,
    onChange: (inView) => {
      if (inView && !hasViewedSlide.fourthElement) {
        setHasViewedSlide((prev) => ({ ...prev, fourthElement: true }));
      }
    },
  });

  const { ref: myRef5, inView: fifthElementIsVisible } = useInView({
    triggerOnce: true,
    onChange: (inView) => {
      if (inView && !hasViewedSlide.fifthElement) {
        setHasViewedSlide((prev) => ({ ...prev, fifthElement: true }));
      }
    },
  });
  const { ref: myRef6, inView: sixthElement } = useInView({
    triggerOnce: true,
    onChange: (inView) => {
      if (inView && !hasViewedSlide.sixthElement) {
        setHasViewedSlide((prev) => ({ ...prev, sixthElement: true }));
      }
    },
  });
  const { ref: myRef7, inView: seventhElement } = useInView({
    triggerOnce: true,
    onChange: (inView) => {
      if (inView && !hasViewedSlide.seventhElement) {
        setHasViewedSlide((prev) => ({ ...prev, seventhElement: true }));
      }
    },
  });
  const { ref: myRef8, inView: eigthElement } = useInView({
    triggerOnce: true,
    onChange: (inView) => {
      if (inView && !hasViewedSlide.eigthElement) {
        setHasViewedSlide((prev) => ({ ...prev, eigthElement: true }));
      }
    },
  });
  const { ref: myRef9, inView: ninethElement } = useInView({
    triggerOnce: true,
    onChange: (inView) => {
      if (inView && !hasViewedSlide.ninethElement) {
        setHasViewedSlide((prev) => ({ ...prev, ninethElement: true }));
      }
    },
  });
  const { ref: myRef10, inView: tenthElement } = useInView({
    triggerOnce: true,
    onChange: (inView) => {
      if (inView && !hasViewedSlide.tenthElement) {
        setHasViewedSlide((prev) => ({ ...prev, tenthElement: true }));
      }
    },
  });
  const { ref: myRef11, inView: eleventhElement } = useInView({
    triggerOnce: true,
    onChange: (inView) => {
      if (inView && !hasViewedSlide.eleventhElement) {
        setHasViewedSlide((prev) => ({ ...prev, eleventhElement: true }));
      }
    },
  });

  const { ref: myRef12, inView: twelfthElement } = useInView({
    triggerOnce: true,
    onChange: (inView) => {
      if (inView && !hasViewedSlide.twelfthElement) {
        setHasViewedSlide((prev) => ({ ...prev, twelfthElement: true }));
      }
    },
  });

  const { ref: myRef13, inView: thirteenthElement } = useInView({
    triggerOnce: true,
    onChange: (inView) => {
      if (inView && !hasViewedSlide.thirteenthElement) {
        setHasViewedSlide((prev) => ({ ...prev, thirteenthElement: true }));
      }
    },
  });

  useEffect(() => {
    // Effect when the element enters the viewport
    if (inView) {
      setHasViewed(true); // Set animation to true
    }
  }, [inView]);

  const handleSubmit = (values) => {
    // Combine country code and phone number
    const fullPhoneNumber = `${countryCode}${phoneNumber}`;

    // Add fullPhoneNumber to the form data
    const updatedFormData = {
      ...values,
      phone: fullPhoneNumber,
    };

    // Log the final form data
    // console.log(updatedFormData);

    // Save to state (if needed)
    setFormData(updatedFormData);

    // Display success message
    message.success("Form submitted successfully!");

    // Reset the fields
    setPhoneNumber(""); // Reset phone number field
    form.resetFields(); // Reset all form fields
  };

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;

    // Remove any non-numeric characters
    const filteredValue = value.replace(/\D/g, ""); // Remove non-digit characters
    setPhoneNumber(filteredValue); // Update the phone number state with filtered value
  };

  const validatePhoneNumber = (_, value) => {
    const fullPhoneNumber = value;
    // if (!fullPhoneNumber) {
    //   return Promise.reject(new Error("Please input your phone number!"));
    // }

    // Ensure the phone number does not exceed 15 digits
    if (fullPhoneNumber.replace(/\D/g, "").length > 15) {
      return Promise.reject(
        new Error("Phone number should not exceed 15 digits!")
      );
    }

    return Promise.resolve();
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        // Small & medium devices
        setSelectWidth("37%");
        setDropdownWidth("70%");
      } else {
        // Large devices
        setSelectWidth("30%");
        setDropdownWidth("21%");
      }
    };

    // Set initial size
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const countryCodes = [
    { code: "+91", label: "India (+91)" },
    { code: "+1", label: "USA (+1)" },
    { code: "+971", label: "United Arab Emirates (+971)" },
    { code: "+213", label: "Algeria (+213)" },
    { code: "+376", label: "Andorra (+376)" },
    { code: "+244", label: "Angola (+244)" },
    { code: "+1264", label: "Anguilla (+1264)" },
    { code: "+1268", label: "Antigua & Barbuda (+1268)" },
    { code: "+54", label: "Argentina (+54)" },
    { code: "+374", label: "Armenia (+374)" },
    { code: "+297", label: "Aruba (+297)" },
    { code: "+61", label: "Australia (+61)" },
    { code: "+43", label: "Austria (+43)" },
    { code: "+994", label: "Azerbaijan (+994)" },
    { code: "+1242", label: "Bahamas (+1242)" },
    { code: "+973", label: "Bahrain (+973)" },
    { code: "+880", label: "Bangladesh (+880)" },
    { code: "+1246", label: "Barbados (+1246)" },
    { code: "+375", label: "Belarus (+375)" },
    { code: "+32", label: "Belgium (+32)" },
    { code: "+501", label: "Belize (+501)" },
    { code: "+229", label: "Benin (+229)" },
    { code: "+1441", label: "Bermuda (+1441)" },
    { code: "+975", label: "Bhutan (+975)" },
    { code: "+591", label: "Bolivia (+591)" },
    { code: "+387", label: "Bosnia Herzegovina (+387)" },
    { code: "+267", label: "Botswana (+267)" },
    { code: "+55", label: "Brazil (+55)" },
    { code: "+673", label: "Brunei (+673)" },
    { code: "+359", label: "Bulgaria (+359)" },
    { code: "+226", label: "Burkina Faso (+226)" },
    { code: "+257", label: "Burundi (+257)" },
    { code: "+855", label: "Cambodia (+855)" },
    { code: "+237", label: "Cameroon (+237)" },
    { code: "+1", label: "Canada (+1)" },
    { code: "+238", label: "Cape Verde Islands (+238)" },
    { code: "+1345", label: "Cayman Islands (+1345)" },
    { code: "+236", label: "Central African Republic (+236)" },
    { code: "+56", label: "Chile (+56)" },
    { code: "+86", label: "China (+86)" },
    { code: "+57", label: "Colombia (+57)" },
    { code: "+269", label: "Comoros (+269)" },
    { code: "+242", label: "Congo (+242)" },
    { code: "+682", label: "Cook Islands (+682)" },
    { code: "+506", label: "Costa Rica (+506)" },
    { code: "+385", label: "Croatia (+385)" },
    { code: "+53", label: "Cuba (+53)" },
    { code: "+90392", label: "Cyprus North (+90392)" },
    { code: "+357", label: "Cyprus South (+357)" },
    { code: "+42", label: "Czech Republic (+42)" },
    { code: "+45", label: "Denmark (+45)" },
    { code: "+253", label: "Djibouti (+253)" },
    { code: "+1809", label: "Dominica (+1809)" },
    { code: "+1809", label: "Dominican Republic (+1809)" },
    { code: "+593", label: "Ecuador (+593)" },
    { code: "+20", label: "Egypt (+20)" },
    { code: "+503", label: "El Salvador (+503)" },
    { code: "+240", label: "Equatorial Guinea (+240)" },
    { code: "+291", label: "Eritrea (+291)" },
    { code: "+372", label: "Estonia (+372)" },
    { code: "+251", label: "Ethiopia (+251)" },
    { code: "+500", label: "Falkland Islands (+500)" },
    { code: "+298", label: "Faroe Islands (+298)" },
    { code: "+679", label: "Fiji (+679)" },
    { code: "+358", label: "Finland (+358)" },
    { code: "+33", label: "France (+33)" },
    { code: "+594", label: "French Guiana (+594)" },
    { code: "+689", label: "French Polynesia (+689)" },
    { code: "+241", label: "Gabon (+241)" },
    { code: "+220", label: "Gambia (+220)" },
    { code: "+7880", label: "Georgia (+7880)" },
    { code: "+49", label: "Germany (+49)" },
    { code: "+233", label: "Ghana (+233)" },
    { code: "+350", label: "Gibraltar (+350)" },
    { code: "+30", label: "Greece (+30)" },
    { code: "+299", label: "Greenland (+299)" },
    { code: "+1473", label: "Grenada (+1473)" },
    { code: "+590", label: "Guadeloupe (+590)" },
    { code: "+671", label: "Guam (+671)" },
    { code: "+502", label: "Guatemala (+502)" },
    { code: "+224", label: "Guinea (+224)" },
    { code: "+245", label: "Guinea - Bissau (+245)" },
    { code: "+592", label: "Guyana (+592)" },
    { code: "+509", label: "Haiti (+509)" },
    { code: "+504", label: "Honduras (+504)" },
    { code: "+852", label: "Hong Kong (+852)" },
    { code: "+36", label: "Hungary (+36)" },
    { code: "+354", label: "Iceland (+354)" },
    // { code: "+91", label: "India (+91)" },
    { code: "+62", label: "Indonesia (+62)" },
    { code: "+98", label: "Iran (+98)" },
    { code: "+964", label: "Iraq (+964)" },
    { code: "+353", label: "Ireland (+353)" },
    { code: "+972", label: "Israel (+972)" },
    { code: "+39", label: "Italy (+39)" },
    { code: "+1876", label: "Jamaica (+1876)" },
    { code: "+81", label: "Japan (+81)" },
    { code: "+962", label: "Jordan (+962)" },
    { code: "+7", label: "Kazakhstan (+7)" },
    { code: "+254", label: "Kenya (+254)" },
    { code: "+686", label: "Kiribati (+686)" },
    { code: "+850", label: "Korea North (+850)" },
    { code: "+82", label: "Korea South (+82)" },
    { code: "+965", label: "Kuwait (+965)" },
    { code: "+996", label: "Kyrgyzstan (+996)" },
    { code: "+856", label: "Laos (+856)" },
    { code: "+371", label: "Latvia (+371)" },
    { code: "+961", label: "Lebanon (+961)" },
    { code: "+266", label: "Lesotho (+266)" },
    { code: "+231", label: "Liberia (+231)" },
    { code: "+218", label: "Libya (+218)" },
    { code: "+417", label: "Liechtenstein (+417)" },
    { code: "+370", label: "Lithuania (+370)" },
    { code: "+352", label: "Luxembourg (+352)" },
    { code: "+853", label: "Macao (+853)" },
    { code: "+389", label: "Macedonia (+389)" },
    { code: "+261", label: "Madagascar (+261)" },
    { code: "+265", label: "Malawi (+265)" },
    { code: "+60", label: "Malaysia (+60)" },
    { code: "+960", label: "Maldives (+960)" },
    { code: "+223", label: "Mali (+223)" },
    { code: "+356", label: "Malta (+356)" },
    { code: "+692", label: "Marshall Islands (+692)" },
    { code: "+596", label: "Martinique (+596)" },
    { code: "+222", label: "Mauritania (+222)" },
    { code: "+269", label: "Mayotte (+269)" },
    { code: "+52", label: "Mexico (+52)" },
    { code: "+691", label: "Micronesia (+691)" },
    { code: "+373", label: "Moldova (+373)" },
    { code: "+377", label: "Monaco (+377)" },
    { code: "+976", label: "Mongolia (+976)" },
    { code: "+1664", label: "Montserrat (+1664)" },
    { code: "+212", label: "Morocco (+212)" },
    { code: "+258", label: "Mozambique (+258)" },
    { code: "+95", label: "Myanmar (+95)" },
    { code: "+264", label: "Namibia (+264)" },
    { code: "+674", label: "Nauru (+674)" },
    { code: "+977", label: "Nepal (+977)" },
    { code: "+31", label: "Netherlands (+31)" },
    { code: "+687", label: "New Caledonia (+687)" },
    { code: "+64", label: "New Zealand (+64)" },
    { code: "+505", label: "Nicaragua (+505)" },
    { code: "+227", label: "Niger (+227)" },
    { code: "+234", label: "Nigeria (+234)" },
    { code: "+683", label: "Niue (+683)" },
    { code: "+672", label: "Norfolk Islands (+672)" },
    { code: "+670", label: "Northern Marianas (+670)" },
    { code: "+47", label: "Norway (+47)" },
    { code: "+968", label: "Oman (+968)" },
    { code: "+680", label: "Palau (+680)" },
    { code: "+507", label: "Panama (+507)" },
    { code: "+675", label: "Papua New Guinea (+675)" },
    { code: "+595", label: "Paraguay (+595)" },
    { code: "+51", label: "Peru (+51)" },
    { code: "+63", label: "Philippines (+63)" },
    { code: "+48", label: "Poland (+48)" },
    { code: "+351", label: "Portugal (+351)" },
    { code: "+1787", label: "Puerto Rico (+1787)" },
    { code: "+974", label: "Qatar (+974)" },
    { code: "+262", label: "Reunion (+262)" },
    { code: "+40", label: "Romania (+40)" },
    { code: "+7", label: "Russia (+7)" },
    { code: "+250", label: "Rwanda (+250)" },
    { code: "+378", label: "San Marino (+378)" },
    { code: "+239", label: "Sao Tome & Principe (+239)" },
    { code: "+966", label: "Saudi Arabia (+966)" },
    { code: "+221", label: "Senegal (+221)" },
    { code: "+381", label: "Serbia (+381)" },
    { code: "+248", label: "Seychelles (+248)" },
    { code: "+232", label: "Sierra Leone (+232)" },
    { code: "+65", label: "Singapore (+65)" },
    { code: "+421", label: "Slovak Republic (+421)" },
    { code: "+386", label: "Slovenia (+386)" },
    { code: "+677", label: "Solomon Islands (+677)" },
    { code: "+252", label: "Somalia (+252)" },
    { code: "+27", label: "South Africa (+27)" },
    { code: "+34", label: "Spain (+34)" },
    { code: "+94", label: "Sri Lanka (+94)" },
    { code: "+290", label: "St. Helena (+290)" },
    { code: "+1869", label: "St. Kitts (+1869)" },
    { code: "+1758", label: "St. Lucia (+1758)" },
    { code: "+249", label: "Sudan (+249)" },
    { code: "+597", label: "Suriname (+597)" },
    { code: "+268", label: "Swaziland (+268)" },
    { code: "+46", label: "Sweden (+46)" },
    { code: "+41", label: "Switzerland (+41)" },
    { code: "+963", label: "Syria (+963)" },
    { code: "+886", label: "Taiwan (+886)" },
    { code: "+7", label: "Tajikstan (+7)" },
    { code: "+66", label: "Thailand (+66)" },
    { code: "+228", label: "Togo (+228)" },
    { code: "+676", label: "Tonga (+676)" },
    { code: "+1868", label: "Trinidad & Tobago (+1868)" },
    { code: "+216", label: "Tunisia (+216)" },
    { code: "+90", label: "Turkey (+90)" },
    { code: "+993", label: "Turkmenistan (+993)" },
    { code: "+1649", label: "Turks & Caicos Islands (+1649)" },
    { code: "+688", label: "Tuvalu (+688)" },
    { code: "+256", label: "Uganda (+256)" },
    { code: "+44", label: "UK (+44)" },
    { code: "+380", label: "Ukraine (+380)" },
    // { code: "+971", label: "United Arab Emirates (+971)" },
    { code: "+598", label: "Uruguay (+598)" },
    // { code: "+1", label: "USA (+1)" },
    { code: "+7", label: "Uzbekistan (+7)" },
    { code: "+678", label: "Vanuatu (+678)" },
    { code: "+379", label: "Vatican City (+379)" },
    { code: "+58", label: "Venezuela (+58)" },
    { code: "+84", label: "Vietnam (+84)" },
    { code: "+1284", label: "Virgin Islands - British (+1284)" },
    { code: "+1340", label: "Virgin Islands - US (+1340)" },
    { code: "+681", label: "Wallis & Futuna (+681)" },
    { code: "+969", label: "Yemen (North)(+969)" },
    { code: "+967", label: "Yemen (South)(+967)" },
    { code: "+260", label: "Zambia (+260)" },
    { code: "+263", label: "Zimbabwe (+263)" },
  ];

  // Handle country code change
  const handleCountryChange = (value) => {
    setCountryCode(value); // Update the selected country code
  };
  const validateEmail = (_, value) => {
    if (!value) {
      return Promise.reject(new Error(""));
    }
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/; // Basic email regex
    if (!emailRegex.test(value)) {
      return Promise.reject(new Error("Please enter a valid email address!"));
    }
    return Promise.resolve();
  };
  const styl = `
    .ant-form-vertical .ant-form-item:not(.ant-form-item-horizontal) .ant-form-item-label >label, 
    .ant-form-vertical .ant-form-item:not(.ant-form-item-horizontal) .ant-col-24.ant-form-item-label >label, 
    .ant-form-vertical .ant-form-item:not(.ant-form-item-horizontal) .ant-col-xl-24.ant-form-item-label >label {
      margin: 0;
      color: white;
    }
      .slick-dots {
      position: absolute;
      bottom: -35px;
      display: block;
      width: 100%;
      padding: 0;
      margin: 0;
      list-style: none;
      text-align: center;
  }
      .slick-prev, .slick-next {
      font-size: 0;
      line-height: 0;
      position: absolute;
      top: 40%;
      display: block;
      width: 20px;
      height: 20px;
      padding: 0;
      transform: translate(0, -50%);
      cursor: pointer;
      color: white;
      border: none;
      outline: none;
      background: white;
  }
      .slick-prev:before, .slick-next:before {
      font-family: 'slick';
      font-size: 20px;
      line-height: 1;
      opacity: .75;
      color: #0971CE;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
  }
      .slick-dots li button:before {
      font-family: 'slick';
      font-size: 15px;
      line-height: 20px;
      position: absolute;
      top: 0;
      left: 0;
      width: 20px;
      height: 20px;
      content: '•';
      text-align: center;
      opacity: .25;
      color: #011689;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
  }
      .slick-dots li.slick-active button:before {
      opacity: .75;
      color: #0971CE;
  }


  .ant-collapse>.ant-collapse-item >.ant-collapse-header {
    position: relative;
    display: flex;
    flex-wrap: nowrap;
    align-items: flex-start;
    padding: 12px 16px;
    color: white;
    line-height: 1.5714285714285714;
    cursor: pointer;
    transition: all 0.3s, visibility 0s;
}

.ant-collapse {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0, 0, 0, 0.88);
    font-size: 14px;
    line-height: 1.5714285714285714;
    list-style: none;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
    background-color: rgba(0, 0, 0, 0.02);
    border: none;
}
    


.ant-collapse .ant-collapse-content {
    color: #ffffff;
    background-color: #011689;
    border: none;
}

:where(.css-dev-only-do-not-override-7ny38l).ant-collapse>.ant-collapse-item >.ant-collapse-header .ant-collapse-arrow {
    display: inline-flex
;
    align-items: center;
    color: inherit;
    font-style: normal;
    line-height: 0;
    text-align: center;
    text-transform: none;
    vertical-align: -0.125em;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 20px;
    transition: transform 0.3s;
}
    slick-dots {
    position: absolute;
    bottom: -45px;
    display: block;
    width: 100%;
    padding: 0;
    margin: 0;
    list-style: none;
    text-align: center;
}

  `;

  const brandsettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    cssEase: "linear",
    autoplaySpeed: 4000,
    adaptiveHeight: true,
    arrows: false,

    // initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          speed: 300,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          speed: 300,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 300,
        },
      },
    ],
  };

  const corporatetraining = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    cssEase: "linear",
    autoplaySpeed: 4000,
    adaptiveHeight: true,

    // initialSlide: 0,
    arrows: true,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          speed: 300,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          speed: 300,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          speed: 300,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 300,
          arrows: true,
          dots: false,
        },
      },
    ],
  };

  const Photosfromourcorporate = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    cssEase: "linear",
    autoplaySpeed: 4000,
    // initialSlide: 0,
    arrows: true,
    adaptiveHeight: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          speed: 300,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          speed: 300,
          dots: false,

        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 300,
          dots: false,
        },
      },
    ],
  };

  const Clientreviews = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    cssEase: "linear",
    autoplaySpeed: 4000,
    adaptiveHeight: true,

    // initialSlide: 0,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
          speed: 300,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          speed: 300,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 300,
          dots: false,
        },
      },
    ],
  };

 
  return (
    <>
      <style>{styl}</style>
      <div className="container-fluid m-0 p-0 ">
        <div className="container-fluid mt-5">
          <div className="row">
            <div
              className="col-12 dynamic-height d-flex align-items-center justify-content-center mt-3 "
              style={{
                position: "relative",
                height: "700px",
                backgroundColor: "rgba(0, 0, 0, 0.3)", // Semi-transparent background color
              }}
            >
              {/* Pseudo-element for blurred background */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundImage: `url(${BackgroundImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  zIndex: -1,
                }}
              ></div>
              <div className="row mt-5 mt-lg-3  rounded-5 p-1 terminalresponsive-container align-items-center">
                {/* First Column with Text */}
                <motion.div
                  className="col-12 col-lg-5  text-start"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.5 }}
                >
                  <img
                    src={Upskillanddriveresults}
                    alt="Upskill And Drive Results Image "
                    className="ms-0 ms-lg-3 UpskillImagewidth mt-4"
                    // style={{width:"292px"}}
                  />
                  <h1
                    className="text-white mt-3 mt-md-3 ms-0 ms-lg-3 heroheading"
                    // style={{ fontSize: "60px", fontWeight: "700" }}
                  >
                    CORPORATE <br />
                    TRAININGS{" "}
                  </h1>
                  {/* <p className="text-white  ms-3 herotext">
                    Join our comprehensive IATA Airport Passenger Ground
                    Services course and become a pro in airport operations.
                  </p> */}
                </motion.div>

                {/* Second Column with Form */}
                <motion.div
                  id="enquire-now"
                  className="col-12 col-lg-6 col-xl-5 ms-auto me-lg-3 mb-3 rounded-5 mt-3"
                  style={{ backgroundColor: "#011689", padding: "20px" }}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 2 }}
                >
                  <h2 className="text-white mt-2 text-center Enquiretext">
                    Enquire Now
                  </h2>
                  <Form
                    form={form}
                    className="rounded-5"
                    layout="vertical"
                    onFinish={handleSubmit}
                    style={{ backgroundColor: "#0971CE", padding: "20px" }}
                  >
                    {/* Form Fields */}
                    <Form.Item
                      label="First Name"
                      name="fname"
                      className="form-item text-white"
                      rules={[
                        {
                          required: true,
                          message: "Please input your first name!",
                        },
                      ]}
                    >
                      <Input placeholder="Enter your first name" />
                    </Form.Item>
                    <Form.Item
                      label="Last Name"
                      name="lname"
                      className="form-item text-white"
                      rules={[
                        {
                          required: true,
                          message: "Please input your last name!",
                        },
                      ]}
                    >
                      <Input placeholder="Enter your last name" />
                    </Form.Item>
                    <Form.Item
                      label="Email"
                      name="email"
                      className="form-item"
                      rules={[
                        {
                          required: true,
                          message: "Please input your Email!",
                        },
                        { validator: validateEmail },
                      ]}
                    >
                      <Input placeholder="Enter your Email" />
                    </Form.Item>
                    <Form.Item
                      label="Phone Number"
                      name="phone"
                      className="form-item text-white"
                      rules={[
                        {
                          required: true,
                          message: "Please input your phone number!",
                        },
                        { validator: validatePhoneNumber },
                      ]}
                    >
                      <Space.Compact style={{ width: "100%" }}>
                        <Select
                          defaultValue={countryCode}
                          onChange={handleCountryChange}
                          // style={{ width: "30%" }}
                          style={{ width: selectWidth }}
                          dropdownStyle={{ width: dropdownWidth }}
                          // dropdownStyle={{ width: "50%" }}
                          optionLabelProp="code" // To display the full label when selected
                        >
                          {countryCodes.map((country, index) => (
                            <Select.Option
                              key={index}
                              value={country.code}
                              label={country.label}
                            >
                              {country.label}{" "}
                              {/* Display only country code in dropdown */}
                            </Select.Option>
                          ))}
                        </Select>
                        <Input
                          value={phoneNumber}
                          // maxLength={15}
                          onChange={handlePhoneNumberChange}
                          style={{ width: "70%" }}
                          placeholder="Enter your phone number"
                        />
                      </Space.Compact>
                    </Form.Item>
                    <Form.Item
                      label="Organisation Name"
                      name="organisationName"
                      className="form-item text-white"
                      rules={[
                        {
                          required: true,
                          message: "Please input your organisation name!",
                        },
                      ]}
                    >
                      <Input placeholder="Enter your organisation name" />
                    </Form.Item>

                    <Form.Item
                      label="Corporate Trainings"
                      name="traning"
                      className="form-item text-white"
                      rules={[
                        {
                          required: true,
                          message: "Please select your option!",
                        },
                      ]}
                    >
                      <Select placeholder="Select your option">
                        {/* <Option value="cilt_level_1">CILT Level 1</Option> */}
                        <Option value="Human Resources Programs">
                          Human Resources Programs
                        </Option>
                        <Option value="Leadership & Management Programs">
                          Leadership & Management Programs
                        </Option>
                        {/* <Option value="cilt_level_4">CILT Level 4</Option> */}
                        <Option value="Skill Development Programs">
                          Skill Development Programs
                        </Option>
                        <Option value="Team Building Programs">
                          Team Building Programs
                        </Option>
                        <Option value="Banking, Finance & Treasury Programs">
                          Banking, Finance & Treasury Programs
                        </Option>
                      </Select>
                    </Form.Item>
                    <Form.Item>
                      <div className="d-flex justify-content-end">
                        <Button
                          type="default"
                          htmlType="submit"
                          style={{
                            backgroundColor: "#faad14",
                            color: "white",
                            borderColor: "#faad14",
                          }}
                          className="Submitbutton"
                        >
                          Submit
                        </Button>
                      </div>
                    </Form.Item>
                  </Form>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`container mt-5 border border-white rounded-4 slide-in-left ${
            hasViewedSlide.zeroElement ? "animate-slide-in" : ""
          }`}
          ref={myRef0}
          id="Employees"
        >
          <div className="row border-primary">
            <div className="col-12 text-center">
              <h1 className="WingsWayHeading" style={{ color: "#011689" }}>
                Empowered Employees From
              </h1>
            </div>
          </div>

          <Slider {...brandsettings} className="col-12">
            {/* First Slide */}
            <div className="row p-3 ms-1 ">
              <div
                className="rounded-3 mt-2 d-flex justify-content-center align-items-center flex-column flex-lg-row col-12 BrandHeight"
                // style={{ minHeight: "150px" }} // Add minHeight for vertical centering
              >
                {/* Image Containers */}
                <div className="d-flex justify-content-center mb-2 col-2">
                  <img
                    src={DSV}
                    alt="DSV Global Transport and Logistics Image"
                    className="img-fluid mx-2"
                    style={{ maxWidth: "150px", height: "auto" }}
                  />
                </div>
                <div className="d-flex justify-content-center mb-2 col-2">
                  <img
                    src={alfanar}
                    alt="alfanar Image"
                    className="img-fluid mx-2"
                    style={{ maxWidth: "150px", height: "auto" }}
                  />
                </div>
                <div className="d-flex justify-content-center mb-2 col-2">
                  <img
                    src={SNOC}
                    alt="SNOC Image"
                    className="img-fluid mx-2"
                    style={{ maxWidth: "150px", height: "auto" }}
                  />
                </div>
                <div className="d-flex justify-content-center mb-2 col-2">
                  <img
                    src={MOIBahrain}
                    alt="MOIBahrain Image"
                    className="img-fluid mx-2"
                    style={{ maxWidth: "150px", height: "auto" }}
                  />
                </div>
                <div className="d-flex justify-content-center mb-2 col-2">
                  <img
                    src={Fedex}
                    alt="Fedex Image"
                    className="img-fluid mx-2"
                    style={{ maxWidth: "150px", height: "auto" }}
                  />
                </div>
                <div className="d-flex justify-content-center mb-2">
                  <img
                    src={EMIRATES}
                    alt="EMIRATES Image"
                    className="img-fluid mx-2"
                    style={{ maxWidth: "150px", height: "auto" }}
                  />
                </div>
              </div>
            </div>

            {/* Second Slide */}
            <div className="row p-3 ms-1">
              <div
                className="rounded-3 mt-2 d-flex justify-content-center align-items-center flex-column flex-lg-row col-12 BrandHeight"
                // style={{ minHeight: "150px" }} // Add minHeight for vertical centering
              >
                {/* Image Containers */}
                <div className="d-flex justify-content-center mb-2 col-2">
                  <img
                    src={Nirvana}
                    alt="Nirvana Holding Image"
                    className="img-fluid mx-2"
                    style={{ maxWidth: "150px", height: "auto" }}
                  />
                </div>
                <div className="d-flex justify-content-center mb-2 col-2">
                  <img
                    src={NGI}
                    alt="NGI Image"
                    className="img-fluid mx-2"
                    style={{ maxWidth: "150px", height: "auto" }}
                  />
                </div>
                <div className="d-flex justify-content-center mb-2 col-2">
                  <img
                    src={PGST}
                    alt="PGST Image"
                    className="img-fluid mx-2"
                    style={{ maxWidth: "150px", height: "auto" }}
                  />
                </div>
                <div className="d-flex justify-content-center mb-2 col-2">
                  <img
                    src={Legoland}
                    alt="Legoland Image"
                    className="img-fluid mx-2"
                    style={{ maxWidth: "150px", height: "auto" }}
                  />
                </div>
                <div className="d-flex justify-content-center mb-2 col-2">
                  <img
                    src={jafza}
                    alt="jafza Image"
                    className="img-fluid mx-2"
                    style={{ maxWidth: "150px", height: "auto" }}
                  />
                </div>
                <div className="d-flex justify-content-center mb-2">
                  <img
                    src={noon}
                    alt="noon Image"
                    className="img-fluid mx-2"
                    style={{ maxWidth: "150px", height: "auto" }}
                  />
                </div>
              </div>
            </div>
            {/* Third Slide */}
            <div className="row p-3 ms-1">
              <div
                className=" rounded-3 mt-2 d-flex justify-content-center align-items-center flex-column flex-lg-row col-12 BrandHeight"
                // style={{ minHeight: "150px" }} // Add minHeight for vertical centering
              >
                {/* Image Containers */}
                <div className="d-flex justify-content-center mb-2 col-2">
                  <img
                    src={INTERVEL}
                    alt="INTERVEL Image"
                    className="img-fluid mx-2"
                    style={{ maxWidth: "150px", height: "auto" }}
                  />
                </div>
                <div className="d-flex justify-content-center mb-2 col-2">
                  <img
                    src={Dubal}
                    alt="Dubal Image"
                    className="img-fluid mx-2"
                    style={{ maxWidth: "150px", height: "auto" }}
                  />
                </div>
                <div className="d-flex justify-content-center mb-2 col-2">
                  <img
                    src={Du}
                    alt="Du Image"
                    className="img-fluid mx-2"
                    style={{ maxWidth: "150px", height: "auto" }}
                  />
                </div>
                <div className="d-flex justify-content-center mb-2 col-2 ms-lg-3">
                  <img
                    src={DPWorld}
                    alt="DP World Image"
                    className="img-fluid mx-2"
                    style={{ maxWidth: "150px", height: "auto" }}
                  />
                </div>
                <div className="d-flex justify-content-center mb-2 col-2">
                  <img
                    src={DNATA}
                    alt="dnata Image"
                    className="img-fluid mx-2"
                    style={{ maxWidth: "150px", height: "auto" }}
                  />
                </div>
                <div className="d-flex justify-content-center mb-2">
                  <img
                    src={dafz}
                    alt="dafz Image"
                    className="img-fluid mx-2"
                    style={{ maxWidth: "150px", height: "auto" }}
                  />
                </div>
              </div>
            </div>
            {/* Fourth Slide*/}
            <div className="row p-3 ms-1">
              <div
                className="rounded-3 mt-2 d-flex justify-content-center align-items-center flex-column flex-lg-row col-12 BrandHeight"
                // style={{ minHeight: "150px" }} // Add minHeight for vertical centering
              >
                {/* Image Containers */}
                <div className="d-flex justify-content-center mb-2 col-2">
                  <img
                    src={aramex}
                    alt="aramex Image"
                    className="img-fluid mx-2"
                    style={{ maxWidth: "150px", height: "auto" }}
                  />
                </div>
                <div className="d-flex justify-content-center mb-2 col-2">
                  <img
                    src={ALMASAOOD}
                    alt="ALMASAOOD Image"
                    className="img-fluid mx-2"
                    style={{ maxWidth: "150px", height: "auto" }}
                  />
                </div>
                <div className="d-flex justify-content-center mb-2 col-2">
                  <img
                    src={AIRASTANA}
                    alt="AIRASTANA Image"
                    className="img-fluid mx-2"
                    style={{ maxWidth: "150px", height: "auto" }}
                  />
                </div>
                <div className="d-flex justify-content-center mb-2 col-2 ms-lg-5">
                  <img
                    src={ADNOC}
                    alt="ADNOC Image"
                    className="img-fluid mx-2"
                    style={{ maxWidth: "150px", height: "auto" }}
                  />
                </div>
                <div className="d-flex justify-content-center mb-2 col-2">
                  <img
                    src={DSV}
                    alt="DSV Image"
                    className="img-fluid mx-2"
                    style={{ maxWidth: "150px", height: "auto" }}
                  />
                </div>
                {/* <div className="d-flex justify-content-center mb-2">
                  <img
                    src={dafz}
                    alt="dafz Image"
                    className="img-fluid mx-2"
                    style={{ maxWidth: "150px", height: "auto" }}
                  />
                </div> */}
              </div>
            </div>
          </Slider>
        </div>

        {/* <div className="container-fluid  mt-5  ">
          <div className="row WhyChoose-container">
            <div className="col-12">
              <h1 className="text-center WingsWayHeading">
                <span style={{ color: "#0971CE" }}>
                  Why Choose WingsWay for
                </span>

                <br />
                <span> Corporate Trainings?</span>
              </h1>
            </div>
          </div>
          <div
            className={`row   d-flex align-items-center mt-2 p-lg-5 justify-content-center WhyChoose-container custom-background slide-in-left   ${
              hasViewedSlide.myElement ? "animate-slide-in" : ""
            }`}
            style={{
              borderRadius: "10px",
            }}
            ref={myRef1}
          >
            <div className="col-12 ">
              <h2 className="text-center RecognitionsHeading">
                Recognitions and Qualifications
              </h2>
            </div>
            <div className="col-12 col-lg-4 mt-5 recognitionsBorder">
              <div className="text-center">
                {" "}
                <img src={DET} alt="DET Image" className="img-fluid w-25" />
              </div>

              <p className="mt-3 text-center">
                Approved by the Dubai Department of Economy & Tourism (DET),
                which is the principal authority for the supervision and
                development of Dubai’s economy and tourism sectors.
              </p>
            </div>

            <div className="col-12 col-lg-4 mt-5  recognitionsBorder">
              <div className="text-center">
                <img src={KHDA} alt="KHDA Image" className="img-fluid w-25" />
              </div>
              <p className="mt-3 text-center">
                WingsWay Training Institute is approved and recognised by the
                Knowledge and Human Development Authority (KHDA), ensuring the
                highest standards of education in Dubai.
              </p>
            </div>
            <div className="col-12 col-lg-4 mt-5 mt-lg-0">
              <div className="text-center">
                <img src={ISO} alt="ISO Image" className="img-fluid w-25" />
              </div>
              <p className="mt-3 text-center">
                WingsWay Training Institute is certified with the prestigious
                ISO 9001:2015 by the International Accreditation Forum (IAF).
              </p>
            </div>
          </div>
        </div> */}

        <div className="container-fluid mt-5 " ref={counterSectionRef}>
          <div
            className={`row text-white p-3 Trusted-container  slide-in-left  ${
              hasViewedSlide.myElement ? "animate-enquire" : ""
            }`}
            ref={myRef1}
          >
            <div className="col-12 text-center text-black">
              <h2 className="text-center RecognitionsHeading">
                Trusted By Students Worldwide
              </h2>
            </div>

            <div className="col-12 d-flex flex-column flex-lg-row justify-content-center mt-3 ">
              {/* Course 1 */}
              <div className="col-12 col-lg-4 border border-white p-0 p-lg-3 bg-white rounded-3  mb-lg-0">
                <div className="align-items-center text-center text-black rounded-3 p-2  bg-white">
                  <div>
                    <h1>
                      <span className="counter rounded-pill Counter ps-4 pe-3 ps-lg-4 p-2 pe-lg-4">
                        {isCounterVisible && (
                          <CountUp
                            start={0}
                            end={3.5}
                            duration={3}
                            decimals={1}
                            suffix="M+"
                          />
                        )}
                      </span>
                    </h1>
                  </div>

                  <p
                    className="text-center mt-4"
                    style={{ fontSize: "18px", fontWeight: "400" }}
                  >
                    <span className="fw-bold">
                      Vast Network of Professionals:{" "}
                    </span>
                    <span>
                      Join professionals associated with The International
                      Certification Organizations we represent.
                    </span>
                    <br />
                  </p>
                </div>
              </div>

              {/* Course 2 */}
              <div className="col-12 col-lg-4   mt-lg-0 border border-white p-0 p-lg-3 bg-white rounded-3 mb-3 mb-lg-0">
                <div className="align-items-center text-center text-black rounded-3 p-2  bg-white">
                  <div>
                    <h1>
                      <span className="counter rounded-pill Counter ps-4 pe-3 ps-lg-4 p-2 pe-lg-4">
                        {isCounterVisible && (
                          <CountUp
                            start={0}
                            end={250}
                            duration={4}
                            // decimals={1}
                            suffix="+"
                          />
                        )}
                      </span>
                    </h1>
                  </div>

                  <p
                    className="text-center mt-4"
                    style={{ fontSize: "18px", fontWeight: "400" }}
                  >
                    {" "}
                    <span className="fw-bold">
                      Extensive Course Offerings:{" "}
                    </span>
                    <span>
                      Explore over 250+ courses designed to enhance your skills
                      and career prospects.
                    </span>
                  </p>
                </div>
              </div>

              <div className="col-12 col-lg-4  mt-lg-0  border border-white p-0 p-lg-3 bg-white rounded-3 mb-3 mb-lg-0">
                <div className="align-items-center text-center text-black rounded-3 p-2  bg-white">
                  <div>
                    <h1>
                      <span className="counter rounded-pill Counter ps-4 pe-3 ps-lg-4 p-2 pe-lg-4">
                        {isCounterVisible && (
                          <CountUp
                            start={0}
                            end={80}
                            duration={5}
                            // decimals={1}
                            suffix="+"
                          />
                        )}
                      </span>
                    </h1>
                  </div>

                  <p
                    className="text-center mt-4"
                    style={{ fontSize: "18px", fontWeight: "400" }}
                  >
                    {" "}
                    <span className="fw-bold">Diverse Student Base: </span>
                    <span>
                      Be a part of a growing community of students and
                      professionals from over 80+ nationalities.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="container-fluid  mt-5 pt-3  m-auto  text-white"
          style={{ backgroundColor: "#011689" }}
        >
          <div
            className={`row text-white   p-3 slide-in-left aboutdivwidth  ${
              hasViewedSlide.secondElement ? "animate-slide-in" : ""
            }`}
            style={{ backgroundColor: "#011689" }}
            ref={myRef2}
          >
            <div className="col-12  text-center text-white ">
              <h1 className="WingsWayHeading">What Sets us Apart </h1>
              <div className="col-12 mt-4 text-white">
                <Collapse accordion items={items} onChange={onChange} />
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-5" id="Training">
          <div
            className={`row slide-in-left m-auto aboutdivwidth  ${
              hasViewedSlide.thirdElement ? "animate-enquire" : ""
            }`}
            ref={myRef3}
          >
            <div className="col-12 mt-5 text-center">
              <h1 style={{ color: "#0971CE" }} className="WingsWayHeading">
                Our Corporate Training Programs
              </h1>
            </div>
            <div>
              <Slider
                {...corporatetraining}
                className="m-0 p-0 col-9 col-md-10 col-lg-12 m-auto mt-4"
              >
                <div>
                  <div className="d-flex flex-column align-items-center text-center  border border-3 border-light rounded-3 p-2 ms-2 corporatetrainingresponsive-div">
                    <img
                      src={course1}
                      alt="Human Resource Management Image"
                      className="img-fluid"
                      // style={{ maxWidth: "100%", height: "auto" }}
                    />
                    <p className="mt-3 text-start">
                      Equip your HR team with essential skills in labour laws,
                      HR policies, digital transformation, workforce planning,
                      ROI measurement, and more.
                    </p>
                  </div>
                </div>

                <div>
                  <div className="d-flex flex-column align-items-center text-center  border  border-3 border-light rounded-3 p-2 ms-2 corporatetrainingresponsive-div">
                    <img
                      src={course2}
                      alt="Leadership & Management Image"
                      className="img-fluid"
                    />
                    <p className="mt-3 text-start">
                      Master high-performance leadership, build workplace trust,
                      embrace design thinking, agile leadership, and enhance
                      Emotional & Social Intelligence (ESI).
                    </p>
                  </div>
                </div>

                <div>
                  <div className="d-flex flex-column align-items-center text-center border border-3  border-light p-2 ms-2 rounded-3 corporatetrainingresponsive-div">
                    <img
                      src={course3}
                      alt="Team Building Activities Image"
                      className="img-fluid"
                      // style={{ maxWidth: "100%", height: "auto" }}
                    />
                    <p className="mt-3 text-start">
                      Nurture collaboration and personal growth among your teams
                      through our comprehensive team-building trainings.
                    </p>
                  </div>
                </div>

                <div>
                  <div className="d-flex flex-column align-items-center text-center border border-3 border-light p-2 ms-2 rounded-3 corporatetrainingresponsive-div">
                    <img
                      src={course4}
                      alt="Skills Developement Programs Image"
                      className="img-fluid"
                      // style={{ maxWidth: "100%", height: "auto" }}
                    />
                    <p className="mt-3 text-start">
                      Polish in-demand skills, such as, public speaking,
                      interpersonal communication, giving feedback, time and
                      task management, and more.
                    </p>
                  </div>
                </div>

                <div>
                  <div className="d-flex flex-column align-items-center text-center border border-3 border-light p-2 ms-2 rounded-3 corporatetrainingresponsive-div">
                    <img
                      src={course5}
                      alt="Banking, Finance & Treasury Image"
                      className="img-fluid"
                      // style={{ maxWidth: "100%", height: "auto" }}
                    />
                    <p className="mt-3 text-start">
                      Know the essentials of Islamic banking, financial
                      statement analysis, credit management, financial modeling,
                      treasury operations, and more.
                    </p>
                  </div>
                </div>

                <div>
                  <div className="d-flex flex-column align-items-center text-center border border-3 border-light p-2 ms-2 rounded-3 corporatetrainingresponsive-div">
                    <img
                      src={course6}
                      alt="Procrument & Supply Chain Image"
                      className="img-fluid"
                      // style={{ maxWidth: "100%", height: "auto" }}
                    />
                    <p className="mt-3 text-start">
                      Master best practices in procurement, inventory
                      management, contract management, procurement compliance,
                      and more.
                    </p>
                  </div>
                </div>

                <div>
                  <div className="d-flex flex-column align-items-center text-center border border-3 border-light p-2 ms-2 rounded-3 corporatetrainingresponsive-div">
                    <img
                      src={course7}
                      alt="Quality Management Image"
                      className="img-fluid"
                      // style={{ maxWidth: "100%", height: "auto" }}
                    />
                    <p className="mt-3 text-start">
                      Lead quality assurance through six sigma black and green
                      belts, lean sigma, lean operations management, and
                      strategic quality management.
                    </p>
                  </div>
                </div>

                <div>
                  <div className="d-flex flex-column align-items-center text-center border border-3 border-light p-2 ms-2 rounded-3 corporatetrainingresponsive-div">
                    <img
                      src={course8}
                      alt="IT & Excel Image"
                      className="img-fluid"
                      // style={{ maxWidth: "100%", height: "auto" }}
                    />
                    <p className="mt-3 text-start">
                      Practice and master advanced Excel with dashboard
                      creation, Power BI, big data, AI, and other digital
                      business analytics tools.
                    </p>
                  </div>
                </div>

                <div>
                  <div className="d-flex flex-column align-items-center text-center border border-3 border-light p-2 ms-2 rounded-3 corporatetrainingresponsive-div">
                    <img
                      src={course9}
                      alt="Sales & Customer Service Image"
                      className="img-fluid"
                      // style={{ maxWidth: "100%", height: "auto" }}
                    />
                    <p className="mt-3 text-start">
                      Champion customer-centricity through our telesales and
                      sales leadership courses along with customer service
                      specialist course.
                    </p>
                  </div>
                </div>

                <div>
                  <div className="d-flex flex-column align-items-center text-center border border-3 border-light p-2 ms-2 rounded-3 corporatetrainingresponsive-div">
                    <img
                      src={course10}
                      alt="Risk, Audit & Compliance Image"
                      className="img-fluid"
                      // style={{ maxWidth: "100%", height: "auto" }}
                    />
                    <p className="mt-3 text-start">
                      Learn the basics of anti-money laundering, risk
                      management, and more.
                    </p>
                  </div>
                </div>

                <div>
                  <div className="d-flex flex-column align-items-center text-center border border-3 border-light p-2 ms-2 rounded-3 corporatetrainingresponsive-div">
                    <img
                      src={course11}
                      alt="Bite-Sized Trainings Image"
                      className="img-fluid"
                      // style={{ maxWidth: "100%", height: "auto" }}
                    />
                    <p className="mt-3 text-start">
                      Choose from a list of our ‘Espresso’ learning sessions
                      that are targeted, activity-based, result-oriented, and
                      tailored for today’s workforce!
                    </p>
                  </div>
                </div>

                <div>
                  <div className="d-flex flex-column align-items-center justify-content-center text-center border border-3 border-light p-2 ms-2 rounded-3 corporatetrainingresponsive-div">
                    <h3
                      className="mt-3 text-center fw-bold"
                      style={{ color: "#100AA8" }}
                    >
                      AND MUCH MORE …
                    </h3>
                  </div>
                </div>
              </Slider>
            </div>
            <div className="col-12 text-center mt-4 mt-md-5">
              <button
                className="btn btn-lg CorporateEnquireButton CorporateEnquireButtonWidth ms-1 ms-md-0  "
                onClick={(e) => handleEnquireClick(e, "enquire-now")}
              >
                Enquire Now
              </button>
            </div>
          </div>
        </div>

        <div className="container mt-5" id="Awards">
          <div
            className={`row  slide-in-left mt-4 align-items-center m-auto  aboutdivwidth ${
              hasViewedSlide.fourthElement ? "animate-slide-in" : ""
            }`}
            ref={myRef4}
          >
            <div className="col-12 text-center mt-3">
              <h1
                className=" text-center WingsWayHeading"
                style={{ color: "#011689" }}
              >
                Our Awards and Recognitions
              </h1>
            </div>
            <div className="col-12 col-lg-6 mt-3  mt-lg-3 mt-xxl-5 mb-lg-3 mb-xl-3 mb-xxl-3 justify-content-center border border-white">
              <p className="text-start " >
                At WingsWay, our commitment to excellence has earned us
                prestigious awards and recognitions, reflecting the trust and
                impact we've delivered to individuals and organisations
                worldwide. We are:
              </p>
              <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
                <li className="d-flex align-items-start mt-1">
                  {" "}
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    style={{ color: "#011689" }}
                    className=" me-2 flex-shrink-0 mt-1"
                  />
                  <div>
                    <span style={{ fontWeight: "bold" }}>KHDA Approved:</span>{" "}
                    <span className="d-block d-sm-inline">
                      WingsWay Training Institute is approved and recognised by
                      the Knowledge and Human Development Authority (KHDA),
                      ensuring the highest standards of education in Dubai.
                    </span>
                  </div>
                </li>
                <li className=" d-flex align-items-start mt-3 ">
                  {" "}
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className=" me-2 flex-shrink-0 mt-1"
                    style={{ color: "#011689" }}
                  />
                  <div>
                    <span style={{ fontWeight: "bold" }}>DET Approved:</span>{" "}
                    <span className="d-block d-sm-inline">
                      Approved by the Dubai Department of Economy & Tourism
                      (DET), which is the principal authority for the
                      supervision and development of Dubai’s economy and tourism
                      sectors.
                    </span>
                  </div>
                </li>
                <li className=" d-flex align-items-start mt-3 ">
                  {" "}
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="me-2 flex-shrink-0 mt-1"
                    style={{ color: "#011689 " }}
                  />
                  <div>
                    <span style={{ fontWeight: "bold" }}>ISO Certified:</span>{" "}
                    <span className="d-block d-sm-inline">
                      WingsWay Training Institute is certified with the
                      prestigious ISO 9001:2015 by the International
                      Accreditation Forum (IAF).
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-12 col-lg-6 hover-scale2 mt-3 mt-lg-3 mt-xxl-5 text-center">
              <img
                src={award}
                alt="Award Image"
                className="img-fluid rounded-3 responsiveAward-img "
              />
            </div>
          </div>
        </div>

        <div className="container mt-5">
          <div
            className={`row mt-5 rounded-4 slide-in-left border border-white align-items-center aboutdivwidth ${
              hasViewedSlide.fifthElement ? "animate-enquire" : ""
            }`}
            ref={myRef5}
          >
            <div className="col-12 col-lg-6">
              <h1
                className="text-start WingsWayHeading
               "
                style={{ color: "#0971CE " }}
              >
               Invest in Your Employees, Invest in Your Future.
              </h1>
              <p className="mt-3">
              Your employees are your greatest asset. By investing in their growth and development, you're not just improving their skills, but also strengthening your organisation's future. Our training programmes are designed to equip your team with the knowledge and tools they need to perform their best and contribute positively to your company's goals.
              </p>
            </div>

            <div className="col-12 col-lg-6 text-center">
              <img
                src={invest}
                alt="Invest in Your Employees, Invest in Your Future Image"
                className="img-fluid text-center responsiveInvest-img"
              />
            </div>
          </div>
        </div>

        <div
          className={` container mt-5 border border-white  rounded-4 slide-in-left   ${
            hasViewedSlide.sixthElement ? "animate-slide-in" : ""
          }`}
          ref={myRef6}
        >
          <div className="row  mt-3">
            <div className="col-12 text-center mb-4">
              <h1 className="WingsWayHeading" style={{ color: "#011689" }}>
                Photos From Our Corporate Trainings
              </h1>
            </div>
          </div>

          <Slider
            {...Photosfromourcorporate}
            className="m-0 p-0 col-9 col-md-8 col-lg-8 m-auto  justify-content-center align-items-center "
          >
            <div className="m-auto">
              <div
                className=" p-lg-1 text-center"
              >
                <img
                  src={CorporateTraining1}
                  alt="Corporate Training Image1 "
                  className="img-fluid rounded-3 "
                />
              </div>
            </div>
            <div className="m-auto">
              <div
                className=" p-lg-1  text-center"
                style={{ alignContent: "center" }}
              >
                <img
                  src={CorporateTraining2}
                  alt="Corporate Training Image2"
                  className="img-fluid rounded-3 "
                />
              </div>
            </div>
            <div className="m-auto">
              <div
                className=" p-lg-1  text-center"
                style={{ alignContent: "center" }}
              >
                <img
                  src={CorporateTraining03}
                  alt="Corporate Training Image3"
                  className="img-fluid rounded-3 "
                />
              </div>
            </div>
            <div className="m-auto">
              <div
                className=" p-lg-1  text-center"
                style={{ alignContent: "center" }}
              >
                <img
                  src={CorporateTraining04}
                  alt="Corporate Training Image04"
                  className="img-fluid rounded-3 "
                />
              </div>
            </div >
            <div className="m-auto">
              <div
                className=" p-lg-1  text-center"
                style={{ alignContent: "center" }}
              >
                <img
                  src={CorporateTraining3}
                  alt="Corporate Training Image3"
                  className="img-fluid rounded-3 "
                />
              </div>
            </div>
            <div className="m-auto">
              <div
                className=" p-lg-1  text-center"
                style={{ alignContent: "center" }}
              >
                <img
                  src={CorporateTraining5}
                  alt="Corporate Training Image5"
                  className="img-fluid rounded-3 "
                />
              </div>
            </div>
            <div className="m-auto">
              <div
                className=" p-lg-1  text-center"
                style={{ alignContent: "center" }}
              >
                <img
                  src={CorporateTraining6}
                  alt="Corporate Training Image6"
                  className="img-fluid rounded-3 "
                />
              </div>
            </div>
            <div className="m-auto">
              <div
                className=" p-lg-1  text-center"
                style={{ alignContent: "center" }}
              >
                <img
                  src={CorporateTraining7}
                  alt="Corporate Training Image7"
                  className="img-fluid rounded-3 "
                />
              </div>
            </div>

            <div className="m-auto">
              <div
                className=" p-lg-1 text-center"
                style={{ alignContent: "center" }}
              >
                <img
                  src={CorporateTraining8}
                  alt="Corporate Training Image8"
                  className="img-fluid rounded-3 "
                />
              </div>
            </div>

            {/* <div>
              <div className=" p-3 shadow-sm border border-2 border-light rounded-3  mt-2 ms-2 Trainingsresponsive-div text-center">
                <img src={CorporateTraining9} alt="Corporate Training Image8" className="img-fluid" />
              </div>
            </div> */}

            <div className="m-auto">
              <div
                className=" p-lg-1 text-center"
                style={{ alignContent: "center" }}
              >
                <img
                  src={CorporateTraining10}
                  alt="Corporate Training Image10"
                  className="img-fluid rounded-3 "
                />
              </div>
            </div>
            <div className="m-auto">
              <div
                className=" p-lg-1 text-center"
                style={{ alignContent: "center" }}
              >
                <img
                  src={CorporateTraining11}
                  alt="Corporate Training Image11"
                  className="img-fluid rounded-3 "
                />
              </div>
            </div>
            <div className="m-auto">
              <div
                className=" p-lg-1  text-center"
                style={{ alignContent: "center" }}
              >
                <img
                  src={CorporateTraining12}
                  alt="Corporate Training Image12"
                  className="img-fluid rounded-3 "
                />
              </div>
            </div>
            <div className="m-auto">
              <div
                className=" p-lg-1  text-center"
                style={{ alignContent: "center" }}
              >
                <img
                  src={CorporateTraining13}
                  alt="Corporate Training Image13"
                  className="img-fluid rounded-3 "
                />
              </div>
            </div>
            <div className="m-auto">
              <div
                className="p-lg-1 text-center"
                style={{ alignContent: "center" }}
              >
                <img
                  src={CorporateTraining16}
                  alt="Corporate Training Image16"
                  className="img-fluid rounded-3 "
                />
              </div>
            </div>
            <div className="m-auto">
              <div
                className=" p-lg-1 text-center"
                style={{ alignContent: "center" }}
              >
                <img
                  src={CorporateTraining15}
                  alt="Corporate Training Image15"
                  className="img-fluid rounded-3 "
                />
              </div>
            </div>
            <div className="m-auto">
              <div
                className="p-lg-1 text-center"
                style={{ alignContent: "center" }}
              >
                <img
                  src={CorporateTraining18}
                  alt="Corporate Training Image18"
                  className="img-fluid rounded-3 "
                />
              </div>
            </div>
            {/* <div>
              <div className=" p-3 shadow-sm border border-2 border-light rounded-3  mt-2 ms-2 Trainingsresponsive-div text-center">
                <img src={CorporateTraining17} alt="Corporate Training Image16" className="img-fluid" />
              </div>
            </div> */}
           
            <div className="m-auto">
              <div
                className="p-lg-1 text-center"
                style={{ alignContent: "center" }}
              >
                <img
                  src={CorporateTraining22}
                  alt="Corporate Training Image22"
                  className="img-fluid rounded-3 "
                />
              </div>
            </div>
            <div className="m-auto">
              <div
                className="p-lg-1 text-center"
                style={{ alignContent: "center" }}
              >
                <img
                  src={CorporateTraining23}
                  alt="Corporate Training Image23"
                  className="img-fluid rounded-3 "
                />
              </div>
            </div>
            <div className="m-auto">
              <div
                className=" p-lg-1 text-center"
                style={{ alignContent: "center" }}
              >
                <img
                  src={CorporateTraining24}
                  alt="Corporate Training Image24"
                  className="img-fluid rounded-3 "
                />
              </div>
            </div>
            <div className="m-auto">
              <div
                className=" p-lg-1  text-center"
                style={{ alignContent: "center" }}
              >
                <img
                  src={CorporateTraining25}
                  alt="Corporate Training Image25"
                  className="img-fluid rounded-3 "
                />
              </div>
            </div>
          
          </Slider>
        </div>

        <div className="container mt-5" id="Reviews">
          <div
            className={`row slide-in-left aboutdivwidth ${
              hasViewedSlide.seventhElement ? "animate-enquire" : ""
            }`}
            ref={myRef7}
          >
            <div className="col-12 mt-5 text-center">
              <h1 style={{ color: "#0971CE" }} className="mt-3">
                Client Reviews
              </h1>
            </div>
            <div className="d-flex justify-content-center mt-4">
              <Slider
                {...Clientreviews}
                className="col-10 col-md-8 col-lg-11 "
              >
                <div>
                  <div className="p-1  text-center reviewresponsive-div ms-lg-2">
                    <img
                      src={Testimonial1}
                      alt="Review Image1"
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div>
                  <div className="p-1  text-center reviewresponsive-div ms-lg-2">
                    <img
                      src={Testimonial2}
                      alt="Review Image2"
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div>
                  <div className="p-1 text-center reviewresponsive-div ms-lg-2">
                    <img
                      src={Testimonial3}
                      alt="Review Image3"
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div>
                  <div className="p-1  text-center reviewresponsive-div ms-lg-2">
                    <img
                      src={Testimonial4}
                      alt="Review Image4"
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div>
                  <div className="p-1  text-center reviewresponsive-div ms-lg-2">
                    <img
                      src={Testimonial5}
                      alt="Review Image5"
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div>
                  <div className="p-1  text-center reviewresponsive-div ms-lg-2">
                    <img
                      src={Testimonial6}
                      alt="Review Image6"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>

      
        <div className="container mt-5 " id="learner">
          <div className="m-0 p-0 mt-5 border border-white">
          <div
            className={`row aboutdivwidth p-3 slide-in-left mt-5 align-items-center border border-light  shadow ${
              hasViewedSlide.eigthElement ? "animate-slide-in" : ""
            }`}
            ref={myRef8}
          >
           
            <div className="col-12 col-lg-6 mt-4 mt-lg-4 mt-xxl-0 mb-lg-3 mb-xl-3 mb-xxl-3 justify-content-center border border-white ps-5">
              <h1 className="text-start WingsWayHeading" style={{color:"#011689"}}>Enquire Now
              </h1>
              <p className="text-start mt-3">
              Are you ready to transform your workforce? Our customised corporate training programmes can improve your team's skills, increase productivity, and nurture leadership. Contact our Training Solutions Specialists today!
              </p>
             


              <button
                className="btn btn-lg EnquireButton Enquirebuttonwidth"
                onClick={(e) => handleEnquireClick(e, "enquire-now")}
              >
                Enquire Now
              </button>
            

            </div>
            <div className="col-12 col-lg-6 hover-scale2 mt-3 mt-lg-5 mt-xl-5 mt-xxl-5 text-center">
              <img
                src={Enquire}
                alt="Enquire Image"
                className="img-fluid rounded-3 Enquire-img "
                style={{width:"60%"}}
              />
            </div>
          </div>
          </div>
        </div>

        <div className="container-fluid ">
          <div className="row">
            <div className="col-12">
              <p className="text-end">
                <a
                  href="https://wa.me/+971509062236"
                  className="fixed-icon"
                  target="_blank" // Opens in a new tab
                  rel="noopener noreferrer" // Security best practice when using target="_blank"
                >
                  <FontAwesomeIcon icon={faWhatsapp} bounce size="3x" />
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="container-fluid elevatebannerbackImage elevatewidth p-3 pb-4 mt-5 p-lg-5">
          <div
            className={`row slide-in-left d-flex justify-content-center align-items-center elevatewidth  p-lg-2 p-xl-5  ${
              hasViewedSlide.ninethElement ? "animate-enquire" : ""
            }`}
            ref={myRef9}
          >
            <div className="col-12">
              <h1 className="text-center text-white Getintouchheading">
                Get In Touch
              </h1>
            </div>
            <div className="col-12 text-center mt-3 ">
              <button
                className="btn btn-lg contactusbutton"
                onClick={() => {
                  window.location.href = "tel:+971 4 222 0885"; // Replace with your phone number
                }}
              >
                <span>Contact Us</span>
                <span className="ms-3">
                  <FontAwesomeIcon icon={faArrowRight} />
                </span>
              </button>
              <button
                className="btn btn-lg Footerdemobutton ms-md-3 ms-lg-3 mt-3 mt-md-0"
                onClick={handleModalOpen}
              >
                <span>Book A Free Demo Class</span>
                <span className="ms-3">
                  <FontAwesomeIcon icon={faArrowRight} />
                </span>
              </button>
            </div>
          </div>
        </div>

        <div
          className="container-fluid text-center d-flex justify-content-center  m-auto"
          style={{ backgroundColor: "black" }}
        >
          <div
            className="row d-flex justify-content-center align-items-center  "
            style={{ backgroundColor: "black" }}
          >
            <div className="col-12 col-md-12 col-lg-4 d-flex flex-column align-items-center text-center ms-lg-5 ">
              <img
                src={Footerlogo}
                alt="logo"
                className="img-fluid mt-3 responsive-logofooter text-center"
              />
            </div>

            <div className="col-12 col-md-12 col-lg-6 text-center mt-lg-4 text-lg-center ">
              <a
                href="#Coursediscription"
                className="footer-link footerlinktext"
                onClick={(e) => handleFooterLinkClick(e, "Coursediscription")}
              >
                <p className="mb-5 mb-lg-0">© 2025 WingsWay All rights reserved</p>
              </a>
            </div>

            {/* <div className="col-12 col-md-12 col-lg-2 mt-3 mt-md-3 text-center mt-lg-2 mt-3 mt-md-5 text-lg-center ">
              <a
                href="#About"
                className="footer-link footerlinktext"
                onClick={(e) => handleFooterLinkClick(e, "About")}
              >
                <span>About the course</span>
              </a>
            </div>

            <div className="col-12 col-md-12 col-lg-2 mt-3 mt-md-3 text-center mt-lg-2 mt-3 mt-md-5 text-lg-center">
              <a
                href="#Testimonials"
                className="footer-link footerlinktext"
                onClick={(e) => handleFooterLinkClick(e, "Testimonials")}
              >
                <span>Testimonial</span>
              </a>
            </div> */}

            {/* <div
              className="row "
              style={{ backgroundColor: "black", color: "white" }}
            >
              <div className="col-12 text-center mt-3 mt-md-5 mt-lg-0 mb-5">
                <p>© 2025 WingsWay All rights reserved</p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
