import type { FC } from 'react'

import styles from './SearchUpsellPage.module.scss'

interface CodeNavLogoProps {
    className: string
}

export const CodeNavLogo: FC<CodeNavLogoProps> = ({ className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="180"
        height="25"
        fill="none"
        viewBox="0 0 180 25"
        className={className}
    >
        <g clipPath="url(#clip0_990_3858)">
            <path
                stroke="url(#paint0_linear_990_3858)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M1.064 14.608a10.663 10.663 0 01-.274-2.412c0-.83.095-1.637.274-2.411m7.62-7.76c.76-.183 1.554-.28 2.37-.28.814 0 1.607.097 2.368.28m7.62 7.76c.18.774.275 1.581.275 2.411 0 .83-.095 1.638-.275 2.412m-12.357 7.76a10.12 10.12 0 004.737 0M1.579 4.961c0 .64.25 1.253.694 1.705a2.347 2.347 0 001.675.707c.628 0 1.23-.254 1.674-.707a2.434 2.434 0 00.694-1.705c0-.64-.25-1.253-.694-1.706a2.347 2.347 0 00-1.674-.706c-.629 0-1.231.254-1.675.706a2.434 2.434 0 00-.694 1.706zm4.342 12.461H1.974v4.02H5.92v-4.02zM20.132 2.951h-3.947v4.02h3.947V2.95zM15.79 19.432c0 .64.25 1.253.694 1.705a2.347 2.347 0 001.675.707c.628 0 1.23-.254 1.674-.707a2.434 2.434 0 00.694-1.705c0-.64-.25-1.253-.694-1.705a2.347 2.347 0 00-1.674-.707c-.629 0-1.231.254-1.675.707a2.435 2.435 0 00-.694 1.705z"
            />
        </g>
        <path
            className={styles.otherIntegrationsLogoText}
            d="M176.734 19.366v-6.393c0-.915-.132-1.575-.398-1.98-.25-.406-.685-.608-1.304-.608-.545 0-1.009.165-1.393.495a2.655 2.655 0 00-.795 1.193v7.293h-2.874V8.111h2.277l.331 1.486h.089c.339-.48.788-.9 1.348-1.26.56-.361 1.282-.541 2.167-.541.545 0 1.031.075 1.459.225.427.15.788.398 1.083.743.295.345.516.818.663 1.418.147.585.221 1.313.221 2.184v7h-2.874zM158.026 13.739c0-1.906.457-3.37 1.371-4.39.914-1.035 2.196-1.553 3.847-1.553.884 0 1.65.142 2.299.428.648.285 1.186.69 1.613 1.215.428.51.745 1.133.951 1.868.221.736.331 1.546.331 2.432 0 1.906-.456 3.376-1.37 4.412-.899 1.02-2.174 1.53-3.824 1.53-.885 0-1.651-.142-2.3-.427a4.56 4.56 0 01-1.635-1.193c-.428-.526-.752-1.156-.973-1.891a8.994 8.994 0 01-.31-2.431zm2.963 0c0 .495.044.953.132 1.373.089.42.221.788.398 1.103.177.315.406.563.686.743.294.165.641.247 1.039.247.751 0 1.311-.277 1.68-.833.368-.555.552-1.433.552-2.633 0-1.036-.169-1.869-.508-2.499-.339-.645-.914-.968-1.724-.968-.708 0-1.261.27-1.658.81-.398.54-.597 1.426-.597 2.657zM153.346 8.111h2.874v11.255h-2.874V8.111zm-.42-3.174c0-.435.155-.803.464-1.103.325-.315.767-.473 1.327-.473.56 0 1.009.158 1.348.473.354.3.531.668.531 1.103 0 .435-.177.803-.531 1.103-.339.285-.788.428-1.348.428s-1.002-.143-1.327-.428a1.479 1.479 0 01-.464-1.103zM144.685 8.111h1.525V5.995l2.874-.833v2.949h2.697v2.476h-2.697v4.322c0 .78.074 1.343.221 1.688.162.33.457.496.884.496.295 0 .546-.03.752-.09.221-.06.464-.15.73-.27l.508 2.25a7.2 7.2 0 01-1.393.496 6.507 6.507 0 01-1.613.202c-1.017 0-1.769-.262-2.255-.788-.472-.54-.708-1.418-.708-2.633v-5.673h-1.525V8.111zM135.262 8.764c.59-.27 1.29-.48 2.1-.63a12.716 12.716 0 012.542-.248c.767 0 1.408.098 1.924.293.515.18.921.443 1.215.788.31.345.524.758.641 1.238.133.48.199 1.02.199 1.62 0 .66-.022 1.329-.066 2.004a43.73 43.73 0 00-.088 1.958c0 .646.022 1.276.066 1.891.044.6.155 1.17.332 1.711h-2.344l-.464-1.553h-.11c-.295.465-.708.87-1.238 1.216-.516.33-1.187.495-2.012.495-.516 0-.98-.075-1.393-.225a3.243 3.243 0 01-1.061-.676 3.23 3.23 0 01-.685-1.035 3.608 3.608 0 01-.243-1.35c0-.691.147-1.269.442-1.734.309-.48.744-.863 1.304-1.148.575-.3 1.253-.503 2.034-.608a13.63 13.63 0 012.653-.113c.103-.84.044-1.44-.177-1.8-.221-.376-.715-.563-1.481-.563a10.1 10.1 0 00-1.835.18c-.634.12-1.157.278-1.57.473l-.685-2.184zm3.648 8.374c.574 0 1.031-.128 1.37-.383.339-.27.59-.555.752-.855v-1.463a7.893 7.893 0 00-1.327-.023c-.412.03-.781.098-1.105.203a1.874 1.874 0 00-.774.45 1.018 1.018 0 00-.287.743c0 .42.118.75.354.99.25.226.589.338 1.017.338zM133.288 19.367c0 1.636-.435 2.836-1.304 3.601-.87.78-2.086 1.17-3.648 1.17-1.061 0-1.901-.074-2.52-.224-.604-.15-1.061-.308-1.37-.473l.596-2.319c.339.136.73.27 1.172.406.457.135 1.017.202 1.68.202 1.002 0 1.68-.225 2.034-.675.368-.435.553-1.05.553-1.846v-.72h-.089c-.516.705-1.429 1.058-2.741 1.058-1.43 0-2.498-.45-3.205-1.35-.693-.901-1.039-2.312-1.039-4.233 0-2.01.471-3.534 1.414-4.57.944-1.035 2.314-1.553 4.112-1.553.943 0 1.783.068 2.52.203.752.135 1.363.293 1.835.473v10.85zm-4.863-2.161c.56 0 .987-.128 1.282-.383.309-.255.545-.638.707-1.148V10.61c-.457-.195-1.024-.292-1.702-.292-.737 0-1.312.285-1.724.855-.413.555-.619 1.448-.619 2.679 0 1.095.177 1.928.53 2.498.354.57.863.856 1.526.856zM118.726 8.111h2.874v11.255h-2.874V8.111zm-.42-3.174c0-.435.155-.803.465-1.103.324-.315.766-.473 1.326-.473s1.009.158 1.348.473c.354.3.531.668.531 1.103 0 .435-.177.803-.531 1.103-.339.285-.788.428-1.348.428s-1.002-.143-1.326-.428c-.31-.3-.465-.668-.465-1.103zM112.211 14.01l.376 1.732h.11l.31-1.778 1.879-5.853h3.095l-4.62 11.368h-1.747l-4.797-11.368h3.338l2.056 5.898zM97.814 8.764c.59-.27 1.29-.48 2.1-.63a12.71 12.71 0 012.542-.248c.767 0 1.408.098 1.924.293.516.18.921.443 1.216.788.309.345.523.758.641 1.238.132.48.199 1.02.199 1.62 0 .66-.023 1.329-.067 2.004-.044.66-.073 1.313-.088 1.958 0 .646.022 1.276.066 1.891.044.6.155 1.17.332 1.711h-2.344l-.464-1.553h-.11c-.295.465-.708.87-1.238 1.216-.516.33-1.187.495-2.012.495-.516 0-.98-.075-1.393-.225a3.234 3.234 0 01-1.06-.676 3.236 3.236 0 01-.686-1.035 3.606 3.606 0 01-.243-1.35c0-.691.147-1.269.442-1.734.31-.48.744-.863 1.304-1.148.575-.3 1.253-.503 2.034-.608a13.63 13.63 0 012.653-.113c.103-.84.044-1.44-.177-1.8-.221-.376-.715-.563-1.481-.563a10.1 10.1 0 00-1.835.18c-.634.12-1.157.278-1.57.473l-.685-2.184zm3.648 8.374c.574 0 1.031-.128 1.37-.383.339-.27.59-.555.752-.855v-1.463a7.883 7.883 0 00-1.326-.023c-.413.03-.782.098-1.106.203a1.874 1.874 0 00-.774.45 1.018 1.018 0 00-.287.743c0 .42.118.75.354.99.25.226.589.338 1.017.338zM87.725 11.15L86.51 8.674h-.11l.353 2.476v8.216H83.88V3.496h2.21l5.858 8.397 1.172 2.409h.11l-.353-2.409V3.609h2.874v15.87h-2.211l-5.814-8.329zM76.759 18.398c-.442.36-1.046.668-1.813.923-.751.24-1.555.36-2.41.36-1.783 0-3.087-.525-3.912-1.575-.825-1.066-1.238-2.522-1.238-4.367 0-1.981.464-3.467 1.392-4.457.929-.99 2.233-1.486 3.913-1.486.56 0 1.106.075 1.636.225.53.15 1.002.398 1.415.743.413.345.744.81.995 1.396.25.585.376 1.313.376 2.183 0 .315-.023.653-.067 1.013-.03.36-.08.735-.155 1.126H70.26c.044.945.28 1.658.707 2.138.442.48 1.15.72 2.122.72.605 0 1.142-.09 1.614-.27.486-.195.855-.39 1.105-.585l.95 1.913zm-4.112-8.261c-.752 0-1.312.233-1.68.698-.354.45-.567 1.058-.641 1.823h4.112c.059-.81-.067-1.433-.376-1.868-.295-.435-.766-.653-1.415-.653zM65.856 15.404c0 .63.007 1.261.022 1.891.014.63.08 1.328.199 2.094H64.02l-.398-1.463h-.089a3.429 3.429 0 01-1.282 1.283c-.545.315-1.194.472-1.945.472-1.385 0-2.461-.465-3.228-1.395-.766-.93-1.15-2.386-1.15-4.367 0-1.921.428-3.414 1.283-4.48.855-1.065 2.107-1.598 3.758-1.598.457 0 .833.03 1.127.09.295.045.59.127.885.248v-4.57h2.874v11.795zm-4.886 1.801c.56 0 1.002-.135 1.327-.405.324-.285.552-.69.685-1.216v-4.772a2.011 2.011 0 00-.685-.36c-.251-.09-.575-.135-.973-.135-.81 0-1.422.278-1.835.833-.398.555-.597 1.508-.597 2.859 0 .96.162 1.733.486 2.318.34.586.87.878 1.592.878zM44.517 13.739c0-1.906.457-3.37 1.37-4.39.914-1.035 2.197-1.553 3.847-1.553.884 0 1.65.142 2.3.428a4.25 4.25 0 011.613 1.215c.427.51.744 1.133.95 1.868.221.736.332 1.546.332 2.432 0 1.906-.457 3.376-1.37 4.412-.9 1.02-2.174 1.53-3.825 1.53-.884 0-1.65-.142-2.299-.427A4.561 4.561 0 0145.8 18.06c-.427-.526-.751-1.156-.972-1.891a8.983 8.983 0 01-.31-2.431zm2.962 0c0 .495.044.953.133 1.373.088.42.221.788.398 1.103.177.315.405.563.685.743.295.165.641.247 1.04.247.75 0 1.31-.277 1.68-.833.368-.555.552-1.433.552-2.633 0-1.036-.17-1.869-.509-2.499-.339-.645-.913-.968-1.724-.968-.707 0-1.26.27-1.658.81-.398.54-.597 1.426-.597 2.657zM44.503 18.714c-.471.345-1.076.593-1.813.742-.722.15-1.466.226-2.232.226a8.195 8.195 0 01-2.653-.428 5.83 5.83 0 01-2.188-1.418c-.634-.66-1.143-1.508-1.526-2.544-.368-1.05-.552-2.319-.552-3.804 0-1.546.206-2.837.618-3.872.428-1.05.973-1.89 1.636-2.521.678-.646 1.43-1.103 2.255-1.373a7.54 7.54 0 012.476-.428c.884 0 1.629.06 2.233.18.619.12 1.127.263 1.525.428l-.597 2.611a4.331 4.331 0 00-1.216-.36 10.59 10.59 0 00-1.68-.113c-1.223 0-2.21.443-2.962 1.328-.737.886-1.105 2.259-1.105 4.12 0 .81.088 1.553.265 2.228.177.66.442 1.23.796 1.711.368.465.818.833 1.348 1.103.546.255 1.172.383 1.88.383.663 0 1.223-.068 1.68-.203a4.885 4.885 0 001.193-.518l.62 2.522z"
        />
        <defs>
            <linearGradient
                id="paint0_linear_990_3858"
                x1="1.281"
                x2="17.995"
                y1="15.742"
                y2="15.925"
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="#00CBEC" />
                <stop offset="0.51" stopColor="#A112FF" />
                <stop offset="1" stopColor="#FF5543" />
            </linearGradient>
            <clipPath id="clip0_990_3858">
                <path fill="#fff" d="M0 0H22.106V22.511H0z" transform="translate(0 .941)" />
            </clipPath>
        </defs>
    </svg>
)