import React from "react"
import AspectRatio from '../../helpers/AspectRatio'
import styles from './styles.module.css'

const Illustration = () => (
  <div className={styles.container}>
    <div className={styles.containerInner}>
      <AspectRatio ratio={542/600} >
        {SVGImage}
      </AspectRatio>
    </div>
  </div>
)

const SVGImage = (
    <svg width="100%" height="100%" viewBox="0 0 1208 1092" preserveAspectRatio="none">
      <g id="Canvas" transform="translate(294 1783)">
      <clipPath id="clip-0" clipRule="evenodd">
        <path d="M -294 -1783L 914 -1783L 914 -691L -294 -691L -294 -1783Z" fill="#FFFFFF"></path>
      </clipPath>
      <g id="Frame" clipPath="url(#clip-0)">
      <path d="M -294 -1783L 914 -1783L 914 -691L -294 -691L -294 -1783Z" fill="#FFFFFF"></path>

      <g id="Background">

        <path id="background" transform="translate(-306 -2196)" fill="#404850" d="M 0 0L 1244.05 0L 1277 2282L 0 2282L 0 0Z"></path>

        <path id="whiteCloud" transform="translate(516 -1389)" fill="#FFFFFF" fillRule="evenodd" d="M 166.428 44.5262C 161.172 26.7073 147.987 11.4338 129.304 4.20349C 97.3439 -8.16443 61.3967 7.68573 49.0135 39.6059C 48.3431 41.3338 47.7556 43.0734 47.2489 44.8203C 44.7894 44.3435 42.2487 44.0937 39.6497 44.0937C 17.7518 44.0937 0 61.8234 0 83.694C 0 105.565 17.7518 123.294 39.6497 123.294C 51.0559 123.294 61.3372 118.485 68.5708 110.784C 73.2755 114.467 78.5968 117.528 84.4601 119.797C 107.624 128.761 132.882 122.901 149.746 106.844C 157.018 115.63 168.015 121.228 180.32 121.228C 189.113 121.228 197.236 118.37 203.811 113.533C 208.822 118.301 215.606 121.228 223.073 121.228C 238.497 121.228 251 108.741 251 93.3358C 251 77.9316 238.497 65.4435 223.073 65.4435C 220.925 65.4435 218.833 65.6857 216.825 66.1443C 210.789 51.968 196.716 42.0276 180.32 42.0276C 175.432 42.0276 170.752 42.9108 166.428 44.5262Z"></path>

        <path id="grayCloud" transform="translate(703 -1476)" fill="#8F8C8C" fillRule="evenodd" d="M 241.354 64.6522C 233.732 38.7791 214.611 16.6019 187.516 6.10348C 141.168 -11.8548 89.0375 11.1597 71.0793 57.5079C 70.1071 60.0168 69.2551 62.5427 68.5203 65.0792C 64.9536 64.3869 61.2691 64.0242 57.5 64.0242C 25.7436 64.0242 0 89.7678 0 121.524C 0 153.281 25.7436 179.024 57.5 179.024C 74.0412 179.024 88.9511 172.04 99.4413 160.859C 106.264 166.206 113.981 170.651 122.484 173.945C 156.076 186.961 192.706 178.453 217.162 155.138C 227.708 167.895 243.655 176.024 261.5 176.024C 274.251 176.024 286.032 171.874 295.567 164.85C 302.834 171.774 312.671 176.024 323.5 176.024C 345.868 176.024 364 157.892 364 135.524C 364 113.157 345.868 95.0242 323.5 95.0242C 320.385 95.0242 317.352 95.3759 314.439 96.0418C 305.686 75.4578 285.278 61.0242 261.5 61.0242C 254.412 61.0242 247.624 62.3067 241.354 64.6522Z"></path>

        <path id="redCloud" transform="translate(394 -1571)" fill="#876363" fillRule="evenodd" d="M 241.354 64.6522C 233.732 38.7791 214.611 16.6019 187.516 6.10348C 141.168 -11.8548 89.0375 11.1597 71.0793 57.5079C 70.1071 60.0168 69.2551 62.5427 68.5203 65.0792C 64.9536 64.3869 61.2691 64.0242 57.5 64.0242C 25.7436 64.0242 0 89.7678 0 121.524C 0 153.281 25.7436 179.024 57.5 179.024C 74.0412 179.024 88.9511 172.04 99.4413 160.859C 106.264 166.206 113.981 170.651 122.484 173.945C 156.076 186.961 192.706 178.453 217.162 155.138C 227.708 167.895 243.655 176.024 261.5 176.024C 274.251 176.024 286.032 171.874 295.567 164.85C 302.834 171.774 312.671 176.024 323.5 176.024C 345.868 176.024 364 157.892 364 135.524C 364 113.157 345.868 95.0242 323.5 95.0242C 320.385 95.0242 317.352 95.3759 314.439 96.0418C 305.686 75.4578 285.278 61.0242 261.5 61.0242C 254.412 61.0242 247.624 62.3067 241.354 64.6522Z"></path>

      <path id="wall" transform="matrix(0.999866 -0.0163484 0.0163484 0.999866 -300.775 -1771.07)" fill="#FFFFFF" d="M 21.9227 0L 802.079 175.198L 738.713 844.298L 0 558.61L 21.9227 0Z"></path>
      <path id="floor" transform="translate(-301 -1479)" fill="#ECE0C5" d="M 39.1881 0L 1258 397L 1258 801L 0 377L 39.1881 0Z"></path>

      </g>

      <g id="dog" filter="url(#filter0_d)">
        <path id="path23_fill" transform="matrix(-0.388327 0.921522 -0.92147 -0.38845 711.222 -890.434)" fill="#ECECEC" d="M 7.40765 16.2197C 7.40765 23.5743 5.74939 29.5364 3.70383 29.5364C 1.65826 29.5364 0 23.5743 0 16.2197C 0 8.86503 5.98533 0 8.03089 0C 10.0765 0 7.40765 8.86503 7.40765 16.2197Z"></path>
      <path id="path24_fill" transform="matrix(1 0 0 -1 672.593 -921.776)" fill="#FFFFFF" d="M 13.3333 1.19402C 31.3035 -1.89845 42.3333 0.759037 49.3333 12.194C 56.3334 23.629 31.3334 45.629 31.3334 45.629C 31.3334 45.629 43.3334 7.76193 13.3333 12.194C -16.6667 16.6261 13.3333 1.19402 13.3333 1.19402Z"></path>
      <path id="path25_fill" transform="matrix(0.0757948 -0.997123 0.998971 0.0453534 548.208 -899.896)" fill="#EDEDED" d="M 16.0818 32.5367C 16.0818 49.8346 13.8607 63.8574 11.1208 63.8574C 8.38091 63.8574 6.15978 49.8346 6.15978 32.5367C 6.15978 15.2387 -4.23487 8.38323 1.98194 0C 4.72183 0 16.0818 15.2387 16.0818 32.5367Z"></path>
        <path id="path26_fill" transform="matrix(-0.0546836 -0.998504 0.996372 -0.0851064 538.861 -919.532)" fill="#EDEDED" d="M 11.3844 25.3364C 11.3844 37.9512 9.56154 48.1775 7.31297 48.1775C 5.0644 48.1775 3.24158 37.9512 3.24158 25.3364C 3.24158 12.7215 -6.27942 -6.98651 7.31297 2.49523C 9.56154 2.49523 11.3844 12.7215 11.3844 25.3364Z"></path>
        <path id="path27_fill" transform="matrix(-0.33831 0.941035 -0.941268 -0.337661 723.094 -906.031)" fill="#ECECEC" d="M 7.39318 16.18C 7.39318 23.5491 5.73816 29.5228 3.69659 29.5228C 1.65502 29.5228 0 23.5491 0 16.18C 0 8.81098 7.1286 0 9.17017 0C 11.2117 0 7.39318 8.81098 7.39318 16.18Z"></path>
        <path id="path28_fill" transform="matrix(0.706392 -0.70782 0.706392 0.70782 546.79 -939.445)" fill="#FFFFFF" d="M 100.928 63.498C 100.928 93.0553 105.053 128.397 71.8282 128.397C 38.6039 128.397 5.82883 62.3976 8.04482 46.1672C 13.721 4.59407 -17.7406 0 15.4837 0C 48.7081 0 100.928 33.9408 100.928 63.498Z"></path>
        <path id="path29_fill" transform="matrix(0.974498 0.224396 -0.224396 0.974498 512.518 -994.406)" fill="#994902" d="M 8.19144 15.7165C 8.19144 18.0534 6.55503 23.5748 4.22282 23.5748C 1.89062 23.5748 -8.17088e-06 21.6803 -8.17088e-06 19.3434C -8.17088e-06 13.2986 10.3363 0 12.6685 0C 15.0007 0 8.19144 13.3796 8.19144 15.7165Z"></path>
        <path id="path29_fill" transform="matrix(0.974498 0.224396 -0.224396 0.974498 512.518 -994.406)" fill="url(#paint31_linear)" d="M 8.19144 15.7165C 8.19144 18.0534 6.55503 23.5748 4.22282 23.5748C 1.89062 23.5748 -8.17088e-06 21.6803 -8.17088e-06 19.3434C -8.17088e-06 13.2986 10.3363 0 12.6685 0C 15.0007 0 8.19144 13.3796 8.19144 15.7165Z"></path>
        <path id="path30_fill" transform="translate(515.088 -1005.06)" fill="#F4F4F4" d="M 54.83 41.0558C 55.7212 49.8601 55.1398 52.1571 45.1398 63.6571C 45.1398 51.6571 33.6398 61.1571 39.1398 71.6571C 34.8198 67.9851 32.7473 61.1571 25.6398 71.6571C 23.6398 60.1571 12.9609 58.9197 11.8043 56.2571C 17.5862 56.2571 26.9915 33.7062 32.7473 46.9554C 35.2239 52.6561 -12.5143 63.4545 3.31279 41.0558C 19.1398 18.6571 -16.2767 71.0646 10.1398 12.1571C 15.1398 15.6571 23.6398 14.1571 15.1398 7.15711C 23.6398 5.65711 37.1398 18.1571 23.6398 0.157107C 30.1398 -2.34289 50.1398 26.1571 36.1398 3.15711C 38.1398 9.15711 53.1933 4.93041 57.1398 12.1571C 61.202 19.5956 54.83 38.5945 54.83 41.0558Z"></path>
        <path id="path31_fill" transform="matrix(-1 0 0 1 525.228 -975.406)" d="M 2 1C 2 1.55228 1.55228 2 1 2C 0.447715 2 0 1.55228 0 1C 0 0.447715 0.447715 0 1 0C 1.55228 0 2 0.447715 2 1Z"></path>
        <path id="path32_fill" transform="translate(536.228 -971.406)" d="M 3 1.5C 3 2.32843 2.32843 3 1.5 3C 0.671573 3 0 2.32843 0 1.5C 0 0.671573 0.671573 0 1.5 0C 2.32843 0 3 0.671573 3 1.5Z"></path>
        <path id="path33_fill" transform="translate(520.228 -950.406)" fill="#F4F4F4" d="M 25 5C 25 7.76142 19.4036 10 12.5 10C 5.59644 10 0 7.76142 0 5C 0 2.23858 5.59644 0 12.5 0C 19.4036 0 25 2.23858 25 5Z"></path>
        <path id="path34_fill" transform="matrix(0.950349 0.311185 -0.311185 0.950349 515.307 -983.106)" fill="#FFFFFF" d="M 17.533 0C 17.533 0 33.8512 24.9026 31.7529 32.9553C 29.6546 41.0081 37.2574 38.5186 24.1501 35.4448C 23.4715 43.0961 20.8756 45.0471 15.7357 41.8829C 3.64189 56.3653 9.96204 27.4636 1.72005 31.2147C -6.52194 34.9657 17.533 0 17.533 0Z"></path>
        <path id="path35_fill" transform="matrix(0.97979 0.20003 -0.199255 0.979948 509.288 -967.406)" fill="#994902" d="M 14.3296 5.17051C 14.3296 8.02611 11.1218 10.341 7.16478 10.341C 3.20778 10.341 0 8.02611 0 5.17051C 0 2.31492 3.20778 0 7.16478 0C 11.1218 0 14.3296 2.31492 14.3296 5.17051Z"></path>
        <path id="path36_fill" transform="matrix(0.926939 -0.375212 0.373911 0.927465 554.228 -989.406)" fill="#994902" d="M 25.7474 29.8076C 25.7474 35.6994 17.1045 43.385 11.2213 43.385C 5.33807 43.385 -0.399519 43.385 5.4109 22.0491C 6.13012 8.46589 1.00271 6.8749 5.85618e-05 0C 6.02858 2.43888 25.7474 23.9158 25.7474 29.8076Z"></path>
        <path id="path36_fill" transform="matrix(0.926939 -0.375212 0.373911 0.927465 554.228 -989.406)" fill="url(#paint39_linear)" d="M 25.7474 29.8076C 25.7474 35.6994 17.1045 43.385 11.2213 43.385C 5.33807 43.385 -0.399519 43.385 5.4109 22.0491C 6.13012 8.46589 1.00271 6.8749 5.85618e-05 0C 6.02858 2.43888 25.7474 23.9158 25.7474 29.8076Z"></path>
              <clipPath id="clip-1" clipRule="evenodd">
                  <path d="M 506.593 -962.406L 525.328 -962.406L 525.328 -949.405L 506.593 -949.405L 506.593 -962.406Z" fill="#FFFFFF"></path>
              </clipPath>
      </g>

      <g id="table">
        <use xlinkHref="#path22_fill" transform="translate(151 -1219.27)" fill="#404951"></use>
        <use xlinkHref="#path37_fill" transform="translate(40 -1251.27)" fill="#404951"></use>
        <use xlinkHref="#path38_fill" transform="translate(202 -1352.97)" fill="#404951"></use>
        <use xlinkHref="#path39_fill" transform="matrix(0.998761 0.0497579 -0.0497579 0.998761 45.038 -1371.48)" fill="#8F8B88"></use>
        <use xlinkHref="#path40_fill" transform="translate(36 -1374.27)" fill="#C4C2C0"></use>
      </g>

      <g id="Face">
        <use xlinkHref="#path10_fill" transform="translate(156.389 -1488.7)" fill="#4A0000"></use>
        <use xlinkHref="#path11_fill" transform="translate(173.902 -1501.6)" fill="#F3E6D5"></use>
        <use xlinkHref="#path19_fill" transform="matrix(0.959068 -0.283176 0.283176 0.959068 205.005 -1438.58)" fill="#4A0000"></use>
        <use xlinkHref="#path20_fill" transform="translate(216.389 -1392.7)" fill="#9F5311"></use>
        <use xlinkHref="#path48_fill" transform="translate(185.956 -1441.7)" fill="#E0B48D"></use>
        <use xlinkHref="#path21_fill" transform="translate(179.389 -1434.7)" fill="#4A0000"></use>
        <use xlinkHref="#path49_fill" transform="translate(178.389 -1506.01)" fill="#4A0000"></use>
        <use xlinkHref="#path53_fill" transform="matrix(0.969882 -0.243574 0.243574 0.969882 234.276 -1459.56)" fill="#F3E6D5"></use>
      </g>

      <g id="laptop">
        <use xlinkHref="#path41_fill" transform="translate(58.5 -1428.47)" fill="#C4C4C4"></use>
        <use xlinkHref="#path43_fill" transform="translate(61.3648 -1428.97)" fill="#FFFFFF"></use>
        <use xlinkHref="#path45_fill" transform="translate(64 -1425)" fill="#B2C1D4"></use>
        <use xlinkHref="#path47_fill" transform="translate(92.5 -1362.97)" fill="#C4C4C4"></use>
        <use xlinkHref="#path55_fill" transform="translate(91.5 -1363.97)" fill="#6F6F6F"></use>
        <use xlinkHref="#path56_fill" transform="translate(97 -1363)" fill="#474747"></use>
        <use xlinkHref="#path58_fill" transform="translate(104 -1362)" fill="#474747"></use>
        <use xlinkHref="#path59_fill" transform="translate(104 -1362)" fill="#474747"></use>
        <use xlinkHref="#path60_fill" transform="translate(104 -1362)" fill="#474747"></use>
        <use xlinkHref="#path61_fill" transform="translate(104 -1362)" fill="#474747"></use>
        <use xlinkHref="#path63_fill" transform="translate(136 -1356.93)" fill="#474747"></use>
        <use xlinkHref="#path65_fill" transform="translate(143 -1356)" fill="#474747"></use>
      </g>

      <g id="Hands">
        <use xlinkHref="#path67_fill" transform="translate(154.33 -1337.5)" fill="#F3E6D5"></use>
        <use xlinkHref="#path68_fill" transform="translate(157 -1334.5)" fill="#F3E6D5"></use>
        <use xlinkHref="#path69_fill" transform="translate(135 -1332)" fill="#F3E6D5"></use>
        <use xlinkHref="#path69_fill" transform="translate(135 -1338)" fill="#F3E6D5"></use>
        <use xlinkHref="#path70_fill" transform="translate(135 -1327)" fill="#F3E6D5"></use>
        <use xlinkHref="#path71_fill" transform="translate(137 -1320)" fill="#F3E6D5"></use>
        <use xlinkHref="#path72_fill" transform="translate(140 -1363)" fill="#F3E6D5"></use>
        <use xlinkHref="#path73_fill" transform="translate(136 -1358)" fill="#F3E6D5"></use>
        <use xlinkHref="#path74_fill" transform="matrix(0.9666 -0.256291 0.256291 0.9666 141 -1351.73)" fill="#F3E6D5"></use>
        <use xlinkHref="#path75_fill" transform="matrix(0.974638 0.223788 -0.223788 0.974638 152.177 -1355.81)" fill="#F3E6D5"></use>
      </g>

      <g id="coffee">
        <use xlinkHref="#path78_fill" transform="translate(101 -1289)" fill="#FFFFFF"></use>
        <use xlinkHref="#path79_fill" transform="translate(102 -1286)" fill="#A3764E"></use>
        <use xlinkHref="#path80_fill" transform="translate(101 -1280)" fill="#FFFFFF"></use>
        <mask id="mask4_outline_ins">
          <use xlinkHref="#path81_fill" fill="white" transform="matrix(0.978104 0.208117 -0.208117 0.978104 134.108 -1273)"></use>
        </mask>
        <g mask="url(#mask4_outline_ins)">
          <use xlinkHref="#path82_stroke_2x" transform="matrix(0.978104 0.208117 -0.208117 0.978104 134.108 -1273)" fill="#FFFFFF"></use>
        </g>
      </g>


      <g id="Shoes">
        <path id="shoeLeft" transform="matrix(0.792719 -0.609587 0.609587 0.792719 242 -1101.33)" fill="#C4C4C4" d="M 10.5312 15.5482C 27.9933 18.2097 3.95775 18.132 28.8037 14.9574C 37.8353 -1.96357 25.4224 -0.243825 30.4829 0.347417C 37.2245 6.81693 50.9078 7.60099 62.3581 5.24851L 66.7096 29.8382C 37.409 34.2491 28.125 33.9569 2.59143 31.3103C 2.59143 31.3103 -6.93086 12.8868 10.5312 15.5482Z"></path>
        <path id="shoeRight" transform="matrix(0.903414 -0.428769 0.428769 0.903414 270.772 -1173.35)" fill="#C4C4C4" d="M 7.17202 10.5887C 19.0641 12.4013 2.69532 12.3483 19.616 10.1864C 25.7668 -1.33724 17.3133 -0.166051 20.7596 0.236599C 25.3508 4.64249 34.6694 5.17646 42.4674 3.57436L 45.4308 20.3205C 25.4765 23.3245 19.1538 23.1255 1.76483 21.3231C 1.76483 21.3231 -4.72008 8.7762 7.17202 10.5887Z"></path>
      </g>

      <g id="Pants">
        <path id="path51_fill" transform="matrix(0.397128 0.917763 -0.917763 0.397128 383.64 -1313)" fill="#5C6670" d="M 43.4994 0.0959227C 97.5963 3.69729 34.7929 71.104 14.1918 105.072C 39.0461 98.0739 35.6001 116.689 83.2824 114.316C 84.3754 127.044 84.3478 133.582 78.8671 140.167L 28.438 128.498L 0.286017 121.984C 1.46344 93.2219 -10.0167 -3.46678 43.4994 0.0959227Z"></path>
        <path id="path52_fill" transform="matrix(0.51857 0.855035 -0.855035 0.51857 378.634 -1352.31)" fill="#404850" d="M 76.2304 0.129015C 163.294 5.92507 62.2182 114.41 29.0627 169.078C 69.0633 157.815 63.5172 187.774 140.257 183.954C 142.016 204.44 141.972 214.963 133.151 225.559C 133.151 225.559 15.1468 211.65 5.30911 196.632C -4.52862 181.613 -9.89859 -5.6048 76.2304 0.129015Z"></path>
      </g>

      <g id="BodyAndArm">
        <path id="path84_fill" transform="translate(223.662 -1508.3)" fill="#AB6D6D" d="M 207.338 62.3342C 189.76 17.3342 159.338 10.802 159.338 10.802C 159.338 10.802 119.727 -6.39347 88.7274 2.60652C 52.4282 13.145 38.2457 22.8873 37.2807 23.5685C 37.7087 23.3163 40.9374 22.2832 54.838 35.802C 59.7041 40.5343 59.5917 44.9669 59.9145 48.802C 60.5941 56.8761 56.338 62.3019 56.338 62.3019L 47.338 70.3021C 47.338 70.3021 32.338 84.3342 53.338 99.3342C 59.349 103.628 9.64755 116.522 1.33804 134.675C -1.43254 140.728 -0.490373 131.367 9.83804 143.802C 9.83804 143.802 109.838 129.302 85.3379 85.3342C 60.8378 41.3664 86.838 86.9142 123.838 118.607C 160.838 150.299 106.338 200.802 143.338 193.302C 199.496 209.4 169.131 228.559 177.338 277.802C 177.338 277.802 210.338 249.802 216.338 235.802C 243.023 173.536 220.22 95.3124 207.338 62.3342Z"></path>
        <path id="path87_fill" transform="matrix(0.967838 -0.251574 0.251574 0.967838 158.144 -1358.06)" fill="#F3E6D5" d="M 1.25791 4.52417L 75.2767 0C 77.1977 4.53435 76.6469 6.65343 72.7609 9.67833L 0 9.3634L 1.25791 4.52417Z"></path>
      </g>

      <g id="Arm">
        <path id="path83_fill" transform="matrix(0.967838 -0.251574 0.251574 0.967838 155.707 -1342.72)" fill="#F3E6D5" d="M 3.14468 20.1622C 58.927 27.8661 88.5415 26.56 138.239 0L 134.088 15.9693C 89.1152 39.4736 54.5261 42.4794 -3.12058e-06 32.2602L 3.14468 20.1622Z"></path>
        <path id="path85_fill" transform="translate(254.007 -1500.22)" fill="#BA7F7F" d="M 41.8822 12.3574C 51.6758 -14.9389 147.667 4.70657 166.382 54.3574C 176.769 81.9147 18.9927 165.223 18.9927 165.223C 18.9927 171.223 -12.3513 153.705 5.49268 142.223C 62.9927 105.223 96.8574 95.9607 96.8574 67.085C 96.8574 34.5849 30.8575 43.085 41.8822 12.3574Z"></path>
      </g>

      <g id="chair">
        <path id="path12_fill" transform="translate(379 -1232.97)" fill="#FFFFFF" d="M 0 0L 5 0L 5 59L 0 59L 0 0Z"></path>
        <path id="path13_fill" transform="translate(339.187 -1178.7)" fill="#FFFFFF" d="M 7.8135 9.72784C 13.8135 12.2278 40.203 0 40.203 0L 40.203 5C 40.203 5 26.8135 9.22783 9.8135 12.7278C -7.18651 16.2279 1.81352 7.22784 7.8135 9.72784Z"></path>
        <path id="path14_fill" transform="matrix(-0.99347 -0.114096 -0.114096 0.99347 421.723 -1174.58)" fill="#FFFFFF" d="M 7.48141 9.3144C 13.2264 11.7081 38.4944 0 38.4944 0L 38.4944 4.78749C 38.4944 4.78749 25.6739 8.83564 9.39641 12.1869C -6.88107 15.5381 1.73645 6.92065 7.48141 9.3144Z"></path>
        <path id="path15_fill" transform="translate(370.155 -1177.2)" fill="#FFFFFF" d="M 8.86279 0L 13.8628 0C 13.8628 0 13.8629 19.7278 19.9733 33.7278C 26.0836 47.7278 -5.89852 46.7278 0.973267 32.2278C 7.84505 17.7278 8.86279 0 8.86279 0Z"></path>
        <path id="path50_fill" transform="translate(354 -1246)" fill="#A68D8D" d="M 0 8.53474L 40 0L 40 24L 0 15.9633L 0 8.53474Z"></path>
        <path id="path90_fill" transform="translate(391 -1292.97)" fill="#D6D6D6" d="M 0 0L 29 0L 29 60.2278L 0 72L 0 0Z"></path>
      </g>

      <path id="blinds" fillRule="evenodd" transform="matrix(0.997319 0.0731794 -0.0731794 0.997319 -1694.41 -1961)" fill="#B2C1D4" d="M 1233.46 0L 1106.31 41.4125L 1634.89 166.531L 1634.89 95.8931L 1233.46 0ZM 805.83 41.4125L 1094.04 41.4125L 1634.89 169.436L 1634.89 237.657L 805.83 41.4125ZM 793.56 41.4125L 783.152 34.4217L 667.726 80.2432L 1634.89 309.179L 1634.89 240.562L 793.56 41.4125ZM 534.415 122.387L 662.472 81.9041L 1634.89 312.084L 1634.89 382.878L 534.415 122.387ZM 529.162 124.048L 405.759 163.06L 1634.89 454.005L 1634.89 385.783L 529.162 124.048ZM 16.1834 286.218L 141.239 246.683L 1634.89 600.243L 1634.89 669.38L 16.1834 286.218ZM 1634.89 597.338L 146.493 245.023L 269.482 206.141L 1634.89 529.346L 1634.89 597.338ZM 1634.89 526.44L 274.737 204.481L 400.506 164.72L 1634.89 456.91L 1634.89 526.44ZM 10.9294 287.879L 0 291.334L 1.34448 414.779L 1634.89 800.659L 1634.89 742.891L 5.37793 357.172L 6.70369 354.581L 1634.89 739.986L 1634.89 672.284L 10.9294 287.879Z"></path>

      <use xlinkHref="#path89_fill" transform="translate(458 -1605)" fill="#FFFFFF"></use>
      <use xlinkHref="#path88_fill" transform="matrix(0.974565 0.224105 -0.224105 0.974565 -240.106 -2051.16)" fill="#404850"></use>

      <g id="windowFrame">
        <use xlinkHref="#path16_fill" transform="matrix(0.943744 0.330676 -0.330676 0.943744 447.251 -1218)" fill="#404850"></use>
        <use xlinkHref="#path17_fill" transform="matrix(0.943744 0.330676 -0.330676 0.943744 -392.822 -1460.94)" fill="#404850"></use>
        <use xlinkHref="#path18_fill" transform="matrix(0.998991 0.0449116 -0.0449116 0.998991 -101.878 -1762)" fill="#404850"></use>
        <use xlinkHref="#path86_fill" transform="matrix(0.994095 0.108512 -0.108512 0.994095 483.365 -1644.16)" fill="#404850"></use>
      </g>

      <g id="Stairs">
        <use xlinkHref="#path76_fill" transform="translate(-156 -1033)" fill="#C4C4C4"></use>
        <use xlinkHref="#path77_fill" transform="translate(-211 -949.5)" fill="#C4C4C4"></use>
        <use xlinkHref="#path77_fill" transform="translate(-267 -859.5)" fill="#C4C4C4"></use>
      </g>

      </g>
      </g>
      <defs>
      <filter id="filter0_d" filterUnits="userSpaceOnUse" x="497" y="-1006" width="231" height="132" colorInterpolationFilters="sRGB">
      <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 255 0"></feColorMatrix>
      <feOffset dx="0" dy="4"></feOffset>
      <feGaussianBlur stdDeviation="2"></feGaussianBlur>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0"></feColorMatrix>

        <clipPath id="clip-1" clipRule="evenodd">
          <path d="M 506.593 -962.406L 525.328 -962.406L 525.328 -949.405L 506.593 -949.405L 506.593 -962.406Z" fill="#FFFFFF"></path>
        </clipPath>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend>
        <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>

      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 255 0" result="hardAlpha"></feColorMatrix>
      <feOffset dx="0" dy="4"></feOffset>
      <feGaussianBlur stdDeviation="2"></feGaussianBlur>
      <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0"></feColorMatrix>
      <feBlend mode="normal" in2="shape" result="effect1_innerShadow"></feBlend>
      </filter>
      <filter id="filter2_i" filterUnits="userSpaceOnUse" x="135" y="-1327" width="34" height="18" colorInterpolationFilters="sRGB">
      <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 255 0" result="hardAlpha"></feColorMatrix>
      <feOffset dx="0" dy="4"></feOffset>
      <feGaussianBlur stdDeviation="2"></feGaussianBlur>
      <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0"></feColorMatrix>
      <feBlend mode="normal" in2="shape" result="effect1_innerShadow"></feBlend>
      </filter>
      <filter id="filter3_i" filterUnits="userSpaceOnUse" x="136" y="-1320" width="29" height="14" colorInterpolationFilters="sRGB">
      <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 255 0" result="hardAlpha"></feColorMatrix>
      <feOffset dx="0" dy="4"></feOffset>
      <feGaussianBlur stdDeviation="2"></feGaussianBlur>
      <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0"></feColorMatrix>
      <feBlend mode="normal" in2="shape" result="effect1_innerShadow"></feBlend>
      </filter>
      <filter id="filter4_i" filterUnits="userSpaceOnUse" x="139" y="-1363" width="22" height="16" colorInterpolationFilters="sRGB">
      <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 255 0" result="hardAlpha"></feColorMatrix>
      <feOffset dx="0" dy="4"></feOffset>
      <feGaussianBlur stdDeviation="2"></feGaussianBlur>
      <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0"></feColorMatrix>
      <feBlend mode="normal" in2="shape" result="effect1_innerShadow"></feBlend>
      </filter>
      <filter id="filter5_i" filterUnits="userSpaceOnUse" x="140" y="-1358" width="27" height="17" colorInterpolationFilters="sRGB">
      <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 255 0" result="hardAlpha"></feColorMatrix>
      <feOffset dx="0" dy="4"></feOffset>
      <feGaussianBlur stdDeviation="2"></feGaussianBlur>
      <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0"></feColorMatrix>
      <feBlend mode="normal" in2="shape" result="effect1_innerShadow"></feBlend>
      </filter>
      <filter id="filter6_i" filterUnits="userSpaceOnUse" x="149" y="-1356" width="16" height="19" colorInterpolationFilters="sRGB">
      <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 255 0" result="hardAlpha"></feColorMatrix>
      <feOffset dx="0" dy="4"></feOffset>
      <feGaussianBlur stdDeviation="2"></feGaussianBlur>
      <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0"></feColorMatrix>
      <feBlend mode="normal" in2="shape" result="effect1_innerShadow"></feBlend>
      </filter>
      <linearGradient id="paint31_linear" x1="0" y1="0" x2="1" y2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(8.05515e-16 23.5748 -13.1551 1.44354e-15 13.1551 -1.44354e-15)">
      <stop offset="0.259668" stopColor="#823333" stopOpacity="0.9"></stop>
      <stop offset="1" stopColor="#FFFFFF" stopOpacity="0"></stop>
      </linearGradient>
      <linearGradient id="paint39_linear" x1="0" y1="0" x2="1" y2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1.57658e-15 43.385 -25.7474 2.65657e-15 25.7474 -2.65657e-15)">
      <stop offset="0" stopColor="#FFFFFF"></stop>
      <stop offset="0.889503" stopColor="#FFFFFF" stopOpacity="0.28"></stop>
      </linearGradient>
      <path id="path0_fill" d="M 0 0L 315 36L 227 856L 0 780L 0 0Z"></path>
      <path id="path2_fill" fillRule="evenodd" d="M 166.428 44.5262C 161.172 26.7073 147.987 11.4338 129.304 4.20349C 97.3439 -8.16443 61.3967 7.68573 49.0135 39.6059C 48.3431 41.3338 47.7556 43.0734 47.2489 44.8203C 44.7894 44.3435 42.2487 44.0937 39.6497 44.0937C 17.7518 44.0937 0 61.8234 0 83.694C 0 105.565 17.7518 123.294 39.6497 123.294C 51.0559 123.294 61.3372 118.485 68.5708 110.784C 73.2755 114.467 78.5968 117.528 84.4601 119.797C 107.624 128.761 132.882 122.901 149.746 106.844C 157.018 115.63 168.015 121.228 180.32 121.228C 189.113 121.228 197.236 118.37 203.811 113.533C 208.822 118.301 215.606 121.228 223.073 121.228C 238.497 121.228 251 108.741 251 93.3358C 251 77.9316 238.497 65.4435 223.073 65.4435C 220.925 65.4435 218.833 65.6857 216.825 66.1443C 210.789 51.968 196.716 42.0276 180.32 42.0276C 175.432 42.0276 170.752 42.9108 166.428 44.5262Z"></path>
      <path id="path3_fill" fillRule="evenodd" d="M 241.354 64.6522C 233.732 38.7791 214.611 16.6019 187.516 6.10348C 141.168 -11.8548 89.0375 11.1597 71.0793 57.5079C 70.1071 60.0168 69.2551 62.5427 68.5203 65.0792C 64.9536 64.3869 61.2691 64.0242 57.5 64.0242C 25.7436 64.0242 0 89.7678 0 121.524C 0 153.281 25.7436 179.024 57.5 179.024C 74.0412 179.024 88.9511 172.04 99.4413 160.859C 106.264 166.206 113.981 170.651 122.484 173.945C 156.076 186.961 192.706 178.453 217.162 155.138C 227.708 167.895 243.655 176.024 261.5 176.024C 274.251 176.024 286.032 171.874 295.567 164.85C 302.834 171.774 312.671 176.024 323.5 176.024C 345.868 176.024 364 157.892 364 135.524C 364 113.157 345.868 95.0242 323.5 95.0242C 320.385 95.0242 317.352 95.3759 314.439 96.0418C 305.686 75.4578 285.278 61.0242 261.5 61.0242C 254.412 61.0242 247.624 62.3067 241.354 64.6522Z"></path>
      <path id="path6_fill" d="M 0 0L 1208 0L 1208 654L 6.10352e-05 376.607L 0 0Z"></path>
      <path id="path10_fill" d="M 77 38C 77 58.9868 54.8381 76 27.5 76C 10 45 0 58.9868 0 38C 0 17.0132 0.161905 0 27.5 0C 54.8381 0 77 17.0132 77 38Z"></path>
      <path id="path11_fill" d="M 73.4874 90.9042C 101.487 52.9042 122.987 43.9042 148.987 61.0379C 153.598 76.5999 158.098 70.5999 183.098 70.5999C 201.708 51.6619 189.098 61.0379 183.098 32.5999C 177.098 4.16196 163.987 -7.89119 130.487 5.40424C 96.9875 18.6997 25.4874 24.9042 25.4874 24.9042C 2.82441 37.9526 -8.51258 68.9042 7.48743 101.904C 46.4874 116.904 45.4874 128.904 73.4874 90.9042Z"></path>
      <path id="path16_fill" d="M 0 0L 519.266 0L 519.266 21.9279L 0 21.9279L 0 0Z"></path>
      <path id="path17_fill" d="M 0 1.93235L 305.366 -7.48945e-06L 312.971 21.706L 0 21.706L 0 1.93235Z"></path>
      <path id="path18_fill" d="M 19.3855 10.8693L 32.0871 0L 13.5368 815.944L 0 831.357L 19.3855 10.8693Z"></path>
      <path id="path19_fill" d="M 5 4.67896C 5 7.26308 3.88071 9.35792 2.5 9.35792C 1.11929 9.35792 0 7.26308 0 4.67896C 0 2.09484 1.11929 0 2.5 0C 3.88071 0 5 2.09484 5 4.67896Z"></path>
      <path id="path20_fill" d="M 5 1C 5 1.55228 3.88071 2 2.5 2C 1.11929 2 0 1.55228 0 1C 0 0.447715 1.11929 0 2.5 0C 3.88071 0 5 0.447715 5 1Z"></path>
      <path id="path21_fill" d="M 5 4C 5 6.20914 3.88071 8 2.5 8C 1.11929 8 0 6.20914 0 4C 0 1.79086 1.11929 0 2.5 0C 3.88071 0 5 1.79086 5 4Z"></path>
      <path id="path22_fill" d="M 0 0L 12.931 4.94273L 15 129L 7.75864 127.517L 0 0Z"></path>
      <path id="path37_fill" d="M 0 0L 8 0L 8 125L 0 125L 0 0Z"></path>
      <path id="path38_fill" d="M -6.28302e-06 15.7561L 5.99998 0L 14 98.6829L 6.50001 102L -6.28302e-06 15.7561Z"></path>
      <path id="path39_fill" d="M 67.1513 0L 165.777 12.2438L 129.75 158L 0 122.361L 67.1513 0Z"></path>
      <path id="path40_fill" d="M 79.1261 0L 173 16.5585L 130.212 163L 0 121.855L 79.1261 0Z"></path>
      <path id="path41_fill" d="M 0 37L 44.5 0L 71.8895 70.2722L 33 124L 0 37Z"></path>
      <path id="path42_fill" d="M 0 37L 44.5 0L 71.8895 70.2722L 33 124L 0 37Z"></path>
      <path id="path43_fill" d="M 0 38.1231L 41.875 0L 67 63.9923L 29.9737 118L 0 38.1231Z"></path>
      <path id="path44_fill" d="M 0 38.1231L 41.875 0L 67 63.9923L 29.9737 118L 0 38.1231Z"></path>
      <path id="path45_fill" d="M 0 34.6903L 38.2846 0L 63 60.4602L 28.5923 112L 0 34.6903Z"></path>
      <path id="path46_fill" d="M 0 34.6903L 38.2846 0L 63 60.4602L 28.5923 112L 0 34.6903Z"></path>
      <path id="path47_fill" d="M 36.8648 0L 82 6.50012L 68.5 71.0001L 0 57.5001L 36.8648 0Z"></path>
      <path id="path48_fill" d="M 4.43296 39C -8.56704 39 11.5764 24.6603 7.43296 0C 7.43296 0 26.433 33 17.433 33C 8.43296 33 17.433 39 4.43296 39Z"></path>
      <path id="path49_fill" d="M 66.9753 48.5411C 50.7451 58.9441 77.2452 67.0411 60.4753 67.0411C 44.5319 67.0411 63 43.1194 0 32.7164C 0 11.7296 33.9766 -11.4351 54.7699 6.31348C 70 19.3135 102.341 31.3135 87 56.3135C 60 100.313 75.9753 36.0411 66.9753 48.5411Z"></path>
      <path id="path53_fill" fillRule="evenodd" d="M 6.9309 28.0369C 12.9248 28.0369 17.7839 21.7607 17.7839 14.0185C 17.7839 6.27627 12.9248 8.8025e-06 6.9309 1.88099e-11C 4.29577 -5.5156e-06 1.87999 1.213 0 3.23039L 6.28133 28.0122C 6.49626 28.0286 6.71282 28.0369 6.9309 28.0369Z"></path>
      <path id="path54_fill" d="M 34.5 0L 39 1L 9.5 53.5L 0 52L 34.5 0Z"></path>
      <path id="path55_fill" d="M 37 0L 91 8.5L 64.5 69.4679L 0 55.514L 37 0Z"></path>
      <path id="path56_fill" d="M 32.7752 0L 37.2326 0.932203L 5.5 52.9679L 0 51.9679L 32.7752 0Z"></path>
      <path id="path57_stroke_2x" d="M 32.7752 0L 32.9799 -0.978823L 32.2999 -1.12103L 31.9294 -0.53345L 32.7752 0ZM 37.2326 0.932203L 38.0863 1.45285L 38.8239 0.243377L 37.4373 -0.0466195L 37.2326 0.932203ZM 5.5 52.9679L 5.32111 53.9518L 5.99641 54.0745L 6.35377 53.4885L 5.5 52.9679ZM 0 51.9679L -0.845831 51.4344L -1.63572 52.6869L -0.178885 52.9518L 0 51.9679ZM 32.5705 0.978823L 37.0279 1.91103L 37.4373 -0.0466195L 32.9799 -0.978823L 32.5705 0.978823ZM 36.3788 0.411554L 4.64623 52.4472L 6.35377 53.4885L 38.0863 1.45285L 36.3788 0.411554ZM 5.67889 51.984L 0.178885 50.984L -0.178885 52.9518L 5.32111 53.9518L 5.67889 51.984ZM 0.845831 52.5013L 33.621 0.53345L 31.9294 -0.53345L -0.845831 51.4344L 0.845831 52.5013Z"></path>
      <path id="path58_fill" d="M 31.8062 0L 36.2636 0.932203L 6.5 53.5L 0 52L 31.8062 0Z"></path>
      <path id="path59_fill" d="M 37.8062 2L 43.2636 1.9322L 14.5 55.5L 8 54L 37.8062 2Z"></path>
      <path id="path60_fill" d="M 44.8062 3L 50.2636 3.9322L 22.5 57.5L 16 56L 44.8062 3Z"></path>
      <path id="path61_fill" d="M 51.8062 4L 57.2636 4.9322L 30.5 59.5L 24 58L 51.8062 4Z"></path>
      <path id="path62_stroke_2x" d="M 31.8062 0L 32.0109 -0.978823L 31.3209 -1.12312L 30.9531 -0.521789L 31.8062 0ZM 36.2636 0.932203L 37.1338 1.4249L 37.8083 0.233622L 36.4683 -0.0466195L 36.2636 0.932203ZM 6.5 53.5L 6.27514 54.4744L 7.00244 54.6422L 7.3702 53.9927L 6.5 53.5ZM 0 52L -0.853074 51.4782L -1.57732 52.6623L -0.22486 52.9744L 0 52ZM 37.8062 2L 37.7938 1.00008L 37.2227 1.00717L 36.9386 1.50271L 37.8062 2ZM 43.2636 1.9322L 44.1446 2.40527L 44.9468 0.911215L 43.2511 0.932281L 43.2636 1.9322ZM 14.5 55.5L 14.2751 56.4744L 15.0196 56.6462L 15.381 55.9731L 14.5 55.5ZM 8 54L 7.13242 53.5027L 6.46249 54.6715L 7.77514 54.9744L 8 54ZM 44.8062 3L 44.9746 2.01428L 44.2693 1.8938L 43.9276 2.52246L 44.8062 3ZM 50.2636 3.9322L 51.1514 4.39236L 51.7813 3.17698L 50.4319 2.94648L 50.2636 3.9322ZM 22.5 57.5L 22.2751 58.4744L 23.0309 58.6488L 23.3878 57.9602L 22.5 57.5ZM 16 56L 15.1214 55.5225L 14.4931 56.6785L 15.7751 56.9744L 16 56ZM 51.8062 4L 51.9746 3.01428L 51.2525 2.89094L 50.9171 3.5422L 51.8062 4ZM 57.2636 4.9322L 58.1614 5.37255L 58.7504 4.17169L 57.4319 3.94648L 57.2636 4.9322ZM 30.5 59.5L 30.2751 60.4744L 31.0484 60.6528L 31.3978 59.9404L 30.5 59.5ZM 24 58L 23.1109 57.5422L 22.5223 58.6853L 23.7751 58.9744L 24 58ZM 31.6015 0.978823L 36.0589 1.91103L 36.4683 -0.0466195L 32.0109 -0.978823L 31.6015 0.978823ZM 35.3934 0.439502L 5.6298 53.0073L 7.3702 53.9927L 37.1338 1.4249L 35.3934 0.439502ZM 6.72486 52.5256L 0.22486 51.0256L -0.22486 52.9744L 6.27514 54.4744L 6.72486 52.5256ZM 0.853074 52.5218L 32.6593 0.521789L 30.9531 -0.521789L -0.853074 51.4782L 0.853074 52.5218ZM 37.8186 2.99992L 43.276 2.93213L 43.2511 0.932281L 37.7938 1.00008L 37.8186 2.99992ZM 42.3825 1.45913L 13.619 55.0269L 15.381 55.9731L 44.1446 2.40527L 42.3825 1.45913ZM 14.7249 54.5256L 8.22486 53.0256L 7.77514 54.9744L 14.2751 56.4744L 14.7249 54.5256ZM 8.86758 54.4973L 38.6738 2.49729L 36.9386 1.50271L 7.13242 53.5027L 8.86758 54.4973ZM 44.6378 3.98572L 50.0952 4.91793L 50.4319 2.94648L 44.9746 2.01428L 44.6378 3.98572ZM 49.3757 3.47205L 21.6122 57.0398L 23.3878 57.9602L 51.1514 4.39236L 49.3757 3.47205ZM 22.7249 56.5256L 16.2249 55.0256L 15.7751 56.9744L 22.2751 58.4744L 22.7249 56.5256ZM 16.8786 56.4775L 45.6848 3.47754L 43.9276 2.52246L 15.1214 55.5225L 16.8786 56.4775ZM 51.6378 4.98572L 57.0952 5.91793L 57.4319 3.94648L 51.9746 3.01428L 51.6378 4.98572ZM 56.3657 4.49185L 29.6022 59.0596L 31.3978 59.9404L 58.1614 5.37255L 56.3657 4.49185ZM 30.7249 58.5256L 24.2249 57.0256L 23.7751 58.9744L 30.2751 60.4744L 30.7249 58.5256ZM 24.8891 58.4578L 52.6953 4.4578L 50.9171 3.5422L 23.1109 57.5422L 24.8891 58.4578Z"></path>
      <path id="path63_fill" d="M 26.8062 0L 32.2636 0.932203L 4.5 56.5L 0 55L 26.8062 0Z"></path>
      <path id="path64_stroke_2x" d="M 26.8062 0L 26.9746 -0.985723L 26.2357 -1.11194L 25.9073 -0.438119L 26.8062 0ZM 32.2636 0.932203L 33.1581 1.37916L 33.7605 0.173427L 32.4319 -0.0535193L 32.2636 0.932203ZM 4.5 56.5L 4.18377 57.4487L 5.0068 57.723L 5.39456 56.947L 4.5 56.5ZM 0 55L -0.898917 54.5619L -1.39893 55.5878L -0.316228 55.9487L 0 55ZM 26.6378 0.985723L 32.0952 1.91793L 32.4319 -0.0535193L 26.9746 -0.985723L 26.6378 0.985723ZM 31.369 0.485252L 3.60544 56.053L 5.39456 56.947L 33.1581 1.37916L 31.369 0.485252ZM 4.81623 55.5513L 0.316228 54.0513L -0.316228 55.9487L 4.18377 57.4487L 4.81623 55.5513ZM 0.898917 55.4381L 27.7051 0.438119L 25.9073 -0.438119L -0.898917 54.5619L 0.898917 55.4381Z"></path>
      <path id="path65_fill" d="M 26.8062 0L 32.2636 0.932203L 5.5 56.5L 0 55L 26.8062 0Z"></path>
      <path id="path66_stroke_2x" d="M 26.8062 0L 26.9746 -0.985723L 26.2357 -1.11194L 25.9073 -0.438119L 26.8062 0ZM 32.2636 0.932203L 33.1645 1.36613L 33.7406 0.170021L 32.4319 -0.0535193L 32.2636 0.932203ZM 5.5 56.5L 5.23688 57.4648L 6.03981 57.6837L 6.40095 56.9339L 5.5 56.5ZM 0 55L -0.898917 54.5619L -1.42784 55.6471L -0.263117 55.9648L 0 55ZM 26.6378 0.985723L 32.0952 1.91793L 32.4319 -0.0535193L 26.9746 -0.985723L 26.6378 0.985723ZM 31.3626 0.498273L 4.59905 56.0661L 6.40095 56.9339L 33.1645 1.36613L 31.3626 0.498273ZM 5.76312 55.5352L 0.263117 54.0352L -0.263117 55.9648L 5.23688 57.4648L 5.76312 55.5352ZM 0.898917 55.4381L 27.7051 0.438119L 25.9073 -0.438119L -0.898917 54.5619L 0.898917 55.4381Z"></path>
      <path id="path67_fill" d="M 12.1696 3.40922L 9.92116 13.5L 6.94743 10.3637L 8.16966 5C 8.16966 5 4.88566 3.93217 0.461006 3.40922C 0.461006 3.40922 -1.72438 0 3.42117 0C 10.5776 0 12.1696 3.40922 12.1696 3.40922Z"></path>
      <path id="path68_fill" d="M 9.0002 0L 11.5 6L 7.5 23L 0 19.5L 9.0002 0Z"></path>
      <path id="path69_fill" d="M 1.34885 6.75007L 14.6934 7.1333e-05L 27 9.00007L 27 12.0001L 14.6934 3.50007C 14.6934 3.50007 8.82008 6.75007 3.09215 9.00007C -2.63577 11.2501 1.34885 6.75007 1.34885 6.75007Z"></path>
      <path id="path70_fill" d="M 5.34663 7C 10.0088 4.20106 13.5266 0 13.5266 0L 33 10.0625L 32.1345 14L 13.5266 4.375C 13.5266 4.375 9.82629 5.49634 2.9029 12.7156C 1.67113 14 -4.1738 12.7156 5.34663 7Z"></path>
      <path id="path71_fill" d="M 7.71413 5.77437C 13.902 4.65589 18.2107 2.09977 18.2107 2.09977L 28 0L 28 7.08672L 18.2107 4.72448C 18.2107 4.72448 14.3089 5.39751 7.0069 9.72829C 5.24353 10.7741 -8.25885 8.66155 7.71413 5.77437Z"></path>
      <path id="path72_fill" d="M 9.49513 0L 21 9.23077L 19.9146 12L 9.49512 3.46153C 9.49512 3.46153 0.315414 8.3077 2.33172 7.15384C 2.33172 7.15384 -1.89132 3.46154 1.02918 3.46154C 5.09101 3.46154 9.49513 0 9.49513 0Z"></path>
      <path id="path73_fill" d="M 1.28921 4.08061L 12.4767 0L 25 5.17903L 24.1935 8L 12.4767 2.6404C 12.4767 2.6404 8.43017 4.08061 2.95545 6.24093C -2.51927 8.40126 1.28921 4.08061 1.28921 4.08061Z"></path>
      <path id="path74_fill" d="M 5.01296 0.70018C 8.8891 -0.455065 8.74093 0.167533 8.74093 0.167533L 24.4641 4.77622L 24.4641 6.77285L 11.3555 3.58681C 11.3555 3.58681 7.31675 1.31102 3.98781 4.56653C 2.88322 5.64676 -4.9927 3.68227 5.01296 0.70018Z"></path>
      <path id="path75_fill" d="M 1.53497 9.71126C 4.72989 7.6395 7.0222 10.5389 7.0222 5.63461C 7.0222 0.730371 8.71051 0 8.71051 0L 12.9084 1.80986C 12.9084 1.80986 13.0136 2.85747 11.3573 6.49057C 9.00823 11.643 1.1239 11.667 1.1239 11.667C 1.1239 11.667 -1.65996 11.783 1.53497 9.71126Z"></path>
      <path id="path76_fill" d="M 47 0L 269.5 77L 245 102L 0 15L 47 0Z"></path>
      <path id="path77_fill" d="M 62 0L 293.5 73.5L 246 118.5L 0 26.5L 62 0Z"></path>
      <path id="path78_fill" d="M 0 7C 0 7 6.5 0 17.5 0C 28.5 0 35 7 35 7L 35 37L 0 37L 0 7Z"></path>
      <path id="path79_fill" d="M 0 6.62162C 0 6.62162 6.12857 0 16.5 0C 26.8714 0 33 6.62162 33 6.62162L 33 35L 0 35L 0 6.62162Z"></path>
      <path id="path80_fill" d="M 0.00999972 0C 0.00999972 0 -0.98999 8 17.01 8C 35.01 8 35.01 0 35.01 0L 36.01 42C 21.9511 48 14.0689 48 0.00999972 42L 0.00999972 0Z"></path>
      <path id="path81_fill" fillRule="evenodd" d="M 5.49877 24.5224C 5.68691 24.5367 5.87652 24.5441 6.06743 24.544C 11.3146 24.544 15.5683 19.0497 15.5683 12.272C 15.5683 5.49433 11.3146 1.04104e-05 6.06742 4.90536e-11C 3.76058 -8.33381e-06 1.64577 1.06188 0 2.82795L 5.49877 24.5224Z"></path>
      <path id="path82_stroke_2x" d="M 6.06743 24.544L 6.06743 21.544L 6.0665 21.544L 6.06743 24.544ZM 5.49877 24.5224L 2.59073 25.2594L 3.12044 27.3493L 5.27012 27.5136L 5.49877 24.5224ZM 6.06742 4.90536e-11L 6.06741 3L 6.06742 3L 6.06742 4.90536e-11ZM 0 2.82795L -2.19476 0.782703L -3.30994 1.97941L -2.90804 3.56504L 0 2.82795ZM 6.0665 21.544C 5.93402 21.5446 5.85922 21.5417 5.72743 21.5311L 5.27012 27.5136C 5.5146 27.5318 5.81902 27.5435 6.06835 27.544L 6.0665 21.544ZM 12.5683 12.272C 12.5683 18.1523 8.98884 21.544 6.06743 21.544L 6.06742 27.544C 13.6404 27.544 18.5683 19.9471 18.5683 12.272L 12.5683 12.272ZM 6.06742 3C 8.98883 3.00001 12.5683 6.39172 12.5683 12.272L 18.5683 12.272C 18.5683 4.59693 13.6404 -2.99998 6.06743 -3L 6.06742 3ZM 2.19476 4.8732C 3.37636 3.60523 4.73322 3 6.06741 3L 6.06743 -3C 2.78793 -3.00001 -0.0848267 -1.48146 -2.19476 0.782703L 2.19476 4.8732ZM -2.90804 3.56504L 2.59073 25.2594L 8.40681 23.7853L 2.90804 2.09087L -2.90804 3.56504Z"></path>
      <path id="path86_fill" d="M 0 0L 17.7356 0L 17.7356 879.67L 0 879.67L 0 0Z"></path>
      <path id="path88_fill" d="M 1190.38 0L 1251.87 267.408L 0 273.734L 1190.38 0Z"></path>
      <path id="path89_fill" d="M 39 0L 456 90L 456 508L 0 360L 5 318L 39 32L 75 34L 39 330L 456 465L 456 131.5L 39 32L 39 0Z"></path>
      </defs>
    </svg>
)

export default Illustration
