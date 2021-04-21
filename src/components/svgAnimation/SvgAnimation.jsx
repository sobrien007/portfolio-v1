import React, { useState } from 'react'
import { useSpring, animated } from '@react-spring/web'

import styles from './styles.module.css'

const AnimFeTurbulence = animated('feTurbulence')
const AnimFeDisplacementMap = animated('feDisplacementMap')

export default function SvgAnimation() {
  const [open, toggle] = useState(false)
  const { freq, factor, scale, opacity } = useSpring({
    reverse: open,
    from: { factor: 10, opacity: 0, scale: 0.9, freq: '0.0175, 0.0' },
    to: { factor: 150, opacity: 1, scale: 1, freq: '0.0, 0.0' },
    config: { duration: 3000 },
  })

  return (
    <div className={styles.container} onClick={() => toggle(!open)}>
      <animated.svg className={styles.svg} style={{ scale, opacity }} viewBox="0 0 1278 446">
        <defs>
          <filter id="water">
            <AnimFeTurbulence type="fractalNoise" baseFrequency={freq} numOctaves="2" result="TURB" seed="8" />
            <AnimFeDisplacementMap
              xChannelSelector="R"
              yChannelSelector="G"
              in="SourceGraphic"
              in2="TURB"
              result="DISP"
              scale={factor}
            />
          </filter>
        </defs>

        <g filter="url(#water)">
          <animated.path
d="M 114.114 48.502 L 87.659 48.502 A 30.677 30.677 0 0 0 86.689 40.571 A 21.798 21.798 0 0 0 80.153 29.763 Q 72.646 22.991 58.684 22.991 A 49.015 49.015 0 0 0 50.855 23.576 Q 43.335 24.795 38.475 28.555 A 18.047 18.047 0 0 0 31.383 41.815 A 25.649 25.649 0 0 0 31.284 44.092 A 15.979 15.979 0 0 0 36.612 56.094 A 23.917 23.917 0 0 0 39.053 58.107 A 41.929 41.929 0 0 0 44.22 61.242 Q 51.841 65.215 64.668 69.025 A 168.402 168.402 0 0 1 76.587 73.026 Q 82.107 75.126 86.714 77.418 A 77.493 77.493 0 0 1 93.328 81.098 A 57.282 57.282 0 0 1 101.16 86.929 Q 106.188 91.43 109.18 96.635 A 37.585 37.585 0 0 1 113.714 110.018 A 48.919 48.919 0 0 1 114.219 117.159 Q 114.219 136.265 99.574 147.551 A 50.571 50.571 0 0 1 82.318 156.015 Q 75.178 158.043 66.689 158.613 A 102.221 102.221 0 0 1 59.839 158.836 A 78.307 78.307 0 0 1 39.221 156.191 A 69.641 69.641 0 0 1 29.342 152.695 A 57.682 57.682 0 0 1 16.981 145.385 A 46.675 46.675 0 0 1 7.716 135.74 A 41.579 41.579 0 0 1 0.08 113.43 A 51.681 51.681 0 0 1 0 110.545 L 26.56 110.545 A 31.458 31.458 0 0 0 27.66 119.1 A 22.729 22.729 0 0 0 35.168 130.701 Q 42.037 136.397 53.65 137.548 A 62.791 62.791 0 0 0 59.839 137.84 Q 68.52 137.84 74.503 135.636 A 21.762 21.762 0 0 0 80.677 132.223 A 17.896 17.896 0 0 0 87.587 119.208 A 23.079 23.079 0 0 0 87.659 117.369 A 22.88 22.88 0 0 0 86.744 110.722 A 17.309 17.309 0 0 0 80.573 101.832 Q 74.895 97.458 61.907 93.017 A 196.473 196.473 0 0 0 55.01 90.809 A 182.115 182.115 0 0 1 43.2 86.835 Q 32.78 82.899 25.615 78.421 Q 4.724 65.298 4.724 44.197 Q 4.724 25.721 19.789 13.753 Q 34.478 2.083 57.702 1.793 A 95.248 95.248 0 0 1 58.894 1.785 A 73.991 73.991 0 0 1 74.65 3.396 A 59.322 59.322 0 0 1 87.344 7.664 A 48.151 48.151 0 0 1 101.991 18.105 A 45.432 45.432 0 0 1 106.975 24.409 A 42.947 42.947 0 0 1 114.114 48.502 Z M 366.382 43.148 L 390.422 43.148 L 391.157 56.27 A 40.343 40.343 0 0 1 420.457 41.182 A 52.248 52.248 0 0 1 424.226 41.048 Q 458.294 41.048 460.234 78.499 A 87.722 87.722 0 0 1 460.339 81.675 L 460.339 156.736 L 434.829 156.736 L 434.829 83.145 A 39.75 39.75 0 0 0 434.428 77.291 Q 433.982 74.304 433.04 71.913 A 15.635 15.635 0 0 0 430.157 67.136 Q 425.486 61.939 414.883 61.939 A 26.708 26.708 0 0 0 404.221 63.985 Q 396.557 67.284 391.892 75.901 L 391.892 156.736 L 366.382 156.736 L 366.382 43.148 Z M 1069.436 43.148 L 1093.477 43.148 L 1094.211 56.27 A 40.343 40.343 0 0 1 1123.511 41.182 A 52.248 52.248 0 0 1 1127.28 41.048 Q 1161.348 41.048 1163.288 78.499 A 87.722 87.722 0 0 1 1163.394 81.675 L 1163.394 156.736 L 1137.883 156.736 L 1137.883 83.145 A 39.75 39.75 0 0 0 1137.482 77.291 Q 1137.036 74.304 1136.094 71.913 A 15.635 15.635 0 0 0 1133.212 67.136 Q 1128.54 61.939 1117.937 61.939 A 26.708 26.708 0 0 0 1107.276 63.985 Q 1099.611 67.284 1094.946 75.901 L 1094.946 156.736 L 1069.436 156.736 L 1069.436 43.148 Z M 344.336 156.736 L 318.301 156.736 Q 316.916 154.053 315.816 148.586 A 87.104 87.104 0 0 1 315.361 146.133 A 39.609 39.609 0 0 1 286.644 158.824 A 48.279 48.279 0 0 1 285.547 158.836 A 48.972 48.972 0 0 1 272.911 157.286 A 36.454 36.454 0 0 1 257.622 149.073 A 32.456 32.456 0 0 1 249.205 137.444 A 32.203 32.203 0 0 1 246.809 124.927 A 38.863 38.863 0 0 1 248.628 112.729 A 30.841 30.841 0 0 1 260.299 97.055 A 45.44 45.44 0 0 1 273.459 90.678 Q 284.178 87.344 298.879 87.344 L 314.521 87.344 L 314.521 79.891 A 25.565 25.565 0 0 0 313.842 73.83 A 17.775 17.775 0 0 0 309.587 65.771 A 15.406 15.406 0 0 0 303.013 61.673 Q 300.514 60.846 297.463 60.587 A 34.2 34.2 0 0 0 294.575 60.469 A 28.532 28.532 0 0 0 288.278 61.127 A 19.849 19.849 0 0 0 280.298 64.826 Q 274.734 69.183 274.734 75.901 L 249.224 75.901 A 27.684 27.684 0 0 1 253.924 60.54 A 35.112 35.112 0 0 1 255.417 58.422 A 39.113 39.113 0 0 1 266.921 48.369 A 49.395 49.395 0 0 1 272.267 45.667 A 56.127 56.127 0 0 1 288.859 41.413 A 69.105 69.105 0 0 1 296.045 41.048 A 64.333 64.333 0 0 1 309.271 42.329 Q 317.491 44.056 323.834 48.111 A 37.592 37.592 0 0 1 327.854 51.074 A 33.465 33.465 0 0 1 339.25 71.195 A 48.743 48.743 0 0 1 340.032 79.261 L 340.032 130.491 Q 340.032 140.911 342.021 148.468 A 37.71 37.71 0 0 0 344.336 154.952 L 344.336 156.736 Z M 746.516 156.736 L 690.771 156.736 L 690.771 3.885 L 743.157 3.885 A 103.805 103.805 0 0 1 757.808 4.85 Q 773.213 7.051 782.629 14.278 Q 796.172 24.671 796.172 45.247 A 33.007 33.007 0 0 1 790.503 64.144 Q 784.834 72.542 773.916 77.161 A 38.05 38.05 0 0 1 784.295 81.614 A 31.58 31.58 0 0 1 793.075 89.811 A 35.162 35.162 0 0 1 799.511 106.508 A 45.695 45.695 0 0 1 799.846 112.12 A 53.592 53.592 0 0 1 798.215 125.737 A 36.887 36.887 0 0 1 786.041 145.189 A 45.173 45.173 0 0 1 770.481 153.477 Q 760.18 156.736 746.516 156.736 Z M 130.701 102.881 L 130.701 99.732 A 75.548 75.548 0 0 1 132.552 82.684 A 61.837 61.837 0 0 1 137.262 69.34 A 51.664 51.664 0 0 1 148.472 54.032 A 48.477 48.477 0 0 1 155.686 48.502 A 48.708 48.708 0 0 1 182.141 41.048 A 58.352 58.352 0 0 1 196.845 42.797 A 40.504 40.504 0 0 1 217.992 55.85 A 48.698 48.698 0 0 1 227.38 73.397 Q 229.619 80.665 230.322 89.425 A 104.111 104.111 0 0 1 230.642 97.737 L 230.642 108.025 L 156.421 108.025 A 43.145 43.145 0 0 0 158.343 117.934 A 30.449 30.449 0 0 0 165.817 130.281 A 27.872 27.872 0 0 0 184.91 138.434 A 36.871 36.871 0 0 0 186.55 138.47 A 34.114 34.114 0 0 0 212.524 127.327 A 43.637 43.637 0 0 0 215.105 124.297 L 228.857 137.42 Q 222.034 147.603 210.643 153.22 A 54.734 54.734 0 0 1 191.571 158.528 A 66.959 66.959 0 0 1 185.081 158.836 A 62.591 62.591 0 0 1 166.893 156.315 A 49.248 49.248 0 0 1 145.765 143.561 A 51.271 51.271 0 0 1 131.827 116.018 A 73.326 73.326 0 0 1 130.701 102.881 Z M 950.073 102.881 L 950.073 99.732 A 75.548 75.548 0 0 1 951.925 82.684 A 61.837 61.837 0 0 1 956.635 69.34 A 51.664 51.664 0 0 1 967.844 54.032 A 48.477 48.477 0 0 1 975.059 48.502 A 48.708 48.708 0 0 1 1001.514 41.048 A 58.352 58.352 0 0 1 1016.217 42.797 A 40.504 40.504 0 0 1 1037.365 55.85 A 48.698 48.698 0 0 1 1046.753 73.397 Q 1048.992 80.665 1049.694 89.425 A 104.111 104.111 0 0 1 1050.015 97.737 L 1050.015 108.025 L 975.793 108.025 A 43.145 43.145 0 0 0 977.716 117.934 A 30.449 30.449 0 0 0 985.189 130.281 A 27.872 27.872 0 0 0 1004.282 138.434 A 36.871 36.871 0 0 0 1005.923 138.47 A 34.114 34.114 0 0 0 1031.897 127.327 A 43.637 43.637 0 0 0 1034.478 124.297 L 1048.23 137.42 Q 1041.406 147.603 1030.016 153.22 A 54.734 54.734 0 0 1 1010.944 158.528 A 66.959 66.959 0 0 1 1004.453 158.836 A 62.591 62.591 0 0 1 986.266 156.315 A 49.248 49.248 0 0 1 965.138 143.561 A 51.271 51.271 0 0 1 951.2 116.018 A 73.326 73.326 0 0 1 950.073 102.881 Z M 664.316 75.796 L 664.316 84.3 A 110.145 110.145 0 0 1 662.609 104.151 A 82.434 82.434 0 0 1 656.548 123.72 A 63.133 63.133 0 0 1 645.744 140.254 A 55.52 55.52 0 0 1 634.344 149.755 A 59.326 59.326 0 0 1 607.449 158.568 A 73.441 73.441 0 0 1 601.118 158.836 A 64.895 64.895 0 0 1 580.477 155.635 A 58.232 58.232 0 0 1 567.997 149.755 A 58.659 58.659 0 0 1 547.344 127.46 A 71.788 71.788 0 0 1 545.531 123.878 A 82.677 82.677 0 0 1 538.679 100.872 A 108.239 108.239 0 0 1 537.5 85.14 L 537.5 76.531 A 107.343 107.343 0 0 1 539.36 56.101 A 82.412 82.412 0 0 1 545.426 37.059 A 64.85 64.85 0 0 1 555.863 20.944 A 55.776 55.776 0 0 1 567.787 10.866 A 59.357 59.357 0 0 1 595.172 2.007 A 73.064 73.064 0 0 1 600.908 1.785 A 66.149 66.149 0 0 1 620.585 4.625 A 57.685 57.685 0 0 1 634.03 10.761 A 57.479 57.479 0 0 1 653.994 32.003 A 71.097 71.097 0 0 1 656.338 36.586 Q 664.211 53.436 664.316 75.796 Z M 883.516 42.518 L 883.411 66.453 Q 878.372 65.613 873.018 65.613 A 35.094 35.094 0 0 0 864.075 66.673 A 21.331 21.331 0 0 0 849.397 79.051 L 849.397 156.736 L 823.887 156.736 L 823.887 43.148 L 848.242 43.148 L 848.872 55.85 Q 858.099 41.067 874.446 41.048 A 35.989 35.989 0 0 1 874.487 41.048 A 33.432 33.432 0 0 1 878.241 41.246 Q 881.257 41.588 883.516 42.518 Z M 637.756 84.3 L 637.756 76.321 Q 637.756 59.811 633.699 48.311 A 44.202 44.202 0 0 0 628.151 37.374 A 30.672 30.672 0 0 0 605.839 24.114 A 41.782 41.782 0 0 0 600.908 23.831 A 35.077 35.077 0 0 0 588.165 26.055 Q 579.88 29.257 574.162 37.072 A 39.333 39.333 0 0 0 573.981 37.321 Q 566.726 47.399 564.774 63.717 A 106.848 106.848 0 0 0 564.06 75.482 L 564.06 84.3 A 104.38 104.38 0 0 0 565.019 98.93 Q 566.073 106.361 568.287 112.441 A 44.991 44.991 0 0 0 573.876 123.248 A 31.083 31.083 0 0 0 596.367 136.728 A 40.445 40.445 0 0 0 601.118 137 A 36.808 36.808 0 0 0 613.202 135.11 A 30.264 30.264 0 0 0 628.256 123.563 A 44.667 44.667 0 0 0 634.228 111.174 Q 637.756 100.037 637.756 84.3 Z M 926.663 43.148 L 926.663 156.736 L 901.152 156.736 L 901.152 43.148 L 926.663 43.148 Z M 749.036 87.764 L 717.332 87.764 L 717.332 135.53 L 746.831 135.53 A 40.623 40.623 0 0 0 754.609 134.831 Q 761.687 133.45 766.357 129.337 A 20.272 20.272 0 0 0 772.979 117.176 A 29.667 29.667 0 0 0 773.391 112.12 Q 773.391 92.915 757.573 88.846 A 37.579 37.579 0 0 0 749.036 87.764 Z M 717.332 25.301 L 717.332 68.238 L 743.367 68.238 A 44.176 44.176 0 0 0 750.914 67.633 Q 758.045 66.395 762.736 62.621 A 18.285 18.285 0 0 0 769.471 50.411 A 26.811 26.811 0 0 0 769.717 46.717 Q 769.717 39.346 766.988 34.638 A 14.816 14.816 0 0 0 763.261 30.34 A 19.983 19.983 0 0 0 757.443 27.282 Q 751.713 25.301 743.157 25.301 L 717.332 25.301 Z M 156.841 89.339 L 205.447 89.339 L 205.447 87.449 A 47.937 47.937 0 0 0 204.42 80.055 Q 202.737 72.591 198.623 68.08 Q 192.639 61.519 182.036 61.519 A 24.325 24.325 0 0 0 173.898 62.827 A 20.816 20.816 0 0 0 165.082 68.868 A 30.171 30.171 0 0 0 159.923 77.341 Q 158.369 81.101 157.457 85.654 A 59.683 59.683 0 0 0 156.841 89.339 Z M 976.213 89.339 L 1024.819 89.339 L 1024.819 87.449 A 47.937 47.937 0 0 0 1023.792 80.055 Q 1022.11 72.591 1017.996 68.08 Q 1012.012 61.519 1001.409 61.519 A 24.325 24.325 0 0 0 993.27 62.827 A 20.816 20.816 0 0 0 984.454 68.868 A 30.171 30.171 0 0 0 979.296 77.341 Q 977.742 81.101 976.829 85.654 A 59.683 59.683 0 0 0 976.213 89.339 Z M 314.521 124.822 L 314.521 103.406 L 300.769 103.406 Q 287.156 103.406 280.033 107.959 A 19.084 19.084 0 0 0 279.458 108.34 A 15.663 15.663 0 0 0 272.494 119.581 A 20.637 20.637 0 0 0 272.319 122.303 A 17.854 17.854 0 0 0 273.064 127.587 A 13.989 13.989 0 0 0 277.201 134.008 Q 281.967 138.262 289.885 138.362 A 30.345 30.345 0 0 0 290.271 138.365 A 29.018 29.018 0 0 0 304.496 134.691 A 25.977 25.977 0 0 0 311.246 129.439 A 23.448 23.448 0 0 0 314.521 124.822 Z M 900.336 8.749 A 15.224 15.224 0 0 0 899.578 13.648 Q 899.578 19.422 903.304 23.254 A 11.352 11.352 0 0 0 905.103 24.757 Q 907.104 26.105 909.758 26.673 A 20.096 20.096 0 0 0 913.96 27.086 A 24.172 24.172 0 0 0 914.684 27.075 Q 921.089 26.883 924.668 23.254 Q 928.447 19.422 928.447 13.648 A 17.459 17.459 0 0 0 928.414 12.563 A 13.203 13.203 0 0 0 924.668 3.885 A 11.627 11.627 0 0 0 923.237 2.635 Q 921.123 1.075 918.26 0.439 A 19.816 19.816 0 0 0 913.96 0.001 Q 907.031 0.001 903.304 3.885 A 12.931 12.931 0 0 0 900.336 8.749 Z"
            fill="#161616"
          />
        </g>
      </animated.svg>
    </div>
  )
}
