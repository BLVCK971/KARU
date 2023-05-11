import { createSignal } from "solid-js";
import "./Header.css";

export default function Header() {
  //   const [count, setCount] = createSignal(0);
  return (
      <div class="Header Header-Background">
        <div class="Title">PosiBoycott</div>
        <input type="text" class="SearchBar"></input>

        <div class="UserButton">
          <svg
            class="UserIcon"
            width="20"
            height="22"
            viewBox="0 0 20 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.0118 10.698C12.5917 10.698 14.7811 8.44469 14.7811 5.52931C14.7811 2.68363 12.5799 0.5 10.0118 0.5C7.43195 0.5 5.21894 2.71847 5.23077 5.55254C5.23077 8.44469 7.42012 10.698 10.0118 10.698ZM2.62722 21.5H17.3728C19.3254 21.5 20 20.9192 20 19.8507C20 16.8656 16.142 12.7539 10 12.7539C3.86982 12.7539 0 16.8656 0 19.8507C0 20.9192 0.674556 21.5 2.62722 21.5Z"
              fill="white"
            />
          </svg>
        </div>
        <div class="SearchButton">
          <svg
            class="SearchIcon"
            width="22"
            height="20"
            viewBox="0 0 22 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.725 18.3126L17.015 14.6326C18.4551 12.837 19.1525 10.5579 18.9639 8.26391C18.7752 5.96991 17.7147 3.83539 16.0006 2.29925C14.2864 0.763116 12.0488 -0.0578805 9.74796 0.00507995C7.44708 0.0680404 5.25776 1.01017 3.63018 2.63775C2.0026 4.26533 1.06047 6.45465 0.997512 8.75553C0.934551 11.0564 1.75555 13.294 3.29169 15.0081C4.82782 16.7223 6.96234 17.7827 9.25634 17.9714C11.5503 18.1601 13.8295 17.4627 15.625 16.0226L19.305 19.7026C19.398 19.7963 19.5086 19.8707 19.6305 19.9215C19.7523 19.9723 19.883 19.9984 20.015 19.9984C20.1471 19.9984 20.2778 19.9723 20.3996 19.9215C20.5215 19.8707 20.6321 19.7963 20.725 19.7026C20.9053 19.5161 21.006 19.2669 21.006 19.0076C21.006 18.7483 20.9053 18.4991 20.725 18.3126ZM10.015 16.0226C8.63057 16.0226 7.27719 15.6121 6.12605 14.8429C4.97491 14.0737 4.0777 12.9805 3.54788 11.7014C3.01807 10.4223 2.87945 9.01484 3.14954 7.65698C3.41964 6.29911 4.08633 5.05183 5.06529 4.07286C6.04426 3.09389 7.29154 2.42721 8.64941 2.15711C10.0073 1.88702 11.4147 2.02564 12.6938 2.55545C13.9729 3.08527 15.0662 3.98247 15.8353 5.13362C16.6045 6.28476 17.015 7.63814 17.015 9.02261C17.015 10.8791 16.2775 12.6596 14.9648 13.9724C13.652 15.2851 11.8716 16.0226 10.015 16.0226Z"
              fill="#FAFEFF"
            />
          </svg>
        </div>
      </div>
  );
}

// $(document).ready(function () {
//   var url = '@Url.Content("~/")' + "Home/GetReportsByService";
//   var ddlsource = ".servicesdropdown";
//   $.getJSON(url, { serviceId: $(ddlsource).val() }, function (data) {
//       var items = '';
//       $(".rprt").empty();
//       $.each(data, function (i, zd) {
//           console.log(zd);
//           items += "<a class='nav-label' href='/Report/Display/" + zd.id + "' >" + zd.valeur + "</a>"
//           //items += "<option value='" + zd.value + "'>" + zd.text + "</option>";
//       });
//       $('.rprt').html(items);
//   });

//   url = '@Url.Content("~/")' + "Home/GetServicesByUser";
//   $.getJSON(url, function (data) {
//       var items = '';
//       items += "<option value='null'>Tous</option>";
//       $.each(data, function (i, zd) {
//           items += "<option value='" + zd.id + "'>" + zd.valeur + "</option>";
//       });
//       $('.servicesdropdown').html(items);
//   });
//   $("a").on("mousedown", ev => ev.preventDefault());

// });
//   $('.servicesdropdown').change(function () {
//   var url = '@Url.Content("~/")' + "Home/GetReportsByService";
//   var ddlsource = ".servicesdropdown";
//   console.log($(ddlsource).val());
//   $.getJSON(url, { serviceId: $(ddlsource).val() }, function (data) {
//       var items = '';
//       $(".rprt").empty();
//       $.each(data, function (i, zd) {
//           console.log(zd);
//           items += "<a class='nav-label' href='/Report/Display/" + zd.id + "' >" + zd.valeur + "</a>"
//           //items += "<option value='" + zd.value + "'>" + zd.text + "</option>";
//       });
//       $('.rprt').html(items);
//   });
// });

// function filterFunction() {
//   var input, filter, ul, li, a, i;
//   input = document.getElementsByClassName("myInput")[0];
//   filter = input.value.toUpperCase();
//   div = document.getElementsByClassName("rprt")[0];
//   a = div.getElementsByTagName("a");
//   for (i = 0; i < a.length; i++) {
//       txtValue = a[i].textContent || a[i].innerText;
//       if (txtValue.toUpperCase().indexOf(filter) > -1) {
//           a[i].style.display = "";
//       } else {
//           a[i].style.display = "none";
//       }
//   }
// }
