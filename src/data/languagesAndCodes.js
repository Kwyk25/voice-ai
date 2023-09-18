const languageData= {
    Afrikaans: "af-ZA",
  "Albanian (Albania)": "sq-AL",
  Amharic: "am-ET",
  Arabic: "ar-XA",
  "Arabic (Algeria)": "ar-DZ",
  "Arabic (Bahrain)": "ar-BH",
  "Arabic (Egypt)": "ar-EG",
  "Arabic (Iraq)": "ar-IQ",
  "Arabic (Jordan)": "ar-JO",
  "Arabic (Kuwait)": "ar-KW",
  "Arabic (Lebanon)": "ar-LB",
  "Arabic (Libya)": "ar-LY",
  "Arabic (Morocco)": "ar-MA",
  "Arabic (Oman)": "ar-OM",
  "Arabic (Qatar)": "ar-QA",
  "Arabic (Saudi Arabia)": "ar-SA",
  "Arabic (Syria)": "ar-SY",
  "Arabic (Tunisia)": "ar-TN",
  "Arabic (United Arab Emirates)": "ar-AE",
  "Arabic (Yemen)": "ar-YE",
  "Azerbaijani (Azerbaijan)": "az-AZ",
  Bengali: "bn-BD",
  "Bengali (India)": "bn-IN",
  "Bosnian (Bosnia and Herzegovina)": "bs-BA",
  Bulgarian: "bg-BG",
  Burmese: "my-MM",
  Catalan: "ca-ES",
  Chinese: "zh-CN",
  "Chinese (Cantonese)": "zh-HK",
  "Chinese (Mandarin, Simplified)": "zh-CN",
  "Chinese (TW)": "zh-TW",
  Croatian: "hr-HR",
  Czech: "cs-CZ",
  Danish: "da-DK",
  Dutch: "nl-NL",
  "Dutch (Belgium)": "nl-BE",
  "English (AU)": "en-AU",
  "English (Australia)": "en-AU",
  "English (Canada)": "en-CA",
  "English (Hong Kong)": "en-HK",
  "English (India)": "en-IN",
  "English (Ireland)": "en-IE",
  "English (Kenya)": "en-KE",
  "English (New Zealand)": "en-NZ",
  "English (Nigeria)": "en-NG",
  "English (Philippines)": "en-PH",
  "English (Singapore)": "en-SG",
  "English (South Africa)": "en-ZA",
  "English (Tanzania)": "en-TZ",
  "English (UK)": "en-GB",
  "English (US)": "en-US",
  "English (Welsh)": "en-GB-WLS",
  Estonian: "et-EE",
  Filipino: "fil-PH",
  Finnish: "fi-FI",
  French: "fr-FR",
  "French (Belgium)": "fr-BE",
  "French (Canada)": "fr-CA",
  "French (Canadian)": "fr-CA",
  "French (Switzerland)": "fr-CH",
  Galician: "gl-ES",
  "Georgian (Georgia)": "ka-GE",
  German: "de-DE",
  "German (Austria)": "de-AT",
  "German (Switzerland)": "de-CH",
  Greek: "el-GR",
  "Gujarati (India)": "gu-IN",
  Hebrew: "he-IL",
  Hindi: "hi-IN",
  Hungarian: "hu-HU",
  Icelandic: "is-IS",
  Indonesian: "id-ID",
  Irish: "ga-IE",
  Italian: "it-IT",
  "Italian (Italy)": "it-IT",
  Japanese: "ja-JP",
  Javanese: "jv-ID",
  "Kannada (India)": "kn-IN",
  "Kazakh (Kazakhstan)": "kk-KZ",
  Khmer: "km-KH",
  Korean: "ko-KR",
  "Lao (Laos)": "lo-LA",
  Latvian: "lv-LV",
  Lithuanian: "lt-LT",
  Macedonian: "mk-MK",
  Malay: "ms-MY",
  "Malayalam (India)": "ml-IN",
  Maltese: "mt-MT",
  "Marathi (India)": "mr-IN",
  "Mongolian (Mongolia)": "mn-MN",
  "Nepali (Nepal)": "ne-NP",
  Norwegian: "nb-NO",
  "Pashto (Afghanistan)": "ps-AF",
  Persian: "fa-IR",
  Polish: "pl-PL",
  Portuguese: "pt-PT",
  "Portuguese (BR)": "pt-BR",
  "Portuguese (Brazil)": "pt-BR",
  "Punjabi (India)": "pa-IN",
  Romanian: "ro-RO",
  Russian: "ru-RU",
  Serbian: "sr-RS",
  "Sinhala (Sri Lanka)": "si-LK",
  Slovak: "sk-SK",
  Slovenian: "sl-SI",
  Somali: "so-SO",
  Spanish: "es-ES",
  "Spanish (Argentina)": "es-AR",
  "Spanish (Bolivia)": "es-BO",
  "Spanish (Chile)": "es-CL",
  "Spanish (Colombia)": "es-CO",
  "Spanish (Costa Rica)": "es-CR",
  "Spanish (Cuba)": "es-CU",
  "Spanish (Dominican Republic)": "es-DO",
  "Spanish (Ecuador)": "es-EC",
  "Spanish (El Salvador)": "es-SV",
  "Spanish (Equatorial Guinea)": "es-GQ",
  "Spanish (Guatemala)": "es-GT",
  "Spanish (Honduras)": "es-HN",
  "Spanish (MX)": "es-MX",
  "Spanish (Mexico)": "es-MX",
  "Spanish (Nicaragua)": "es-NI",
  "Spanish (Panama)": "es-PA",
  "Spanish (Paraguay)": "es-PY",
  "Spanish (Peru)": "es-PE",
  "Spanish (Puerto Rico)": "es-PR",
  "Spanish (US)": "es-US",
  "Spanish (Uruguay)": "es-UY",
  "Spanish (Venezuela)": "es-VE",
  Sundanese: "su-ID",
  "Swahili (Kenya)": "sw-KE",
  "Swahili (Tanzania)": "sw-TZ",
  Swedish: "sv-SE",
  "Swedish (Sweden)": "sv-SE",
  "Tamil (India)": "ta-IN",
  "Tamil (Malaysia)": "ta-MY",
  "Tamil (Singapore)": "ta-SG",
  "Tamil (Sri Lanka)": "ta-LK",
  "Telugu (India)": "te-IN",
  Thai: "th-TH",
  Turkish: "tr-TR",
  Ukrainian: "uk-UA",
  Urdu: "ur-PK",
  "Urdu (India)": "ur-IN",
  Uzbek: "uz-UZ",
  Vietnamese: "vi-VN",
  Welsh: "cy-GB",
  Zulu: "zu-ZA",
}

