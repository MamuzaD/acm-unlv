'use client'

import { useEffect, useState } from 'react'

export default function AnimatedSVG() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Trigger the animation after the component mounts
    setIsVisible(true)
  }, [])
  
  return (
    <div className="bg-muted relative top-20 w-full shadow-sm">
      <svg width="1920" height="80" viewBox="0 0 1920 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_5_7)">
          <circle cx="569" cy="53" r="8" fill="#B10202" />
          <path
            d="M721 14C721 18.4183 717.418 22 713 22C708.582 22 705 18.4183 705 14C705 9.58172 708.582 6 713 6C717.418 6 721 9.58172 721 14Z"
            fill="#B10202"
          />
          <path
            d="M573 53H592.367H603L641.5 14.5H710"
            stroke="#B10202"
            stroke-width="8"
            strokeDasharray="300"
            strokeDashoffset={isVisible ? '0' : '300'}
            style={{
              transition: 'stroke-dashoffset 0.5s ease-in-out 0.0s',
            }}
          />
          <circle cx="467" cy="10" r="8" fill="#B10202" />
          <circle cx="617" cy="10" r="8" fill="#B10202" />
          <path
            d="M467 10H509H544.5L566.5 32H596.5L615 13.5"
            stroke="#B10202"
            stroke-width="8"
            strokeDasharray="300"
            strokeDashoffset={isVisible ? '0' : '300'}
            style={{
              transition: 'stroke-dashoffset 0.5s ease-in-out 0.0s',
            }}
          />
          <path
            d="M425 28C425 32.4183 421.418 36 417 36C412.582 36 409 32.4183 409 28C409 23.5817 412.582 20 417 20C421.418 20 425 23.5817 425 28Z"
            fill="#B10202"
          />
          <path
            d="M417.433 28.4208L424.516 35.5041L428.405 39.393L432.294 43.2819L457.433 68.4208H581.5"
            stroke="#B10202"
            stroke-width="8"
            strokeDasharray="300"
            strokeDashoffset={isVisible ? '0' : '300'}
            style={{
              transition: 'stroke-dashoffset 0.5s ease-in-out 0.0s',
            }}
          />
          <circle cx="587" cy="68" r="8" fill="#B10202" />
          <circle cx="397" cy="9" r="8" fill="#B10202" />
          <path
            d="M563 39C563 43.4183 559.418 47 555 47C550.582 47 547 43.4183 547 39C547 34.5817 550.582 31 555 31C559.418 31 563 34.5817 563 39Z"
            fill="#B10202"
          />
          <path
            d="M404 9H432.096L462 38.9042H536.5H550.5"
            stroke="#B10202"
            stroke-width="8"
            strokeDasharray="300"
            strokeDashoffset={isVisible ? '0' : '300'}
            style={{
              transition: 'stroke-dashoffset 0.5s ease-in-out 0.0s',
            }}
          />
          <path
            d="M375 9C375 13.4183 371.418 17 367 17C362.582 17 359 13.4183 359 9C359 4.58172 362.582 1 367 1C371.418 1 375 4.58172 375 9Z"
            fill="#B10202"
          />
          <circle cx="429" cy="71" r="8" fill="#B10202" />
          <path
            d="M367.433 9.42078L378.412 20.3999L384.44 26.4277L390.468 32.4555L429.433 71.4208"
            stroke="#B10202"
            stroke-width="8"
            strokeDasharray="300"
            strokeDashoffset={isVisible ? '0' : '300'}
            style={{
              transition: 'stroke-dashoffset 0.5s ease-in-out 0.0s',
            }}
          />
          <circle cx="277" cy="68" r="8" fill="#B10202" />
          <circle cx="401" cy="68" r="8" fill="#B10202" />
          <path
            d="M282 68H289.5L310 47.5H353.5L374 68H398"
            stroke="#B10202"
            stroke-width="8"
            strokeDasharray="300"
            strokeDashoffset={isVisible ? '0' : '300'}
            style={{
              transition: 'stroke-dashoffset 0.5s ease-in-out 0.0s',
            }}
          />
          <circle cx="166" cy="52" r="8" fill="#B10202" />
          <path
            d="M336 28C336 32.4183 332.418 36 328 36C323.582 36 320 32.4183 320 28C320 23.5817 323.582 20 328 20C332.418 20 336 23.5817 336 28Z"
            fill="#B10202"
          />
          <path
            d="M170 52H221H249L273 28H323.5"
            stroke="#B10202"
            stroke-width="8"
            strokeDasharray="300"
            strokeDashoffset={isVisible ? '0' : '300'}
            style={{
              transition: 'stroke-dashoffset 0.5s ease-in-out 0.0s',
            }}
          />
          <circle cx="16" cy="63" r="8" fill="#B10202" />
          <path
            d="M93.5 63C93.5 67.4183 89.9183 71 85.5 71C81.0817 71 77.5 67.4183 77.5 63C77.5 58.5817 81.0817 55 85.5 55C89.9183 55 93.5 58.5817 93.5 63Z"
            fill="#B10202"
          />
          <path
            d="M20 63H31.1562H37.2812H43.4062H83"
            stroke="#B10202"
            stroke-width="8"
            strokeDasharray="300"
            strokeDashoffset={isVisible ? '0' : '300'}
            style={{
              transition: 'stroke-dashoffset 0.5s ease-in-out 0.0s',
            }}
          />
          <circle cx="8" cy="42" r="8" fill="#B10202" />
          <circle cx="255" cy="68" r="8" fill="#B10202" />
          <path
            d="M11 42H62H90L116 68H251"
            stroke="#B10202"
            stroke-width="8"
            strokeDasharray="300"
            strokeDashoffset={isVisible ? '0' : '300'}
            style={{
              transition: 'stroke-dashoffset 0.5s ease-in-out 0.0s',
            }}
          />
          <circle cx="53" cy="28" r="8" fill="#B10202" />
          <path
            d="M235 28C235 32.4183 231.418 36 227 36C222.582 36 219 32.4183 219 28C219 23.5817 222.582 20 227 20C231.418 20 235 23.5817 235 28Z"
            fill="#B10202"
          />
          <path
            d="M57 28H61.6042H64.1319H66.6597H83"
            stroke="#B10202"
            stroke-width="8"
            strokeDasharray="300"
            strokeDashoffset={isVisible ? '0' : '300'}
            style={{
              transition: 'stroke-dashoffset 0.5s ease-in-out 0.0s',
            }}
          />
          <path
            d="M83 28H91H94L120 54H142L168 28H211.5H221"
            stroke="#B10202"
            stroke-width="8"
            strokeDasharray="300"
            strokeDashoffset={isVisible ? '0' : '300'}
            style={{
              transition: 'stroke-dashoffset 0.5s ease-in-out 0.0s',
            }}
          />
          <circle cx="8" cy="12" r="8" fill="#B10202" />
          <circle cx="305" cy="12" r="8" fill="#B10202" />
          <path
            d="M12 12H63H91H119H300"
            stroke="#B10202"
            stroke-width="8"
            strokeDasharray="300"
            strokeDashoffset={isVisible ? '0' : '300'}
            style={{
              transition: 'stroke-dashoffset 0.5s ease-in-out 0.0s',
            }}
          />
          <path
            d="M1771 31.6128C1771 36.0311 1767.42 39.6128 1763 39.6128C1758.58 39.6128 1755 36.0311 1755 31.6128C1755 27.1945 1758.58 23.6128 1763 23.6128C1767.42 23.6128 1771 27.1945 1771 31.6128Z"
            fill="#B10202"
          />
          <path
            d="M1763.43 32.0336L1770.52 39.1169L1774.41 43.0058L1778.29 46.8947L1803.43 72.0336L1903.5 72.0336"
            stroke="#B10202"
            stroke-width="8"
            strokeDasharray="300"
            strokeDashoffset={isVisible ? '0' : '300'}
            style={{
              transition: 'stroke-dashoffset 0.5s ease-in-out 0.0s',
            }}
          />
          <circle cx="1743" cy="12.6128" r="8" fill="#B10202" />
          <path
            d="M1909 42.6128C1909 47.0311 1905.42 50.6128 1901 50.6128C1896.58 50.6128 1893 47.0311 1893 42.6128C1893 38.1945 1896.58 34.6128 1901 34.6128C1905.42 34.6128 1909 38.1945 1909 42.6128Z"
            fill="#B10202"
          />
          <path
            d="M1750 12.6128H1778.1L1808 42.517H1882.5H1896.5"
            stroke="#B10202"
            stroke-width="8"
            strokeDasharray="300"
            strokeDashoffset={isVisible ? '0' : '300'}
            style={{
              transition: 'stroke-dashoffset 0.5s ease-in-out 0.0s',
            }}
          />
          <path
            d="M1721 12.6128C1721 17.0311 1717.42 20.6128 1713 20.6128C1708.58 20.6128 1705 17.0311 1705 12.6128C1705 8.19451 1708.58 4.61279 1713 4.61279C1717.42 4.61279 1721 8.19451 1721 12.6128Z"
            fill="#B10202"
          />
          <circle cx="1775" cy="74.6128" r="8" fill="#B10202" />
          <path
            d="M1713.43 13.0336L1724.41 24.0127L1730.44 30.0405L1736.47 36.0683L1775.43 75.0336"
            stroke="#B10202"
            stroke-width="8"
            strokeDasharray="300"
            strokeDashoffset={isVisible ? '0' : '300'}
            style={{
              transition: 'stroke-dashoffset 0.5s ease-in-out 0.0s',
            }}
          />
          <circle cx="1623" cy="71.6128" r="8" fill="#B10202" />
          <circle cx="1747" cy="71.6128" r="8" fill="#B10202" />
          <path
            d="M1628 71.6128H1635.5L1656 51.1128H1699.5L1720 71.6128H1744"
            stroke="#B10202"
            stroke-width="8"
            strokeDasharray="300"
            strokeDashoffset={isVisible ? '0' : '300'}
            style={{
              transition: 'stroke-dashoffset 0.5s ease-in-out 0.0s',
            }}
          />
          <circle cx="1512" cy="55.6128" r="8" fill="#B10202" />
          <path
            d="M1682 31.6128C1682 36.0311 1678.42 39.6128 1674 39.6128C1669.58 39.6128 1666 36.0311 1666 31.6128C1666 27.1945 1669.58 23.6128 1674 23.6128C1678.42 23.6128 1682 27.1945 1682 31.6128Z"
            fill="#B10202"
          />
          <path
            d="M1516 55.6128H1567H1595L1619 31.6128H1669.5"
            stroke="#B10202"
            stroke-width="8"
            strokeDasharray="300"
            strokeDashoffset={isVisible ? '0' : '300'}
            style={{
              transition: 'stroke-dashoffset 0.5s ease-in-out 0.0s',
            }}
          />
          <circle cx="1362" cy="66.6128" r="8" fill="#B10202" />
          <path
            d="M1439.5 66.6128C1439.5 71.0311 1435.92 74.6128 1431.5 74.6128C1427.08 74.6128 1423.5 71.0311 1423.5 66.6128C1423.5 62.1945 1427.08 58.6128 1431.5 58.6128C1435.92 58.6128 1439.5 62.1945 1439.5 66.6128Z"
            fill="#B10202"
          />
          <path
            d="M1366 66.6128H1377.16H1383.28H1389.41H1429"
            stroke="#B10202"
            stroke-width="8"
            strokeDasharray="300"
            strokeDashoffset={isVisible ? '0' : '300'}
            style={{
              transition: 'stroke-dashoffset 0.5s ease-in-out 0.0s',
            }}
          />
          <circle cx="1354" cy="45.6128" r="8" fill="#B10202" />
          <circle cx="1601" cy="71.6128" r="8" fill="#B10202" />
          <path
            d="M1357 45.6128H1408H1436L1462 71.6128H1597"
            stroke="#B10202"
            stroke-width="8"
            strokeDasharray="300"
            strokeDashoffset={isVisible ? '0' : '300'}
            style={{
              transition: 'stroke-dashoffset 0.5s ease-in-out 0.0s',
            }}
          />
          <circle cx="1399" cy="31.6128" r="8" fill="#B10202" />
          <path
            d="M1581 31.6128C1581 36.0311 1577.42 39.6128 1573 39.6128C1568.58 39.6128 1565 36.0311 1565 31.6128C1565 27.1945 1568.58 23.6128 1573 23.6128C1577.42 23.6128 1581 27.1945 1581 31.6128Z"
            fill="#B10202"
          />
          <path
            d="M1403 31.6128H1407.6H1410.13H1412.66H1429"
            stroke="#B10202"
            stroke-width="8"
            strokeDasharray="300"
            strokeDashoffset={isVisible ? '0' : '300'}
            style={{
              transition: 'stroke-dashoffset 0.5s ease-in-out 0.0s',
            }}
          />
          <path
            d="M1429 31.6128H1437H1440L1466 57.6128H1488L1514 31.6128H1557.5H1567"
            stroke="#B10202"
            stroke-width="8"
            strokeDasharray="300"
            strokeDashoffset={isVisible ? '0' : '300'}
            style={{
              transition: 'stroke-dashoffset 0.5s ease-in-out 0.0s',
            }}
          />
          <circle cx="1354" cy="15.6128" r="8" fill="#B10202" />
          <circle cx="1651" cy="15.6128" r="8" fill="#B10202" />
          <path
            d="M1358 15.6128H1409H1437H1465H1646"
            stroke="#B10202"
            stroke-width="8"
            strokeDasharray="300"
            strokeDashoffset={isVisible ? '0' : '300'}
            style={{
              transition: 'stroke-dashoffset 0.5s ease-in-out 0.0s',
            }}
          />
          <circle cx="1909" cy="71.6128" r="8" fill="#B10202" />
          <ellipse cx="767" cy="26.4557" rx="8" ry="8.00014" transform="rotate(180 767 26.4557)" fill="#B10202" />
          <path
            d="M615 65.4564C615 61.038 618.582 57.4562 623 57.4562C627.418 57.4562 631 61.038 631 65.4564C631 69.8747 627.418 73.4565 623 73.4565C618.582 73.4565 615 69.8747 615 65.4564Z"
            fill="#B10202"
          />
          <path
            d="M763 26.4557H743.633H733L694.5 64.9564H626"
            stroke="#B10202"
            stroke-width="8"
            strokeDasharray="300"
            strokeDashoffset={isVisible ? '0' : '300'}
            style={{
              transition: 'stroke-dashoffset 0.5s ease-in-out 0.0s',
            }}
          />
          <ellipse cx="869" cy="69.4564" rx="8" ry="8.00014" transform="rotate(180 869 69.4564)" fill="#B10202" />
          <ellipse cx="719" cy="69.4564" rx="8" ry="8.00014" transform="rotate(180 719 69.4564)" fill="#B10202" />
          <path
            d="M869 69.4565H827H791.5L769.5 47.4561H739.5L721 65.9564"
            stroke="#B10202"
            stroke-width="8"
            strokeDasharray="300"
            strokeDashoffset={isVisible ? '0' : '300'}
            style={{
              transition: 'stroke-dashoffset 0.5s ease-in-out 0.0s',
            }}
          />
          <path
            d="M911 51.4561C911 47.0378 914.582 43.456 919 43.456C923.418 43.456 927 47.0378 927 51.4561C927 55.8745 923.418 59.4563 919 59.4563C914.582 59.4563 911 55.8745 911 51.4561Z"
            fill="#B10202"
          />
          <path
            d="M918.567 51.0353L911.484 43.9519L907.595 40.0629L903.706 36.174L878.567 11.0347L754.5 11.0347"
            stroke="#B10202"
            stroke-width="8"
            strokeDasharray="300"
            strokeDashoffset={isVisible ? '0' : '300'}
            style={{
              transition: 'stroke-dashoffset 0.5s ease-in-out 0.0s',
            }}
          />
          <ellipse cx="749" cy="11.4554" rx="8" ry="8.00014" transform="rotate(180 749 11.4554)" fill="#B10202" />
          <ellipse cx="939" cy="70.4565" rx="8" ry="8.00014" transform="rotate(180 939 70.4565)" fill="#B10202" />
          <path
            d="M773 40.4559C773 36.0376 776.582 32.4558 781 32.4558C785.418 32.4558 789 36.0376 789 40.4559C789 44.8743 785.418 48.4561 781 48.4561C776.582 48.4561 773 44.8743 773 40.4559Z"
            fill="#B10202"
          />
          <path
            d="M932 70.4565H903.904L874 40.5518H799.5H785.5"
            stroke="#B10202"
            stroke-width="8"
            strokeDasharray="300"
            strokeDashoffset={isVisible ? '0' : '300'}
            style={{
              transition: 'stroke-dashoffset 0.5s ease-in-out 0.0s',
            }}
          />
          <path
            d="M961 70.4565C961 66.0381 964.582 62.4563 969 62.4563C973.418 62.4563 977 66.0381 977 70.4565C977 74.8748 973.418 78.4566 969 78.4566C964.582 78.4566 961 74.8748 961 70.4565Z"
            fill="#B10202"
          />
          <ellipse cx="907" cy="8.4554" rx="8" ry="8.00014" transform="rotate(180 907 8.4554)" fill="#B10202" />
          <path
            d="M968.567 70.0357L957.588 59.0563L951.56 53.0284L945.532 47.0006L906.567 8.03461"
            stroke="#B10202"
            stroke-width="8"
            strokeDasharray="300"
            strokeDashoffset={isVisible ? '0' : '300'}
            style={{
              transition: 'stroke-dashoffset 0.5s ease-in-out 0.0s',
            }}
          />
          <ellipse cx="1059" cy="11.4554" rx="8" ry="8.00014" transform="rotate(180 1059 11.4554)" fill="#B10202" />
          <ellipse cx="935" cy="11.4554" rx="8" ry="8.00014" transform="rotate(180 935 11.4554)" fill="#B10202" />
          <path
            d="M1054 11.4555H1046.5L1026 31.9558H982.5L962 11.4555H938"
            stroke="#B10202"
            stroke-width="8"
            strokeDasharray="300"
            strokeDashoffset={isVisible ? '0' : '300'}
            style={{
              transition: 'stroke-dashoffset 0.5s ease-in-out 0.0s',
            }}
          />
          <ellipse cx="1170" cy="27.4557" rx="8" ry="8.00014" transform="rotate(180 1170 27.4557)" fill="#B10202" />
          <path
            d="M1000 51.4561C1000 47.0378 1003.58 43.456 1008 43.456C1012.42 43.456 1016 47.0378 1016 51.4561C1016 55.8745 1012.42 59.4563 1008 59.4563C1003.58 59.4563 1000 55.8745 1000 51.4561Z"
            fill="#B10202"
          />
          <path
            d="M1166 27.4557H1115H1087L1063 51.4561H1012.5"
            stroke="#B10202"
            stroke-width="8"
            strokeDasharray="300"
            strokeDashoffset={isVisible ? '0' : '300'}
            style={{
              transition: 'stroke-dashoffset 0.5s ease-in-out 0.0s',
            }}
          />
          <ellipse cx="1320" cy="16.4555" rx="8" ry="8.00014" transform="rotate(180 1320 16.4555)" fill="#B10202" />
          <path
            d="M1242.5 16.4555C1242.5 12.0372 1246.08 8.45539 1250.5 8.45539C1254.92 8.45539 1258.5 12.0372 1258.5 16.4555C1258.5 20.8739 1254.92 24.4557 1250.5 24.4557C1246.08 24.4557 1242.5 20.8739 1242.5 16.4555Z"
            fill="#B10202"
          />
          <path
            d="M1316 16.4556H1304.84H1298.72H1292.59H1253"
            stroke="#B10202"
            stroke-width="8"
            strokeDasharray="300"
            strokeDashoffset={isVisible ? '0' : '300'}
            style={{
              transition: 'stroke-dashoffset 0.5s ease-in-out 0.0s',
            }}
          />
          <ellipse cx="1328" cy="37.4559" rx="8" ry="8.00014" transform="rotate(180 1328 37.4559)" fill="#B10202" />
          <ellipse cx="1081" cy="11.4554" rx="8" ry="8.00014" transform="rotate(180 1081 11.4554)" fill="#B10202" />
          <path
            d="M1325 37.4559H1274H1246L1220 11.4554H1085"
            stroke="#B10202"
            stroke-width="8"
            strokeDasharray="300"
            strokeDashoffset={isVisible ? '0' : '300'}
            style={{
              transition: 'stroke-dashoffset 0.5s ease-in-out 0.0s',
            }}
          />
          <ellipse cx="1283" cy="51.4561" rx="8" ry="8.00014" transform="rotate(180 1283 51.4561)" fill="#B10202" />
          <path
            d="M1101 51.4561C1101 47.0378 1104.58 43.456 1109 43.456C1113.42 43.456 1117 47.0378 1117 51.4561C1117 55.8745 1113.42 59.4563 1109 59.4563C1104.58 59.4563 1101 55.8745 1101 51.4561Z"
            fill="#B10202"
          />
          <path
            d="M1279 51.4561H1274.4H1271.87H1269.34H1253"
            stroke="#B10202"
            stroke-width="8"
            strokeDasharray="300"
            strokeDashoffset={isVisible ? '0' : '300'}
            style={{
              transition: 'stroke-dashoffset 0.5s ease-in-out 0.0s',
            }}
          />
          <path
            d="M1253 51.4561H1245H1242L1216 25.4557H1194L1168 51.4561H1124.5H1115"
            stroke="#B10202"
            stroke-width="8"
            strokeDasharray="300"
            strokeDashoffset={isVisible ? '0' : '300'}
            style={{
              transition: 'stroke-dashoffset 0.5s ease-in-out 0.0s',
            }}
          />
          <ellipse cx="1328" cy="67.4564" rx="8" ry="8.00014" transform="rotate(180 1328 67.4564)" fill="#B10202" />
          <ellipse cx="1031" cy="67.4564" rx="8" ry="8.00014" transform="rotate(180 1031 67.4564)" fill="#B10202" />
          <path
            d="M1324 67.4564H1273H1245H1217H1036"
            stroke="#B10202"
            stroke-width="8"
            strokeDasharray="300"
            strokeDashoffset={isVisible ? '0' : '300'}
            style={{
              transition: 'stroke-dashoffset 0.5s ease-in-out 0.0s',
            }}
          />
        </g>
        <defs>
          <clipPath id="clip0_5_7">
            <rect width="1920" height="80" fill="white" />
          </clipPath>
        </defs>
      </svg>
      {/* strokeDasharray="300" strokeDashoffset={isVisible ? '0' : '300'}
      style=
      {{
        transition: 'stroke-dashoffset 0.5s ease-in-out 0.0s',
      }} */}
    </div>
  )
}
