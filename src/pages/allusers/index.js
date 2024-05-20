import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/layout/layout";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { InputText } from "primereact/inputtext";
import { Sidebar } from "primereact/sidebar";
import axios from "axios";
import { useRouter } from "next/router";
import * as XLSX from 'xlsx';
import { Toast } from "primereact/toast";
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { ProgressSpinner } from "primereact/progressspinner";
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';

export default function AllUsers() {
  const [rowClick, setRowClick] = useState(true);
  const [selectedProducts, setSelectedProducts] = useState(null);
  const [TimelinePopup, setTimelinePopup] = useState(false);
  const [filterObjData, setFilterObj] = useState({});
  const [tableData, setTableData] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();
    const toast = useRef();
    const [globalFilterValue, setGlobalFilterValue] = useState('');
    const [filters, setFilters] = useState({
      global: { value: null, matchMode: FilterMatchMode.CONTAINS },
      name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
      'country.name': { value: null, matchMode: FilterMatchMode.STARTS_WITH },
      representative: { value: null, matchMode: FilterMatchMode.IN },
      status: { value: null, matchMode: FilterMatchMode.EQUALS },
      verified: { value: null, matchMode: FilterMatchMode.EQUALS }
  });

  console.log("filters",filters);
  const products = [
   
    {
      id: "CH-01",
      title: "सुजित संभाजी यादव",
      quarter: "01.11.1992",
      geography: "Male",
      sbu: "8975573718",
      category: "बाधकाम व्यवसाय ",
      subCategory: "हिंदू",
      year: "मराठा",
      halfYearly: "-",
      
      publishedDate: "Engineering",
      lastUpdated: "o+",
    }
   
   
  ];

  useEffect(() => {
    // On the other page
    const storedFilterData = localStorage.getItem('filterdData');
    const filterData = storedFilterData ? JSON.parse(storedFilterData) : {};
    setFilterObj(filterData)

}, [])

const getFilteredObject = () => {

  let data = {

  };
  let filterObj = {};
  Object.keys(filterObjData).forEach((field) => {
      if (filterObjData[field]) {
          filterObj[field] = filterObjData[field];
      }
  });

  data.filters = filterObj;

  return data;
}
const apiFetch = async () => {
  const resp = await axios.post("https://surveybackend-cjev.onrender.com/api/user/filter", getFilteredObject());
  if (resp.data.responseStatus === "success") {
      setTableData(resp.data.responseData);
      setIsLoading(false)
  }
}

 

const handleDownload = (data,filename) => {
  const filteredData =  data;

  const workbook = XLSX.utils.book_new();
  const worksheet = XLSX.utils.json_to_sheet(filteredData);
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet 1');

  // Save the workbook to a file
  XLSX.writeFile(workbook, `${filename}.xlsx`);
};

const onGlobalFilterChange = (e) => {
  const value = e.target.value;
  let _filters = { ...filters };

  _filters['global'].value = value;

  setFilters(_filters);
  setGlobalFilterValue(value);
};




useEffect(() => {
  apiFetch();
}, [isLoading])
const deleteRecord = async (id) => {
  setIsLoading(true)
  const resp = await axios.delete(`https://surveybackend-cjev.onrender.com/api/user/${id}`);
  if (resp?.data?.responseStatus === "success") {
      setIsLoading(false)
      toast.current.show({ severity: 'success', summary: 'Success', detail: "Deleted Successfully", life: 3000, sticky: true });
  } else {
      toast.current.show({ severity: 'error', summary: 'error', detail:"Not deleted", life: 3000, sticky: true });
  }
}

const editClick = (id) => {
  router.push(`/adduser?id=${id}`)
}
  const actionTemplate = (product) => {
    return (
      <div className="flex items-center gap-4 ">
       
       <Link
          href={""}
          className="leading-none"
         
        >
          <i className="pi pi-eye text-[18px] xl:text-[1vw]"></i>
        </Link>
         <button
          className="leading-none"
          onClick={() => editClick(product._id)}
        >
          <i className="pi pi-user-edit text-[18px] xl:text-[1vw]"></i>
        </button>
        <Link
          href={""}
          onClick={() => confirm2(product._id)}
          className="leading-none"
        >
          <i className="pi pi-trash text-[18px] xl:text-[1vw]"></i>
        </Link>
      </div>
    );
  };


  
  // console.log("result",result);
  const imageBodyTemplate = (product) => {
    return <div className="w-10 h-10"><img src={`https://surveybackend-cjev.onrender.com/${product.userImage}`} alt={product.image} className="w-10 h-10 rounded-full object-cover" /></div>;
};

const confirm2 = (id) => {
  confirmDialog({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      defaultFocus: 'reject',
      acceptClassName: 'p-button-danger',
      accept: () => deleteRecord(id),
      reject
  });
};


const reject = () => {
  toast.current.show({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
}

// const accept = () => {
//   toast.current.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
// }
console.log("globalFilterValue",globalFilterValue);
  return (
    <>
      <Layout pageTitle="Report Repository">
      <Toast ref={toast} />
      <ConfirmDialog />
     
                    <div className="bg-white border border-[#EAEDF3] rounded-[8px] overflow-hidden">
                    <div className="px-[20px] xl:px-[1.042vw] py-[14px] xl:py-[0.729vw] border-b border-[#EAEDF3]">
                      <div className="md:flex items-center gap-2 justify-between">
                        <div className="flex items-center gap-4">
                          <div className="text-[#101828] text-[16px] xl:text-[0.990vw] font-medium">
                             All Users
                          </div>
                          <div className="bg-[#696cff] px-[12px] xl:px-[0.725vw] py-[4px] xl:py-[0.308vw] text-[#fff] text-[12px] xl:text-[0.825vw] rounded-[16px] xl:rounded-[0.833vw] font-medium">
                            Display 1 to 10 of 150
                          </div>
                        </div>
                        <div className="md:flex items-center md:space-x-[24px] xl:space-x-[1.250vw] mt-3 md:mt-0">
                          <div className="col">
                            <div className="lg:block custSearch">
                              <span className="p-input-icon-left w-full">
                                <i className="pi pi-search" />
                                <InputText
                                 value={globalFilterValue}
                                 onChange={onGlobalFilterChange} 
                                  placeholder="Search"
                                  className="placeholder:text-[#888888] sm:w-full lg:w-full w-full xl:w-[16.927vw]"
                                />
                              </span>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <div onClick={()=>handleDownload(tableData,'usersData')} className="cursor-pointer flex items-center gap-2 rounded-[8px] border border-[#DDE1EA] text-[#6C768B] text-[14px] xl:text-[0.929vw] py-[10px] xl:py-[0.521vw] px-[16px] xl:px-[0.833vw]">
                              <i className="pi pi-download text-[16px] xl:text-[0.833vw]"></i>
                              Download
                            </div>
                            <Link href="/adduser" className="cursor-pointer bg-[#696cff] flex items-center gap-2 rounded-[8px] text-[#fff]  text-[14px] xl:text-[0.929vw] py-[10px] xl:py-[0.521vw] px-[16px] xl:px-[0.833vw]">
                              <i className="pi pi-plus text-[16px] xl:text-[0.533vw]"></i>
                              Add User
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <DataTable
                        value={tableData}
                        className="custTable tableCust custCheckBox"
                        scrollable
                        responsiveLayout="scroll"
                        loading={isLoading}
                        style={{ width: "100%" }}
                        paginator
                        paginatorTemplate="CurrentPageReport RowsPerPageDropdown PrevPageLink PageLinks NextPageLink"
                        currentPageReportTemplate="Rows per page {first}-{last} of {totalRecords}"
                        rows={12}
                        rowsPerPageOptions={[12, 25, 50]}
                        onSelectionChange={(e) => setSelectedProducts(e.value)}
                        // selectionMode={rowClick ? null : "checkbox"}
                        selection={selectedProducts}
                        dataKey="id"
                        showGridlines 
                        filters={filters}
                        globalFilterFields={['name', 'familynumber', 'dharm.name', 'selectedGender.name','phone','vaivsayname','upjat','bloodgroup','cast']}
                      >
                        {/* <Column
                          selectionMode="multiple"
                          headerStyle={{ width: "1rem" }}
                        ></Column> */}
                       
                       
                          <Column header="फोठो" body={imageBodyTemplate} />
                          <Column
                          field="familynumber"
                          header="कु.नं."
                          sortable
                          style={{ minWidth: "5rem" }}
                        ></Column>
                        <Column
                          field="name.name"
                          header="पूर्ण नाव"
                          sortable
                          style={{ minWidth: "10rem" }}
                        ></Column>
                        <Column
                          field="borndate"
                          header="जन्मदिनांक-"
                          
                          sortable
                          style={{ minWidth: "10rem" }}
                        ></Column>
                        <Column
                          field="selectedGender.name"
                          header="लिंग"
                          sortable
                          style={{ minWidth: "5rem" }}
                        ></Column>
                        <Column
                          field="phone"
                          header="फोन नं."
                          sortable
                          style={{ minWidth: "6rem" }}
                          
                        ></Column>
                        <Column
                          field="vaivsayname"
                          header="व्यवसाय"
                          sortable
                          style={{ minWidth: "10rem" }}
                          body={(rowData) => {
                         
                            if (rowData.vaivsayname && rowData.vaivsayname.length > 0) {
                              const firstVaivsayname = rowData.vaivsayname[0];
                              return (
                                <span>
                                  {firstVaivsayname.name}
                                </span>
                              );
                            } else {
                              return null;
                            }
                          }}
                        ></Column>
                        <Column
                          field="dharm.name"
                          header="धर्म"
                          sortable
                          style={{ minWidth: "6rem" }}
                        ></Column>
                        <Column
                          field="cast"
                          header="जात"
                          sortable
                          style={{ minWidth: "6rem" }}
                        ></Column>
                        <Column
                          field="upjat.name"
                          header="उपजात"
                          sortable
                          style={{ minWidth: "6rem" }}
                        ></Column>
                        
                        {/* <Column
                          SBU
                          SPOC
                          field="publishedDate"
                          header="शिक्षण"
                          sortable
                          style={{ minWidth: "10rem" }}
                        ></Column> */}
                        <Column
                          field="bloodgroup.name"
                          header="रक्तगट"
                          sortable
                          style={{ minWidth: "5rem" }}
                        ></Column>
                        <Column
                          field="action"
                          header="Action"
                          className="action-shadow-table"
                          frozen
                          alignFrozen="right"
                          align="center"
                          body={actionTemplate}
                          style={{ minWidth: "7rem" }}
                        ></Column>
                      </DataTable>
                    </div>
                  </div>
    
      
      </Layout>

      <Sidebar
        visible={TimelinePopup}
        onHide={() => setTimelinePopup(false)}
        position="right"
        className="sidebar-w-530 sidebar-shadow1 bdr-radius16"
        style={{
          background: "#FFF",
          border: "1px solid #EAEDF3",
        }}
      >
        <div className="xl:px-[1.250vw] px-5 xl:py-[0.990vw] py-4">
          <div
            onClick={() => setTimelinePopup(false)}
            className="text-[#4B586E] cursor-pointer text-[24px] xl:text-[1.250vw]"
          >
            <i className="rdmark-sidebar-back"></i>
          </div>
          <div className="mb-[24px] xl:mb-[1.250vw]">
            <div className="text-[#374151] text-[24px] xl:text-[1.250vw] font-semibold">
              Download File
            </div>
            <div className="text-[#9CA1AB] text-[16px] xl:text-[0.833vw]">
              Market Data Repository
            </div>
          </div>
          <div className="grid grid-cols-2 gap-[24px] xl:gap-[1.250vw]">
            <div className="col">
              <div className="h-full bg-white border border-[#E4E7EC] box-shadow1 rounded-[8px] xl:rounded-[0.417vw] p-[20px] xl:p-[1.042vw] text-center">
                <div className="space-y-[20px] xl:space-y-[1.042vw] mb-[40px] xl:mb-[2.083vw]">
                  <div className="mt-[30px] xl:mt-[1.563vw]">
                    <Image
                      src={"/assets/images/pdf.png"}
                      width={"37"}
                      height={"48"}
                      alt=""
                      className="mx-auto iconImg w-full"
                    />
                  </div>
                  <div className="text-[14px] xl:text-[0.729vw] text-[#24262D] font-medium">
                    Repository Data - MEA - MSG - Smartphones.pdf
                  </div>
                  <div className="text-[12px] xl:text-[0.625vw] text-[#6C768B]">
                    707.5KB
                  </div>
                </div>
                <Link
                  href={""}
                  className="inline-flex items-center gap-[8px] xl:gap-[0.417vw] rounded-[8px] xl:rounded-[0.417vw] border border-[#BECDE3] text-[#6C768B] text-[14px] xl:text-[0.729vw] py-[10px] xl:py-[0.521vw] px-[16px] xl:px-[0.833vw]"
                >
                  <i className="rdmark-data-download text-[16px] xl:text-[0.833vw]"></i>
                  Download
                </Link>
              </div>
            </div>
            <div className="col">
              <div className="h-full bg-white border border-[#E4E7EC] box-shadow1 rounded-[8px] xl:rounded-[0.417vw] p-[20px] xl:p-[1.042vw] text-center">
                <div className="space-y-[20px] xl:space-y-[1.042vw] mb-[40px] xl:mb-[2.083vw]">
                  <div className="mt-[30px] xl:mt-[1.563vw]">
                    <Image
                      src={"/assets/images/xls.png"}
                      width={"37"}
                      alt=""
                      height={"48"}
                      className="mx-auto iconImg w-full"
                    />
                  </div>
                  <div className="text-[14px] xl:text-[0.729vw] text-[#24262D] font-medium">
                    Repository Data - MEA - MSG - Smartphones.xls
                  </div>
                  <div className="text-[12px] xl:text-[0.625vw] text-[#6C768B]">
                    707.5KB
                  </div>
                </div>

                <Link
                  href={""}
                  className="inline-flex items-center gap-[8px] xl:gap-[0.417vw] rounded-[8px] xl:rounded-[0.417vw] border border-[#BECDE3] text-[#6C768B] text-[14px] xl:text-[0.729vw] py-[10px] xl:py-[0.521vw] px-[16px] xl:px-[0.833vw]"
                >
                  <i className="rdmark-data-download text-[16px] xl:text-[0.833vw]"></i>
                  Download
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Sidebar>
    </>
  );
}
