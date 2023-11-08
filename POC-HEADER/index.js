// DATA SECCIONES
const secciones = [
  {
    id: 1,
    seccion: 'Aereos',
    iconSvg: <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"><path d="M2.64324 9.03023L4.60324 11.3602C4.90324 11.7102 4.90324 12.2902 4.60324 12.6402L2.64324 14.9702C2.37324 15.5102 2.64324 16.1702 3.22324 16.3702L4.55324 16.8102C4.87324 16.9202 5.34324 16.8102 5.58324 16.5702L7.86324 14.3002C8.02324 14.1302 8.34324 14.0002 8.57324 14.0002L11.4232 14.0002C11.8432 14.0002 12.0432 14.3102 11.8832 14.7002L9.76324 19.6102C9.43324 20.3802 9.84324 21.0102 10.6832 21.0102L11.9732 21.0102C12.6432 21.0102 13.4132 20.5102 13.6732 19.8902L16.0832 14.3002C16.1532 14.1402 16.3632 14.0002 16.5432 14.0002L19.5432 14.0002C20.4832 14.0002 21.5932 13.3102 22.0232 12.4702C22.1732 12.1702 22.1732 11.8202 22.0232 11.5202C21.5932 10.6802 20.4732 9.99023 19.5332 9.99023L16.5332 9.99023C16.3532 9.99023 16.1432 9.85023 16.0732 9.69023L13.6632 4.11023C13.4132 3.49023 12.6432 2.99023 11.9732 2.99023L10.6832 2.99023C9.84324 2.99023 9.43324 3.62023 9.76324 4.39023L11.8832 9.30023C12.0532 9.68023 11.8432 10.0002 11.4232 10.0002L8.57324 10.0002C8.34324 10.0002 8.02324 9.87023 7.86324 9.71023L5.58324 7.44023C5.34324 7.20023 4.88324 7.09023 4.55324 7.20023L3.22324 7.64023C2.64324 7.82023 2.36324 8.48023 2.64324 9.03023Z" stroke="#646464" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg>,
    url: '/flights/'
  },
  {
    id: 2,
    seccion: 'Alojamientos',
    iconSvg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M2 22H22" stroke="#646464" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M2.9502 22.0003L3.00019 9.97023C3.00019 9.36023 3.2902 8.78029 3.7702 8.40029L10.7702 2.95027C11.4902 2.39027 12.5002 2.39027 13.2302 2.95027L20.2302 8.39028C20.7202 8.77028 21.0002 9.35023 21.0002 9.97023V22.0003" stroke="#646464" stroke-width="1.5" stroke-miterlimit="10" stroke-linejoin="round" />
      <path d="M13 17H11C10.17 17 9.5 17.67 9.5 18.5V22H14.5V18.5C14.5 17.67 13.83 17 13 17Z" stroke="#646464" stroke-width="1.5" stroke-miterlimit="10" stroke-linejoin="round" />
      <path d="M9.5 13.75H7.5C6.95 13.75 6.5 13.3 6.5 12.75V11.25C6.5 10.7 6.95 10.25 7.5 10.25H9.5C10.05 10.25 10.5 10.7 10.5 11.25V12.75C10.5 13.3 10.05 13.75 9.5 13.75Z" stroke="#646464" stroke-width="1.5" stroke-miterlimit="10" stroke-linejoin="round" />
      <path d="M16.5 13.75H14.5C13.95 13.75 13.5 13.3 13.5 12.75V11.25C13.5 10.7 13.95 10.25 14.5 10.25H16.5C17.05 10.25 17.5 10.7 17.5 11.25V12.75C17.5 13.3 17.05 13.75 16.5 13.75Z" stroke="#646464" stroke-width="1.5" stroke-miterlimit="10" stroke-linejoin="round" />
      <path d="M19.0003 7L18.9703 4H14.5703" stroke="#646464" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
    </svg>,
    url: '/hotels/'
  },
  {
    id: 3, seccion: 'Paquetes', iconSvg: <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
      <path d="M8.16602 7.67001V6.70001C8.16602 4.45001 9.97602 2.24001 12.226 2.03001C14.906 1.77001 17.166 3.88001 17.166 6.51001V7.89001" stroke="#646464" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M9.66584 22H15.6658C19.6858 22 20.4058 20.39 20.6158 18.43L21.3658 12.43C21.6358 9.99 20.9358 8 16.6658 8H8.66584C4.39584 8 3.69584 9.99 3.96584 12.43L4.71584 18.43C4.92584 20.39 5.64584 22 9.66584 22Z" stroke="#646464" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M16.1615 12H16.1705" stroke="#646464" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M9.16052 12H9.1695" stroke="#646464" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>,
    url: '/packages/tours/'
  },
  {
    id: 4, seccion: 'Autos', iconSvg: <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
      <path d="M15.843 2.83008H8.82301C6.33301 2.83008 5.78301 4.07008 5.46301 5.59008L4.33301 11.0001H20.333L19.203 5.59008C18.883 4.07008 18.333 2.83008 15.843 2.83008Z" stroke="#646464" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M22.3227 19.82C22.4327 20.99 21.4927 22 20.2927 22H18.4127C17.3327 22 17.1827 21.54 16.9927 20.97L16.7927 20.37C16.5127 19.55 16.3327 19 14.8927 19H9.77274C8.33274 19 8.12274 19.62 7.87274 20.37L7.67274 20.97C7.48274 21.54 7.33274 22 6.25274 22H4.37274C3.17274 22 2.23274 20.99 2.34274 19.82L2.90274 13.73C3.04274 12.23 3.33274 11 5.95274 11H18.7127C21.3327 11 21.6227 12.23 21.7627 13.73L22.3227 19.82Z" stroke="#646464" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M4.33301 8H3.33301" stroke="#646464" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M21.333 8H20.333" stroke="#646464" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M12.333 3V5" stroke="#646464" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M10.833 5H13.833" stroke="#646464" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M6.33301 15H9.33301" stroke="#646464" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M15.333 15H18.333" stroke="#646464" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>,
    url: '/packages/tours/'
  },
  {
    id: 5, seccion: 'Disney', iconSvg: <svg xmlns="http://www.w3.org/2000/svg" width="26" height="24" viewBox="0 0 26 24" fill="none">
      <path d="M20.504 2.68165L20.5045 2.68165C21.5365 2.68109 22.5319 3.06441 23.2969 3.75704C24.062 4.44968 24.5421 5.40211 24.6438 6.4291C24.7455 7.45609 24.4617 8.4842 23.8474 9.31349C23.2331 10.1428 22.3323 10.7139 21.3203 10.9159L20.4221 11.0951L20.7749 11.9403C21.2807 13.1522 21.4794 14.4702 21.3534 15.7774C21.2273 17.0845 20.7803 18.3403 20.0522 19.4332C19.324 20.5261 18.3372 21.4222 17.1795 22.042C16.0217 22.6617 14.7288 22.986 13.4156 22.9859C12.1023 22.9858 10.8095 22.6614 9.65177 22.0415C8.49408 21.4215 7.50742 20.5253 6.77943 19.4323C6.05143 18.3393 5.60464 17.0835 5.47873 15.7763C5.35282 14.4691 5.5517 13.1511 6.0577 11.9393L6.41104 11.0931L5.51155 10.9146C4.49881 10.7137 3.5971 10.1431 2.98204 9.31378C2.36698 8.48451 2.08259 7.45598 2.18428 6.42853C2.28596 5.40107 2.76644 4.44824 3.53212 3.75561C4.2978 3.06298 5.29388 2.68014 6.32635 2.68165L6.3274 2.68165C7.3906 2.68171 8.41337 3.08912 9.18542 3.8201C9.95747 4.55108 10.4201 5.55008 10.4782 6.61169L10.5283 7.52574L11.4146 7.29687C12.068 7.12814 12.7402 7.04307 13.4151 7.0437H13.4158C14.1077 7.0437 14.7774 7.13153 15.4153 7.29673L16.3021 7.5264L16.3522 6.61169C16.4104 5.54992 16.8731 4.55078 17.6454 3.81978C18.4176 3.08877 19.4406 2.68147 20.504 2.68165Z" stroke="#646464" stroke-width="1.5" />
    </svg>,
    url: '/services/'
  },
  {
    id: 6, seccion: 'Circuitos', iconSvg: <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
      <path d="M2.73705 4.59988C3.53705 1.13988 8.74705 1.13988 9.53705 4.59988C10.007 6.62988 8.71705 8.34988 7.59705 9.41988C6.77705 10.1999 5.48705 10.1899 4.66705 9.41988C3.55705 8.34988 2.26705 6.62988 2.73705 4.59988Z" stroke="#646464" stroke-width="1.5" />
      <path d="M15.737 16.5999C16.537 13.1399 21.777 13.1399 22.577 16.5999C23.047 18.6299 21.757 20.3499 20.627 21.4199C19.807 22.1999 18.507 22.1899 17.687 21.4199C16.557 20.3499 15.267 18.6299 15.737 16.5999Z" stroke="#646464" stroke-width="1.5" />
      <path d="M12.6667 5H15.3467C17.1967 5 18.0567 7.29 16.6667 8.51L8.67669 15.5C7.28669 16.71 8.14669 19 9.98669 19H12.6667" stroke="#646464" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M6.1537 5.5H6.16525" stroke="#646464" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M19.1537 17.5H19.1653" stroke="#646464" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>,
    url: '/transfers/'
  },
  {
    id: 7, seccion: 'Actividades', iconSvg: <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
      <path d="M17.3279 4H7.32789C3.49789 4 2.42789 4.92 2.33789 8.5C4.26789 8.5 5.82789 10.07 5.82789 12C5.82789 13.93 4.26789 15.49 2.33789 15.5C2.42789 19.08 3.49789 20 7.32789 20H17.3279C21.3279 20 22.3279 19 22.3279 15V9C22.3279 5 21.3279 4 17.3279 4Z" stroke="#646464" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M9.32617 4V7.5" stroke="#646464" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M9.32617 16.5V20" stroke="#646464" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M15.358 9.33016L15.978 10.5802C16.038 10.7002 16.158 10.7902 16.288 10.8102L17.668 11.0102C18.008 11.0602 18.148 11.4802 17.898 11.7202L16.898 12.6902C16.798 12.7802 16.758 12.9202 16.778 13.0602L17.018 14.4302C17.078 14.7702 16.718 15.0302 16.418 14.8702L15.188 14.2202C15.068 14.1602 14.918 14.1602 14.798 14.2202L13.568 14.8702C13.258 15.0302 12.908 14.7702 12.968 14.4302L13.208 13.0602C13.228 12.9202 13.188 12.7902 13.088 12.6902L12.098 11.7202C11.848 11.4802 11.988 11.0602 12.328 11.0102L13.708 10.8102C13.848 10.7902 13.958 10.7102 14.018 10.5802L14.628 9.33016C14.768 9.02016 15.208 9.02016 15.358 9.33016Z" stroke="#646464" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>,
    url: '/cars/'
  },
  {
    id: 8, seccion: 'Traslados', iconSvg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M16.9 22H7.10001C5.40001 22 4 20.61 4 18.9V5.10001C4 3.40001 5.39001 2 7.10001 2H16.9C18.6 2 20 3.39001 20 5.10001V18.9C20 20.61 18.61 22 16.9 22Z" stroke="#646464" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M18.5 13H5.5C4.67 13 4 12.33 4 11.5V9.5C4 8.67 4.67 8 5.5 8H18.5C19.33 8 20 8.67 20 9.5V11.5C20 12.33 19.33 13 18.5 13Z" stroke="#646464" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M8.49451 17.7002H8.50349" stroke="#646464" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M15.4945 17.7002H15.5035" stroke="#646464" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M9.5 5H14.5" stroke="#646464" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>,
    url: '/insurances/'
  },
  {
    id: 9, seccion: 'Asistencias', iconSvg: <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
      <path d="M11.1562 2.23006L6.16617 4.11006C5.01617 4.54006 4.07617 5.90006 4.07617 7.12006V14.5501C4.07617 15.7301 4.85617 17.2801 5.80617 17.9901L10.1062 21.2001C11.5162 22.2601 13.8362 22.2601 15.2462 21.2001L19.5462 17.9901C20.4962 17.2801 21.2762 15.7301 21.2762 14.5501V7.12006C21.2762 5.89006 20.3362 4.53006 19.1862 4.10006L14.1962 2.23006C13.3462 1.92006 11.9862 1.92006 11.1562 2.23006Z" stroke="#646464" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M9.71582 11.8702L11.3258 13.4802L15.6258 9.18018" stroke="#646464" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>,
    url: '/insurances/'
  },

];


const App = () => {
  return (
    <>
      <nav className='navbar-poc'>
        <nav className="main__container__navbar">
          {secciones.map(({ id, seccion, iconSvg, url }) => (
            <a href={url} className={`seccionLi main__container_seccionLi__${seccion}`}>
              <div className="main__container_seccionLi__svg">
                {iconSvg}
              </div>
              <div className="main__container__seccionLi_seccion">
                {seccion}
              </div>
            </a>
          ))}
        </nav>
      </nav>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('main-menu')).render(<App />)
console.log("---------> LOAD")