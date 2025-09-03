document.writeln(`
   <div class="dropdown">
      <a role="button" data-bs-toggle="dropdown" href="#dropdownLang" class="nav-link d-flex align-items-center gap-2 text-capitalize text-reset h-100 dropdown-toggle">
         <img id="currentFlag" src="https://flagcdn.com/w40/us.png" alt="US English" width="16" height="12">
         <span id="currentLang" class="link-text" data-i18n="navlangTitle">english</span>
      </a>
      <ul class="dropdown-menu shadow dropdown-menu-end" id="dropdownLang">
         <li>
            <a lang="en" data-lang="en" href="#" class="dropdown-item d-flex align-items-center gap-2 text-capitalize text-reset">
               <img src="https://flagcdn.com/w40/us.png" alt="US English" width="16" height="12">
               <span class="link-text">english</span>
            </a>
         </li>
         <li><div class="dropdown-divider"></div></li>
         <li>
            <a lang="id" data-lang="id" href="#" class="dropdown-item d-flex align-items-center gap-2 text-capitalize text-reset">
               <img src="https://flagcdn.com/w40/id.png" alt="Indonesia" width="16" height="12">
               <span class="link-text">indonesia</span>
            </a>
         </li>
      </ul>
   </div>`)