const languageArray = Object.entries(languageData).map(([language, languageCode]) => ({
    language,
    languageCode,
}));

export default languageArray;



//CODE TO GET ALL OF THIS
// const [voices, setVoices] = useState(null);
  
// async function getVoices() {
//   try {
//     const secretKey = process.env.REACT_APP_PLAYHT_API_KEY;
//     const userId = process.env.REACT_APP_PLAYHT_API_ID;

//     const options = {
//       method: "GET",
//       headers: {
//         accept: "application/json",
//         "content-type": "application/json",
//         Authorization: secretKey,
//         "X-User-Id": userId,
//       },
//     };

//     const response = await fetch("https://play.ht/api/v1/getVoices", options);

//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }

//     const responseData = await response.json();
//     setVoices(responseData);
//   } catch (err) {
//     console.error(err);
//   }
// }

// useEffect(() => {
//   getVoices();
// }, []);

// console.log(voices)

// function extractLanguages(voices) {
//     const languagesObject = {};
  
//     for (const voice of voices) {
//       const { language, languageCode } = voice;
  
//       // Check if the language is not already added
//       if (!languagesObject[language]) {
//         languagesObject[language] = languageCode;
//       }
//     }
  
//     return languagesObject;
//   }
  
//   if(voices) {console.log(extractLanguages(voices.voices))};
