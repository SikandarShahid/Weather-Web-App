import Swal from 'sweetalert2';

export const ErrorAlert=(err)=> Swal.fire({
    icon: 'error',
    // title:`<span style="color:#3A4CEA">Error<span>`,
    text:`${err&&err.response&&err.response.data&&err.response.data.message?err.response.data.message.toLocaleUpperCase():"Some thing Went Wrong ! Contact to Support"}`,
    background:"#fff",
    confirmButtonColor:"#3A4CEA",
    iconColor:"#3A4CEA"
  })