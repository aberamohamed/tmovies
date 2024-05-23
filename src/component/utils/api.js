import axios from "axios";
import { Modal } from "antd";
import Router from "next/router";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  // headers: {
  //   'Content-Type': 'application/json',
  //   Authorization: `Bearer ${localStorage.getItem('token')}`,
  // },
});

export const getMenuAPI = axios.create({
  baseURL: process.env.NEXT_PUBLIC_GET_MENU_BASE_URL,
  // headers: {
  //   'Content-Type': 'application/json',
  //   Authorization: `Bearer ${localStorage.getItem('token')}`,
  // },
});
export const postData = async (params, url, gridRefresh) => {
  try {
    const header = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    const response = await api.post(url, params, header);
    if (response.data.success === true) {
      Modal.success({
        content: response.data.data,
      });
      gridRefresh();
    } else {
      Modal.error({
        content:
          response.data.data.length == 0
            ? response.data.message
            : response.data.data,
      });
    }
    return response.data;
  } catch (error) {
    // Error handling here (e.g., logging or custom error processing)
    console.log(error);
  }
};
export const getData = async (params, url) => {
  try {
    const header = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("token")}`,
      },
    };
    const response = await api.get(url, { params, ...header });
    return response.data;
  } catch (error) {
    // Error handling here (e.g., logging or custom error processing)
    //throw error.response.data;
    if (error.response.status == 401) {
      Modal.error({
        content: "Token expired login again",
        onOk: () => {
          Router.push("/");
        },
      });
    } else {
      Modal.error({
        content: "Something went wrong",
      });
    }
  }
};
export const getMenu = async (url) => {
  try {
    const header = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("token")}`,
      },
    };
    const response = await getMenuAPI.get(url, { ...header });
    return response.data;
  } catch (error) {
    // Error handling here (e.g., logging or custom error processing)
    //throw error.response.data;
    if (error.response.status == 401) {
      Modal.error({
        content: "Token expired login again",
        onOk: () => {
          Router.push("/");
        },
      });
    } else {
      Modal.error({
        content: "Something went wrong",
      });
    }
  }
};
export const login = async ({ uid, password }, url) => {
  try {
    const header = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const data = {
      data: {
        uid: uid,
        password: password,
      },
    };
    const response = await getMenuAPI.post(url, data, header);
    console.log(response);
    if (response.data.responseCode === 0) {
      localStorage.setItem("token", response.data.data.auth_token);
      // localStorage.setItem("userInfo", JSON.stringify(response.data.userInfo));
      Router.push("/dashboard");
    } else {
      Modal.error({
        content: response.data.data,
      });
    }
    return response.data;
  } catch (error) {
    // Error handling here (e.g., logging or custom error processing)
    console.log(error);
    throw error.response.data;
  }
};
export const exportFile = async (params, url, gridRefresh) => {
  try {
    const header = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    const response = await api.post(url, params, header);
    if (response.data.success === true) {
      let base_url = process.env.NEXT_PUBLIC_API_BASE_URL;
      base_url = base_url.replace("public", "");
      console.log(base_url + response.data.filename);
      downloadExcelFile(base_url + response.data.filename);
      // if (params.type == "PDF") window.open(process.env.NEXT_PUBLIC_API_BASE_URL + response.filename, 'PDFWindow', 'toolbar=0,menubar=0,location=0,di rectories=0,status=0,resizable=0');
      // else if (params.type == "WORD") window.open(process.env.NEXT_PUBLIC_API_BASE_URL + response.filename);
      // else window.location = process.env.NEXT_PUBLIC_API_BASE_URL + response.filename;
    } else {
      Modal.error({
        content: response.data.data,
      });
    }
    return response.data;
  } catch (error) {
    // Error handling here (e.g., logging or custom error processing)
    console.log(error);
  }
};
export const exportReceipt = async (transactionId, url) => {
  try {
    const header = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    let base_url = process.env.NEXT_PUBLIC_RECEIPT_BASE_URL;
    const response = await axios.get(base_url + url + transactionId);
    if (response.data.success === true) {
      base_url = base_url.replace("public", "");
      console.log(base_url + response.data.filename);
      downloadExcelFile(base_url + response.data.filename);
      // if (params.type == "PDF") window.open(process.env.NEXT_PUBLIC_API_BASE_URL + response.filename, 'PDFWindow', 'toolbar=0,menubar=0,location=0,di rectories=0,status=0,resizable=0');
      // else if (params.type == "WORD") window.open(process.env.NEXT_PUBLIC_API_BASE_URL + response.filename);
      // else window.location = process.env.NEXT_PUBLIC_API_BASE_URL + response.filename;
    } else {
      Modal.error({
        content: response.data.data,
      });
    }
    return response.data;
  } catch (error) {
    // Error handling here (e.g., logging or custom error processing)
    console.log(error);
  }
};
function downloadExcelFile(url) {
  // Create an anchor element
  const downloadLink = document.createElement("a");
  downloadLink.href = url;
  downloadLink.target = "_blank";

  // Setting the file name (optional)
  //downloadLink.download = "filename.xlsx";

  // Trigger the download by simulating a click
  document.body.appendChild(downloadLink);
  downloadLink.click();

  // Cleanup: remove the element after download
  document.body.removeChild(downloadLink);
}
