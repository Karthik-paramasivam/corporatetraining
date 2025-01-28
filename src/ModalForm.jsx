import React, { useRef, useEffect, useState } from "react";
import {
  Modal,
  Form,
  Input,
  Select,
  message,
  Button as AntButton,
  Space,
} from "antd";

import "./App.css";
function ModalForm({isModalVisible, handleModalClose }) {
  const [form] = Form.useForm(); // useForm hook for handling form operations
  const [formData, setFormData] = useState(null); // State to store submitted data
  const [phoneNumber, setPhoneNumber] = useState(""); // State for phone number input
  const [countryCode, setCountryCode] = useState("+971"); // Default country code
  const [selectWidth, setSelectWidth] = useState("30%");
    const { Option } = Select;
  
//   const [isModalVisible, setIsModalVisible] = useState(false);
//   const handleModalOpen = () => {
//     setIsModalVisible(true);
//   };

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

    if (fullPhoneNumber.replace(/\D/g, "").length > 15) {
      return Promise.reject(
        new Error("Phone number should not exceed 15 digits!")
      );
    }

    return Promise.resolve();
  };

  const onCloseModal = () => {
   
    handleModalClose(); // Call the parent-provided close handler
     form.resetFields();
  };

//   const handleModalClose = () => {
//     setIsModalVisible(false);
//     form.resetFields(); // Clear form fields when modal is closed
//   };

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

  const styl = `.ant-modal .ant-modal-content {
            position: relative;
            background-color: #0971CE;
            background-clip: padding-box;
            border: 0;
            border-radius: 8px;
            box-shadow: 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
            pointer-events: auto;
            padding: 20px 24px;
        }
            .ant-modal .ant-modal-header {
            color: white;
            background: #0971CE;
            border-radius: 8px 8px 0 0;
            margin-bottom: 8px;
            padding: 0;
            border-bottom: none;
        }
            .ant-modal .ant-modal-title {
            margin: 0;
            color: white;
            font-weight: 400;
            font-size: 32px;
            line-height: 1.5;
            word-wrap: break-word;
            margin-top: 10px;
        }
        
        .ant-modal .ant-modal-close-x {
            display: flex;
            font-size: 24px;
            color: white;
            font-style: normal;
            line-height: 32px;
            justify-content: center;
            text-transform: none;
            text-rendering: auto;
            
        }
            
        `;

  return (
    <div>
      <style>{styl}</style>
      <div>
        <Modal
          title="Enquire Now"
          className="text-center text-white mt-5 mt-md-5 "
          open={isModalVisible}
          onCancel={onCloseModal}
          footer={null}
        >
          <div
            id="enquire-now"
            className="col-12 col-lg-12 col-xl-12  ms-auto me-lg-3  "
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            style={{ backgroundColor: "#0971CE " }}
          >
            <Form
              form={form}
              className="rounded-3"
              layout="vertical"
              onFinish={handleSubmit}
              style={{ backgroundColor: "#0971CE" }}
            >
              {/* Form Fields */}
              <Form.Item
                label="First Name"
                name="firstName"
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
                name="lastName"
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
                    style={{ width: "30%" }}
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
                      className="form-item text-white text-start"
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
                  <AntButton
                    type="default"
                    htmlType="submit"
                    style={{
                      backgroundColor: "#faad14",
                      color: "white",
                      borderColor: "#faad14",
                    }}
                    className="Submitbutton "
                  >
                    Submit
                  </AntButton>
                </div>
              </Form.Item>
            </Form>
          </div>
        </Modal>
      </div>{" "}
    </div>
  );
}
export default ModalForm;