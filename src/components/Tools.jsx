import React, {useContext} from "react";
import {MainContext} from './Context';

const Tools = () => {
const store = useContext(MainContext);

  return (
    <div  id="tools" style={store.themeBoolean ? store.darkTheme : store.lightTheme}>
      <div
        className="w3-container w3-content w3-padding-64"
      >
        <h2 className="w3-wide w3-center w3-margin-bottom">TOOLS</h2>
        <br/>

        <div className="w3-row">
          <div className="w3-quarter w3-container w3-margin-bottom">
          <svg viewBox="0 0 128 128">
<g><radialGradient id="a" cx="359.382" cy="134.83" r="50.57" gradientTransform="matrix(1 0 0 -.435 -297.375 140.218)" gradientUnits="userSpaceOnUse"><stop offset="0"></stop><stop offset="1" stopOpacity="0"></stop></radialGradient><path fill="url(#a)" d="M112.6 81.6c0 12.1-22.6 22-50.6 22s-50.6-9.8-50.6-22 22.6-22 50.6-22 50.6 9.8 50.6 22z"></path><radialGradient id="b" cx="201.749" cy="230.895" r="53.284" gradientTransform="matrix(1.773 0 0 -1.297 -313.84 354.268)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#857C63"></stop><stop offset="1" stopColor="#221F19"></stop></radialGradient><path fill="url(#b)" stroke="#2E3436" strokeMiterlimit="10" d="M26.7 27.6s8 16.4 26.6 16c39.1-1 45.9-21.4 46.9-24.3 1-2.9 2.5-2.5 2.8.2 12.7 115.6-88.4 66-92 46.3 20.1-5.8 15.2-17.1 15.2-17.1l.5-21.1z"></path><linearGradient id="c" gradientUnits="userSpaceOnUse" x1="378.844" y1="204.625" x2="347.984" y2="198.502" gradientTransform="matrix(1 0 0 -1 -301.337 279.346)"><stop offset="0"></stop><stop offset="1" stopOpacity="0"></stop></linearGradient><path fill="url(#c)" d="M41.5 76.4c18.7 3.7 28.2.3 33.7-4-1.5-1.9-4-4-4-4s6.5 1.8 8.8 4.8c2.3 3 .9 4.8.3 8.6-1.3-3.3-3.8-4.6-4.2-5.9-4.9 6.9-17.4 6.6-34.6.5z"></path><linearGradient id="d" gradientUnits="userSpaceOnUse" x1="348.046" y1="240.776" x2="413.386" y2="166.604" gradientTransform="matrix(1 0 0 -1 -297.5 279)"><stop offset="0" stopColor="#fff"></stop><stop offset="1" stopColor="#fff" stopOpacity="0"></stop></linearGradient><path opacity=".185" stroke="url(#d)" strokeMiterlimit="10" enableBackground="new" d="M100.4 25.9c-1.6 2.6-3.9 5.6-7.4 8.6-7.3 6-19.5 11.5-39.6 12-11.7.3-19.3-5.4-23.9-10.4l-.3 12.4c.4 1.2 1.2 3.9-.2 7.5-1.4 4-6 8-13.8 11.1.7 1.4 1.4 2.9 3.5 4.9 2.8 2.8 6.8 5.8 11.5 8.5 9.4 5.4 21.6 9.7 33 9.9 11.4.2 21.8-3.4 28.9-13.9 6.5-9.6 10.2-25.8 8.3-50.6z" fill="none"></path><radialGradient id="e" cx="259.173" cy="242.809" r="9.741" gradientTransform="matrix(1.685 0 0 -1.685 -400.899 453.504)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#fff"></stop><stop offset="1" stopColor="#B9B9B0"></stop></radialGradient><path fill="url(#e)" stroke="#888A85" strokeWidth=".783" strokeMiterlimit="10" d="M47 52.4c0 6.2-5 11.3-11.3 11.3s-11.3-5-11.3-11.3 5-11.3 11.3-11.3 11.3 5 11.3 11.3z"></path><radialGradient id="f" cx="274.252" cy="84.308" r="13.387" gradientTransform="matrix(.797 -.46 -.537 -.931 -163.086 262.495)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#5B676B"></stop><stop offset="1" stopColor="#141718"></stop></radialGradient><path fill="url(#f)" stroke="#000" strokeMiterlimit="10" d="M24.6 56.6c5.5 7.6 5.5 16.8.2 20.7-5.4 3.9-14.2.9-19.6-6.7-5.5-7.6-5.5-16.8-.2-20.7s14.1-.9 19.6 6.7z"></path><path fill="#2E3436" stroke="#000" strokeWidth="1.174" strokeMiterlimit="10" d="M43.8 54c0 3-2.4 5.4-5.4 5.4-3 0-5.4-2.4-5.4-5.4 0-3 2.4-5.4 5.4-5.4 3 0 5.4 2.4 5.4 5.4z"></path><linearGradient id="g" gradientUnits="userSpaceOnUse" x1="230.297" y1="47.32" x2="229.46" y2="25.884" gradientTransform="matrix(.8 -.6 -.6 -.8 -147.318 231.235)"><stop offset="0" stopColor="#fff"></stop><stop offset="1" stopColor="#fff" stopOpacity="0"></stop></linearGradient><path opacity=".281" stroke="url(#g)" strokeMiterlimit="10" enableBackground="new" d="M5.9 52.4c-1.7 1.3-2.7 3.6-2.6 6.6.1 3 1.3 6.8 3.8 10.1s5.7 5.5 8.6 6.4c2.9.9 5.3.7 7.1-.7 1.8-1.3 2.7-3.7 2.6-6.7s-1.2-6.7-3.7-10-5.6-5.4-8.6-6.4c-2.9-.9-5.4-.6-7.2.7z" fill="none"></path><path fill="#fff" d="M14.1 57.5c0 3.2-2.2 5.9-4.9 5.9s-4.9-2.6-4.9-5.9c0-3.2 2.2-5.9 4.9-5.9s4.9 2.7 4.9 5.9z"></path><path fill="#fff" d="M40 51.5c0 2.1-1.7 3.8-3.8 3.8-2.1 0-3.8-1.7-3.8-3.8 0-2.1 1.7-3.8 3.8-3.8 2.2.1 3.8 1.8 3.8 3.8z"></path><radialGradient id="h" cx="238.588" cy="244.872" r="9.741" gradientTransform="matrix(1.978 0 0 -1.978 -412.858 528.573)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#fff"></stop><stop offset="1" stopColor="#B9B9B0"></stop></radialGradient><path fill="url(#h)" stroke="#888A85" strokeWidth=".667" strokeMiterlimit="10" d="M72.2 53.6c0 7.3-5.9 13.2-13.2 13.2s-13.2-5.9-13.2-13.2 5.9-13.2 13.2-13.2 13.2 5.9 13.2 13.2z"></path><path fill="#2E3436" stroke="#000" strokeMiterlimit="10" d="M68.5 55.5c0 3.5-2.9 6.4-6.4 6.4-3.5 0-6.4-2.9-6.4-6.4s2.9-6.4 6.4-6.4c3.5.1 6.4 2.9 6.4 6.4z"></path><path fill="#fff" d="M64.1 52.6c0 2.4-2 4.4-4.4 4.4s-4.4-2-4.4-4.4c0-2.4 2-4.4 4.4-4.4 2.4 0 4.4 2 4.4 4.4z"></path><g transform="matrix(-.115 -.39 .39 -.115 24.715 29.689)"><linearGradient id="i" gradientUnits="userSpaceOnUse" x1="1581.422" y1="-398.274" x2="1555.752" y2="-420.6" gradientTransform="matrix(-.115 .39 .39 .115 175.179 -456.047)"><stop offset="0" stopColor="#6E3D09"></stop><stop offset=".242" stopColor="#EA8113"></stop><stop offset=".621" stopColor="#5C3307"></stop><stop offset="1" stopColor="#E07C12"></stop></linearGradient><path fill="url(#i)" stroke="#673907" strokeWidth="2.461" strokeLinecap="round" d="M-201.5 132l10.3 9.6c23.1-17.7 47.4-55.7 47.4-55.7 5.5-6.2-.3-10.4-6-6.6 0 0-36 28-51.7 52.7z"></path><linearGradient id="j" gradientUnits="userSpaceOnUse" x1="1691.417" y1="-496.243" x2="1701.71" y2="-486.718" gradientTransform="matrix(-.115 .39 .39 .115 178.077 -459.728)"><stop offset="0" stopColor="#BDBDBD"></stop><stop offset=".333" stopColor="#E2E2E2"></stop><stop offset=".667" stopColor="#A3A3A3"></stop><stop offset="1" stopColor="#ddd"></stop></linearGradient><path fill="url(#j)" stroke="#888A85" strokeWidth="2.461" strokeLinecap="round" d="M-221.1 157.6l6.2 5.4 23.5-20.4.8-2h3c-1.2-4.3-8.2-12.1-13.3-12.1l.2 3-1.9 1.1-18.5 25z"></path><path stroke="#fff" strokeWidth="2.461" strokeLinecap="round" strokeLinejoin="round" d="M-202.7 145.3l-12.1 14.6" fill="none"></path><radialGradient id="k" cx="958.406" cy="-380.262" r="21.002" gradientTransform="matrix(-.181 .598 .613 .176 183.272 -348.089)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#696969"></stop><stop offset="1"></stop></radialGradient><path fill="url(#k)" d="M-262.4 185.2c28.9 0 50.9 3.4 55.1-17.6 3.4-17-20-25.1-31.5-10-11.2 14.6-23.6 27.6-23.6 27.6z"></path><path opacity=".528" fill="#fff" enableBackground="new" d="M-209.8 168.2c0 4-3.2 7.2-7.2 7.2s-7.2-3.2-7.2-7.2 3.2-7.2 7.2-7.2 7.2 3.2 7.2 7.2z"></path><path fill="#fff" d="M-191.2 141.1c0 2.7-2.2 4.8-4.8 4.8s-4.8-2.2-4.8-4.8c0-2.7 2.2-4.8 4.8-4.8 2.6-.1 4.8 2.1 4.8 4.8z"></path><linearGradient id="l" gradientUnits="userSpaceOnUse" x1="2046.356" y1="702.985" x2="2031.16" y2="715.537" gradientTransform="matrix(-.241 .249 .249 .241 95.193 -501.932)"><stop offset="0" stopColor="#fff"></stop><stop offset="1" stopColor="#fff" stopOpacity="0"></stop></linearGradient><path opacity=".428" fill="url(#l)" enableBackground="new" d="M-243.6 180s10.3.3 16.9-3.9c2.3-1.5 4.2 1.8 1.4 3-6.1 2.6-18.3.9-18.3.9z"></path></g><linearGradient id="m" gradientUnits="userSpaceOnUse" x1="367.723" y1="202.128" x2="362.641" y2="200.904" gradientTransform="matrix(1 0 0 -1 -297.5 279)"><stop offset="0"></stop><stop offset="1" stopOpacity="0"></stop></linearGradient><path fill="url(#m)" d="M61.7 81c4.1.4 7.9-.8 9.5-1.3.3-1.5 1.5-4.5 5.7-4.7l-1.5-2.6s-5.4 3.7-11.3 4.8l-2.4 3.8z"></path></g>
</svg>
          </div>
          <div className="w3-quarter w3-container w3-margin-bottom">
          <svg viewBox="0 0 128 128">
<path fill="#31251C" d="M76.397 55.676c-2.737 0-4.775 1.344-4.775 4.579 0 2.437 1.343 4.129 4.628 4.129 2.784 0 4.676-1.641 4.676-4.23 0-2.934-1.693-4.478-4.529-4.478zm-5.471 22.84c-.648.795-1.294 1.64-1.294 2.637 0 1.989 2.536 2.587 6.021 2.587 2.885 0 6.816-.202 6.816-2.885 0-1.595-1.892-1.693-4.281-1.843l-7.262-.496zm14.725-22.69c.895 1.145 1.842 2.737 1.842 5.026 0 5.522-4.329 8.756-10.597 8.756-1.594 0-3.037-.198-3.932-.447l-1.642 2.637 4.875.297c8.608.549 13.682.798 13.682 7.413 0 5.723-5.024 8.955-13.682 8.955-9.006 0-12.438-2.289-12.438-6.218 0-2.24.996-3.431 2.737-5.076-1.643-.694-2.189-1.937-2.189-3.281 0-1.095.547-2.09 1.443-3.036.896-.944 1.891-1.891 3.084-2.985-2.438-1.194-4.278-3.781-4.278-7.464 0-5.721 3.781-9.65 11.393-9.65 2.14 0 3.435.197 4.578.498h9.703v4.228l-4.579.347zM98.983 46.786c-2.837 0-4.479-1.643-4.479-4.48 0-2.833 1.642-4.377 4.479-4.377 2.886 0 4.527 1.543 4.527 4.377.001 2.837-1.641 4.48-4.527 4.48zm-6.42 29.9v-3.929l2.539-.348c.696-.1.795-.249.795-.997v-14.627c0-.546-.148-.896-.647-1.044l-2.687-.946.547-4.028h10.301v20.646c0 .798.048.896.796.997l2.538.348v3.929h-14.182v-.001zM126.42 74.756c-2.141 1.043-5.274 1.99-8.112 1.99-5.92 0-8.158-2.386-8.158-8.011v-13.035c0-.297 0-.497-.399-.497h-3.482v-4.428c4.38-.499 6.12-2.688 6.667-8.111h4.728v7.067c0 .347 0 .498.398.498h7.015v4.975h-7.413v11.89c0 2.935.697 4.079 3.383 4.079 1.395 0 2.836-.347 4.03-.795l1.343 4.378z"></path><path fill="#F34F29" d="M52.7 61.7l-22.749-22.748c-1.309-1.31-3.434-1.31-4.744 0l-4.724 4.724 5.991 5.992c1.394-.47 2.99-.155 4.1.956 1.116 1.117 1.429 2.727.947 4.125l5.775 5.775c1.396-.481 3.009-.17 4.125.947 1.56 1.559 1.56 4.086 0 5.646-1.561 1.56-4.087 1.56-5.647 0-1.173-1.174-1.463-2.897-.869-4.342l-5.386-5.386-.001 14.174c.381.188.739.438 1.056.754 1.56 1.559 1.56 4.085 0 5.647-1.56 1.559-4.088 1.559-5.646 0-1.56-1.562-1.56-4.088 0-5.647.386-.385.831-.676 1.307-.871v-14.305c-.476-.194-.921-.484-1.307-.871-1.182-1.181-1.466-2.914-.86-4.365l-5.906-5.908-15.599 15.598c-1.311 1.311-1.311 3.436 0 4.747l22.749 22.748c1.31 1.31 3.434 1.31 4.746 0l22.642-22.644c1.311-1.31 1.311-3.436 0-4.746z"></path><path fill="none" d="M1.58 37.928h124.84v52.143h-124.84z"></path>
</svg>
          </div>
          <div className="w3-quarter w3-container w3-margin-bottom">
          <svg viewBox="0 0 128 128">
<g fill="#dcdcdc"><path fillRule="evenodd" clipRule="evenodd" d="M64 1.512c-23.493 0-42.545 19.047-42.545 42.545 0 18.797 12.19 34.745 29.095 40.37 2.126.394 2.907-.923 2.907-2.047 0-1.014-.04-4.366-.058-7.92-11.837 2.573-14.334-5.02-14.334-5.02-1.935-4.918-4.724-6.226-4.724-6.226-3.86-2.64.29-2.586.29-2.586 4.273.3 6.523 4.385 6.523 4.385 3.794 6.504 9.953 4.623 12.38 3.536.383-2.75 1.485-4.628 2.702-5.69-9.45-1.075-19.384-4.724-19.384-21.026 0-4.645 1.662-8.44 4.384-11.42-.442-1.072-1.898-5.4.412-11.26 0 0 3.572-1.142 11.7 4.363 3.395-.943 7.035-1.416 10.65-1.432 3.616.017 7.258.49 10.658 1.432 8.12-5.504 11.688-4.362 11.688-4.362 2.316 5.86.86 10.187.418 11.26 2.728 2.978 4.378 6.774 4.378 11.42 0 16.34-9.953 19.938-19.427 20.99 1.526 1.32 2.886 3.91 2.886 7.88 0 5.692-.048 10.273-.048 11.674 0 1.13.766 2.458 2.922 2.04 16.896-5.632 29.07-21.574 29.07-40.365C106.545 20.56 87.497 1.512 64 1.512z"></path><path d="M37.57 62.596c-.095.212-.428.275-.73.13-.31-.14-.482-.427-.382-.64.09-.216.424-.277.733-.132.31.14.486.43.38.642zm-.524-.388M39.293 64.52c-.203.187-.6.1-.87-.198-.278-.297-.33-.694-.124-.884.208-.188.593-.1.87.197.28.3.335.693.123.884zm-.406-.437M40.97 66.968c-.26.182-.687.012-.95-.367-.262-.377-.262-.83.005-1.013.264-.182.684-.018.95.357.262.385.262.84-.005 1.024zm0 0M43.268 69.336c-.233.257-.73.188-1.093-.163-.372-.343-.475-.83-.242-1.087.237-.257.736-.185 1.102.163.37.342.482.83.233 1.086zm0 0M46.44 70.71c-.104.334-.582.485-1.064.344-.482-.146-.796-.536-.7-.872.1-.336.582-.493 1.067-.342.48.144.795.53.696.87zm0 0M49.92 70.965c.013.35-.396.642-.902.648-.508.012-.92-.272-.926-.618 0-.354.4-.642.908-.65.506-.01.92.272.92.62zm0 0M53.16 70.414c.06.342-.29.694-.793.787-.494.092-.95-.12-1.014-.46-.06-.35.297-.7.79-.792.503-.088.953.118 1.017.466zm0 0"></path></g><g fill="#100E0F"><path d="M24.855 108.302h-10.7a.5.5 0 0 0-.5.5v5.232a.5.5 0 0 0 .5.5h4.173v6.5s-.937.32-3.53.32c-3.056 0-7.327-1.116-7.327-10.508 0-9.393 4.448-10.63 8.624-10.63 3.614 0 5.17.636 6.162.943.31.094.6-.216.6-.492l1.193-5.055a.468.468 0 0 0-.192-.39c-.403-.288-2.857-1.66-9.058-1.66-7.144 0-14.472 3.038-14.472 17.65 0 14.61 8.39 16.787 15.46 16.787 5.854 0 9.405-2.502 9.405-2.502.146-.08.162-.285.162-.38v-16.316a.5.5 0 0 0-.5-.5zM79.506 94.81H73.48a.5.5 0 0 0-.498.503l.002 11.644h-9.392V95.313a.5.5 0 0 0-.497-.503H57.07a.5.5 0 0 0-.498.503v31.53c0 .277.224.503.498.503h6.025a.5.5 0 0 0 .497-.504v-13.486h9.392l-.016 13.486c0 .278.224.504.5.504h6.038a.5.5 0 0 0 .497-.504v-31.53c0-.278-.22-.502-.497-.502zM32.34 95.527c-2.144 0-3.884 1.753-3.884 3.923 0 2.167 1.74 3.925 3.884 3.925 2.146 0 3.885-1.758 3.885-3.925 0-2.17-1.74-3.923-3.885-3.923zM35.296 105.135H29.29c-.276 0-.522.284-.522.56v20.852c0 .613.382.795.876.795h5.41c.595 0 .74-.292.74-.805v-6.346-14.553a.5.5 0 0 0-.498-.502zM102.902 105.182h-5.98a.5.5 0 0 0-.496.504v15.46s-1.52 1.11-3.675 1.11-2.727-.977-2.727-3.088v-13.482a.5.5 0 0 0-.497-.504h-6.068a.502.502 0 0 0-.498.504v14.502c0 6.27 3.495 7.804 8.302 7.804 3.944 0 7.124-2.18 7.124-2.18s.15 1.15.22 1.285c.07.136.247.273.44.273l3.86-.017a.502.502 0 0 0 .5-.504l-.003-21.166a.504.504 0 0 0-.5-.502zM119.244 104.474c-3.396 0-5.706 1.515-5.706 1.515V95.312a.5.5 0 0 0-.497-.503H107a.5.5 0 0 0-.5.503v31.53a.5.5 0 0 0 .5.503h4.192c.19 0 .332-.097.437-.268.103-.17.254-1.454.254-1.454s2.47 2.34 7.148 2.34c5.49 0 8.64-2.784 8.64-12.502s-5.03-10.988-8.428-10.988zm-2.36 17.764c-2.073-.063-3.48-1.004-3.48-1.004v-9.985s1.388-.85 3.09-1.004c2.153-.193 4.228.458 4.228 5.594 0 5.417-.935 6.486-3.837 6.398zM53.195 122.12c-.263 0-.937.107-1.63.107-2.22 0-2.973-1.032-2.973-2.368v-8.866h4.52a.5.5 0 0 0 .5-.504v-4.856a.5.5 0 0 0-.5-.502h-4.52l-.007-5.97c0-.227-.116-.34-.378-.34h-6.16c-.238 0-.367.106-.367.335v6.17s-3.087.745-3.295.805a.5.5 0 0 0-.36.48v3.877a.5.5 0 0 0 .497.503h3.158v9.328c0 6.93 4.86 7.61 8.14 7.61 1.497 0 3.29-.48 3.586-.59.18-.067.283-.252.283-.453l.004-4.265a.51.51 0 0 0-.5-.502z"></path></g>
</svg>
          </div>
          <div className="w3-quarter w3-container w3-margin-bottom">
          <svg viewBox="0 0 128 128">
<g id="original"><path fill="#fa930d" d="M5.55,64.73A17.08,17.08,0,1,0,22.63,47.64,17.11,17.11,0,0,0,5.55,64.73Z"></path><path fill="#136ba2" d="M107.48,4.73c-9.39,0-15,7.56-15,20.23v77.8c0,12.66,5.59,20.23,15,20.23s15-7.56,15-20.23v-26h0V25C122.45,12.3,116.85,4.73,107.48,4.73Z"></path><path fill="#136ba2" d="M81.25,6.38H19.88v0a14.92,14.92,0,0,0,0,29.81v.11H51.29v27.2c0,.22,0,.43,0,.66h0c0,.18,0,.36,0,.54A28.7,28.7,0,0,1,22.66,93.4c-.26,0-.51,0-.77,0l-.08.1c-.42,0-.85-.07-1.29-.07a14.94,14.94,0,1,0,0,29.87c.45,0,.9,0,1.34-.07l0,.05.78,0A58.65,58.65,0,0,0,81.25,64.73c0-.17,0-.35,0-.54h0c0-1.27,0-4.8,0-9.59,0,0,0-.07,0-.11S81.25,7.71,81.25,6.38Z"></path></g>
</svg>
          </div>
        </div>
{/* second row tools */}
        <div className="w3-row">
          <div className="w3-quarter w3-container w3-margin-bottom">
          <svg viewBox="0 0 128 128">
<g id="original"><path fill="#0076b2" d="M116,3H12a8.91,8.91,0,0,0-9,8.8V116.22A8.91,8.91,0,0,0,12,125H116a8.93,8.93,0,0,0,9-8.81V11.77A8.93,8.93,0,0,0,116,3Z"></path><path fill="#fff" d="M21.06,48.73H39.17V107H21.06Zm9.06-29a10.5,10.5,0,1,1-10.5,10.49,10.5,10.5,0,0,1,10.5-10.49"></path><path fill="#fff" d="M50.53,48.73H67.89v8h.24c2.42-4.58,8.32-9.41,17.13-9.41C103.6,47.28,107,59.35,107,75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87,7.36-10.87,15V107H50.53Z"></path></g>
</svg>
          </div>
          <div className="w3-quarter w3-container w3-margin-bottom">
          <svg viewBox="0 0 128 128">
<path id="original-wordmark" fill="#cb3837" d="M2,38.5H126V82.21H64V89.5H36.44V82.21H2ZM8.89,74.93H22.67V53.07h6.89V74.93h6.89V45.79H8.89ZM43.33,45.79V82.21H57.11V74.93H70.89V45.79Zm13.78,7.29H64V67.64H57.11Zm20.67-7.29V74.93H91.56V53.07h6.89V74.93h6.89V53.07h6.89V74.93h6.89V45.79Z"></path>
</svg>
          </div>
          <div className="w3-quarter w3-container w3-margin-bottom">
          <svg viewBox="0 0 128 128">
<g id="original"><path fill="#80cade" d="M12.81,67.6a10.2,10.2,0,0,1-9.94-7c-.06-.17-.1-.33-.15-.49A10.69,10.69,0,0,1,9.64,47.07L97,17.8a11.82,11.82,0,0,1,3.19-.47,10.47,10.47,0,0,1,10.21,7.14l.13.42c1.63,5.71-2.43,10.81-7.29,12.44L16.36,67a11.3,11.3,0,0,1-3.55.6Z"></path><path fill="#db015c" d="M27.37,110.55a10.19,10.19,0,0,1-10-6.89c-.05-.16-.1-.32-.15-.49A10.76,10.76,0,0,1,24.16,90L111.5,60.46a11.24,11.24,0,0,1,3.47-.58A10.55,10.55,0,0,1,125.15,67l.13.44A11.05,11.05,0,0,1,124,76.28c-1.25,1.95-5.19,3.66-5.19,3.66l-87.68,30a12,12,0,0,1-3.71.63Z"></path><path fill="#e8a900" d="M100.08,110.74a10.72,10.72,0,0,1-10.27-7.31L60.66,16.84l-.15-.49A10.74,10.74,0,0,1,81,10l29.15,86.58.08.28a10.73,10.73,0,0,1-10.17,13.89Z"></path><path fill="#41b088" d="M56.75,125.33A10.73,10.73,0,0,1,46.48,118L17.33,31.43l-.15-.48a10.72,10.72,0,0,1,6.9-13.12,10.89,10.89,0,0,1,3.34-.56,10.72,10.72,0,0,1,10.27,7.31l29.14,86.59c.05.15.1.32.15.48a10.73,10.73,0,0,1-10.23,13.68h0Z"></path><path fill="#ca161a" d="M85.71,91.24,106,84.29,99.39,64.56,79,71.44Z"></path><path fill="#3b1d37" d="M42.45,106l20.32-6.95L56.08,79.2,35.73,86.08Z"></path><path fill="#69852c" d="M71.24,48.26l20.33-6.94L85,21.82,64.64,28.64Z"></path><path fill="#118f79" d="M28,63,48.3,56.09,41.65,36.34,21.29,43.16,28,63Z"></path></g>
</svg>
          </div>
          <div className="w3-quarter w3-container w3-margin-bottom">
          <svg viewBox="0 0 128 128">
<path fill="#68217a" d="M95 2.3l30.5 12.3v98.7L94.8 125.7 45.8 77l-31 24.1L2.5 94.9V33.1l12.3-5.9 31 24.3ZM14.8 45.7V83.2l18.5-19Zm48.1 18.5L94.8 89.3V39Z"></path>
</svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
