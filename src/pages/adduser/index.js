import React, { useId, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/layout/layout";
import { InputText } from "primereact/inputtext";
import { Sidebar } from "primereact/sidebar";
import { TabView, TabPanel } from "primereact/tabview";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import postData from "@/components/layout/api/postApi";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { AutoComplete } from "primereact/autocomplete";
import { InputNumber } from "primereact/inputnumber";
import {
  differenceInDays,
  differenceInMonths,
  differenceInYears,
} from "date-fns";
export default function AddUser() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedGender, setSelectedGender] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedPancard, setSelectedPancard] = useState("");
  const [selectedvaisan, setSelectedvaisan] = useState("");
  const [selectedAjar, setSelectedAjar] = useState("");
  const [selectedothervillagecome, setSelectedOtherVillageCome] = useState("");
  const [raktdan, setrakdant] = useState("");
  const [selectedrahancard, setselectedRashankard] = useState("");
  const [selectedvotercard, setselectedVoterCard] = useState("");
  const [selecteddrivinlincense, setselectedDrivingLicence] = useState("");
  const [panyachestrot, setPanyacheStrot] = useState("");
  const [chaviconnectionvalue, setChaviConnection] = useState("");
  const [vahaneSections, setVahaneSections] = useState([{}]);
  const [janavarSections, setJanavarSections] = useState([{}]);
  const [selectedDeathDate, setSelectedDeathDate] = useState(null);

  const [pleaseLoading, setPleaseLoading] = useState(false);

  const [selectedFamilydoctor, setSelectedFamilyDoctor] = useState("");
  const [selectedApagatv, setSelectedApagtav] = useState("");

  const [selectedYojana, setSelectedYojana] = useState("");
  const [selectedAddress, setSelectedAddress] = useState("");
  const [selectedDist, setSelectedDist] = useState("");
  const [selectedTaluka, setSelectedTaluka] = useState("");
  const [distname, setDistName] = useState([]);
  const [talukanameList, setTalukaNameList] = useState([]);
  const [selectedPinCode, setSelectedPinCode] = useState("");
  const [pinCodeList, setPinCodeList] = useState([]);
  const [selectedChavi, setSelectedChavi] = useState("");
  const [selectedChaviList, setSelectedChaviList] = useState([]);
  const [sadharabh, setsadharabh] = useState("");

  const [selectedsamjkarya, setSelectedSamajKarya] = useState("");
  const [selectedRajkiypadOption, setSelectedRajkiypadOption] = useState("");
  const [selectdedBankKhate, setSelectedBankKhate] = useState("");
  const [selectedShareDharak, setSelectedShareDharak] = useState("");
  const [vaisanList, setVaisanList] = useState([]);
  const [vaivsayList, setvaivsayList] = useState([]);

  const [addressList, setAddressList] = useState([]);
  const [fulladdressList, setFULLAddressList] = useState([]);
  const [schoolnameList, setSchoolListName] = useState([]);
  const [mahavidyalayList, setMahavidyalaySchoolListName] = useState([]);
  const [chandList, setChandList] = useState([]);

  const [familynumber, setFamilyNumber] = useState([]);
  const [name, setName] = useState([]);
  const [fathername, setFatherName] = useState([]);
  const [wardNo, setWardNo] = useState([]);
  const [surname, setSurName] = useState([]);
  const [petname, setPetName] = useState([]);
  const [fatherpetname, setFatherPetName] = useState([]);
  const [surnamepetname, setSurNamePetName] = useState([]);
  const [mothername, setMotherName] = useState([]);
  const [mahavidalay, setMahavidalay] = useState([]);
  const [email, setEmail] = useState([]);
  const [phone, setPhone] = useState([]);
  const [schoolname, setSchoolName] = useState([]);
  const [schoolAddressList, setSchoolAddressList] = useState([]);

  const [dharm, setDharm] = useState([]);
  const [cast, setCast] = useState([]);
  const [upjat, setUpjat] = useState([]);
  const [bloodgroup, setBloodGroup] = useState([]);
  const [blooddonateplace, setBloodDonatePlace] = useState([]);
  const [abyaskarm, setAbyaskarm] = useState([]);
  const [vibhag, setVibhag] = useState([]);
  const [othervillagecomename, setOtherVillageComeName] = useState([]);
  const [ajarName, setAjarName] = useState([]);
  const [adharcard, setAdharCard] = useState([]);
  const [pancardno, setPanCardNo] = useState([]);
  const [passportno, setPassportNo] = useState([]);
  const [incometaxno, setIncomeTaxNo] = useState([]);
  const [votercardname, setVoterCardName] = useState([]);
  const [homeno, setHomeNo] = useState([]);
  const [vidhansabha, setVidhanSabha] = useState([]);
  const [yadinumber, setYadiNumber] = useState([]);
  const [jilhaparishad, setJilhaParishad] = useState([]);
  const [grampanchayat, setGrampanchayat] = useState([]);
  const [sirialnumber, setSirialNumber] = useState([]);
  const [lokshabha, setLokShabha] = useState([]);
  const [talukaparishad, setTalukaParishad] = useState([]);
  const [wardnumber, setWardNumber] = useState([]);
  const [matdar, setMatdar] = useState([]);
  const [selectedVaivsay, setSelectedVaivsay] = useState(null);
  const [selectedVaivsayname, setSelectedVaivsayname] = useState(null);
  const [selectedvima, setselectedvima] = useState("");
  const [selectedVaivsayList, setSelectedVaivsayList] = useState([]);
  const [selectedRoadTypeList, setRoadTypeList] = useState([]);
  const [selectedRoadTypename, setSelectedRoadTypename] = useState(null);
  const [selectedGatarList, setGatarList] = useState([]);
  const [selectedGatarname, setSelectedRoadGatarname] = useState(null);
  const [selectedNokri, setSelectedNokri] = useState(null);
  const [selectedNokriList, setSelectedNokriList] = useState([]);
  const [jamin, setJamin] = useState([]);
  const [sheti, setSheti] = useState([]);
  const [ghare, setGhare] = useState([]);
  const [adhikadhik, setAdhikadhik] = useState([]);
  const [aarthikvishleshan, setAarthikVishleshan] = useState([]);
  const [rajkiypaksh, setRajkiypaksh] = useState([]);
  const [rajkiyvishleshan, setRajkiyvishleshan] = useState([]);
  const [bankkhateno, setBankKhateno] = useState([]);

  const [sarkariyojnalist, setSrakariYoujnaList] = useState([]);
  const [samajkaryaList, setsamajkaryaList] = useState([]);
  const [rajkiyPadNameList, setrajkiyPadNameList] = useState([]);
  const [bankkhatenameist, setbankkhatenameList] = useState([]);
  const [selectedPassport, setSelectedPasspost] = useState("");
  const [selectedIncomeTax, setSelectedIncomeTax] = useState("");
  const [sharedharakenameList, setsharedharakenameList] = useState([]);

  const { control, handleSubmit, setValue, getValues } = useForm();

  console.log("isEditMode", isEditMode);

  const [selectedCountries, setSelectedCountries] = useState(null);
  const [selectedKaushal, setSelectedKaushalay] = useState(null);
  const [selectedKaushalList, setSelectedKaushalayList] = useState([]);

  const [selectedVima, setSelectedVima] = useState(null);

  const [selectedSarkariYogna, setSelectedSarkariYojna] = useState(null);
  const [selectedGasCompanty, setSelectedGasCompany] = useState(null);
  const [selectedGasCompantyList, setSelectedGasCompanyList] = useState([]);
  const [selectedGasAgency, setSelectedGasAgency] = useState(null);
  const [selectedGasAgencyList, setSelectedGasAgencyList] = useState([]);
  const [selectedPanyachaprakar, setSelectedPanyachaprakar] = useState(null);
  const [selectedPanyachaprakarList, setSelectedPanyachaprakarList] = useState(
    []
  );
  const [selectedJanavar, setSelectedJanavare] = useState(null);
  const [selectedJanavarList, setSelectedJanavareList] = useState([]);

  const [selectedLanguage, setSelectedLanguge] = useState(null);
  const [selectedLnaguageList, setSelectedLangugeList] = useState([]);
  const [selectedVimaList, setSelectedVimaList] = useState([]);

  const [selectedFulladdress, setSelectedFullAddress] = useState(null);
  const [selectedWardno, setSelectedWardNo] = useState(null);
  const [selectedothervillagecomename, setSelectedOtherVillageComeName] =
    useState(null);

  const [selectedfamilynumber, setSelectedFamilyNumber] = useState(null);
  const [selectedname, setSelectedName] = useState(null);
  const [selectedfathername, setSelectedFatherName] = useState(null);
  const [selectedsurname, setSelectedsurname] = useState(null);
  const [selectedpetname, setSelectedPetName] = useState(null);
  const [selectedfatherpetname, setSelectedFatherPetName] = useState(null);
  const [selectedsurnamepetname, setSelectedSurNamePetName] = useState(null);
  const [selectedmothername, setSelectedMotherName] = useState(null);
  const [selectedemail, setSelectedEmail] = useState(null);
  const [selectedphone, setSelectedPhone] = useState(null);
  const [selectedschoolname, setSelectedSchoolName] = useState(null);
  const [selectedMahavidalay, setSelectedMahavidalay] = useState(null);
  const [selectedschoolAddress, setSelectedSchoolAddress] = useState(null);
  const [selectedCollageAddress, setSelectedCollageAddress] = useState(null);
  const [selectedCollageAddressList, setSelectedCollageAddressList] = useState(
    []
  );

  const [selectedabyaskarm, setSelectedAbyaskarm] = useState(null);
  const [selectedVibhag, setSelectedVibhag] = useState(null);
  const [selectedDharm, setSelectedDharm] = useState(null);
  const [selectedCast, setSelectedCast] = useState(null);
  const [selectedUpjat, setSelectedUpjat] = useState(null);
  const [selectedbloodgroup, setSelectedBloodGroup] = useState(null);
  const [selectedblooddonateplace, setSelectedBloodDonatePlace] =
    useState(null);
  const [selectedAjarname, setSelectedAjarName] = useState(null);
  const [selectedAdharcard, setSelectedAdharCard] = useState(null);
  const [selectedPancardno, setSelectedPanCardNo] = useState(null);
  const [selectedPassportno, setSelectedPassportNo] = useState(null);
  const [selectedincometaxno, setSelectedIncomeTaxNo] = useState(null);
  const [selectedvotercardname, setSelectedVoterCardName] = useState(null);
  const [selecteddrivingLincename, setSelectedDrivingLiceneceName] =
    useState(null);
  const [selecteddrivingLincenameList, setSelectedDrivingLiceneceNameList] =
    useState([]);

  const [selectedhomeno, setSelectedHomeNo] = useState(null);
  const [selectedYadinumber, setSelectedYadiNumber] = useState(null);
  const [selectedVidhanSabha, setSelectedVidhanSabha] = useState(null);
  const [selectedjilhaparishad, setSelectedJilhaParishad] = useState(null);
  const [selectedGrampanchayat, setSelectedGramPanchayat] = useState(null);
  const [selectedSirialnumber, setSelectedSirialNumber] = useState(null);
  const [selectedlokShabha, setSelectedLokShabha] = useState(null);
  const [selectedtalukaParishad, setSelectedTalukaParishad] = useState(null);
  const [selectedwardnumber, setSelectedWardNumber] = useState(null);
  const [selectedmatdar, setSelectedMatdar] = useState(null);
  const [selectedjamin, setSelectedJamin] = useState(null);
  const [selectedSheti, setSelectedSheti] = useState(null);
  const [selectedGhare, setSelectedGhare] = useState(null);
  const [selectedadhikadhik, setSelectedAdhikadhik] = useState(null);
  const [selectedAarthikVishleshan, setSelectedAarthikVishleshan] =
    useState(null);
  const [selectedRajkiyvishleshan, setSelectedRajkiyVishleshan] =
    useState(null);
  const [selectedRajkiypaksh, setSelectedRajkiypaksh] = useState(null);
  const [selectedBankKhateno, setSelectedBankKhateNo] = useState(null);

  const [selectedSmajkaryaName, setSelectedSmajkaryaName] = useState(null);
  const [selectedRajkiyPad, setSelectedRajkiyPad] = useState(null);
  const [selectedBankName, setSelectedBankName] = useState(null);
  const [selectedShareDharakName, setSelectedShareDharakName] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [postImg, setPostImg] = useState(null);
  const [gasConnection, setGasConnetion] = useState();
  const [selectedmatdaroption, setSelectedMatdaroption] = useState(false);

  const [vahane, setVahane] = useState();
  const [janavarValue, setJanavarValue] = useState();

  const router = useRouter();
  const { id } = router.query;
  const gender = [
    { name: "Male", code: "MA" },
    { name: "Female", code: "FE" },
    { name: "Other", code: "OT" },
  ];

  console.log("selectedImage", selectedImage);
  const mariatelStatus = [
    { name: "विवाहित", code: "MA" },
    { name: "अविवाहित", code: "FE" },
    { name: "विधवा", code: "OT" },
    { name: "घटस्पोटीत", code: "OT" },
  ];

  const homeType = [
    { name: "द.वि.मा.कौलारू", code: "MA" },
    { name: "द.वि.मा.पत्रा", code: "FE" },
    { name: "आर.सी.सी", code: "OT" },
    { name: "आर.सी.सी दु. मजली", code: "Og" },
    { name: "आर.सी.सी ति. मजली", code: "Oy" },
    { name: "आर.सी.सी चा. मजली", code: "Ou" },
    { name: "पत्रा शेड", code: "Oe" },
    { name: "पडसर", code: "OTy" },
  ];
  const [date, setDate] = useState(null);
  const handleNext = () => {
    const nextIndex = (activeIndex + 1) % 12;

    setActiveIndex(nextIndex);
  };

  const handlePrev = () => {
    const nextIndex = (activeIndex - 1) % 12;
    console.log("nextIndex", nextIndex);
    setActiveIndex(nextIndex);
  };
  const adharData = [
    { id: "1", name: "हो" },
    { id: "2", name: "नाही" },
  ];
  const homeDataData = [
    { id: "1", name: "स्वतःचे" },
    { id: "2", name: "भाड्याचे" },
    { id: "3", name: "करार" },
  ];

  const onSubmit = async (data) => {
    var resp;
    setPleaseLoading(true);

    const formData = new FormData();
    const respdata = {
      ...data,
      vahanahanedetails: vahaneSections,
      janavarSections: janavarSections,
      lambi:length,
      rundi:width,
      squarefeet:squareFeet
    };

    console.log("respdata", respdata);
    formData.append("json", JSON.stringify(respdata));
    formData.append("userImage", postImg);

    // formData
    if (isEditMode) {
      resp = await axios.put(
        `https://surveybackend-cjev.onrender.com/api/user/${id}`,
        formData
      );
    } else {
      resp = await axios.post(
        "https://surveybackend-cjev.onrender.com/api/user/create",
        formData
      );
    }
    if (resp.data.responseStatus === "success") {
      router.push("/allusers");
    }
    console.log("data", data);
  };
  const dataFeatchById = async () => {
    // Check if 'id' is present in the URL, indicating edit mode
    if (id) {
      const resp = await axios.get(
        `https://surveybackend-cjev.onrender.com/api/user/${id}`
      );
      // setFormDataList([resp.data.responseData])

      const mainDta = resp.data.responseData;

      setSelectedImage(
        `https://surveybackend-cjev.onrender.com/${resp.data.responseData.userImage}`
      );
      console.log("mainDta", mainDta);
      setIsEditMode(true);
      setSelectedName(resp.data.responseData.name?.name);
      setSelectedFatherName(resp.data.responseData.fathername?.name);
      setSelectedsurname(resp.data.responseData.surname?.name);
      setValue("familynumber", resp.data.responseData.familynumber);
      setValue("borndate", resp.data.responseData.borndate);

      setSelectedDate(new Date(mainDta.borndate));
      setValue("borndate", new Date(mainDta.borndate));
      setValue("motherName", mainDta.motherName);
      setSelectedMotherName(mainDta.motherName);

      setValue("email", resp.data.responseData.email);
      setValue("phone", resp.data.responseData.phone);
      setValue("vaivhaikstiti", mainDta.vaivhaikstiti);
      setSelectedLanguge(mainDta.language);
      setSelectedCountries(mainDta.chand);
      setValue("vaivsayname", mainDta.vaivsayname);
      setSelectedVaivsay(mainDta.vaivsaynamevalue);
      setSelectedVaivsayname(mainDta.vaivsaynamevalue);
      setSelectedAddress(mainDta.addredetails);
      setSelectedFullAddress(resp.data.responseData.fulladdress);
      setValue("daridrareshekahili", mainDta.daridrareshekahili);
      setValue("petname", resp.data.responseData.petname);
      setValue("fatherpetname", resp.data.responseData.fatherpetname);
      setValue("surnamepetname", resp.data.responseData.surnamepetname);
      setValue("mothername", resp.data.responseData.mothername);
      setValue("selectedGender", resp.data.responseData.selectedGender);
      setValue("date", resp.data.responseData.date);
      setValue("address", resp.data.responseData.address);
      setValue("fulladdress", resp.data.responseData.fulladdress);
      setValue("wardno", resp.data.responseData.wardno);
      setSelectedWardNo(resp.data.responseData.wardno);
      setValue("othervillagecome", resp.data.responseData.othervillagecome);
      setValue("farmingrelated", resp.data.responseData.farmingrelated);
      setValue("profitoffarming", resp.data.responseData.profitoffarming);
      setValue("worker", resp.data.responseData.worker);
      setValue("job", resp.data.responseData.job);
      setValue("govjob", resp.data.responseData.govjob);
      setValue("helpingculture", resp.data.responseData.helpingculture);
      setValue("homewoman", resp.data.responseData.homewoman);
      setValue("dharm", resp.data.responseData.dharm);
      setSelectedDharm(resp.data.responseData.dharm);
      setValue("cast", resp.data.responseData.cast);
      setSelectedCast(resp.data.responseData.cast);
      setValue("upjat", resp.data.responseData.upjat);
      setSelectedUpjat(resp.data.responseData.upjat);
      setValue("bloodgroup", resp.data.responseData.bloodgroup);
      setSelectedBloodGroup(resp.data.responseData.bloodgroup);
      setValue("blooddonate", resp.data.responseData.blooddonate);
      setrakdant(resp.data.responseData.blooddonate);
      setValue("vaisan", resp.data.responseData.vaisan);
      setSelectedvaisan(resp.data.responseData.vaisan);
      setValue("ajar", resp.data.responseData.ajar);
      setSelectedAjar(resp.data.responseData.ajar?.name);
      setSelectedAjarName(mainDta.ajarname);
      setValue("familydoctor", resp.data.responseData.familydoctor);
      setSelectedFamilyDoctor(resp.data.responseData?.familydoctor?.name);
      setValue("doctorname", mainDta.doctorname);
      setValue("doctoraddress", mainDta.doctoraddress);
      setValue("padvi", mainDta.padvi);

      setValue("apgatv", resp.data.responseData.apgatv);
      setSelectedApagtav(resp.data.responseData?.apgatv?.name);
      setSelectedPancard(mainDta.pancard?.name);
      setValue("pancardno", mainDta.pancardno);

      setValue("apagatavpramanpatr", resp.data.responseData.apagatavpramanpatr);
      setValue("apagatavtakevari", resp.data.responseData.apagatavtakevari);
      setValue("selectedraktandan", resp.data.responseData.selectedraktandan);
      setValue("adharcard", resp.data.responseData.adharcard);
      setValue("pancard", resp.data.responseData.pancard);
      setValue("passport", resp.data.responseData.passport);

      setSelectedPasspost(resp.data.responseData.passport?.name);
      setValue("passportno", resp.data.responseData.passportno);

      setSelectedPasspost(resp.data.responseData.passport?.name);

      setValue("rashancard", resp.data.responseData?.rashancard);
      setselectedRashankard(resp.data.responseData?.rashancard?.name);
      setVahane("dukandarachename", mainDta.dukandarachename);
      setValue("rashnacardname", resp.data.responseData.rashnacardname);
      setValue("votercard", resp.data.responseData.votercard);
      setselectedVoterCard(resp.data.responseData.votercard);
      setValue("incometax", resp.data.responseData.incometax);
      setValue("homeno", resp.data.responseData.homeno);
      setValue("grampanchayat", resp.data.responseData.grampanchayat);
      setValue("sarkariyognalabh", resp.data.responseData.sarkariyognalabh);
      setValue("rajkiypad", resp.data.responseData.rajkiypad);
      setValue("shauchalay", resp.data.responseData.shauchalay);
      setValue("hometype", resp.data.responseData.hometype);
      setValue("waterconnection", resp.data.responseData.waterconnection);
      setValue("chaviconnection", resp.data.responseData.chaviconnection);
      setValue("panipatti", resp.data.responseData.panipatti);
      setValue("gharphala", resp.data.responseData.gharphala);
      setValue("kaushalya", resp.data.responseData.kaushalya);
      setValue("gyasconnection", resp.data.responseData.gyasconnection);
      setValue("lightconnection", resp.data.responseData.lightconnection);
      setValue("yadinumber", resp.data.responseData.yadinumber);
      setValue("vidhansabha", resp.data.responseData.vidhansabha);
      setValue("jilhaparishad", resp.data.responseData.jilhaparishad);
      setValue("sirialnumber", resp.data.responseData.sirialnumber);
      setValue("lokshabha", resp.data.responseData.lokshabha);
      setValue("talukaparishad", resp.data.responseData.talukaparishad);
      setValue("wardnumber", resp.data.responseData.wardnumber);
      setValue("matdar", resp.data.responseData.matdar);
      setSelectedMatdar(resp.data.responseData.matdar);
      setValue("jamin", resp.data.responseData.jamin);
      setSelectedJamin(resp.data.responseData.jamin);
      setValue("sheti", resp.data.responseData.sheti);
      setSelectedSheti(resp.data.responseData.sheti);
      if (resp.data.responseData?.ghare) {
        setValue("ghare", resp.data.responseData?.ghare[0]);
      }
      setValue("adhikadhik", resp.data.responseData.adhikadhik);
      setValue("samjkarya", resp.data.responseData.samjkarya);
      setSelectedSamajKarya(resp.data.responseData.samjkarya);
      setValue("aarthikvishleshan", resp.data.responseData.aarthikvishleshan);
      setSelectedAarthikVishleshan(mainDta.aarthikvishleshan);
      setValue("rajkiyvishleshan", resp.data.responseData.rajkiyvishleshan);
      setSelectedRajkiyVishleshan(mainDta.rajkiyvishleshan);
      setValue("rajkiypaksh", resp.data.responseData.rajkiypaksh);
      setSelectedRajkiypaksh(resp.data.responseData.rajkiypaksh);
      setSelectedBankKhate(resp.data.responseData.bankkhate);
      setValue("bankkhate", resp.data.responseData.bankkhate);
      setValue("sharedharak", resp.data.responseData.sharedharak);
      setValue("sadharabh", resp.data.responseData.sadharabh);
      setValue("vima", resp.data.responseData.vima);
      setValue("mritvu", resp.data.responseData.mritvu);
      setValue("mritvupramanpatra", resp.data.responseData.mritvupramanpatra);
      setValue("deathdate", resp.data.responseData.deathdate);
      setValue("deathreason", resp.data.responseData.deathreason);
      setValue("name", resp.data.responseData.name);
      setValue("othervisllagecome", resp.data.responseData.othervisllagecome);
      setSelectedOtherVillageCome(resp.data.responseData.othervisllagecome);
      setValue("schoolname", resp.data.responseData.schoolname);
      setSelectedSchoolName(resp.data.responseData.schoolname);
      setValue("mahavidalay", resp.data.responseData.mahavidalay);
      setSelectedMahavidalay(resp.data.responseData.mahavidalay);
      setValue("abyaskarm", resp.data.responseData.abyaskarm);
      setSelectedAbyaskarm(resp.data.responseData.abyaskarm);
      setValue("vibhag", resp.data.responseData.vibhag);
      setSelectedVibhag(resp.data.responseData.vibhag);
      setValue("selectedGender", resp.data.responseData.selectedGender);
      setSelectedKaushalay(mainDta.kaushalay);
      setSelectedDist(mainDta.dist);
      setSelectedTaluka(mainDta.taluka);
      setSelectedPinCode(mainDta.pincode);
      setSelectedVaivsayname(mainDta.vaivsayname);
      setSelectedNokri(mainDta.nokri);
      setrakdant(mainDta.blooddonate?.name);
      setSelectedBloodDonatePlace(mainDta.bllodnodateplace);
      setSelectedvaisan(mainDta.vaisan?.name);
      setSelectedCountries(mainDta.vaisanname);
      setSelectedIncomeTax(mainDta.incometax?.name);
      setValue("incometaxno", mainDta.incometaxno);
      setselectedVoterCard(mainDta.votercard?.name);
      setValue("votercardname", mainDta.votercardname);
      setselectedDrivingLicence(mainDta.drivinglicence?.name);
      setValue("drivinglicencename", mainDta.drivinglicencename);
      setSelectedDrivingLiceneceName(mainDta.drivinglincesname);
      setSelectedYojana(mainDta.sarkariyognalabh?.name);
      setValue("sarkariyognalabh", mainDta.sarkariyognalabh);
      setSelectedSarkariYojna(mainDta.sarkariyojna);
      setValue("sarkariyognalabh", mainDta.sarkariyognalabh);
      setChaviConnection(mainDta.chaviconnection?.name);
      setValue("chaviconnection", mainDta.chaviconnection);
      setSelectedChavi(mainDta.chavi);
      setValue("chavi", mainDta.chavi);
      setGasConnetion(mainDta.gyasconnection?.name);
      setValue("gyasconnection", mainDta.gyasconnection);
      setSelectedGasCompany(mainDta.gascompanyname);
      setValue("gascompanyname", mainDta.gascompanyname);
      setSelectedGasAgency(mainDta.agencyname);
      setValue("agencyname", mainDta.agencyname);
      setValue("vidhantsabhasirialnumber", mainDta.vidhantsabhasirialnumber);
      setValue("vidhansabhayadinumber", mainDta.vidhansabhayadinumber);
      setValue("lokshabhaasirialnumber", mainDta.lokshabhaasirialnumber);
      setValue("lokshabhayadinumber", mainDta.lokshabhayadinumber);
      setValue("jilhaparishad", mainDta.jilhaparishad);
      setValue("jilhaparishadsirialnumber", mainDta.jilhaparishadsirialnumber);
      setValue("jilhaparishadyadinumber", mainDta.jilhaparishadyadinumber);
      setValue("grampanchayatsirialnumber", mainDta.grampanchayatsirialnumber);
      setValue("grampanchayatyadinumber", mainDta.grampanchayatyadinumber);
      setSelectedJanavare(mainDta.Janavare);
      setValue("Janavare", mainDta.Janavare);
      setVahane(mainDta.vahane?.name);
      setValue("vahane", mainDta.vahane);
      setVahaneSections(mainDta.vahanahanedetails);
      setJanavarSections(mainDta.janavarSections);
      setValue("ghare", mainDta.ghare);
      setSelectedSamajKarya(mainDta.samjkarya?.name);
      setValue("samjkarya", mainDta.samjkarya);
      setValue("samajkaryavalue", mainDta.samajkaryavalue);
      setSelectedSmajkaryaName(mainDta.samajkaryavalue);
      setSelectedRajkiypadOption(mainDta.rajkiypad?.name);
      setValue("rajkiypad", mainDta.rajkiypad);
      setSelectedRajkiyPad(mainDta.rajkiyPadName);
      setValue("rajkiyPadName", mainDta.rajkiyPadName);
      setsadharabh(mainDta.sadharabh?.name);
      setValue("sadharabh", mainDta.sadharabh);
      setValue("sandharabhname", mainDta.sandharabhname);
      setValue("sandharabhaddress", mainDta.sandharabhaddress);
      setValue("sandharabhphone", mainDta.sandharabhphone);
      setSelectedBankKhate(mainDta.bankkhate?.name);
      setValue("bankkhate", mainDta.bankkhate);
      setSelectedBankName(mainDta.bankkhatename);
      setValue("bankkhatename", mainDta.bankkhatename);
      setSelectedBankKhateNo(mainDta.bankkhateno);
      setValue("bankkhateno", mainDta.bankkhateno);
      setSelectedShareDharak(mainDta.sharedharak?.name);
      setValue("sharedharak", mainDta.sharedharak);
      setSelectedShareDharakName(mainDta.sharedharakename);
      setValue("sharedharakename", mainDta.sharedharakename);
      setSelectedDeathDate(new Date(mainDta.deathdate));
      setValue("deathdate", new Date(mainDta.deathdate));
      setValue("lambi", Number(mainDta.lambi));
      setLength(Number(mainDta.lambi))
      setValue("rundi", Number(mainDta.rundi));
      setWidth(Number(mainDta.rundi))
      setSquareFeet(Number(mainDta.squarefeet));
      setValue("gatarselected", mainDta.gatarselected);
      setSelectedRoadGatarname(mainDta.gatarselected);
      setValue("rastyacheprakar", mainDta.rastyacheprakar);
      setSelectedRoadTypename(mainDta.rastyacheprakar);
    } else {
      // Clear form data if not in edit mode
      // setFormData({ /* initial form data */ });
      setIsEditMode(false);
    }
  };

  console.log("vahaneSections", vahaneSections);

  const व्यवसायdata = [
    { id: 1, name: "शेतीविषयक" },
    { id: 2, name: "उत्पादनविषयक" },
    { id: 3, name: "कामगार" },
    { id: 4, name: "नोकरी" },
    { id: 5, name: "सरकारी नोकर" },
    { id: 6, name: "सेवानिवृत्त" },
    { id: 7, name: "घरीच असणारी महिला" },
  ];
  useEffect(() => {
    if (id) {
      dataFeatchById();
    }
  }, [id]);

  const rashandata = [
    { id: 1, name: "केसरी" },
    { id: 2, name: "पिवळा" },
    { id: 3, name: "पांढरा" },
  ];

  const [filteredCountries, setFilteredCountries] = useState(null);

  const search = (event, list) => {
    // Timeout to emulate a network connection
    setTimeout(() => {
      let _filteredCountries;

      if (!event.query.trim().length) {
        _filteredCountries = [...list];
      } else {
        _filteredCountries = list.filter((country) => {
          return country?.name
            ?.toLowerCase()
            .startsWith(event.query.toLowerCase());
        });
      }

      setFilteredCountries(_filteredCountries);
    }, 250);
  };

  const getFilteredObject = () => {
    let data = {};
    let filterObj = {};
    // Object.keys(filterObjData).forEach((field) => {
    //     if (filterObjData[field]) {
    //         filterObj[field] = filterObjData[field];
    //     }
    // });

    data.filters = filterObj;

    return data;
  };
  const vaisanData = [];

  const apiListFetch = async () => {
    try {
      const resp = await axios.post(
        "https://surveybackend-cjev.onrender.com/api/user/filter",
        getFilteredObject()
      );

      if (resp.data.responseStatus === "success") {
        const data = resp.data.responseData;
        const stateMapping = {
          addredetails: setAddressList,
          name: setName,
          fathername: setFatherName,
          surname: setSurName,
          fulladdress: setFULLAddressList,
          wardno: setWardNo,
          language: setSelectedLangugeList,
          chand: setChandList,
          vaisanname: setVaisanList,
          sarkariyojna: setSrakariYoujnaList,
          samajkarya: setsamajkaryaList,
          rajkiyPadName: setrajkiyPadNameList,
          bankkhatename: setbankkhatenameList,
          sharedharakename: setsharedharakenameList,
          Janavare: setSelectedJanavareList,
          aarthikvishleshan: setAarthikVishleshan,
          abyaskarm: setAbyaskarm,
          agencyname: setSelectedGasAgencyList,
          ajarname: setAjarName,
          bankkhateno: setBankKhateno,
          bllodnodateplace: setBloodDonatePlace,
          chavi: setSelectedChaviList,
          drivinglincesname: setSelectedDrivingLiceneceNameList,
          gascompanyname: setSelectedGasCompanyList,
          kaushalay: setSelectedKaushalayList,
          nokri: setSelectedNokriList,
          panyachaprakar: setSelectedPanyachaprakarList,
          sarkariyognalabh: setSrakariYoujnaList,
          mothername: setMotherName,
          dist: setDistName,
        };
        Object.keys(stateMapping).forEach((property) => {
          const dataArray = data.map((elm) => elm[property]);

          stateMapping[property](dataArray.flat());
        });
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const dynamicid = useId();

  const handleCreate = (event, list, setlist, valuename) => {
    const newLabel = event.query.trim();

    if (newLabel && !list?.some((item) => item?.name === newLabel)) {
      const newItem = { name: newLabel, code: dynamicid };
      setlist((prevData) => [...prevData, newItem]);
      setValue(valuename, newItem);
      // setSelectedCountries(newItem)
    }
  };

  const handleSingleCreate = (event, list, setlist, valuename) => {
    const newLabel = event.query.trim();

    if (newLabel && !list?.some((item) => item?.name === newLabel)) {
      const newItem = { name: newLabel, code: dynamicid };
      setlist((prevData) => [...prevData, newItem]);
      setValue(valuename, newItem);
      // setSelectedCountries(newItem)
    }
  };

  console.log("addressList", addressList);

  useEffect(() => {
    apiListFetch();
  }, []);

  const [selectedDate, setSelectedDate] = useState(null);

  const calculateAge = () => {
    if (selectedDate) {
      const today = new Date();
      const birthDate = new Date(selectedDate);

      const years = differenceInYears(today, birthDate);
      const months = differenceInMonths(today, birthDate) % 12;
      const days = differenceInDays(today, birthDate);

      return { years, months, days };
    }

    return null;
  };

  const calculateDeathAge = () => {
    if (selectedDeathDate) {
      const today = new Date();
      const birthDate = new Date(selectedDeathDate);

      const years = differenceInYears(today, birthDate);
      const months = differenceInMonths(today, birthDate) % 12;
      const days = differenceInDays(today, birthDate);

      return { years, months, days };
    }

    return null;
  };
  const handleImageChange = (event) => {
    const image = event.target.files[0];
    console.log("image", image);
    setSelectedImage(URL.createObjectURL(image));
    setPostImg(event.target.files[0]);
  };

  const handleAddMore = () => {
    // Add a new section to the array
    setVahaneSections([...vahaneSections, {}]);
  };

  const handleAddMoreJanavar = () => {
    setJanavarSections([...janavarSections, {}]);
  };
  const handleChange = (index, field, value) => {
    // Update the corresponding section in the array
    const updatedSections = [...vahaneSections];
    updatedSections[index][field] = value;
    setVahaneSections(updatedSections);
  };
  const calculateAnimalDetails = (birthDate) => {
    const today = new Date();
    const birthDateObj = new Date(birthDate);

    let age = today.getFullYear() - birthDateObj.getFullYear();
    const monthDiff = today.getMonth() - birthDateObj.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDateObj.getDate())
    ) {
      age--;
    }

    let months;
    if (monthDiff < 0) {
      months = 12 - birthDateObj.getMonth() + today.getMonth();
    } else {
      months = today.getMonth() - birthDateObj.getMonth();
    }

    const oneDay = 24 * 60 * 60 * 1000;
    const diffDays = Math.round(
      Math.abs((today.getTime() - birthDateObj.getTime()) / oneDay)
    );

    return `${age} वर्षे, ${months} महिने, ${diffDays} दिवस`;
  };
  const handleAnimalChangeChange = (index, field, value) => {
    const updatedSections = [...janavarSections];

    if (field === "animalboardate") {
      const animalAge = calculateAnimalDetails(value);
      updatedSections[index] = {
        ...updatedSections[index],
        [field]: value,
        animalage: animalAge,
      };
    } else {
      updatedSections[index][field] = value;
    }

    setJanavarSections(updatedSections);
  };
  const handleRemove = (index) => {
    // Remove the section at the specified index
    const updatedSections = [...vahaneSections];
    updatedSections.splice(index, 1);
    setVahaneSections(updatedSections);
  };

  const handleRemoveJanavare = (index) => {
    // Remove the section at the specified index
    const updatedSections = [...janavarSections];
    updatedSections.splice(index, 1);
    setJanavarSections(updatedSections);
  };

  const [length, setLength] = useState(0);
  const [width, setWidth] = useState(0);
  const [squareFeet, setSquareFeet] = useState(0);

  const calculateSquareFeet = () => {
    const area = length * width;
    setSquareFeet(area);
  };

  return (
    <>
      <Layout pageTitle="Add User">
        <div className="bg-white border border-[#EAEDF3] rounded-[8px] overflow-hidden">
          <div className="px-[20px] xl:px-[1.042vw] py-[14px] xl:py-[0.729vw] border-b border-[#EAEDF3]">
            <div className="md:flex items-center gap-2 justify-between border-b py-3">
              <div className="flex items-center gap-4">
                <div className="text-[#101828] text-[16px] xl:text-[1.2vw] font-medium">
                  Add User
                </div>
              </div>
              <div className="md:flex items-center md:space-x-[24px] xl:space-x-[1.250vw] mt-3 md:mt-0">
                <div className="flex gap-2">
                  <Link
                    href="/allusers"
                    className="cursor-pointer bg-[#696cff] flex items-center gap-2 rounded-[8px] text-[#fff]  text-[14px] xl:text-[0.929vw] py-[10px] xl:py-[0.521vw] px-[16px] xl:px-[0.833vw]"
                  >
                    <i className="pi pi-arrow-left text-[16px] xl:text-[0.833vw]"></i>
                    Back
                  </Link>
                </div>
              </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="custom_tab mt-5">
                <TabView
                  activeIndex={activeIndex}
                  onTabChange={(e) => setActiveIndex(e.index)}
                >
                  <TabPanel header="वैयक्तिक माहिती">
                    <div className="grid lg:grid-cols-12 xl:gap-[0.250vw] gap-5 divide-x-2">
                      <div className="col-span-2">
                        <div className=" flex gap-5">
                          <div className="  text-center">
                            <div className="upload-img">
                              {selectedImage === null ? (
                                <img
                                  src={`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAADSCAMAAABD772dAAAATlBMVEX29vaZmZn6+vqUlJSTk5P7+/v09PTu7u6dnZ24uLjc3NzV1dWnp6eamprIyMjOzs7j4+OioqK+vr65ubmurq7o6OjS0tKxsbHKysqNjY0uMKM1AAAKDElEQVR4nO1d6dKiOhD9SNhERUAU7/u/6GWRTdac7gac8vyZqZkq6GMnvSf8/f3www8//PDDDz/88MO3QTVwvQrtv+wtGy/eJIPnK8xOse/7ll0h/6ufZuHrFUTeP8I7J+G40S1JY0uXsIao/iO+JLfA+2rWhezRLYu1PcpzhLit/fRVst5bdnPkig3Cy3Ud1Q99X5LAc76JdK6hxy21bGOyXdJh9PclnPN1nMTmmh2Qtq/34PiclfNIYly1n5z9gvPenKahlHe7cLFtOCePg6pZqehksbKtOafnA6pZ/T3ZlvKQsx96x6KsvNCXYltR1qeHcxjOyk0k1vIn5TQ6xmZWXkJ3Qqtgp5GzN9tttNtAZ96+lJX72ki7NezTjuZLqbOsqRqDtsK9nJTzuNhb0y0px8EejNVfsrl2a9jZ9utaBfFufAsfddvWRSn3tMtqbmFftlSyE21vrAbIlbwR3Xz37qzeCna6jZKVd9lfvSW0FWwQhqjzQegWsBNxHav7IZZzDS1su46znGtoPxJkrKLr3gSHsOWstfM8mHor2ImQ6VLhobZvC30RSSccJu9btZKKXtpkt8n4kSKmK6XX1nP4WfJ6BUEQua6X//F63dMrnbX2+RlTzbO24/vzUfSMmo5w9RdHeUFIacyU8B/MjGl8tc5uM03Bon0cJD6Js+ZNkil8tU6f7mI2l5MO7pS1zcqYwFfb97W9EqW8kFARZGSM89WWWc9A/YVX+GU2F2MC37ux9VRuiCuZx1bDfPUFKpznATvq8a8MjFUG8w3BupNSN/SdV5fKWN3Bd5PSGPUAa0h5lEnk+wJXl05J8a36AxeWTkkqVgHKl1yKQCsN+k54s3qA69m+0TM29QJ1/MIZe2C+z8G3SL9BHcPuWIEOiYdvzhhMwFHn5IDNIy6++S+OSaAvEGHUYJGsxqcMWBKuoaKPt5Mn7MH1ISHss/mPri7Qq/INxElYRaCfMJbCAUN4Dfy2s4xB53QxXNQqAjcwe8kUXGm2qTeOodfkwTszXzj40UZFLtAfWPrJXy5FZTHxTeoBhtCYA1yAi8mSZ6frCYML2hZpbMFB9WpLjb7BymSaPKCKrdWZIhhyCCm4aGqBMe5KF+mgRR2RHVzABbM2f9XT8aSfOeboiIQ6jXVlCNBiWVchungYtMpuqfNuVZ0ZoUAl6BVmFMxP5ExWSRj1G/ZivIVaxNxCSI7ToMW1ZRWjBlF0RePJ6mKBC1cwWydrXC54VnnBV6JBTQ72PKlHOJBRBK5guajjDViw+V2Mmmij3ASBg27iWe+h8Mkz5hGLoWj4gYMZFaP+PYfNWrsbEY2gi0nRcMuQP1V6chmtScztNieF+RpXCY2B5qwF48lnEmYLhXL/DmB7OpnGEeyCuJEuui6wcJMuE/8NBXPhhnBGkG40hYAT//KR4qfjCDHRRJxP+QkPTni81kMIo4u8U5gvnhKX4o3og+DZLfm4gxYkWPo0JExxwocnbFnDBxIc+xcQHnoR2oo+PuHBmlanf5rw0E6TbPQXEP7MiuFS97cQ/ox9KXH0VxC24n524xDi6I0IE4/xfkhIyQwLHDy0tD4dE/kU9BcQ7g0IUrfwFxC24h5huAhaEyYMKa8kTEnmSnQ3sUd92AYVD7JOOouQ6oVzpAeuab0Jd3RCyjUrxOJVS7pOOoTRszottPCShsdqW1w7hKnLZYPOA3x2a1RE+mF38d4SLZvri8hgs+S7h3jbqxGxuf+C5bYZ2omwRdBtVqdYSw5iCqybekNBzZVKNP0vcmBZQIsWanl1gnfXO5CYDe8Q5hCxGUMh9MFbjJV++UCrqdYiRu+nEetZNSRvPWK5xEvXdS10zG3icRKEyalSKeHbL3G4YUt4FI9DwMbMMISpJWIxwqRObotaJQxhavU87utwGjj0uLIU8MRMWGxNM1lVK3sT5nDqBaQGiNkuWnxvOoZEpIJUxkSZZ+mBnfBJpuzBEnUUuDATNjgLZgK2LVcH04yEZZJitrslbZeZsMiUOLFV3wU/YZHjtCyJUgkBDfN7JqYoq4QAYX4VsyTrbwgQZq/0MGU2FSQIc6uYLegoIEGYWcWcO1jADxfgvaue0URbApFWBcZwCz7qOo6YOVuqwBlRw0ddxxHz5sM1+IpbDF3NHup8mPticK5aD6/F6lQ8OF1d+WCmgQ/4aO+UXIkQYaY0Ebw9bEasG2tduguOo6boBVfTaAhz1chaMHyKgKt43JWqtqYsvaU+6CVb7g1sdRqcvOFMhZjIl30DF2i6hwIfAyPefYheMTmLRgnMoVYF5OLBVr/MHrhCOwHAMU8wAGUbC2zgXmcEP4w8hxiu6MH3Pc2ik6orEcI6A1XMnCM18rSNEQkzbeEhpsiCbuodJWHmrKQGNtkjYkOtXkWVO0FsAIWY/IFfhe4Ok7Fa4KW4Qgru9YGEdg2kYoFAt0SvmStktaCD1Py52xvdnFVqGQGXIWxjT2RiLQtpoEoE9qUk/QkU9ziEWWbQRiTprzXOllXvNcaVADHC/UBXahObGy2pIOjjsiD+Ql4F8zoAe9G4wnBv8db430ACD5kgaLDUuBtM1VuQsoeIJMOmpoRjQj8qKlDOGhuLZH+HBRd5MvZVPdLvUifeN1gh/jUv50n4GuAoRm5GZq2b2b7Z1/8Gwrgn4qc9+xgf9OXKmLROA/DzcB3KjxPLh2srjN5tyeTx7Tj0HI7uofNI2Bb2aAOXo5mj7SwiK7eVyLvFLCt7IqInZ95aJzzKbUVSEYeaJ9q3xHPipp8pXcvZPV+ou3nqDkpKjqivBDe0QNnxXjHpOrepgAA/PCJIt+KsggzfzZMTr/BHlrQs3VK23GiDK3umHwANNmorkdi7Q+GU+8IM2HSPC4m27GwTupV87jk2lnD2OJWxZwI/MQxDqbOp/Zrt9xj27XRMjyFNUVA2EXKhh2miYm09N6dbymik5YWGnsGpN52Im+ZJKdV57QeZF5vUa1Vsp49NN++nmG64zkktdmzX7WLtB3vSLQV112R3K24mWKNiWz7QWAEVLa/rFVOfy1nizqu5hVpsH6z60OZSuKVvu9jmUajH/Deh/VWDRLOVcJ1uF1itgJqduV3Z2Zob+7PDY6zmFnM7ee1o/uTRCu0L3tWBQrlThfvVHzWbck06PYJxHkIlo/IaXJYzPrtri34kjAL1HGVsMPo4dupeP4+2fVs45xH9mHR6RiZLJK/aoUNFA3nNJj2HzvjQfMfiJcOTNZ+L+uB8B5bWuBX/YQcOzzffx7eOxMABSNUZ0pb/1g4HuhNe62LKPtrwQx8uvBpHO0AJWdjGDGj5m4V5oOoxTfCcmKo3hfiF91x4d8fwswdlTUH2/kZmxOgGrlBuCrmb3/hRziJpQgLrSX91lhsqpgmcG65vUnARfvxH24HqyXpLhTxcakp3nPrVSnybvD/88IMZ/gc/xJUG2hsLgwAAAABJRU5ErkJggg==`}
                                  alt="name"
                                  className=" rounded-full mx-auto"
                                />
                              ) : (
                                <img
                                  src={`${selectedImage}`}
                                  alt="name"
                                  className=" rounded-full mx-auto"
                                />
                              )}
                            </div>
                            <div className="mt-3">
                              <input
                                type="file"
                                id="image"
                                name="postImg"
                                accept="image/*"
                                className="absolute opacity-0 pointer"
                                onChange={handleImageChange}
                              />
                              <Link href="" className="btn-outline mt-3">
                                उपलोड फोटो
                              </Link>
                            </div>
                          </div>
                          <label className="block label-text w-[120px] pr-2">
                            <span className="block mb-1">कुटुंब नं.</span>
                            <Controller
                              render={({ field }) => (
                                <InputText
                                  placeholder=""
                                  {...field}
                                  className="w-full"
                                />
                              )}
                              name="familynumber"
                              control={control}
                              rules={{ required: "This field is required" }}
                            />
                          </label>
                        </div>
                      </div>
                      <div className="col-span-10">
                        <div className="grid lg:grid-cols-12 xl:gap-[1.250vw] gap-5 pl-5">
                          <div className="col-span-4 ">
                            <label className="block label-text">
                              <span className="block mb-1">नाव</span>
                              {/* <Controller
                    render={({ field }) => (
                      <InputText placeholder="" {...field} className="w-full" />
                    )}
                    name="name"
                    control={control}
                    rules={{ required: 'This field is required' }}
                  /> */}
                              <Controller
                                render={({ field }) => (
                                  <AutoComplete
                                    field="name"
                                    value={selectedname}
                                    suggestions={filteredCountries}
                                    completeMethod={(e) => {
                                      search(e, name),
                                        handleSingleCreate(
                                          e,
                                          name,
                                          setName,
                                          "name"
                                        );
                                    }}
                                    onChange={(e) => {
                                      setSelectedName(e.value),
                                        setValue("name", e.value);
                                    }}
                                  />
                                )}
                                name="name"
                                control={control}
                              />
                            </label>
                          </div>
                          <div className="col-span-4 ">
                            <label className="block label-text">
                              <span className="block mb-1">
                                वडिलांचे व पतीचे नाव{" "}
                              </span>
                              {/* <Controller
                    render={({ field }) => (
                      <InputText placeholder="" {...field} className="w-full" />
                    )}
                    name="fathername"
                    control={control}
                    rules={{ required: 'This field is required' }}
                  /> */}
                              <Controller
                                render={({ field }) => (
                                  <AutoComplete
                                    field="name"
                                    value={selectedfathername}
                                    suggestions={filteredCountries}
                                    completeMethod={(e) => {
                                      search(e, fathername),
                                        handleSingleCreate(
                                          e,
                                          fathername,
                                          setFatherName,
                                          "fathername"
                                        );
                                    }}
                                    onChange={(e) => {
                                      setSelectedFatherName(e.value),
                                        setValue("fathername", e.value);
                                    }}
                                  />
                                )}
                                name="name"
                                control={control}
                              />
                            </label>
                          </div>

                          <div className="col-span-4 ">
                            <label className="block label-text">
                              <span className="block mb-1">आडनाव </span>
                              {/* <Controller
                    render={({ field }) => (
                      <InputText placeholder="" {...field} className="w-full" />
                    )}
                    name="surname"
                    control={control}
                    rules={{ required: 'This field is required' }}
                  /> */}

                              <Controller
                                render={({ field }) => (
                                  <AutoComplete
                                    field="name"
                                    value={selectedsurname}
                                    suggestions={filteredCountries}
                                    completeMethod={(e) => {
                                      search(e, surname),
                                        handleSingleCreate(
                                          e,
                                          surname,
                                          setSurName,
                                          "surname"
                                        );
                                    }}
                                    onChange={(e) => {
                                      setSelectedsurname(e.value),
                                        setValue("surname", e.value);
                                    }}
                                  />
                                )}
                                name="name"
                                control={control}
                              />
                            </label>
                          </div>
                        </div>
                        <div className="grid lg:grid-cols-12 xl:gap-[0.800vw] gap-5 pl-5 mt-3">
                          <div className="col-span-4 ">
                            <label className="block label-text">
                              <span className="block mb-1">टोपण नाव </span>
                              <Controller
                                render={({ field }) => (
                                  <InputText
                                    placeholder=""
                                    {...field}
                                    className="w-full"
                                  />
                                )}
                                name="petname"
                                control={control}
                                rules={{ required: "This field is required" }}
                              />
                            </label>
                          </div>
                          <div className="col-span-4 ">
                            <label className="block label-text">
                              <span className="block mb-1">
                                वडिलांचे टोपण नाव{" "}
                              </span>
                              <Controller
                                render={({ field }) => (
                                  <InputText
                                    placeholder=""
                                    {...field}
                                    className="w-full"
                                  />
                                )}
                                name="fatherpetname"
                                control={control}
                                rules={{ required: "This field is required" }}
                              />
                            </label>
                          </div>
                          <div className="col-span-4 ">
                            <label className="block label-text">
                              <span className="block mb-1">आडनाव टोपण </span>
                              <Controller
                                render={({ field }) => (
                                  <InputText
                                    placeholder=""
                                    {...field}
                                    className="w-full"
                                  />
                                )}
                                name="surnamepetname"
                                control={control}
                                rules={{ required: "This field is required" }}
                              />
                            </label>
                          </div>
                          <div className="col-span-4 ">
                            <label className="block label-text">
                              <span className="block mb-1">आईचे नाव</span>
                              <Controller
                                render={({ field }) => (
                                  <InputText
                                    placeholder=""
                                    {...field}
                                    className="w-full"
                                  />
                                )}
                                name="mothername"
                                control={control}
                                rules={{ required: "This field is required" }}
                              />
                            </label>
                          </div>
                          <div className="col-span-4 ">
                            <label className="block label-text">
                              <span className="block mb-1">आईचे टोपण नाव</span>
                              {/* <Controller
                    render={({ field }) => (
                      <InputText placeholder="" {...field} className="w-full" />
                    )}
                    name="fathername"
                    control={control}
                    rules={{ required: 'This field is required' }}
                  /> */}
                              <Controller
                                render={({ field }) => (
                                  <AutoComplete
                                    field="name"
                                    value={selectedmothername}
                                    suggestions={filteredCountries}
                                    completeMethod={(e) => {
                                      search(e, mothername),
                                        handleSingleCreate(
                                          e,
                                          mothername,
                                          setMotherName,
                                          "motherName"
                                        );
                                    }}
                                    onChange={(e) => {
                                      setSelectedMotherName(e.value),
                                        setValue("motherName", e.value);
                                    }}
                                  />
                                )}
                                name="motherName"
                                control={control}
                              />
                            </label>
                          </div>
                          <div className="col-span-4 ">
                            <label className="block label-text">
                              <span className="block mb-1">लिंग</span>
                              <Controller
                                render={({ field }) => (
                                  <Dropdown
                                    {...field}
                                    options={gender}
                                    optionLabel="name"
                                    placeholder="पर्याय निवडा"
                                    filter
                                    className="w-full"
                                    onChange={(e) => {
                                      setValue("selectedGender", e.value);
                                    }}
                                  />
                                )}
                                name="selectedGender"
                                control={control}
                              />
                            </label>
                          </div>
                          <div className="col-span-4 ">
                            <label className="block label-text">
                              <span className="block mb-1">ईमेल आयडी</span>
                              <Controller
                                render={({ field }) => (
                                  <InputText
                                    placeholder=""
                                    {...field}
                                    className="w-full"
                                  />
                                )}
                                name="email"
                                control={control}
                                rules={{ required: "This field is required" }}
                              />
                            </label>
                          </div>
                          <div className="col-span-4 ">
                            <label className="block label-text">
                              <span className="block mb-1">फोन नं.</span>
                              <Controller
                                render={({ field }) => (
                                  <InputText
                                    placeholder=""
                                    {...field}
                                    className="w-full"
                                  />
                                )}
                                name="phone"
                                control={control}
                                rules={{ required: "This field is required" }}
                              />
                            </label>
                          </div>
                          <div className="col-span-2 ">
                            <label className="block label-text">
                              <span className="block mb-1">जन्मदिनांक</span>
                              <Controller
                                render={({ field }) => (
                                  <Calendar
                                    {...field}
                                    className="w-full"
                                    onChange={(e) => {
                                      setValue("borndate", e.value);
                                      setSelectedDate(e.value);
                                    }}
                                  />
                                )}
                                name="borndate"
                                control={control}
                              />
                            </label>
                          </div>
                          <div className="col-span-2 ">
                            <label className="block label-text">
                              <span className="block mb-1">या वर्षी वय</span>

                              <div className="text-[16px] font-semibold">
                                {selectedDate && (
                                  <p>
                                    {calculateAge()?.years && (
                                      <span className="text-[14px] mr-2">
                                        {" "}
                                        {calculateAge().years} वर्ष
                                      </span>
                                    )}
                                    {calculateAge()?.months && (
                                      <span className="text-[14px]">
                                        {" "}
                                        - {calculateAge().months} महिने
                                      </span>
                                    )}
                                    {calculateAge()?.days &&
                                    calculateAge().days < 28 ? (
                                      <span className="text-[14px]">
                                        {" "}
                                        - {calculateAge().days} days
                                      </span>
                                    ) : null}
                                  </p>
                                )}
                              </div>
                            </label>
                          </div>

                          <div className="col-span-4 ">
                            <label className="block label-text">
                              <span className="block mb-1">
                                माहीत असणारी/येणारी भाषा{" "}
                              </span>
                              <Controller
                                render={({ field }) => (
                                  <AutoComplete
                                    field="name"
                                    multiple
                                    value={selectedLanguage}
                                    suggestions={filteredCountries}
                                    completeMethod={(e) => {
                                      search(e, selectedLnaguageList),
                                        handleCreate(
                                          e,
                                          selectedLnaguageList,
                                          setSelectedLangugeList,
                                          "language"
                                        );
                                    }}
                                    onChange={(e) => {
                                      setSelectedLanguge(e.value),
                                        setValue("language", e.value);
                                    }}
                                  />
                                )}
                                name="sarkariyojna"
                                control={control}
                              />
                            </label>
                          </div>

                          <div className="col-span-4 ">
                            <label className="block label-text">
                              <span className="block mb-1">कौशल्य</span>
                              <Controller
                                render={({ field }) => (
                                  <AutoComplete
                                    field="name"
                                    multiple
                                    value={selectedKaushal}
                                    suggestions={filteredCountries}
                                    completeMethod={(e) => {
                                      search(e, selectedKaushalList),
                                        handleCreate(
                                          e,
                                          selectedKaushalList,
                                          setSelectedKaushalayList,
                                          "kaushalay"
                                        );
                                    }}
                                    onChange={(e) => {
                                      setSelectedKaushalay(e.value),
                                        setValue("kaushalay", e.value);
                                    }}
                                  />
                                )}
                                name="kaushalay"
                                control={control}
                              />
                            </label>
                          </div>

                          <div className="col-span-4 ">
                            <label className="block label-text">
                              <span className="block mb-1">वैवाहिक स्थिती</span>
                              <Controller
                                render={({ field }) => (
                                  <Dropdown
                                    {...field}
                                    options={mariatelStatus}
                                    optionLabel="name"
                                    placeholder="पर्याय निवडा"
                                    filter
                                    className="w-full"
                                    onChange={(e) => {
                                      setValue("vaivhaikstiti", e.value);
                                    }}
                                  />
                                )}
                                name="vaivhaikstiti"
                                control={control}
                              />
                            </label>
                          </div>
                          <div className="col-span-4 ">
                            <label className="block label-text">
                              <span className="block mb-1">
                                दारिद्र्यरेषेखालील
                              </span>
                              <Controller
                                render={({ field }) => (
                                  <Dropdown
                                    {...field}
                                    options={adharData}
                                    optionLabel="name"
                                    placeholder="पर्याय निवडा"
                                    filter
                                    className="w-full"
                                    onChange={(e) => {
                                      setValue("daridrareshekahili", e.value);
                                    }}
                                  />
                                )}
                                name="daridrareshekahili"
                                control={control}
                              />
                            </label>
                          </div>

                          <div className="col-span-4 ">
                            <label className="block label-text">
                              <span className="block mb-1">छंद</span>
                              <Controller
                                render={({ field }) => (
                                  <AutoComplete
                                    field="name"
                                    multiple
                                    value={selectedCountries}
                                    suggestions={filteredCountries}
                                    completeMethod={(e) => {
                                      search(e, chandList),
                                        handleCreate(
                                          e,
                                          chandList,
                                          setChandList,
                                          "chand"
                                        );
                                    }}
                                    onChange={(e) => {
                                      setSelectedCountries(e.value),
                                        setValue("chand", e.value);
                                    }}
                                  />
                                )}
                                name="chand"
                                control={control}
                              />
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel header="संपूर्ण पत्ता">
                    <div className="grid lg:grid-cols-12 xl:gap-[0.250vw] gap-5 divide-x-2">
                      <div className="col-span-12">
                        <div className="grid lg:grid-cols-12 xl:gap-[1.250vw] gap-5">
                          <div className="col-span-4 ">
                            <label className="block label-text">
                              <span className="block mb-1">जिल्हा </span>
                              {/* <Controller
                    render={({ field }) => (
                      <InputText placeholder="" {...field} className="w-full" />
                    )}
                    name="fulladdress"
                    control={control}
                    rules={{ required: 'This field is required' }}
                  /> */}
                              <Controller
                                render={({ field }) => (
                                  <AutoComplete
                                    field="name"
                                    value={selectedDist}
                                    suggestions={filteredCountries}
                                    completeMethod={(e) => {
                                      search(e, distname),
                                        handleSingleCreate(
                                          e,
                                          distname,
                                          setDistName,
                                          "dist"
                                        );
                                    }}
                                    onChange={(e) => {
                                      setSelectedDist(e.value),
                                        setValue("dist", e.value);
                                    }}
                                  />
                                )}
                                name="dist"
                                control={control}
                              />
                            </label>
                          </div>

                          <div className="col-span-4 ">
                            <label className="block label-text">
                              <span className="block mb-1">तालुका </span>
                              {/* <Controller
                    render={({ field }) => (
                      <InputText placeholder="" {...field} className="w-full" />
                    )}
                    name="fulladdress"
                    control={control}
                    rules={{ required: 'This field is required' }}
                  /> */}
                              <Controller
                                render={({ field }) => (
                                  <AutoComplete
                                    field="name"
                                    value={selectedTaluka}
                                    suggestions={filteredCountries}
                                    completeMethod={(e) => {
                                      search(e, talukanameList),
                                        handleSingleCreate(
                                          e,
                                          talukanameList,
                                          setTalukaNameList,
                                          "taluka"
                                        );
                                    }}
                                    onChange={(e) => {
                                      setSelectedTaluka(e.value),
                                        setValue("taluka", e.value);
                                    }}
                                  />
                                )}
                                name="taluka"
                                control={control}
                              />
                            </label>
                          </div>
                          <div className="col-span-4 ">
                            <label className="block label-text">
                              <span className="block mb-1">पत्ता </span>
                              {/* <Controller
                    render={({ field }) => (
                      <InputText placeholder="" {...field} className="w-full" />
                    )}
                    name="fulladdress"
                    control={control}
                    rules={{ required: 'This field is required' }}
                  /> */}
                              <Controller
                                render={({ field }) => (
                                  <AutoComplete
                                    field="name"
                                    value={selectedAddress}
                                    suggestions={filteredCountries}
                                    completeMethod={(e) => {
                                      search(e, addressList),
                                        handleSingleCreate(
                                          e,
                                          fulladdressList,
                                          setAddressList,
                                          "addredetails"
                                        );
                                    }}
                                    onChange={(e) => {
                                      setSelectedAddress(e.value),
                                        setValue("addredetails", e.value);
                                    }}
                                  />
                                )}
                                name="addredetails"
                                control={control}
                              />
                            </label>
                          </div>

                          <div className="col-span-4 ">
                            <label className="block label-text">
                              <span className="block mb-1">
                                रस्त्याचे प्रकार
                              </span>
                              <Controller
                                render={({ field }) => (
                                  <AutoComplete
                                    field="name"
                                    multiple
                                    value={selectedRoadTypename}
                                    suggestions={filteredCountries}
                                    completeMethod={(e) => {
                                      search(e, selectedRoadTypeList),
                                        handleCreate(
                                          e,
                                          selectedRoadTypeList,
                                          setRoadTypeList,
                                          "rastyacheprakar"
                                        );
                                    }}
                                    onChange={(e) => {
                                      setSelectedRoadTypename(e.value),
                                        setValue("rastyacheprakar", e.value);
                                    }}
                                  />
                                )}
                                name="rastyacheprakar"
                                control={control}
                              />
                            </label>
                          </div>

                          <div className="col-span-4 ">
                            <label className="block label-text">
                              <span className="block mb-1">
                                गटारांचे प्रकार
                              </span>
                              <Controller
                                render={({ field }) => (
                                  <AutoComplete
                                    field="name"
                                    multiple
                                    value={selectedGatarname}
                                    suggestions={filteredCountries}
                                    completeMethod={(e) => {
                                      search(e, selectedGatarList),
                                        handleCreate(
                                          e,
                                          selectedGatarList,
                                          setGatarList,
                                          "gatarselected"
                                        );
                                    }}
                                    onChange={(e) => {
                                      setSelectedRoadGatarname(e.value),
                                        setValue("gatarselected", e.value);
                                    }}
                                  />
                                )}
                                name="gatarselected"
                                control={control}
                              />
                            </label>
                          </div>

                          <div className="col-span-4 ">
                            <label className="block label-text">
                              <span className="block mb-1"> पिन कोड: </span>
                              {/* <Controller
                    render={({ field }) => (
                      <InputText placeholder="" {...field} className="w-full" />
                    )}
                    name="fulladdress"
                    control={control}
                    rules={{ required: 'This field is required' }}
                  /> */}
                              <Controller
                                render={({ field }) => (
                                  <AutoComplete
                                    field="name"
                                    value={selectedPinCode}
                                    suggestions={filteredCountries}
                                    completeMethod={(e) => {
                                      search(e, pinCodeList),
                                        handleSingleCreate(
                                          e,
                                          pinCodeList,
                                          setPinCodeList,
                                          "pincode"
                                        );
                                    }}
                                    onChange={(e) => {
                                      setSelectedPinCode(e.value),
                                        setValue("pincode", e.value);
                                    }}
                                  />
                                )}
                                name="pincode"
                                control={control}
                              />
                            </label>
                          </div>

                          <div className="col-span-4 ">
                            <label className="block label-text">
                              <span className="block mb-1">लांबी </span>
                              <Controller
                                render={({ field }) => (
                                  <InputNumber
                                    placeholder=""
                                    {...field}
                                    className="w-full"
                                    value={length}
                                    onChange={(e) => {
                                      setLength(parseFloat(e.value));
                                      calculateSquareFeet();
                                    }}
                                  />
                                )}
                                name="lambi"
                                control={control}
                                // rules={{ required: "This field is required" }}
                              />

                               {/* <Controller
                      render={({ field }) => (
                        <InputText   value={length}   onChange={(e) => {
                          setLength(parseFloat(e.value));
                          calculateSquareFeet();
                        }} placeholder="" {...field} className="w-full" />
                      )}
                      name="lambi"
                      control={control}
                    /> */}
                            </label>
                          </div>

                          <div className="col-span-4 ">
                            <label className="block label-text">
                              <span className="block mb-1">रुंदी </span>
                              <Controller
                                render={({ field }) => (
                                  <InputNumber
                                    placeholder=""
                                    {...field}
                                    className="w-full"
                                    value={width}
                                    onChange={(e) => {
                                      setWidth(parseFloat(e.value));
                                      calculateSquareFeet();
                                    }}
                                  />
                                )}
                                name="rundi"
                                control={control}
                                // rules={{ required: "This field is required" }}
                              />
                            </label>
                          </div>

                          <div className="col-span-4 ">
                            <label className="block label-text">
                              <span className="block mb-1">स्क्वेअर फुट </span>
                              <Controller
                                render={({ field }) => (
                                  <InputNumber
                                    placeholder=""
                                    {...field}
                                    value={squareFeet.toFixed(2)}
                                    disabled
                                    className="w-full"
                                  />
                                )}
                                name="roadsq"
                                control={control}
                                // rules={{ required: "This field is required" }}
                              />
                            </label>
                          </div>

                          <div className="col-span-4 ">
                            <label className="block label-text">
                              <span className="block mb-1">पूर्ण पत्ता </span>
                              {/* <Controller
                    render={({ field }) => (
                      <InputText placeholder="" {...field} className="w-full" />
                    )}
                    name="fulladdress"
                    control={control}
                    rules={{ required: 'This field is required' }}
                  /> */}
                              <Controller
                                render={({ field }) => (
                                  <AutoComplete
                                    field="name"
                                    value={selectedFulladdress}
                                    suggestions={filteredCountries}
                                    completeMethod={(e) => {
                                      search(e, fulladdressList),
                                        handleSingleCreate(
                                          e,
                                          fulladdressList,
                                          setFULLAddressList,
                                          "fulladdress"
                                        );
                                    }}
                                    onChange={(e) => {
                                      setSelectedFullAddress(e.value),
                                        setValue("fulladdress", e.value);
                                    }}
                                  />
                                )}
                                name=""
                                control={control}
                              />
                            </label>
                          </div>
                          <div className="col-span-4 ">
                            <label className="block label-text">
                              <span className="block mb-1">भाग नं. </span>
                              {/* <Controller
                    render={({ field }) => (fulladdress
                      <InputText placeholder="" {...field} className="w-full" />
                    )}
                    name="wardno"
                    control={control}
                    rules={{ required: 'This field is required' }}
                  /> */}
                              <Controller
                                render={({ field }) => (
                                  <AutoComplete
                                    field="name"
                                    value={selectedWardno}
                                    suggestions={filteredCountries}
                                    completeMethod={(e) => {
                                      search(e, wardNo),
                                        handleSingleCreate(
                                          e,
                                          wardNo,
                                          setWardNo,
                                          "wardno"
                                        );
                                    }}
                                    onChange={(e) => {
                                      setSelectedWardNo(e.value),
                                        setValue("wardno", e.value);
                                    }}
                                  />
                                )}
                                name="wardno"
                                control={control}
                              />
                            </label>
                          </div>
                        </div>
                        <div className="grid lg:grid-cols-12 xl:gap-[0.800vw] gap-5 mt-3">
                          <div className="col-span-4 ">
                            <label className="block label-text">
                              <span className="block mb-1">
                                परगावातून आलेले{" "}
                              </span>
                              <Controller
                                render={({ field }) => (
                                  <Dropdown
                                    {...field}
                                    options={adharData}
                                    optionLabel="name"
                                    placeholder="पर्याय निवडा"
                                    filter
                                    className="w-full"
                                    onChange={(e) => {
                                      setValue("othervisllagecome", e.value);
                                      setSelectedOtherVillageCome(e.value.name);
                                    }}
                                  />
                                )}
                                name="othervisllagecome"
                                control={control}
                              />
                            </label>
                          </div>

                          {selectedothervillagecome === "हो" ? (
                            <div className="col-span-4 ">
                              <label className="block label-text">
                                <span className="block mb-1">
                                  परगावातून आलेले पत्ता
                                </span>
                                {/* <Controller
                      render={({ field }) => (
                        <InputText placeholder="" {...field} className="w-full" />
                      )}
                      name="othervillagecomename"
                      control={control}
                    /> */}
                                <Controller
                                  render={({ field }) => (
                                    <AutoComplete
                                      field="name"
                                      value={selectedothervillagecomename}
                                      suggestions={filteredCountries}
                                      completeMethod={(e) => {
                                        search(e, othervillagecomename),
                                          handleSingleCreate(
                                            e,
                                            othervillagecomename,
                                            setOtherVillageComeName,
                                            "othervillagecomename"
                                          );
                                      }}
                                      onChange={(e) => {
                                        setSelectedOtherVillageComeName(
                                          e.value
                                        ),
                                          setValue(
                                            "othervillagecomename",
                                            e.value
                                          );
                                      }}
                                    />
                                  )}
                                  name="othervillagecomename"
                                  control={control}
                                />
                              </label>
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel header="शिक्षण/व्यवसाय">
                    <div className="grid lg:grid-cols-12 xl:gap-[0.250vw] gap-5 divide-x-2">
                      <div className="col-span-12">
                        <div className="grid lg:grid-cols-12 xl:gap-[1.250vw] gap-5">
                          {/* <div className="col-span-4 ">
                          <label className="block label-text">
                            <span className="block mb-1">व्यवसाय-</span>
                            <div className="col-span-4 ">
                            <Controller
                    render={({ field }) => (
                      <Dropdown
                        {...field}
                        options={व्यवसायdata}
                        optionLabel="name"
                        placeholder="पर्याय निवडा"
                        filter
                        className="w-full"
                        onChange={(e) => {
                          setValue('vaivsayname', e.value);
                          setSelectedVaivsay(e.value.name)
                        }}
                      />
                    )}
                    name="vaivsayname"
                    control={control}
                  />
                        </div>
                          </label>
                        </div> */}

                          <div className="col-span-4 ">
                            <label className="block label-text">
                              <span className="block mb-1">व्यवसाय/नौकरी-</span>
                              <Controller
                                render={({ field }) => (
                                  <AutoComplete
                                    field="name"
                                    multiple
                                    value={selectedVaivsay}
                                    suggestions={filteredCountries}
                                    completeMethod={(e) => {
                                      search(e, selectedVaivsayList),
                                        handleCreate(
                                          e,
                                          selectedVaivsayList,
                                          setSelectedVaivsayList,
                                          "vaivsayname"
                                        );
                                    }}
                                    onChange={(e) => {
                                      setSelectedVaivsayname(e.value),
                                        setValue("vaivsayname", e.value);
                                    }}
                                  />
                                )}
                                name="vaivsayname"
                                control={control}
                              />
                            </label>
                          </div>

                          <div className="col-span-4 ">
                            <label className="block label-text">
                              <span className="block mb-1">नौकरी</span>
                              <Controller
                                render={({ field }) => (
                                  <AutoComplete
                                    field="name"
                                    multiple
                                    value={selectedNokri}
                                    suggestions={filteredCountries}
                                    completeMethod={(e) => {
                                      search(e, selectedNokriList),
                                        handleCreate(
                                          e,
                                          selectedNokriList,
                                          setSelectedNokriList,
                                          "nokri"
                                        );
                                    }}
                                    onChange={(e) => {
                                      setSelectedNokri(e.value),
                                        setValue("nokri", e.value);
                                    }}
                                  />
                                )}
                                name="nokri"
                                control={control}
                              />
                            </label>
                          </div>

                          <div className="col-span-4 ">
                            <label className="block label-text">
                              <span className="block mb-1">व्यवसाय-</span>
                              <Controller
                                render={({ field }) => (
                                  <AutoComplete
                                    field="name"
                                    multiple
                                    value={selectedVaivsayname}
                                    suggestions={filteredCountries}
                                    completeMethod={(e) => {
                                      search(e, vaivsayList),
                                        handleCreate(
                                          e,
                                          vaivsayList,
                                          setvaivsayList,
                                          "vaivsaynamevalue"
                                        );
                                    }}
                                    onChange={(e) => {
                                      setSelectedVaivsayname(e.value),
                                        setValue("vaivsaynamevalue", e.value);
                                    }}
                                  />
                                )}
                                name="vaivsaynamevalue"
                                control={control}
                              />
                            </label>
                          </div>

                          <div className="col-span-4 ">
                            <label className="block label-text">
                              <span className="block mb-1">शाळेचे नाव--</span>
                              {/* <Controller
                    render={({ field }) => (
                      <InputText placeholder="" {...field} className="w-full" />
                    )}
                    name="schoolname"
                    control={control}
                    rules={{ required: 'This field is required' }}
                  /> */}
                              <Controller
                                render={({ field }) => (
                                  <AutoComplete
                                    field="name"
                                    value={selectedschoolname}
                                    suggestions={filteredCountries}
                                    completeMethod={(e) => {
                                      search(e, schoolname),
                                        handleSingleCreate(
                                          e,
                                          schoolname,
                                          setSchoolName,
                                          "schoolname"
                                        );
                                    }}
                                    onChange={(e) => {
                                      setSelectedSchoolName(e.value),
                                        setValue("schoolname", e.value);
                                    }}
                                  />
                                )}
                                name="schoolname"
                                control={control}
                              />
                            </label>
                          </div>

                          <div className="col-span-4 ">
                            <label className="block label-text">
                              <span className="block mb-1">
                                महाविद्यालयाचे नाव--
                              </span>
                              {/* <Controller
                    render={({ field }) => (
                      <InputText placeholder="" {...field} className="w-full" />
                    )}
                    name="mahavidalay"
                    control={control}
                    rules={{ required: 'This field is required' }}
                  /> */}
                              <Controller
                                render={({ field }) => (
                                  <AutoComplete
                                    field="name"
                                    value={selectedMahavidalay}
                                    suggestions={filteredCountries}
                                    completeMethod={(e) => {
                                      search(e, mahavidalay),
                                        handleSingleCreate(
                                          e,
                                          mahavidalay,
                                          setMahavidalay,
                                          "mahavidalay"
                                        );
                                    }}
                                    onChange={(e) => {
                                      setSelectedMahavidalay(e.value),
                                        setValue("mahavidalay", e.value);
                                    }}
                                  />
                                )}
                                name="mahavidalay"
                                control={control}
                              />
                            </label>
                          </div>

                          <div className="col-span-4 ">
                            <label className="block label-text">
                              <span className="block mb-1">अभ्यासक्रम</span>
                              {/* <Controller
                    render={({ field }) => (
                      <InputText placeholder="" {...field} className="w-full" />
                    )}
                    name="abyaskarm"
                    control={control}
                    rules={{ required: 'This field is required' }}
                  /> */}
                              <Controller
                                render={({ field }) => (
                                  <AutoComplete
                                    field="name"
                                    multiple
                                    value={selectedabyaskarm}
                                    suggestions={filteredCountries}
                                    completeMethod={(e) => {
                                      search(e, abyaskarm),
                                        handleSingleCreate(
                                          e,
                                          abyaskarm,
                                          setAbyaskarm,
                                          "abyaskarm"
                                        );
                                    }}
                                    onChange={(e) => {
                                      setSelectedAbyaskarm(e.value),
                                        setValue("abyaskarm", e.value);
                                    }}
                                  />
                                )}
                                name="abyaskarm"
                                control={control}
                              />
                            </label>
                          </div>
                          <div className="col-span-4 ">
                            <label className="block label-text">
                              <span className="block mb-1">विभाग</span>
                              {/* <Controller
                    render={({ field }) => (
                      <InputText placeholder="" {...field} className="w-full" />
                    )}
                    name="vibhag"
                    control={control}
                    rules={{ required: 'This field is required' }}
                  /> */}
                              <Controller
                                render={({ field }) => (
                                  <AutoComplete
                                    field="name"
                                    value={selectedVibhag}
                                    suggestions={filteredCountries}
                                    completeMethod={(e) => {
                                      search(e, vibhag),
                                        handleSingleCreate(
                                          e,
                                          vibhag,
                                          setVibhag,
                                          "vibhag"
                                        );
                                    }}
                                    onChange={(e) => {
                                      setSelectedVibhag(e.value),
                                        setValue("vibhag", e.value);
                                    }}
                                  />
                                )}
                                name="vibhag"
                                control={control}
                              />
                            </label>
                          </div>

                          <div className="col-span-4 ">
                            <label className="block label-text">
                              <span className="block mb-1">शाळेचे पत्ता--</span>
                              {/* <Controller
                    render={({ field }) => (
                      <InputText placeholder="" {...field} className="w-full" />
                    )}
                    name="schoolname"
                    control={control}
                    rules={{ required: 'This field is required' }}
                  /> */}
                              <Controller
                                render={({ field }) => (
                                  <AutoComplete
                                    field="name"
                                    value={selectedschoolAddress}
                                    suggestions={filteredCountries}
                                    completeMethod={(e) => {
                                      search(e, schoolAddressList),
                                        handleSingleCreate(
                                          e,
                                          schoolAddressList,
                                          setSchoolAddressList,
                                          "schooladdress"
                                        );
                                    }}
                                    onChange={(e) => {
                                      setSelectedSchoolAddress(e.value),
                                        setValue("schooladdress", e.value);
                                    }}
                                  />
                                )}
                                name="schooladdress"
                                control={control}
                              />
                            </label>
                          </div>

                          <div className="col-span-4 ">
                            <label className="block label-text">
                              <span className="block mb-1">
                                महाविद्यालयाचा पत्ता-
                              </span>
                              {/* <Controller
                    render={({ field }) => (
                      <InputText placeholder="" {...field} className="w-full" />
                    )}
                    name="schoolname"
                    control={control}
                    rules={{ required: 'This field is required' }}
                  /> */}
                              <Controller
                                render={({ field }) => (
                                  <AutoComplete
                                    field="name"
                                    value={selectedCollageAddress}
                                    suggestions={filteredCountries}
                                    completeMethod={(e) => {
                                      search(e, selectedCollageAddressList),
                                        handleSingleCreate(
                                          e,
                                          selectedCollageAddressList,
                                          setSelectedCollageAddressList,
                                          "collageaddress"
                                        );
                                    }}
                                    onChange={(e) => {
                                      setSelectedCollageAddress(e.value),
                                        setValue("collageaddress", e.value);
                                    }}
                                  />
                                )}
                                name="collageaddress"
                                control={control}
                              />
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel header="जात">
                    <div className="grid lg:grid-cols-12 xl:gap-[0.250vw] gap-5 divide-x-2">
                      <div className="col-span-12">
                        <div className="grid lg:grid-cols-12 xl:gap-[1.250vw] gap-5">
                          <div className="col-span-4 ">
                            <label className="block label-text">
                              <span className="block mb-1">धर्म--</span>
                              {/* <Controller
                    render={({ field }) => (
                      <InputText placeholder="" {...field} className="w-full" />
                    )}
                    name="dharm"
                    control={control}
                    rules={{ required: 'This field is required' }}
                  /> */}
                              <Controller
                                render={({ field }) => (
                                  <AutoComplete
                                    field="name"
                                    value={selectedDharm}
                                    suggestions={filteredCountries}
                                    completeMethod={(e) => {
                                      search(e, dharm),
                                        handleSingleCreate(
                                          e,
                                          dharm,
                                          setDharm,
                                          "dharm"
                                        );
                                    }}
                                    onChange={(e) => {
                                      setSelectedDharm(e.value),
                                        setValue("dharm", e.value);
                                    }}
                                  />
                                )}
                                name="dharm"
                                control={control}
                              />
                            </label>
                          </div>
                          <div className="col-span-4 ">
                            <label className="block label-text">
                              <span className="block mb-1">जात</span>
                              {/* <Controller
                    render={({ field }) => (
                      <InputText placeholder="" {...field} className="w-full" />
                    )}
                    name="cast"
                    control={control}
                    rules={{ required: 'This field is required' }}
                  /> */}
                              <Controller
                                render={({ field }) => (
                                  <AutoComplete
                                    field="name"
                                    value={selectedCast}
                                    suggestions={filteredCountries}
                                    completeMethod={(e) => {
                                      search(e, cast),
                                        handleSingleCreate(
                                          e,
                                          cast,
                                          setCast,
                                          "cast"
                                        );
                                    }}
                                    onChange={(e) => {
                                      setSelectedCast(e.value),
                                        setValue("cast", e.value);
                                    }}
                                  />
                                )}
                                name="cast"
                                control={control}
                              />
                            </label>
                          </div>
                          <div className="col-span-4 ">
                            <label className="block label-text">
                              <span className="block mb-1">उपजात </span>
                              {/* <Controller
                    render={({ field }) => (
                      <InputText placeholder="" {...field} className="w-full" />
                    )}
                    name="upjat"
                    control={control}
                    rules={{ required: 'This field is required' }}
                  /> */}
                              <Controller
                                render={({ field }) => (
                                  <AutoComplete
                                    field="name"
                                    value={selectedUpjat}
                                    suggestions={filteredCountries}
                                    completeMethod={(e) => {
                                      search(e, upjat),
                                        handleSingleCreate(
                                          e,
                                          upjat,
                                          setUpjat,
                                          "upjat"
                                        );
                                    }}
                                    onChange={(e) => {
                                      setSelectedUpjat(e.value),
                                        setValue("cast", e.value);
                                    }}
                                  />
                                )}
                                name="upjat"
                                control={control}
                              />
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabPanel>

                  <TabPanel header="वैद्यकीय">
                    <div className="grid lg:grid-cols-12 xl:gap-[0.250vw] gap-5 divide-x-2">
                      <div className="col-span-12">
                        <div className="grid lg:grid-cols-12 xl:gap-[1.250vw] gap-5">
                          <div className="col-span-4 ">
                            <label className="block label-text">
                              <span className="block mb-1">रक्तगट</span>
                              {/* <Controller
                    render={({ field }) => (
                      <InputText placeholder="" {...field} className="w-full" />
                    )}
                    name="bloodgroup"
                    control={control}
                    rules={{ required: 'This field is required' }}
                  /> */}
                              <Controller
                                render={({ field }) => (
                                  <AutoComplete
                                    field="name"
                                    value={selectedbloodgroup}
                                    suggestions={filteredCountries}
                                    completeMethod={(e) => {
                                      search(e, bloodgroup),
                                        handleSingleCreate(
                                          e,
                                          bloodgroup,
                                          setBloodGroup,
                                          "bloodgroup"
                                        );
                                    }}
                                    onChange={(e) => {
                                      setSelectedBloodGroup(e.value),
                                        setValue("bloodgroup", e.value);
                                    }}
                                  />
                                )}
                                name="bloodgroup"
                                control={control}
                              />
                            </label>
                          </div>

                          <div className="col-span-4 ">
                            <label className="block label-text">
                              <span className="block mb-1">रक्तदान</span>
                              <Controller
                                render={({ field }) => (
                                  <Dropdown
                                    {...field}
                                    options={adharData}
                                    optionLabel="name"
                                    placeholder="पर्याय निवडा"
                                    filter
                                    className="w-full"
                                    onChange={(e) => {
                                      setValue("blooddonate", e.value);
                                      setrakdant(e.value.name);
                                    }}
                                  />
                                )}
                                name="blooddonate"
                                control={control}
                              />
                            </label>
                          </div>

                          {raktdan === "हो" ? (
                            <div className="col-span-4 ">
                              <label className="block label-text">
                                <span className="block mb-1">
                                  रक्तपेढी किंवा शिबीर नाव
                                </span>
                                {/* <Controller
                      render={({ field }) => (
                        <InputText placeholder="" {...field} className="w-full" />
                      )}
                      name="bllodnodateplace"
                      control={control}
                    /> */}
                                <Controller
                                  render={({ field }) => (
                                    <AutoComplete
                                      field="name"
                                      multiple
                                      value={selectedblooddonateplace}
                                      suggestions={filteredCountries}
                                      completeMethod={(e) => {
                                        search(e, blooddonateplace),
                                          handleSingleCreate(
                                            e,
                                            blooddonateplace,
                                            setBloodDonatePlace,
                                            "bllodnodateplace"
                                          );
                                      }}
                                      onChange={(e) => {
                                        setSelectedBloodDonatePlace(e.value),
                                          setValue("bllodnodateplace", e.value);
                                      }}
                                    />
                                  )}
                                  name="bllodnodateplace"
                                  control={control}
                                />
                              </label>
                            </div>
                          ) : null}

                          <div className="col-span-4 ">
                            <label className="block label-text">
                              <span className="block mb-1">व्यसन</span>
                              <Controller
                                render={({ field }) => (
                                  <Dropdown
                                    {...field}
                                    options={adharData}
                                    optionLabel="name"
                                    placeholder="पर्याय निवडा"
                                    filter
                                    className="w-full"
                                    onChange={(e) => {
                                      setValue("vaisan", e.value);
                                      setSelectedvaisan(e.value.name);
                                    }}
                                  />
                                )}
                                name="vaisan"
                                control={control}
                              />
                            </label>
                          </div>

                          {selectedvaisan === "हो" ? (
                            <div className="col-span-4 ">
                              <label className="block label-text">
                                <span className="block mb-1">व्यसन</span>
                                <Controller
                                  render={({ field }) => (
                                    <AutoComplete
                                      field="name"
                                      multiple
                                      value={selectedCountries}
                                      suggestions={filteredCountries}
                                      completeMethod={(e) => {
                                        search(e, vaisanList),
                                          handleCreate(
                                            e,
                                            vaisanList,
                                            setVaisanList,
                                            "vaisanname"
                                          );
                                      }}
                                      onChange={(e) => {
                                        setSelectedCountries(e.value),
                                          setValue("vaisanname", e.value);
                                      }}
                                    />
                                  )}
                                  name="vaisanname"
                                  control={control}
                                />
                              </label>
                            </div>
                          ) : null}

                          <div className="col-span-4 ">
                            <label className="block label-text">
                              <span className="block mb-1">आजार</span>
                              <Controller
                                render={({ field }) => (
                                  <Dropdown
                                    {...field}
                                    options={adharData}
                                    optionLabel="name"
                                    placeholder="पर्याय निवडा"
                                    filter
                                    className="w-full"
                                    onChange={(e) => {
                                      setValue("ajar", e.value);
                                      setSelectedAjar(e.value.name);
                                    }}
                                  />
                                )}
                                name="ajar"
                                control={control}
                              />
                            </label>
                          </div>

                          {selectedAjar === "हो" ? (
                            <div className="col-span-4 ">
                              <label className="block label-text">
                                <span className="block mb-1">आजार</span>
                                {/* <Controller
                      render={({ field }) => (
                        <InputText placeholder="" {...field} className="w-full" />
                      )}
                      name="ajarname"
                      control={control}
                    /> */}
                                <Controller
                                  render={({ field }) => (
                                    <AutoComplete
                                      field="name"
                                      multiple
                                      value={selectedAjarname}
                                      suggestions={filteredCountries}
                                      completeMethod={(e) => {
                                        search(e, ajarName),
                                          handleCreate(
                                            e,
                                            ajarName,
                                            setAjarName,
                                            "ajarname"
                                          );
                                      }}
                                      onChange={(e) => {
                                        setSelectedAjarName(e.value),
                                          setValue("ajarname", e.value);
                                      }}
                                    />
                                  )}
                                  name="ajarname"
                                  control={control}
                                />
                              </label>
                            </div>
                          ) : null}

                          <div className="col-span-4 ">
                            <label className="block label-text">
                              <span className="block mb-1">
                                कौटुंबिक डॉक्टर
                              </span>
                              <Controller
                                render={({ field }) => (
                                  <Dropdown
                                    {...field}
                                    options={adharData}
                                    optionLabel="name"
                                    placeholder="पर्याय निवडा"
                                    filter
                                    className="w-full"
                                    onChange={(e) => {
                                      setValue("familydoctor", e.value);
                                      setSelectedFamilyDoctor(e.value.name);
                                    }}
                                  />
                                )}
                                name="familydoctor"
                                control={control}
                              />
                            </label>
                          </div>

                          {selectedFamilydoctor === "हो" ? (
                            <>
                              <div className="col-span-4 ">
                                <label className="block label-text">
                                  <span className="block mb-1">नाव</span>
                                  {/* <Controller
                      render={({ field }) => (
                        <InputText placeholder="" {...field} className="w-full" />
                      )}
                      name="ajarname"
                      control={control}
                    /> */}
                                  <Controller
                                    render={({ field }) => (
                                      <InputText
                                        placeholder=""
                                        {...field}
                                        className="w-full"
                                      />
                                    )}
                                    name="doctorname"
                                    control={control}
                                    rules={{
                                      required: "This field is required",
                                    }}
                                  />
                                </label>
                              </div>
                              <div className="col-span-4 ">
                                <label className="block label-text">
                                  <span className="block mb-1">पत्ता</span>
                                  <Controller
                                    render={({ field }) => (
                                      <InputText
                                        placeholder=""
                                        {...field}
                                        className="w-full"
                                      />
                                    )}
                                    name="doctoraddress"
                                    control={control}
                                  />
                                </label>
                              </div>
                              <div className="col-span-4 ">
                                <label className="block label-text">
                                  <span className="block mb-1">पदवी</span>
                                  <Controller
                                    render={({ field }) => (
                                      <InputText
                                        placeholder=""
                                        {...field}
                                        className="w-full"
                                      />
                                    )}
                                    name="padvi"
                                    control={control}
                                  />
                                </label>
                              </div>
                            </>
                          ) : null}

                          <div className="col-span-4 ">
                            <label className="block label-text">
                              <span className="block mb-1">अपंगत्व</span>
                              <Controller
                                render={({ field }) => (
                                  <Dropdown
                                    {...field}
                                    options={adharData}
                                    optionLabel="name"
                                    placeholder="पर्याय निवडा"
                                    filter
                                    className="w-full"
                                    onChange={(e) => {
                                      setValue("apgatv", e.value);
                                      setSelectedApagtav(e.value.name);
                                    }}
                                  />
                                )}
                                name="apgatv"
                                control={control}
                              />
                            </label>
                          </div>

                          {selectedApagatv === "हो" ? (
                            <>
                              <div className="col-span-4 ">
                                <label className="block label-text">
                                  <span className="block mb-1">
                                    सरकारी प्रमाणपत्र
                                  </span>
                                  <Controller
                                    render={({ field }) => (
                                      <InputText
                                        placeholder=""
                                        {...field}
                                        className="w-full"
                                      />
                                    )}
                                    name="apagatavpramanpatr"
                                    control={control}
                                  />
                                </label>
                              </div>
                              <div className="col-span-4 ">
                                <label className="block label-text">
                                  <span className="block mb-1">टक्केवारी</span>
                                  <Controller
                                    render={({ field }) => (
                                      <InputText
                                        placeholder=""
                                        {...field}
                                        className="w-full"
                                      />
                                    )}
                                    name="apagatavtakevari"
                                    control={control}
                                  />
                                </label>
                              </div>
                            </>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel header="कार्ड्स">
                    <div className="grid lg:grid-cols-12 xl:gap-[0.250vw] gap-5 divide-x-2">
                      <div className="col-span-12">
                        <div className="grid lg:grid-cols-12 xl:gap-[1.250vw] gap-5">
                          <div className="col-span-4 ">
                            <label className="block label-text">
                              <span className="block mb-1">आधार कार्ड</span>
                              <Controller
                                render={({ field }) => (
                                  <InputText
                                    placeholder=""
                                    {...field}
                                    className="w-full"
                                  />
                                )}
                                name="adharcard"
                                control={control}
                              />
                            </label>
                          </div>
                          <div className="col-span-4 ">
                            <label className="block label-text">
                              <span className="block mb-1">पॅन कार्ड</span>
                              <Controller
                                render={({ field }) => (
                                  <Dropdown
                                    {...field}
                                    options={adharData}
                                    optionLabel="name"
                                    placeholder="पर्याय निवडा"
                                    filter
                                    className="w-full"
                                    onChange={(e) => {
                                      setValue("pancard", e.value);
                                      setSelectedPancard(e.value.name);
                                    }}
                                  />
                                )}
                                name="pancard"
                                control={control}
                              />
                            </label>
                          </div>

                          {selectedPancard === "हो" ? (
                            <div className="col-span-4 ">
                              <label className="block label-text">
                                <span className="block mb-1">पॅन कार्ड</span>
                                <Controller
                                  render={({ field }) => (
                                    <InputText
                                      placeholder=""
                                      {...field}
                                      className="w-full"
                                    />
                                  )}
                                  name="pancardno"
                                  control={control}
                                />
                              </label>
                            </div>
                          ) : null}
                          <div className="col-span-4 ">
                            <label className="block label-text">
                              <span className="block mb-1">पासपोर्ट</span>
                              <Controller
                                render={({ field }) => (
                                  <Dropdown
                                    {...field}
                                    options={adharData}
                                    optionLabel="name"
                                    placeholder="पर्याय निवडा"
                                    filter
                                    className="w-full"
                                    onChange={(e) => {
                                      setValue("passport", e.value);
                                      setSelectedPasspost(e.value.name);
                                    }}
                                  />
                                )}
                                name="passport"
                                control={control}
                              />
                            </label>
                          </div>
                          {selectedPassport === "हो" ? (
                            <div className="col-span-4 ">
                              <label className="block label-text">
                                <span className="block mb-1">पासपोर्ट</span>
                                <Controller
                                  render={({ field }) => (
                                    <InputText
                                      placeholder=""
                                      {...field}
                                      className="w-full"
                                    />
                                  )}
                                  name="passportno"
                                  control={control}
                                />
                              </label>
                            </div>
                          ) : null}

                          <div className="col-span-4 ">
                            <label className="block label-text">
                              <span className="block mb-1">रेशन कार्ड</span>
                              <Controller
                                render={({ field }) => (
                                  <Dropdown
                                    {...field}
                                    options={adharData}
                                    optionLabel="name"
                                    placeholder="पर्याय निवडा"
                                    filter
                                    className="w-full"
                                    onChange={(e) => {
                                      setValue("rashancard", e.value);
                                      setselectedRashankard(e.value.name);
                                    }}
                                  />
                                )}
                                name="rashancard"
                                control={control}
                              />
                            </label>
                          </div>

                          {selectedrahancard === "हो" ? (
                            <>
                              <div className="col-span-4 ">
                                <label className="block label-text">
                                  <span className="block mb-1">रेशन कार्ड</span>
                                  <Controller
                                    render={({ field }) => (
                                      <Dropdown
                                        {...field}
                                        options={rashandata}
                                        optionLabel="name"
                                        placeholder="पर्याय निवडा"
                                        filter
                                        className="w-full"
                                        onChange={(e) => {
                                          setValue("rashnacardname", e.value);
                                        }}
                                      />
                                    )}
                                    name="rashnacardname"
                                    control={control}
                                  />
                                </label>
                              </div>
                              <div className="col-span-4 ">
                                <label className="block label-text">
                                  <span className="block mb-1">
                                    दुकान व दुकानदाराचे नाव{" "}
                                  </span>
                                  <Controller
                                    render={({ field }) => (
                                      <InputText
                                        placeholder=""
                                        {...field}
                                        className="w-full"
                                      />
                                    )}
                                    name="dukandarachename"
                                    control={control}
                                  />
                                </label>
                              </div>
                            </>
                          ) : null}
                          <div className="col-span-4 ">
                            <label className="block label-text">
                              <span className="block mb-1">इनकम टॅक्स</span>
                              <Controller
                                render={({ field }) => (
                                  <Dropdown
                                    {...field}
                                    options={adharData}
                                    optionLabel="name"
                                    placeholder="पर्याय निवडा"
                                    filter
                                    className="w-full"
                                    onChange={(e) => {
                                      setValue("incometax", e.value);
                                      setSelectedIncomeTax(e.value.name);
                                    }}
                                  />
                                )}
                                name="incometax"
                                control={control}
                              />
                            </label>
                          </div>

                          {selectedIncomeTax === "हो" ? (
                            <div className="col-span-4 ">
                              <label className="block label-text">
                                <span className="block mb-1">इनकम टॅक्स</span>
                                <Controller
                                  render={({ field }) => (
                                    <InputText
                                      placeholder=""
                                      {...field}
                                      className="w-full"
                                    />
                                  )}
                                  name="incometaxno"
                                  control={control}
                                />
                              </label>
                            </div>
                          ) : null}

                          <div className="col-span-4 ">
                            <label className="block label-text">
                              <span className="block mb-1">वोटर आयडी</span>
                              <Controller
                                render={({ field }) => (
                                  <Dropdown
                                    {...field}
                                    options={adharData}
                                    optionLabel="name"
                                    placeholder="पर्याय निवडा"
                                    filter
                                    className="w-full"
                                    onChange={(e) => {
                                      setValue("votercard", e.value);
                                      setselectedVoterCard(e.value.name);
                                    }}
                                  />
                                )}
                                name="votercard"
                                control={control}
                              />
                            </label>
                          </div>

                          {selectedvotercard === "हो" ? (
                            <div className="col-span-4 ">
                              <label className="block label-text">
                                <span className="block mb-1">वोटर आयडी</span>
                                <Controller
                                  render={({ field }) => (
                                    <InputText
                                      placeholder=""
                                      {...field}
                                      className="w-full"
                                    />
                                  )}
                                  name="votercardname"
                                  control={control}
                                />
                                {/* <Controller
                        render={({ field }) => (
                            <AutoComplete field="name" multiple value={selectedvotercardname} suggestions={filteredCountries} completeMethod={(e)=>{search(e,votercardname),handleCreate(e,votercardname,setVoterCardName,"votercardname")}} onChange={(e) =>{setSelectedVoterCardName(e.value),setValue("votercardname",e.value)}} />
                        )}
                        name="votercardname"
                        control={control}
                      /> */}
                              </label>
                            </div>
                          ) : null}

                          <div className="col-span-4 ">
                            <label className="block label-text">
                              <span className="block mb-1">
                                ड्रायविंग लायसन्स{" "}
                              </span>
                              <Controller
                                render={({ field }) => (
                                  <Dropdown
                                    {...field}
                                    options={adharData}
                                    optionLabel="name"
                                    placeholder="पर्याय निवडा"
                                    filter
                                    className="w-full"
                                    onChange={(e) => {
                                      setValue("drivinglicence", e.value);
                                      setselectedDrivingLicence(e.value.name);
                                    }}
                                  />
                                )}
                                name="drivinglicence"
                                control={control}
                              />
                            </label>
                          </div>

                          {selecteddrivinlincense === "हो" ? (
                            <>
                              <div className="col-span-4 ">
                                <label className="block label-text">
                                  <span className="block mb-1">
                                    ड्रायविंग लायसन्स{" "}
                                  </span>
                                  <Controller
                                    render={({ field }) => (
                                      <AutoComplete
                                        field="name"
                                        multiple
                                        value={selecteddrivingLincename}
                                        suggestions={filteredCountries}
                                        completeMethod={(e) => {
                                          search(
                                            e,
                                            selecteddrivingLincenameList
                                          ),
                                            handleCreate(
                                              e,
                                              selecteddrivingLincenameList,
                                              setSelectedDrivingLiceneceNameList,
                                              "drivinglincesname"
                                            );
                                        }}
                                        onChange={(e) => {
                                          setSelectedDrivingLiceneceName(
                                            e.value
                                          ),
                                            setValue(
                                              "drivinglincesname",
                                              e.value
                                            );
                                        }}
                                      />
                                    )}
                                    name="drivinglincesname"
                                    control={control}
                                  />
                                </label>
                              </div>

                              <div className="col-span-4 ">
                                <label className="block label-text">
                                  <span className="block mb-1">
                                    ड्रायविंग लायसन्स नंबर{" "}
                                  </span>
                                  <Controller
                                    render={({ field }) => (
                                      <InputText
                                        placeholder=""
                                        {...field}
                                        className="w-full"
                                      />
                                    )}
                                    name="drivinglicencename"
                                    control={control}
                                  />
                                  {/* <Controller
render={({ field }) => (
<AutoComplete field="name" multiple value={selectedvotercardname} suggestions={filteredCountries} completeMethod={(e)=>{search(e,votercardname),handleCreate(e,votercardname,setVoterCardName,"votercardname")}} onChange={(e) =>{setSelectedVoterCardName(e.value),setValue("votercardname",e.value)}} />
)}
name="votercardname"
control={control}
/> */}
                                </label>
                              </div>
                            </>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel header="ग्रामपंचायत विषयी">
                    <div className="grid lg:grid-cols-12 xl:gap-[0.250vw] gap-5 divide-x-2">
                      <div className="col-span-12">
                        <div className="grid lg:grid-cols-12 xl:gap-[1.250vw] gap-5">
                          <div className="col-span-4 ">
                            <label className="block label-text">
                              <span className="block mb-1">घर नं.</span>
                              <Controller
                                render={({ field }) => (
                                  <InputText
                                    placeholder=""
                                    {...field}
                                    className="w-full"
                                  />
                                )}
                                name="homeno"
                                control={control}
                                rules={{ required: "This field is required" }}
                              />
                            </label>
                          </div>

                          <div className="col-span-4 ">
                            <label className="block label-text">
                              <span className="block mb-1">
                                सरकारी योजना लाभ
                              </span>
                              <Controller
                                render={({ field }) => (
                                  <Dropdown
                                    {...field}
                                    options={adharData}
                                    optionLabel="name"
                                    placeholder="पर्याय निवडा"
                                    filter
                                    className="w-full"
                                    onChange={(e) => {
                                      setValue("sarkariyognalabh", e.value);
                                      setSelectedYojana(e.value.name);
                                    }}
                                  />
                                )}
                                name="sarkariyognalabh"
                                control={control}
                              />
                            </label>
                          </div>

                          {selectedYojana === "हो" ? (
                            <div className="col-span-4 ">
                              <label className="block label-text">
                                <span className="block mb-1">
                                  सरकारी योजना लाभ
                                </span>
                                <Controller
                                  render={({ field }) => (
                                    <AutoComplete
                                      field="name"
                                      multiple
                                      value={selectedSarkariYogna}
                                      suggestions={filteredCountries}
                                      completeMethod={(e) => {
                                        search(e, sarkariyojnalist),
                                          handleCreate(
                                            e,
                                            sarkariyojnalist,
                                            setSrakariYoujnaList,
                                            "sarkariyojna"
                                          );
                                      }}
                                      onChange={(e) => {
                                        setSelectedSarkariYojna(e.value),
                                          setValue("sarkariyojna", e.value);
                                      }}
                                    />
                                  )}
                                  name="sarkariyojna"
                                  control={control}
                                />
                              </label>
                            </div>
                          ) : null}
                          <div className="col-span-4 ">
                            <label className="block label-text">
                              <span className="block mb-1">शौचालय</span>
                              <Controller
                                render={({ field }) => (
                                  <Dropdown
                                    {...field}
                                    options={adharData}
                                    optionLabel="name"
                                    placeholder="पर्याय निवडा"
                                    filter
                                    className="w-full"
                                    onChange={(e) => {
                                      setValue("shauchalay", e.value);
                                    }}
                                  />
                                )}
                                name="shauchalay"
                                control={control}
                              />
                            </label>
                          </div>
                          <div className="col-span-4 ">
                            <label className="block label-text">
                              <span className="block mb-1">घराचा प्रकार</span>
                              <Controller
                                render={({ field }) => (
                                  <Dropdown
                                    {...field}
                                    options={homeType}
                                    optionLabel="name"
                                    placeholder="पर्याय निवडा"
                                    filter
                                    className="w-full"
                                    onChange={(e) => {
                                      setValue("hometype", e.value);
                                    }}
                                  />
                                )}
                                name="hometype"
                                control={control}
                              />
                            </label>
                          </div>

                          <div className="col-span-4 ">
                            <label className="block label-text">
                              <span className="block mb-1">
                                घराचा प्रकार sq
                              </span>
                              <Controller
                                render={({ field }) => (
                                  <InputText
                                    placeholder=""
                                    {...field}
                                    className="w-full"
                                  />
                                )}
                                name="hometypesq"
                                control={control}
                                rules={{ required: "This field is required" }}
                              />
                            </label>
                          </div>
                          <div className="col-span-4 ">
                            <label className="block label-text">
                              <span className="block mb-1">
                                पाण्याचे स्त्रोत
                              </span>
                              <Controller
                                render={({ field }) => (
                                  <Dropdown
                                    {...field}
                                    options={adharData}
                                    optionLabel="name"
                                    placeholder="पर्याय निवडा"
                                    filter
                                    className="w-full"
                                    onChange={(e) => {
                                      setValue("waterconnection", e.value);
                                      setPanyacheStrot(e.value.name);
                                    }}
                                  />
                                )}
                                name="waterconnection"
                                control={control}
                              />
                            </label>
                          </div>
                          {panyachestrot === "हो" ? (
                            <div className="col-span-4 ">
                              <label className="block label-text">
                                <span className="block mb-1">
                                  पाण्याचे प्रकार
                                </span>
                                <Controller
                                  render={({ field }) => (
                                    <AutoComplete
                                      field="name"
                                      multiple
                                      value={selectedPanyachaprakar}
                                      suggestions={filteredCountries}
                                      completeMethod={(e) => {
                                        search(e, selectedPanyachaprakarList),
                                          handleCreate(
                                            e,
                                            selectedPanyachaprakarList,
                                            setSelectedPanyachaprakarList,
                                            "panyachaprakar"
                                          );
                                      }}
                                      onChange={(e) => {
                                        setSelectedPanyachaprakar(e.value),
                                          setValue("panyachaprakar", e.value);
                                      }}
                                    />
                                  )}
                                  name="panyachaprakar"
                                  control={control}
                                />
                              </label>
                            </div>
                          ) : null}
                          <div className="col-span-4 ">
                            <label className="block label-text">
                              <span className="block mb-1">चावी कनेक्शन</span>
                              <Controller
                                render={({ field }) => (
                                  <Dropdown
                                    {...field}
                                    options={adharData}
                                    optionLabel="name"
                                    placeholder="पर्याय निवडा"
                                    filter
                                    className="w-full"
                                    onChange={(e) => {
                                      setValue("chaviconnection", e.value);
                                      setChaviConnection(e.value.name);
                                    }}
                                  />
                                )}
                                name="chaviconnection"
                                control={control}
                              />
                            </label>
                          </div>

                          {chaviconnectionvalue === "हो" ? (
                            <div className="col-span-4 ">
                              <label className="block label-text">
                                <span className="block mb-1">चावी </span>
                                <Controller
                                  render={({ field }) => (
                                    <AutoComplete
                                      field="name"
                                      multiple
                                      value={selectedChavi}
                                      suggestions={filteredCountries}
                                      completeMethod={(e) => {
                                        search(e, selectedChaviList),
                                          handleCreate(
                                            e,
                                            selectedChaviList,
                                            setSelectedChaviList,
                                            "chavi"
                                          );
                                      }}
                                      onChange={(e) => {
                                        setSelectedChavi(e.value),
                                          setValue("chavi", e.value);
                                      }}
                                    />
                                  )}
                                  name="chavi"
                                  control={control}
                                />
                              </label>
                            </div>
                          ) : null}

                          <div className="col-span-4 ">
                            <label className="block label-text">
                              <span className="block mb-1">घरफाळा</span>
                              <Controller
                                render={({ field }) => (
                                  <Dropdown
                                    {...field}
                                    options={adharData}
                                    optionLabel="name"
                                    placeholder="पर्याय निवडा"
                                    filter
                                    className="w-full"
                                    onChange={(e) => {
                                      setValue("gharphala", e.value);
                                    }}
                                  />
                                )}
                                name="gharphala"
                                control={control}
                              />
                            </label>
                          </div>
                          <div className="col-span-4 ">
                            <label className="block label-text">
                              <span className="block mb-1">पाणीपट्टी</span>
                              <Controller
                                render={({ field }) => (
                                  <Dropdown
                                    {...field}
                                    options={adharData}
                                    optionLabel="name"
                                    placeholder="पर्याय निवडा"
                                    filter
                                    className="w-full"
                                    onChange={(e) => {
                                      setValue("panipatti", e.value);
                                    }}
                                  />
                                )}
                                name="panipatti"
                                control={control}
                              />
                            </label>
                          </div>

                          <div className="col-span-4 ">
                            <label className="block label-text">
                              <span className="block mb-1">गॅस कनेक्शन </span>
                              <Controller
                                render={({ field }) => (
                                  <Dropdown
                                    {...field}
                                    options={adharData}
                                    optionLabel="name"
                                    placeholder="पर्याय निवडा"
                                    filter
                                    className="w-full"
                                    onChange={(e) => {
                                      setValue("gyasconnection", e.value);
                                      setGasConnetion(e.value.name);
                                    }}
                                  />
                                )}
                                name="gyasconnection"
                                control={control}
                              />
                            </label>
                          </div>

                          {gasConnection === "हो" ? (
                            <>
                              <div className="col-span-4 ">
                                <label className="block label-text">
                                  <span className="block mb-1">
                                    {" "}
                                    कंपनीचे नाव
                                  </span>
                                  <Controller
                                    render={({ field }) => (
                                      <AutoComplete
                                        field="name"
                                        multiple
                                        value={selectedGasCompanty}
                                        suggestions={filteredCountries}
                                        completeMethod={(e) => {
                                          search(e, selectedGasCompantyList),
                                            handleCreate(
                                              e,
                                              selectedGasCompantyList,
                                              setSelectedGasCompanyList,
                                              "gascompanyname"
                                            );
                                        }}
                                        onChange={(e) => {
                                          setSelectedGasCompany(e.value),
                                            setValue("gascompanyname", e.value);
                                        }}
                                      />
                                    )}
                                    name="gascompanyname"
                                    control={control}
                                  />
                                </label>
                              </div>

                              <div className="col-span-4 ">
                                <label className="block label-text">
                                  <span className="block mb-1">
                                    {" "}
                                    एजन्सीचे नाव{" "}
                                  </span>
                                  <Controller
                                    render={({ field }) => (
                                      <AutoComplete
                                        field="name"
                                        multiple
                                        value={selectedGasAgency}
                                        suggestions={filteredCountries}
                                        completeMethod={(e) => {
                                          search(e, selectedGasAgencyList),
                                            handleCreate(
                                              e,
                                              selectedGasAgencyList,
                                              setSelectedGasAgencyList,
                                              "agencyname"
                                            );
                                        }}
                                        onChange={(e) => {
                                          setSelectedGasAgency(e.value),
                                            setValue("agencyname", e.value);
                                        }}
                                      />
                                    )}
                                    name="agencyname"
                                    control={control}
                                  />
                                </label>
                              </div>
                            </>
                          ) : null}
                          <div className="col-span-4 ">
                            <label className="block label-text">
                              <span className="block mb-1">लाईट कनेक्शन </span>
                              <Controller
                                render={({ field }) => (
                                  <Dropdown
                                    {...field}
                                    options={adharData}
                                    optionLabel="name"
                                    placeholder="पर्याय निवडा"
                                    filter
                                    className="w-full"
                                    onChange={(e) => {
                                      setValue("lightconnection", e.value);
                                    }}
                                  />
                                )}
                                name="lightconnection"
                                control={control}
                              />
                            </label>
                          </div>

                          <div className="col-span-4 ">
                            <label className="block label-text">
                              <span className="block mb-1">लाईट कनेक्शन </span>
                              <Controller
                                render={({ field }) => (
                                  <InputText
                                    placeholder=""
                                    {...field}
                                    className="w-full"
                                  />
                                )}
                                name="lighconnectiontype"
                                control={control}
                                rules={{ required: "This field is required" }}
                              />
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel header="मतदान">
                    <div className="grid lg:grid-cols-12 xl:gap-[0.250vw] gap-5 divide-x-2">
                      <div className="col-span-12">
                        <div className="grid lg:grid-cols-12 xl:gap-[1.250vw] gap-5">
                          <div className="col-span-4 ">
                            <label className="block label-text">
                              <span className="block mb-1">मतदार </span>
                              <Controller
                                render={({ field }) => (
                                  <Dropdown
                                    {...field}
                                    options={adharData}
                                    optionLabel="name"
                                    placeholder="पर्याय निवडा"
                                    filter
                                    className="w-full"
                                    onChange={(e) => {
                                      setValue("matdaroption", e.value);
                                      setSelectedMatdaroption(e.value.name);
                                    }}
                                  />
                                )}
                                name="matdaroption"
                                control={control}
                              />
                            </label>
                          </div>

                          {selectedmatdaroption === "हो" ? (
                            <div className="col-span-4 ">
                              <label className="block label-text">
                                <span className="block mb-1">मतदार</span>
                                {/* <Controller
                  render={({ field }) => (
                    <InputText placeholder="" {...field} className="w-full" />
                  )}
                  name="matdar"
                  control={control}
                  rules={{ required: 'This field is required' }}
                /> */}
                                <Controller
                                  render={({ field }) => (
                                    <AutoComplete
                                      field="name"
                                      multiple
                                      value={selectedmatdar}
                                      suggestions={filteredCountries}
                                      completeMethod={(e) => {
                                        search(e, matdar),
                                          handleCreate(
                                            e,
                                            matdar,
                                            setMatdar,
                                            "matdar"
                                          );
                                      }}
                                      onChange={(e) => {
                                        setSelectedMatdar(e.value),
                                          setValue("matdar", e.value);
                                      }}
                                    />
                                  )}
                                  name="matdar"
                                  control={control}
                                />
                              </label>
                            </div>
                          ) : null}

                          <div className="col-span-4 ">
                            <label className="block label-text">
                              <span className="block mb-1">विधानसभा</span>
                              <Controller
                                render={({ field }) => (
                                  <InputText
                                    placeholder=""
                                    {...field}
                                    className="w-full"
                                  />
                                )}
                                name="vidhansabha"
                                control={control}
                                rules={{ required: "This field is required" }}
                              />
                            </label>
                          </div>
                          <div className="col-span-4 ">
                            <label className="block label-text">
                              <span className="block mb-1">सिरीअल नं.</span>
                              <Controller
                                render={({ field }) => (
                                  <InputText
                                    placeholder=""
                                    {...field}
                                    className="w-full"
                                  />
                                )}
                                name="vidhantsabhasirialnumber"
                                control={control}
                                rules={{ required: "This field is required" }}
                              />
                            </label>
                          </div>
                          <div className="col-span-4 ">
                            <label className="block label-text">
                              <span className="block mb-1"> यादी नं.</span>
                              <Controller
                                render={({ field }) => (
                                  <InputText
                                    placeholder=""
                                    {...field}
                                    className="w-full"
                                  />
                                )}
                                name="vidhansabhayadinumber"
                                control={control}
                                rules={{ required: "This field is required" }}
                              />
                            </label>
                          </div>

                          <div className="col-span-4 ">
                            <label className="block label-text">
                              <span className="block mb-1">लोकसभा</span>
                              <Controller
                                render={({ field }) => (
                                  <InputText
                                    placeholder=""
                                    {...field}
                                    className="w-full"
                                  />
                                )}
                                name="lokshabha"
                                control={control}
                                rules={{ required: "This field is required" }}
                              />
                            </label>
                          </div>
                          <div className="col-span-4 ">
                            <label className="block label-text">
                              <span className="block mb-1">सिरीअल नं.</span>
                              <Controller
                                render={({ field }) => (
                                  <InputText
                                    placeholder=""
                                    {...field}
                                    className="w-full"
                                  />
                                )}
                                name="lokshabhaasirialnumber"
                                control={control}
                                rules={{ required: "This field is required" }}
                              />
                            </label>
                          </div>
                          <div className="col-span-4 ">
                            <label className="block label-text">
                              <span className="block mb-1"> यादी नं.</span>
                              <Controller
                                render={({ field }) => (
                                  <InputText
                                    placeholder=""
                                    {...field}
                                    className="w-full"
                                  />
                                )}
                                name="lokshabhayadinumber"
                                control={control}
                                rules={{ required: "This field is required" }}
                              />
                            </label>
                          </div>

                          <div className="col-span-4 ">
                            <label className="block label-text">
                              <span className="block mb-1">
                                तालुका /जिल्हा परिषद
                              </span>
                              <Controller
                                render={({ field }) => (
                                  <InputText
                                    placeholder=""
                                    {...field}
                                    className="w-full"
                                  />
                                )}
                                name="jilhaparishad"
                                control={control}
                                rules={{ required: "This field is required" }}
                              />
                            </label>
                          </div>

                          <div className="col-span-4 ">
                            <label className="block label-text">
                              <span className="block mb-1">सिरीअल नं.</span>
                              <Controller
                                render={({ field }) => (
                                  <InputText
                                    placeholder=""
                                    {...field}
                                    className="w-full"
                                  />
                                )}
                                name="jilhaparishadsirialnumber"
                                control={control}
                                rules={{ required: "This field is required" }}
                              />
                            </label>
                          </div>
                          <div className="col-span-4 ">
                            <label className="block label-text">
                              <span className="block mb-1"> यादी नं.</span>
                              <Controller
                                render={({ field }) => (
                                  <InputText
                                    placeholder=""
                                    {...field}
                                    className="w-full"
                                  />
                                )}
                                name="jilhaparishadyadinumber"
                                control={control}
                                rules={{ required: "This field is required" }}
                              />
                            </label>
                          </div>
                          <div className="col-span-3 ">
                            <label className="block label-text">
                              <span className="block mb-1">ग्रामपंचायत</span>
                              <Controller
                                render={({ field }) => (
                                  <InputText
                                    placeholder=""
                                    {...field}
                                    className="w-full"
                                  />
                                )}
                                name="grampanchayat"
                                control={control}
                                rules={{ required: "This field is required" }}
                              />
                            </label>
                          </div>

                          <div className="col-span-3 ">
                            <label className="block label-text">
                              <span className="block mb-1">सिरीअल नं.</span>
                              <Controller
                                render={({ field }) => (
                                  <InputText
                                    placeholder=""
                                    {...field}
                                    className="w-full"
                                  />
                                )}
                                name="grampanchayatsirialnumber"
                                control={control}
                                rules={{ required: "This field is required" }}
                              />
                            </label>
                          </div>
                          <div className="col-span-3 ">
                            <label className="block label-text">
                              <span className="block mb-1"> यादी नं.</span>
                              <Controller
                                render={({ field }) => (
                                  <InputText
                                    placeholder=""
                                    {...field}
                                    className="w-full"
                                  />
                                )}
                                name="grampanchayatyadinumber"
                                control={control}
                                rules={{ required: "This field is required" }}
                              />
                            </label>
                          </div>

                          {/* <div className="col-span-4 ">
                          <label className="block label-text">
                            <span className="block mb-1">तालुका परिषद</span>
                            <Controller
                    render={({ field }) => (
                      <InputText placeholder="" {...field} className="w-full" />
                    )}
                    name="talukaparishad"
                    control={control}
                    rules={{ required: 'This field is required' }}
                  />
                 
                          </label>
                        </div> */}
                          <div className="col-span-3 ">
                            <label className="block label-text">
                              <span className="block mb-1">वार्ड नं.</span>
                              <Controller
                                render={({ field }) => (
                                  <InputText
                                    placeholder=""
                                    {...field}
                                    className="w-full"
                                  />
                                )}
                                name="wardnumber"
                                control={control}
                                rules={{ required: "This field is required" }}
                              />
                              {/* <Controller
                        render={({ field }) => (
                            <AutoComplete field="name" multiple value={selectedwardnumber} suggestions={filteredCountries} completeMethod={(e)=>{search(e,wardnumber),handleCreate(e,wardnumber,setWardNumber,"wardnumber")}} onChange={(e) => {setSelectedWardNumber(e.value),setValue("wardnumber",e.value)}} />
                        )}
                        name="wardnumber"
                        control={control}
                      /> */}
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel header="संपत्ती">
                    <div className="grid lg:grid-cols-12 xl:gap-[0.250vw] gap-5 divide-x-2">
                      <div className="col-span-12">
                        <div className="grid lg:grid-cols-12 xl:gap-[1.250vw] gap-5">
                          <div className="col-span-4 ">
                            <label className="block label-text">
                              <span className="block mb-1">जमीन</span>
                              {/* <Controller
                    render={({ field }) => (
                      <InputText placeholder="" {...field} className="w-full" />
                    )}
                    name="jamin"
                    control={control}
                    rules={{ required: 'This field is required' }}
                  /> */}

                              <Controller
                                render={({ field }) => (
                                  <AutoComplete
                                    field="name"
                                    multiple
                                    value={selectedjamin}
                                    suggestions={filteredCountries}
                                    completeMethod={(e) => {
                                      search(e, jamin),
                                        handleCreate(
                                          e,
                                          jamin,
                                          setJamin,
                                          "jamin"
                                        );
                                    }}
                                    onChange={(e) => {
                                      setSelectedJamin(e.value),
                                        setValue("jamin", e.value);
                                    }}
                                  />
                                )}
                                name="jamin"
                                control={control}
                              />
                            </label>
                          </div>

                          <div className="col-span-4 ">
                            <label className="block label-text">
                              <span className="block mb-1">शेती</span>
                              {/* <Controller
                    render={({ field }) => (
                      <InputText placeholder="" {...field} className="w-full" />
                    )}
                    name="sheti"
                    control={control}
                    rules={{ required: 'This field is required' }}
                  /> */}
                              <Controller
                                render={({ field }) => (
                                  <AutoComplete
                                    field="name"
                                    multiple
                                    value={selectedSheti}
                                    suggestions={filteredCountries}
                                    completeMethod={(e) => {
                                      search(e, sheti),
                                        handleCreate(
                                          e,
                                          sheti,
                                          setSheti,
                                          "sheti"
                                        );
                                    }}
                                    onChange={(e) => {
                                      setSelectedSheti(e.value),
                                        setValue("jamin", e.value);
                                    }}
                                  />
                                )}
                                name="sheti"
                                control={control}
                              />
                            </label>
                          </div>
                          <div className="col-span-4 ">
                            <label className="block label-text">
                              <span className="block mb-1">घरे</span>
                              <Controller
                                render={({ field }) => (
                                  <Dropdown
                                    {...field}
                                    options={homeDataData}
                                    optionLabel="name"
                                    placeholder="पर्याय निवडा"
                                    filter
                                    className="w-full"
                                    onChange={(e) => {
                                      setValue("ghare", e.value);
                                    }}
                                  />
                                )}
                                name="ghare"
                                control={control}
                              />
                            </label>
                          </div>

                          <div className="col-span-4 ">
                            <label className="block label-text">
                              <span className="block mb-1">
                                आर्थिक विश्लेषण
                              </span>
                              {/* <Controller
                    render={({ field }) => (
                      <InputText placeholder="" {...field} className="w-full" />
                    )}
                    name="aarthikvishleshan"
                    control={control}
                    rules={{ required: 'This field is required' }}
                  /> */}
                              <Controller
                                render={({ field }) => (
                                  <AutoComplete
                                    field="name"
                                    multiple
                                    value={selectedAarthikVishleshan}
                                    suggestions={filteredCountries}
                                    completeMethod={(e) => {
                                      search(e, aarthikvishleshan),
                                        handleCreate(
                                          e,
                                          aarthikvishleshan,
                                          setAarthikVishleshan,
                                          "aarthikvishleshan"
                                        );
                                    }}
                                    onChange={(e) => {
                                      setSelectedAarthikVishleshan(e.value),
                                        setValue("aarthikvishleshan", e.value);
                                    }}
                                  />
                                )}
                                name="aarthikvishleshan"
                                control={control}
                              />
                            </label>
                          </div>
                        </div>
                        <div className="mt-2 w-[]">
                          <div className="flex w-[400px] ">
                            <label className="block label-text">
                              <span className="block mb-1">जनावरे </span>
                              <Controller
                                render={({ field }) => (
                                  <Dropdown
                                    {...field}
                                    options={adharData}
                                    optionLabel="name"
                                    placeholder="पर्याय निवडा"
                                    filter
                                    className="w-full"
                                    onChange={(e) => {
                                      setValue("janavare", e.value);
                                      setJanavarValue(e.value.name);
                                    }}
                                  />
                                )}
                                name="janavare"
                                control={control}
                              />
                            </label>
                          </div>

                          {janavarValue === "हो" ? (
                            <>
                              {janavarSections.map((section, index) => (
                                <div
                                  key={index}
                                  className="grid grid-cols-12 gap-3"
                                >
                                  <div className="col-span-3 mt-2">
                                    <label className="block label-text">
                                      <span className="block mb-1">
                                        जनावरांची नावे
                                      </span>
                                      <InputText
                                        placeholder=""
                                        value={section.animalname || ""} // Set the initial value
                                        onChange={(e) =>
                                          handleAnimalChangeChange(
                                            index,
                                            "animalname",
                                            e.target.value
                                          )
                                        }
                                      />
                                    </label>
                                  </div>

                                  <div className="col-span-3 mt-2">
                                    <label className="block label-text">
                                      <span className="block mb-1">
                                        जनावरांचे जन्मदिवस
                                      </span>
                                      <Calendar
                                        className="w-full"
                                        value={
                                          section.animalboardate
                                            ? new Date(section.animalboardate)
                                            : null
                                        } // Set the initial value
                                        onChange={(e) =>
                                          handleAnimalChangeChange(
                                            index,
                                            "animalboardate",
                                            e.value
                                          )
                                        }
                                      />
                                    </label>
                                  </div>

                                  <div className="col-span-3 mt-2">
                                    <label className="block label-text">
                                      <span className="block mb-1">
                                        जनावरांचे वय
                                      </span>
                                      <InputText
                                        placeholder=""
                                        value={section.animalage || ""} // Set the initial value
                                        disabled
                                        onChange={(e) =>
                                          handleAnimalChangeChange(
                                            index,
                                            "animalage",
                                            e.target.value
                                          )
                                        }
                                      />
                                    </label>
                                  </div>
                                </div>
                              ))}

                              {/* Add More button outside the map to avoid duplication */}
                              <div className="flex justify-between">
                                <div className="w-[100px] mt-4">
                                  <p
                                    onClick={handleAddMoreJanavar}
                                    className="pre_btn cursor-pointer"
                                  >
                                    Add More
                                  </p>
                                </div>
                                <div className="w-[100px] mt-4">
                                  <p
                                    onClick={handleRemoveJanavare}
                                    className="pre_btn cursor-pointer"
                                  >
                                    Remove
                                  </p>
                                </div>
                              </div>
                            </>
                          ) : null}
                        </div>
                        <div className="mt-2 w-[]">
                          <div className="flex w-[400px] ">
                            <label className="block label-text">
                              <span className="block mb-1">वाहन </span>
                              <Controller
                                render={({ field }) => (
                                  <Dropdown
                                    {...field}
                                    options={adharData}
                                    optionLabel="name"
                                    placeholder="पर्याय निवडा"
                                    filter
                                    className="w-full"
                                    onChange={(e) => {
                                      setValue("vahane", e.value);
                                      setVahane(e.value.name);
                                    }}
                                  />
                                )}
                                name="vahane"
                                control={control}
                              />
                            </label>
                          </div>

                          {vahane === "हो" ? (
                            <>
                              {vahaneSections.map((section, index) => (
                                <div
                                  key={index}
                                  className="grid grid-cols-12 gap-3"
                                >
                                  <div className="col-span-3 mt-2">
                                    <label className="block label-text">
                                      <span className="block mb-1">
                                        वाहन नंबर
                                      </span>
                                      <InputText
                                        placeholder=""
                                        value={section.animalage || ""} // Set the initial value
                                        onChange={(e) =>
                                          handleChange(
                                            index,
                                            "animalage",
                                            e.target.value
                                          )
                                        }
                                      />
                                    </label>
                                  </div>

                                  <div className="col-span-3 mt-2">
                                    <label className="block label-text">
                                      <span className="block mb-1">
                                        वाहन नंबर
                                      </span>
                                      <Calendar
                                        className="w-full"
                                        value={
                                          section.vahanestartdate
                                            ? new Date(section.vahanestartdate)
                                            : null
                                        } // Set the initial value
                                        onChange={(e) =>
                                          handleChange(
                                            index,
                                            "vahanestartdate",
                                            e.value
                                          )
                                        }
                                      />
                                    </label>
                                  </div>

                                  <div className="col-span-3 mt-2">
                                    <label className="block label-text">
                                      <span className="block mb-1">
                                        वाहन नंबर
                                      </span>
                                      <Calendar
                                        className="w-full"
                                        value={
                                          section.vahaneenddate
                                            ? new Date(section.vahaneenddate)
                                            : null
                                        } // Set the initial value
                                        onChange={(e) =>
                                          handleChange(
                                            index,
                                            "vahaneenddate",
                                            e.value
                                          )
                                        }
                                      />
                                    </label>
                                  </div>

                                  <div className="col-span-3 mt-2">
                                    <label className="block label-text">
                                      <span className="block mb-1">model</span>
                                      <InputText
                                        placeholder=""
                                        value={section.vahannumber || ""} // Set the initial value
                                        onChange={(e) =>
                                          handleChange(
                                            index,
                                            "vahanmodel",
                                            e.target.value
                                          )
                                        }
                                      />
                                    </label>
                                  </div>
                                </div>
                              ))}

                              {/* Add More button outside the map to avoid duplication */}
                              <div className="flex justify-between">
                                <div className="w-[100px] mt-4">
                                  <p
                                    onClick={handleAddMore}
                                    className="pre_btn cursor-pointer"
                                  >
                                    Add More
                                  </p>
                                </div>
                                <div className="w-[100px] mt-4">
                                  <p
                                    onClick={handleRemove}
                                    className="pre_btn cursor-pointer"
                                  >
                                    Remove
                                  </p>
                                </div>
                              </div>
                            </>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel header="राजकीय/समाजकार्य">
                    <div className="grid lg:grid-cols-12 xl:gap-[0.250vw] gap-5 divide-x-2">
                      <div className="col-span-12">
                        <div className="grid lg:grid-cols-12 xl:gap-[1.250vw] gap-5">
                          <div className="col-span-4 ">
                            <label className="block label-text">
                              <span className="block mb-1">समाजकार्य</span>
                              <Controller
                                render={({ field }) => (
                                  <Dropdown
                                    {...field}
                                    options={adharData}
                                    optionLabel="name"
                                    placeholder="पर्याय निवडा"
                                    filter
                                    className="w-full"
                                    onChange={(e) => {
                                      setValue("samjkarya", e.value);
                                      setSelectedSamajKarya(e.value.name);
                                    }}
                                  />
                                )}
                                name="samjkarya"
                                control={control}
                              />
                            </label>
                          </div>

                          {selectedsamjkarya === "हो" ? (
                            <div className="col-span-4 ">
                              <label className="block label-text">
                                <span className="block mb-1">समाजकार्य</span>
                                <Controller
                                  render={({ field }) => (
                                    <AutoComplete
                                      field="name"
                                      multiple
                                      value={selectedSmajkaryaName}
                                      suggestions={filteredCountries}
                                      completeMethod={(e) => {
                                        search(e, samajkaryaList),
                                          handleCreate(
                                            e,
                                            samajkaryaList,
                                            setsamajkaryaList,
                                            "samajkaryavalue"
                                          );
                                      }}
                                      onChange={(e) => {
                                        setSelectedSmajkaryaName(e.value),
                                          setValue("samajkaryavalue", e.value);
                                      }}
                                    />
                                  )}
                                  name="samajkaryavalue"
                                  control={control}
                                />
                              </label>
                            </div>
                          ) : null}

                          <div className="col-span-4 ">
                            <label className="block label-text">
                              <span className="block mb-1">राजकीय पद </span>
                              <Controller
                                render={({ field }) => (
                                  <Dropdown
                                    {...field}
                                    options={adharData}
                                    optionLabel="name"
                                    placeholder="पर्याय निवडा"
                                    filter
                                    className="w-full"
                                    onChange={(e) => {
                                      setValue("rajkiypad", e.value);
                                      setSelectedRajkiypadOption(e.value.name);
                                    }}
                                  />
                                )}
                                name="rajkiypad"
                                control={control}
                              />
                            </label>
                          </div>

                          {selectedRajkiypadOption === "हो" ? (
                            <div className="col-span-4 ">
                              <label className="block label-text">
                                <span className="block mb-1">राजकीय पद </span>
                                <Controller
                                  render={({ field }) => (
                                    <AutoComplete
                                      field="name"
                                      multiple
                                      value={selectedRajkiyPad}
                                      suggestions={filteredCountries}
                                      completeMethod={(e) => {
                                        search(e, rajkiyPadNameList),
                                          handleCreate(
                                            e,
                                            rajkiyPadNameList,
                                            setrajkiyPadNameList,
                                            "rajkiyPadName"
                                          );
                                      }}
                                      onChange={(e) => {
                                        setSelectedRajkiyPad(e.value),
                                          setValue("rajkiyPadName", e.value);
                                      }}
                                    />
                                  )}
                                  name="rajkiyPadName"
                                  control={control}
                                />
                                {/* <Controller
                        render={({ field }) => (
                            <AutoComplete field="name" multiple value={selectedRajkiyPad} suggestions={filteredCountries} completeMethod={(e)=>{search(e,rajkiyPadNameList),handleCreate(e,rajkiyPadNameList,setrajkiyPadNameList,"rajkiyPadName")}} onChange={(e) => {setSelectedRajkiyPad(e.value),setValue("rajkiyPadName",e.value)}} />
                        )}
                        name="rajkiyPadName"
                        control={control}
                      /> */}
                              </label>
                            </div>
                          ) : null}
                          <div className="col-span-4 ">
                            <label className="block label-text">
                              <span className="block mb-1">
                                राजकीय विश्लेषण
                              </span>
                              {/* <Controller
                    render={({ field }) => (
                      <InputText placeholder="" {...field} className="w-full" />
                    )}
                    name="rajkiyvishleshan"
                    control={control}
                    rules={{ required: 'This field is required' }}
                  /> */}
                              <Controller
                                render={({ field }) => (
                                  <AutoComplete
                                    field="name"
                                    multiple
                                    value={selectedRajkiyvishleshan}
                                    suggestions={filteredCountries}
                                    completeMethod={(e) => {
                                      search(e, rajkiyvishleshan),
                                        handleCreate(
                                          e,
                                          rajkiyvishleshan,
                                          setRajkiyvishleshan,
                                          "rajkiyvishleshan"
                                        );
                                    }}
                                    onChange={(e) =>
                                      setSelectedRajkiyVishleshan(e.value)
                                    }
                                  />
                                )}
                                name="rajkiyvishleshan"
                                control={control}
                              />
                            </label>
                          </div>
                          <div className="col-span-4 ">
                            <label className="block label-text">
                              <span className="block mb-1">राजकीय पक्ष</span>
                              {/* <Controller
                    render={({ field }) => (
                      <InputText placeholder="" {...field} className="w-full" />
                    )}
                    name="rajkiypaksh"
                    control={control}
                    rules={{ required: 'This field is required' }}
                  /> */}
                              <Controller
                                render={({ field }) => (
                                  <AutoComplete
                                    field="name"
                                    multiple
                                    value={selectedRajkiypaksh}
                                    suggestions={filteredCountries}
                                    completeMethod={(e) => {
                                      search(e, rajkiypaksh),
                                        handleCreate(
                                          e,
                                          rajkiypaksh,
                                          setRajkiypaksh,
                                          "rajkiypaksh"
                                        );
                                    }}
                                    onChange={(e) =>
                                      setSelectedRajkiypaksh(e.value)
                                    }
                                  />
                                )}
                                name="rajkiypaksh"
                                control={control}
                              />
                            </label>
                          </div>
                          <div className="col-span-4 ">
                            <label className="block label-text">
                              <span className="block mb-1">संदर्भ</span>
                              <Controller
                                render={({ field }) => (
                                  <Dropdown
                                    {...field}
                                    options={adharData}
                                    optionLabel="name"
                                    placeholder="पर्याय निवडा"
                                    filter
                                    className="w-full"
                                    onChange={(e) => {
                                      setValue("sadharabh", e.value);
                                      setsadharabh(e.value.name);
                                    }}
                                  />
                                )}
                                name="sadharabh"
                                control={control}
                              />
                            </label>
                          </div>

                          {sadharabh === "हो" ? (
                            <>
                              <div className="col-span-4 ">
                                <label className="block label-text">
                                  <span className="block mb-1">नाव</span>
                                  <Controller
                                    render={({ field }) => (
                                      <InputText
                                        placeholder=""
                                        {...field}
                                        className="w-full"
                                      />
                                    )}
                                    name="sandharabhname"
                                    control={control}
                                  />
                                </label>
                              </div>

                              <div className="col-span-4 ">
                                <label className="block label-text">
                                  <span className="block mb-1">पत्ता </span>
                                  <Controller
                                    render={({ field }) => (
                                      <InputText
                                        placeholder=""
                                        {...field}
                                        className="w-full"
                                      />
                                    )}
                                    name="sandharabhaddress"
                                    control={control}
                                  />
                                </label>
                              </div>

                              <div className="col-span-4 ">
                                <label className="block label-text">
                                  <span className="block mb-1">फोन </span>
                                  <Controller
                                    render={({ field }) => (
                                      <InputText
                                        placeholder=""
                                        {...field}
                                        className="w-full"
                                      />
                                    )}
                                    name="sandharabhphone"
                                    control={control}
                                  />
                                </label>
                              </div>
                            </>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel header="बँक/शेअर">
                    <div className="grid lg:grid-cols-12 xl:gap-[0.250vw] gap-5 divide-x-2">
                      <div className="col-span-12">
                        <div className="grid lg:grid-cols-12 xl:gap-[1.250vw] gap-5">
                          <div className="col-span-4 ">
                            <label className="block label-text">
                              <span className="block mb-1">बँक खाते </span>
                              <Controller
                                render={({ field }) => (
                                  <Dropdown
                                    {...field}
                                    options={adharData}
                                    optionLabel="name"
                                    placeholder="पर्याय निवडा"
                                    filter
                                    className="w-full"
                                    onChange={(e) => {
                                      setValue("bankkhate", e.value);
                                      setSelectedBankKhate(e.value.name);
                                    }}
                                  />
                                )}
                                name="bankkhate"
                                control={control}
                              />
                            </label>
                          </div>

                          {selectdedBankKhate === "हो" ? (
                            <div className="col-span-4 ">
                              <label className="block label-text">
                                <span className="block mb-1">बँक नाव </span>
                                <Controller
                                  render={({ field }) => (
                                    <AutoComplete
                                      field="name"
                                      multiple
                                      value={selectedBankName}
                                      suggestions={filteredCountries}
                                      completeMethod={(e) => {
                                        search(e, bankkhatenameist),
                                          handleCreate(
                                            e,
                                            bankkhatenameist,
                                            setbankkhatenameList,
                                            "bankkhatename"
                                          );
                                      }}
                                      onChange={(e) =>
                                        setSelectedBankName(e.value)
                                      }
                                    />
                                  )}
                                  name="bankkhatename"
                                  control={control}
                                />
                              </label>
                            </div>
                          ) : null}

                          {selectdedBankKhate === "हो" ? (
                            <div className="col-span-4 ">
                              <label className="block label-text">
                                <span className="block mb-1">खाते नं. </span>
                                {/* <Controller
                    render={({ field }) => (
                      <InputText placeholder="" {...field} className="w-full" />
                    )}
                    name="bankkhateno"
                    control={control}
                  /> */}
                                <Controller
                                  render={({ field }) => (
                                    <AutoComplete
                                      field="name"
                                      multiple
                                      value={selectedBankKhateno}
                                      suggestions={filteredCountries}
                                      completeMethod={(e) => {
                                        search(e, bankkhateno),
                                          handleCreate(
                                            e,
                                            bankkhateno,
                                            setBankKhateno,
                                            "bankkhateno"
                                          );
                                      }}
                                      onChange={(e) =>
                                        setSelectedBankKhateNo(e.value)
                                      }
                                    />
                                  )}
                                  name="bankkhateno"
                                  control={control}
                                />
                              </label>
                            </div>
                          ) : null}
                          <div className="col-span-4 ">
                            <label className="block label-text">
                              <span className="block mb-1">शेअर धारक</span>
                              <Controller
                                render={({ field }) => (
                                  <Dropdown
                                    {...field}
                                    options={adharData}
                                    optionLabel="name"
                                    placeholder="पर्याय निवडा"
                                    filter
                                    className="w-full"
                                    onChange={(e) => {
                                      setValue("sharedharak", e.value);
                                      setSelectedShareDharak(e.value.name);
                                    }}
                                  />
                                )}
                                name="sharedharak"
                                control={control}
                              />
                            </label>
                          </div>

                          {selectedShareDharak === "हो" ? (
                            <div className="col-span-4 ">
                              <label className="block label-text">
                                <span className="block mb-1">शेअर धारक </span>
                                <Controller
                                  render={({ field }) => (
                                    <AutoComplete
                                      field="name"
                                      multiple
                                      value={selectedShareDharakName}
                                      suggestions={filteredCountries}
                                      completeMethod={(e) => {
                                        search(e, sharedharakenameList),
                                          handleCreate(
                                            e,
                                            sharedharakenameList,
                                            setsharedharakenameList,
                                            "sharedharakename"
                                          );
                                      }}
                                      onChange={(e) => {
                                        setSelectedShareDharakName(e.value),
                                          setValue("sharedharakename", e.value);
                                      }}
                                    />
                                  )}
                                  name="sharedharakename"
                                  control={control}
                                />
                              </label>
                            </div>
                          ) : null}

                          <div className="col-span-4 ">
                            <label className="block label-text">
                              <span className="block mb-1">विमा</span>
                              <Controller
                                render={({ field }) => (
                                  <Dropdown
                                    {...field}
                                    options={adharData}
                                    optionLabel="name"
                                    placeholder="पर्याय निवडा"
                                    filter
                                    className="w-full"
                                    onChange={(e) => {
                                      setValue("vima", e.value);
                                      setselectedvima(e.value.name);
                                    }}
                                  />
                                )}
                                name="vima"
                                control={control}
                              />
                            </label>
                          </div>
                          {selectedvima == "हो" ? (
                            <div className="col-span-4 ">
                              <label className="block label-text">
                                <span className="block mb-1">विमा </span>
                                <Controller
                                  render={({ field }) => (
                                    <AutoComplete
                                      field="name"
                                      multiple
                                      value={selectedVima}
                                      suggestions={filteredCountries}
                                      completeMethod={(e) => {
                                        search(e, setSelectedVimaList),
                                          handleCreate(
                                            e,
                                            selectedVimaList,
                                            setSelectedVimaList,
                                            "vimaname"
                                          );
                                      }}
                                      onChange={(e) => {
                                        setSelectedVima(e.value),
                                          setValue("vimaname", e.value);
                                      }}
                                    />
                                  )}
                                  name="vimaname"
                                  control={control}
                                />
                              </label>
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel header="मृत्यू">
                    <div className="grid lg:grid-cols-12 xl:gap-[0.250vw] gap-5 divide-x-2">
                      <div className="col-span-12">
                        <div className="grid lg:grid-cols-12 xl:gap-[1.250vw] gap-5 ">
                          <div className="col-span-4 ">
                            <label className="block label-text">
                              <span className="block mb-1">मृत्यू-</span>
                              <Controller
                                render={({ field }) => (
                                  <InputText
                                    placeholder=""
                                    {...field}
                                    className="w-full"
                                  />
                                )}
                                name="mritvu"
                                control={control}
                              />
                            </label>
                          </div>
                          <div className="col-span-4 ">
                            <label className="block label-text">
                              <span className="block mb-1">
                                मृत्यू प्रमाणपत्र-
                              </span>
                              <Controller
                                render={({ field }) => (
                                  <InputText
                                    placeholder=""
                                    {...field}
                                    className="w-full"
                                  />
                                )}
                                name="mritvupramanpatra"
                                control={control}
                              />
                            </label>
                          </div>
                          <div className="col-span-4 ">
                            <label className="block label-text">
                              <span className="block mb-1">तारीख-वार</span>
                              <Controller
                                render={({ field }) => (
                                  <Calendar
                                    {...field}
                                    className="w-full"
                                    onChange={(e) => {
                                      setValue("deathdate", e.value);
                                      setSelectedDeathDate(e.value);
                                    }}
                                  />
                                )}
                                name="deathdate"
                                control={control}
                              />
                            </label>
                          </div>

                          <div className="col-span-2 ">
                            <label className="block label-text">
                              <span className="block mb-1">या वर्षी वय</span>

                              <div className="text-[16px] font-semibold">
                                {selectedDeathDate && (
                                  <p>
                                    {calculateDeathAge()?.years && (
                                      <span className="text-[14px] mr-2">
                                        {" "}
                                        {calculateDeathAge().years} वर्ष
                                      </span>
                                    )}
                                    {calculateDeathAge()?.months && (
                                      <span className="text-[14px]">
                                        {" "}
                                        - {calculateDeathAge().months} महिने
                                      </span>
                                    )}
                                    {calculateDeathAge()?.days &&
                                    calculateDeathAge().days < 28 ? (
                                      <span className="text-[14px]">
                                        {" "}
                                        - {calculateDeathAge().days} days
                                      </span>
                                    ) : null}
                                  </p>
                                )}
                              </div>
                            </label>
                          </div>
                          <div className="col-span-4 ">
                            <label className="block label-text">
                              <span className="block mb-1">कारण</span>
                              <Controller
                                render={({ field }) => (
                                  <InputText
                                    placeholder=""
                                    {...field}
                                    className="w-full"
                                  />
                                )}
                                name="deathreason"
                                control={control}
                              />
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabPanel>
                </TabView>
              </div>
              <div className="px-3 py-5">
                <div className="flex justify-between mt-3 ">
                  <button
                    className="pre_btn"
                    disabled={activeIndex === 0 ? true : false}
                    onClick={handlePrev}
                  >
                    Prev
                  </button>
                  {activeIndex === 11 ? (
                    <div className="">
                      <button
                        className={` green_btn ${
                          pleaseLoading
                            ? "pointer-events-none opacity-40"
                            : null
                        }`}
                        type="submit"
                      >
                        {pleaseLoading ? "Please Wait..." : "Submit"}
                      </button>
                    </div>
                  ) : (
                    <p className="next_btn" onClick={handleNext}>
                      Next
                    </p>
                  )}
                </div>
              </div>
            </form>
          </div>
          <div></div>
        </div>
      </Layout>
    </>
  );
}
