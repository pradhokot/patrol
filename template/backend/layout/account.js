document.writeln(`
   <div class="dropdown h-100">
      <a role="button" data-bs-toggle="dropdown" href="#dropdownAccount" class="nav-link d-flex align-items-center text-capitalize text-reset h-100 dropdown-toggle px-2">
         <i class="link-icon" aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" class="bi bi-person-circle d-flex" viewBox="0 0 16 16"><path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/><path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/></svg>
         </i>
         <span class="link-text visually-hidden">account</span>
      </a>
      <ul class="dropdown-menu shadow dropdown-menu-end" id="dropdownAccount">
         <li>
            <a href="#" class="dropdown-item d-flex align-items-center gap-2 text-capitalize text-reset">
               <i class="link-icon" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill d-flex" viewBox="0 0 16 16"><path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/></svg>
               </i>
               <span class="link-text" data-i18n="textMyAccount">my account</span>
            </a>
         </li>
         <li><div class="dropdown-divider"></div></li>
         <li>
            <a href="#" class="dropdown-item d-flex align-items-center gap-2 text-capitalize text-reset">
               <i class="link-icon" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-check-fill d-flex" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M15.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0"/><path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/></svg>
               </i>
               <span class="link-text" data-i18n="textSignIn">sign in</span>
            </a>
         </li>
         <li><div class="dropdown-divider"></div></li>
         <li>
            <a href="#" class="dropdown-item d-flex align-items-center gap-2 text-capitalize text-reset">
               <i class="link-icon" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-plus-fill d-flex" viewBox="0 0 16 16"><path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/><path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5"/></svg>
               </i>
               <span class="link-text" data-i18n="textSignUp">sign up</span>
            </a>
         </li>
         <li><div class="dropdown-divider"></div></li>
         <li>
            <a href="#" class="dropdown-item d-flex align-items-center gap-2 text-capitalize text-reset">
               <i class="link-icon" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-x-fill d-flex" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m6.146-2.854a.5.5 0 0 1 .708 0L14 6.293l1.146-1.147a.5.5 0 0 1 .708.708L14.707 7l1.147 1.146a.5.5 0 0 1-.708.708L14 7.707l-1.146 1.147a.5.5 0 0 1-.708-.708L13.293 7l-1.147-1.146a.5.5 0 0 1 0-.708"/></svg>
               </i>
               <span class="link-text" data-i18n="textSignOut">sign out</span>
            </a>
         </li>
      </ul>
   </div>`)