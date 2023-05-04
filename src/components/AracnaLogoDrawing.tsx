import { useMemo } from 'react'

interface Props {
  className?: string
  fill?: string
}

export function AracnaLogoDrawing(props: Props) {
  const fill = useMemo(() => props.fill ?? '#000', [props.fill])

  return (
    <svg
      className={props.className}
      xmlns='http://www.w3.org/2000/svg'
      width='767.958'
      height='609.017'
      version='1.1'
      viewBox='0 0 767.958 609.017'
      xmlSpace='preserve'
    >
      <defs>
        <clipPath id='clipPath1145' clipPathUnits='userSpaceOnUse'>
          <path d='M0 1950.957h2670.441V0H0z' />
        </clipPath>
      </defs>
      <g transform='matrix(1.33333 0 0 -1.33333 -1396.315 1694.226)'>
        <g>
          <g clipPath='url(#clipPath1145)'>
            <g transform='translate(1409.281 1218.45)'>
              <path
                fill={fill}
                fillOpacity='1'
                fillRule='evenodd'
                stroke='none'
                d='M0 0c-4.71 17.644-21.088 28.487-40.006 26.253a25.666 25.666 0 008.263 14.079 25.578 25.578 0 0016.884 6.319c7.094 0 13.52-2.877 18.166-7.526a25.605 25.605 0 007.525-18.164c0-4.701-1.257-9.103-3.451-12.881A25.773 25.773 0 000 0m-108.115 26.253c-18.919 2.234-35.298-8.607-40.008-26.253a25.773 25.773 0 00-7.381 8.08 25.571 25.571 0 00-3.451 12.881 25.632 25.632 0 007.519 18.171 25.625 25.625 0 0018.171 7.519 25.58 25.58 0 0016.886-6.319 25.668 25.668 0 008.264-14.079m-47.242 16.811zm30.933-127.288a11.988 11.988 0 01-6.722-5.158s1.595-1.842 4.789-5.524a33.248 33.248 0 0037.571-.738 22.361 22.361 0 01-35.085 8.474l-.553 2.946m60.309-37.018h-19.891a10.042 10.042 0 019.945-8.668c5.013 0 9.259 3.702 9.946 8.668m4.779 25.598a33.246 33.246 0 0037.57.738l4.789 5.524a11.981 11.981 0 01-6.722 5.158l-.554-2.946a22.36 22.36 0 01-35.083-8.474M-201.707-240.97a4.292 4.292 0 01-1.26.008c-2.428-.673-4.418-2.099-5.782-4.526-7.046-12.542-5.769-33.688-4.3-58.007.788-13.061 1.63-27.012 1.288-41.157 4.945 19.009 10.352 42.66 13.172 62.886 1.621 11.638 2.379 22.077 1.68 29.709-.593 6.478-2.076 10.621-4.798 11.087m-31.678 149.819l.009-.006zm-59.499-173.441l-2.403-2.929c1.795-8.008 3.64-14.876 5.272-20.956l.757-2.828c-.668 8.727-2.069 17.547-3.626 26.713m-1.397 7.75l.875 1.126c8.496 10.987 15.423 21.688 20.539 32.181 6.261 12.845 9.802 25.358 10.177 37.68a26.18 26.18 0 00-1.313 1.48c-8.647-11.808-15.561-24.237-20.737-37.281-4.467-11.256-7.647-22.986-9.541-35.186m349.127 15.88a4.292 4.292 0 01-1.26-.008c-2.723-.466-4.206-4.609-4.799-11.087-.699-7.632.06-18.071 1.681-29.709 2.82-20.226 8.227-43.877 13.172-62.886-.342 14.145.5 28.096 1.288 41.157 1.468 24.319 2.746 45.465-4.301 58.007-1.363 2.427-3.354 3.853-5.781 4.526M85.255-91.157l.008.006zm39.491-132.378c5.115-10.493 12.042-21.194 20.538-32.181l.876-1.126c-1.894 12.2-5.075 23.93-9.541 35.186-5.176 13.044-12.09 25.473-20.737 37.281a26.18 26.18 0 00-1.313-1.48c.374-12.323 3.916-24.835 10.177-37.68m22.42-43.986l-2.404 2.929c-1.557-9.166-2.958-17.986-3.626-26.713l.758 2.828c1.632 6.08 3.476 12.948 5.272 20.956m-457.856 95.936l-2.675 1.04-3.673-18.535zm.627 6.1l2.805-1.093c17.334 11.141 31.797 21.012 43.383 29.615 10.878 8.074 19.221 15.025 25.029 20.851-1.171 2.915-1.647 6.391-1.647 9.863 0 1.43.082 2.872.228 4.28zm469.2-1.093l2.805 1.093-69.799 63.516c.147-1.408.228-2.85.228-4.28 0-3.472-.476-6.948-1.646-9.863 5.807-5.826 14.151-12.777 25.028-20.851 11.586-8.603 26.05-18.474 43.384-29.615m6.107-3.967l-2.675-1.04 6.347-17.495zM4.39-280.661c1.944 2.799 2.793 6.848 2.55 12.147a115.267 115.267 0 00-7.149-4.331 95.075 95.075 0 00-5.085-2.632v-10.097c3.961.41 6.934 1.727 8.921 3.947.17.318.398.603.675.841zm-50.093-33.024c.983 7.7.911 16.311.511 24.242-1.187-21.143-4.718-36.054-12.958-46.426 7.645 2.53 11.083 11.51 12.447 22.184m20.799-17.676l.061-.322c1.47-7.626 3.708-12.445 6.714-14.458 4.296 4.978 6.904 11.448 6.904 18.496v49.6c-4.631-1.782-9.13-2.982-13.498-3.599a2.931 2.931 0 00-1.124.06c-1.336-19.498-1.238-34.763.296-45.791.195-1.403.41-2.731.647-3.986m-12.848-3.927a34.034 34.034 0 00-8.018 1.876c-3.92-6.153-9.927-9.78-18.962-9.003-10.582-8.316-26.225-12.105-49.316-13.065a28.238 28.238 0 015.537-.547h68.902c6.422 0 12.364 2.164 17.134 5.797-3.386 2.863-5.924 7.823-7.612 14.878a37.856 37.856 0 00-7.665.064m-5.347 7.205a28.494 28.494 0 015.995-1.32 32.15 32.15 0 015.885-.106l-.193 1.323c-1.798 12.93-1.713 31.249.256 54.951a117.558 117.558 0 00-1.487 3.376 267.266 267.266 0 00-7.941-1.113l.326-4.09c.869-10.722 2.114-26.073.416-39.365-.633-4.957-1.666-9.613-3.257-13.656m-62.859 108.663a121.565 121.565 0 00-.801-17.491 145.437 145.437 0 0132.699-3.721c10.979 0 21.95 1.241 32.698 3.721a121.565 121.565 0 00-.801 17.491 142.038 142.038 0 00-31.897-3.635 142.046 142.046 0 00-31.898 3.635m-2.232 20.192a121.571 121.571 0 001.915-14.041 136.298 136.298 0 0132.215-3.854c10.837 0 21.653 1.285 32.215 3.854a121.443 121.443 0 002.382 16.308 2.963 2.963 0 005.792-1.251 115.553 115.553 0 01-1.5-40.433l.033-.23c1.245-8.77 3.5-17.398 6.74-25.709.358-.404.609-.91.701-1.481l.037-.363a115.304 115.304 0 012.137-4.888l.137-.295c.603-1.29 1.233-2.569 1.885-3.838 4.431.822 9.037 2.307 13.82 4.452.131.071.267.133.408.185a86.28 86.28 0 016.192 3.135c3.477 1.931 7.041 4.193 10.691 6.782l.153.109c4.441 3.159 9.011 6.806 13.706 10.938-.307 17.637-6.284 34.925-17.929 51.858-10.921 15.88-26.813 31.45-47.673 46.707a223.096 223.096 0 00-27.157-24.806l-2.57-1.956a223.421 223.421 0 00-34.33-21.183m.587-43.566a121.378 121.378 0 00-5.645-21.393 264.355 264.355 0 0165.125-1.671l.346.034c1.214.121 2.428.25 3.641.389l.122.013c3.057.349 6.108.751 9.153 1.207a121.425 121.425 0 00-5.657 21.421 151.239 151.239 0 00-33.542-3.769 151.248 151.248 0 00-33.543 3.769m-15.795-38.85c-4.368.617-8.867 1.816-13.497 3.599v-49.6c0-7.802 3.195-14.898 8.34-20.043a28.857 28.857 0 012.361-2.114c32.535.084 51.497 4.225 62.097 16.039 10.4 11.592 13.283 31.064 13.465 61.725a268.881 268.881 0 00-23.333-1.017 269.564 269.564 0 00-41.501 3.223 121.278 121.278 0 00-4.91-10.265l-.006-.011a2.964 2.964 0 00-3.016-1.536m-24.513 8.798a115.19 115.19 0 00-7.149 4.332c-.243-5.299.606-9.349 2.55-12.147 1.951-2.808 5.179-4.446 9.684-4.913v10.095a95.103 95.103 0 00-5.085 2.633m39.902 118.571c-18.891-14.298-33.443-28.871-43.651-43.715-11.646-16.933-17.623-34.221-17.929-51.858 4.694-4.131 9.263-7.777 13.703-10.937l.158-.112c3.649-2.589 7.213-4.85 10.69-6.781a86.717 86.717 0 016.185-3.132 3.05 3.05 0 00.419-.19c4.78-2.144 9.385-3.627 13.814-4.449a115.393 115.393 0 0111.64 36.589l.029.202a115.553 115.553 0 01-1.499 40.446 2.966 2.966 0 001.753 3.36 217.311 217.311 0 0134.018 20.585 158.06 158.06 0 00-14.251 8.512 158.777 158.777 0 00-15.079 11.48m-53.001-47.338a127.965 127.965 0 004.485 6.983 145.36 145.36 0 005.989 8.081 3.09 3.09 0 00-.279.259l-83.057 87.102a37.296 37.296 0 01-.689-7.061c0-3.33.489-6.549 1.74-8.778 16.911-20.986 31.372-38.583 43.365-52.972 11.678-14.011 21.216-25.22 28.446-33.614m-11.391-26.395a97.803 97.803 0 004.783 13.581l-.137.067c-25.477 13.176-46.362 22.31-62.347 27.685-13.65 4.589-23.481 6.433-29.314 5.71.316-.393.683-.802 1.104-1.231a2.975 2.975 0 001.139-1.09c3.623-3.281 9.93-7.499 18.923-12.654 14.928-8.557 36.88-19.248 65.849-32.068m199.724-19.849c.043-1.105.066-2.212.067-3.32 0-.878-.382-1.665-.99-2.207l.006-.006c-4.721-4.206-9.337-7.952-13.848-11.236.558-4.875.421-9.102-.412-12.682 3.673 1.787 8.297 4.243 13.111 7.054 6.11 3.567 12.43 7.655 17.361 11.595-.007 2.556.083 4.945.284 7.135.379 4.139 1.173 7.641 2.457 10.342-5.254-1.15-11.13-3.589-16.914-6.385a2.934 2.934 0 00-1.122-.29m-7.826 33.43a98.098 98.098 0 004.783-13.58c28.968 12.82 50.92 23.51 65.848 32.067 8.993 5.155 15.301 9.373 18.924 12.654.273.458.668.836 1.139 1.09.42.429.788.838 1.103 1.231-5.832.723-15.663-1.121-29.313-5.71-15.985-5.375-36.871-14.509-62.347-27.685zM2.414-186.549a144.537 144.537 0 005.991-8.081 128.546 128.546 0 004.485-6.982c7.228 8.394 16.766 19.602 28.445 33.613 11.993 14.389 26.453 31.986 43.365 52.972 1.25 2.229 1.74 5.448 1.74 8.778 0 2.446-.264 4.899-.689 7.061L2.695-186.29a3.1 3.1 0 00-.281-.259m-62.693 39.05a2.949 2.949 0 00-.472-.483 176.491 176.491 0 00-13.392-9.889 2.854 2.854 0 00-.344-.229 175.938 175.938 0 00-9.904-6.114 152.767 152.767 0 0110.911-6.093 217.644 217.644 0 0124.509 22.493l-1.986 1.388a2.892 2.892 0 00-.672.641 92.503 92.503 0 00-8.65-1.714m-19.397-.849l3.955-3.447a172.479 172.479 0 014.689 3.33 94.094 94.094 0 00-8.644.117m-9.201 6.653a2.96 2.96 0 001.742-.279 88.118 88.118 0 0113.074-.971c23.497 0 44.761 9.26 60.145 24.234a80.26 80.26 0 011.972 1.985A46.957 46.957 0 01-2.86-97.56a47.01 47.01 0 01-.297 21.406 47.046 47.046 0 01-24.921 30.881c-6.496-8.324-17.187-15.813-29.566-21.67-13.968-6.608-30.189-11.196-44.955-12.579-11.103-1.037-21.259-.279-29.133 2.431-3.791 1.308-7.079 3.07-9.733 5.304a53.097 53.097 0 01-.203-28.026 53.09 53.09 0 0116.982-26.89c.043-.038.088-.075.133-.113a85.994 85.994 0 0135.676-14.879m-7.614-4.091a2.934 2.934 0 00-.673-.64 329.277 329.277 0 01-5.961-4.23 151.744 151.744 0 0113.112-9.936c3.094 1.7 6.147 3.505 9.154 5.411l-9.233 8.046a92.35 92.35 0 00-6.399 1.349m-58.514-140.977c-3.496 1.154-11.811 5.388-20.561 10.647-5.242 3.151-10.693 6.697-15.421 10.197-.316-5.154-.92-10.77-1.74-16.659-5.074-36.394-18.481-83.873-22.736-96.207l-.141-.34c-1.775-8.058-4.273-15.993-7.734-23.675a2.961 2.961 0 00-5.399 2.433c13.765 30.541 11.622 66.013 9.78 96.525-1.525 25.249-2.851 47.205 5.04 61.25 3.811 6.781 10.215 8.696 17.803 7.847 6.513-.727 13.898-3.582 21.119-7.013a89.458 89.458 0 001.228 7.942 2.949 2.949 0 00-.562.183c-29.399 13-51.688 23.852-66.863 32.549-6.56 3.76-11.853 7.191-15.881 10.29-1.054-11.663-4.648-23.403-10.466-35.337-5.136-10.537-12.014-21.243-20.407-32.2l.164-.96c3.739-21.792 7.123-41.531 2.975-62.697-1.099-9.454-5.709-18.839-16.293-31.509a2.962 2.962 0 00-4.17-.371 2.963 2.963 0 00-.371 4.171c19.622 23.489 16.6 34.747 9.903 59.69-1.747 6.512-3.737 13.919-5.653 22.637a2.997 2.997 0 00-.026 1.119c1.576 16.36 5.304 31.954 11.185 46.772 5.893 14.852 13.943 28.911 24.143 42.176.307.429.73.782 1.25 1.004 6.356 2.714 18.711 1.25 36.614-4.769 16.264-5.468 37.413-14.709 63.119-28 .36.718.73 1.435 1.109 2.152-.302.164-.58.386-.818.661-7.195 8.344-16.927 19.777-29.182 34.479a4129.983 4129.983 0 00-41.505 50.649c-5.967-5.855-14.251-12.718-24.85-20.586-11.825-8.779-26.538-18.819-44.134-30.118l-20.225-55.74c-2.551-7.927-6.656-14.295-12.315-19.101-5.665-4.812-12.843-8.013-21.529-9.604a2.957 2.957 0 00-1.066 5.816c7.642 1.399 13.901 4.169 18.772 8.306 4.786 4.065 8.282 9.498 10.485 16.299l11.871 59.915c.133.684.493 1.267.986 1.687l80.24 73.017.138.119c.418.336.904.54 1.404.616l.16.02c.297.03.597.014.895-.049a2.926 2.926 0 001.285-.621c16.964-12.338 68.023-71.266 86.629-90.823 9.809 11.444 22.134 22.697 36.971 33.758.102.087.207.166.317.237a334.906 334.906 0 005.874 4.265 91.18 91.18 0 00-24.535 12.646 90.511 90.511 0 00-9.947 8.376c-16.411 15.974-26.563 38.042-26.563 62.415 0 18.078 5.584 34.888 15.163 48.882a43.86 43.86 0 00.254 5.475 31.417 31.417 0 00-11.089 11.215 31.131 31.131 0 00-4.213 15.666c0 8.625 3.501 16.438 9.156 22.092 5.665 5.666 13.479 9.166 22.103 9.166 7.854 0 15.043-2.911 20.54-7.71 5.564-4.855 9.392-11.652 10.425-19.332a55.574 55.574 0 002.682-.778 92.769 92.769 0 0025.557 3.563 92.756 92.756 0 0025.556-3.563c.896.286 1.789.541 2.68.769 1.036 7.689 4.864 14.486 10.426 19.341 5.499 4.799 12.686 7.71 20.54 7.71 8.632 0 16.45-3.5 22.104-9.155 5.657-5.656 9.155-13.472 9.155-22.103a31.12 31.12 0 00-4.212-15.666A31.426 31.426 0 001.099-5.92c.197-1.774.284-3.599.255-5.474 9.58-13.995 15.164-30.805 15.164-48.883 0-24.373-10.153-46.441-26.564-62.415a91.014 91.014 0 00-34.483-21.021c17.633-12.508 32.022-25.261 43.165-38.262l86.29 90.496c.093.103.227.247.337.328.38.317.822.525 1.285.621.298.064.599.079.892.049l.161-.02c.503-.075.988-.28 1.407-.616 26.885-22.641 54.155-49.273 80.378-73.136.493-.42.853-1.003.986-1.687l11.871-59.915c2.203-6.801 5.699-12.234 10.485-16.299 4.87-4.137 11.129-6.907 18.772-8.306a2.957 2.957 0 00-1.066-5.816c-8.687 1.591-15.865 4.792-21.529 9.604-5.659 4.806-9.764 11.174-12.315 19.101l-20.226 55.74c-17.595 11.299-32.308 21.339-44.133 30.118-10.6 7.868-18.884 14.731-24.851 20.586a4130.881 4130.881 0 00-41.504-50.649c-12.256-14.702-21.988-26.134-29.182-34.479a2.944 2.944 0 00-.819-.661c.38-.716.75-1.434 1.111-2.152 25.705 13.291 46.854 22.532 63.117 28 17.904 6.019 30.258 7.484 36.615 4.769.52-.222.943-.575 1.249-1.004 10.201-13.264 18.251-27.324 24.143-42.176 5.881-14.818 9.61-30.412 11.186-46.772.06-.362.055-.74-.027-1.119-1.915-8.718-3.905-16.125-5.652-22.637-6.698-24.943-9.72-36.201 9.902-59.69a2.96 2.96 0 00-4.54-3.8c-10.584 12.67-15.194 22.056-16.294 31.508-4.148 21.167-.763 40.905 2.976 62.698l.164.96c-8.394 10.957-15.271 21.663-20.407 32.2-5.818 11.933-9.412 23.673-10.466 35.337-4.029-3.1-9.322-6.53-15.882-10.29-15.174-8.697-37.464-19.548-66.862-32.548a3.021 3.021 0 00-.562-.183c.531-2.639.94-5.286 1.229-7.943 7.22 3.431 14.606 6.286 21.118 7.013 7.588.849 13.992-1.066 17.802-7.847 7.892-14.045 6.565-36.001 5.041-61.25-1.843-30.512-3.987-65.984 9.78-96.525a2.962 2.962 0 00-5.399-2.433c-3.462 7.682-5.96 15.617-7.735 23.675l-.141.34c-4.255 12.334-17.661 59.813-22.735 96.207-.821 5.897-1.426 11.518-1.741 16.676-4.526-3.314-9.661-6.579-14.618-9.472-8.297-4.843-16.273-8.74-20.14-10.141-3.089-3.523-7.557-5.522-13.401-5.997v-36.133c0-9.438-3.861-18.019-10.078-24.237-6.218-6.216-14.799-10.077-24.237-10.077h-68.902c-7.62 0-14.68 2.516-20.39 6.757l-.144.107a34.864 34.864 0 00-3.703 3.213c-6.219 6.219-10.078 14.799-10.078 24.237v36.133c-5.115.416-9.174 1.999-12.179 4.749m-35.735 28.103c5.142-4.124 11.817-8.539 18.21-12.382 4.546-2.733 8.907-5.159 12.44-6.97-.988 3.726-1.184 8.188-.588 13.386-4.512 3.284-9.129 7.03-13.848 11.236l.005.006a2.95 2.95 0 00-.99 2.207c.002 1.108.024 2.215.068 3.32-.379.02-.76.115-1.123.29-5.786 2.796-11.66 5.236-16.914 6.385 1.283-2.701 2.078-6.203 2.457-10.342.201-2.19.29-4.58.283-7.136m44.508 154.668c-8.137 12.679-12.839 27.662-12.839 43.715 0 22.821 9.504 43.484 24.865 58.435 15.384 14.972 36.649 24.236 60.145 24.236 23.498 0 44.762-9.264 60.145-24.236C1.446-16.793 10.95-37.456 10.95-60.277a80.505 80.505 0 00-7.637-34.301A52.61 52.61 0 012.24-74.826a52.615 52.615 0 01-10.9 21.302A52.582 52.582 0 01-24.967-40.63c3.084 5.522 3.907 10.923 3.055 15.903-.604 3.534-2.064 6.834-4.16 9.792-2.044 2.883-4.705 5.441-7.776 7.567C-41.609-1.991-52.085.674-61.871-1a2.782 2.782 0 01.935-5.483c8.346 1.429 17.294-.853 23.935-5.452 2.543-1.763 4.739-3.867 6.406-6.219 1.616-2.282 2.74-4.816 3.202-7.51.759-4.437-.286-9.402-3.862-14.565-5.705-8.235-16.271-15.781-28.758-21.687-13.427-6.353-28.975-10.759-43.087-12.08-10.319-.968-19.68-.289-26.824 2.169-4.821 1.66-8.57 4.122-10.814 7.418-2.186 3.208-2.991 7.344-2.014 12.457 1.08 5.664 4.288 12.452 10.104 20.43a2.772 2.772 0 11-4.481 3.264c-6.339-8.693-9.858-16.23-11.082-22.65-1.213-6.352-.236-11.668 2.458-15.983a58.629 58.629 0 01-.479-37.101'
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  )
}