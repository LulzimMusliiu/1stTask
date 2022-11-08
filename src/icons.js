
export function Logo(props) {
    return (
        <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M6 15h2.4q.575 0 .862-.288q.288-.287.288-.862v-3.7q0-.575-.288-.863Q8.975 9 8.4 9H6Zm4.125 0h3.2v-1.15h-2.05v-1.3h1.3V11.4h-1.3v-1.25h2.05V9h-3.2Zm5.225-.025h1.35L18.3 9h-1.2l-1.075 4.1L14.95 9h-1.2Zm-8.2-1.125v-3.7H8.4v3.7ZM3 21V3h18v18Zm2-2h14V5H5Zm0 0V5v14Z"></path></svg>
    )
}

export function Ruler(props) {
    return (
        <svg width="1em" height="1em" viewBox="0 0 20 20" {...props}><path fill="currentColor" d="M14.249.438L.438 14.251a1.505 1.505 0 0 0 .002 2.124l3.185 3.187a1.506 1.506 0 0 0 2.124.002L19.562 5.751a1.508 1.508 0 0 0 0-2.125L16.376.438a1.51 1.51 0 0 0-2.127 0zM3.929 15.312l-.759.759l-1.896-1.897l.759-.759l1.896 1.897zm3.036 0l-.759.759l-3.415-3.415l.759-.76l3.415 3.416zm0-3.036l-.759.759l-1.898-1.896l.76-.76l1.897 1.897zm1.518-1.518l-.759.759l-1.896-1.896l.759-.76l1.896 1.897zm3.035 0l-.759.759l-3.414-3.414l.759-.759l3.414 3.414zm0-3.035l-.759.759l-1.896-1.896l.759-.759l1.896 1.896zm1.518-1.517l-.759.759l-1.897-1.897l.759-.759l1.897 1.897zm3.036 0l-.76.759l-3.414-3.415l.759-.76l3.415 3.416zm-.001-3.035l-.759.759l-1.896-1.898l.759-.758l1.896 1.897z"></path></svg>
    )
}
export const Globe = (props) => {
    return (
        <svg viewBox="0 0 16 16" id="logo" {...props}>
            <path fill="currentColor" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539a6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539a6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855c.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z"></path>
        </svg>
    )
}
export const Medal = (props) => {
    return (
        <svg viewBox="0 0 24 24" id="logo" {...props}>
            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.272 10.445L18 2m-8.684 8.632L5 2m7.761 8.048L8.835 2m5.525 0l-1.04 2.5M6 16a6 6 0 1 0 12 0a6 6 0 0 0-12 0Z"></path>
        </svg>
    )
}
export const Search = (props) => {
    return (
        <svg viewBox="0 0 24 24" id="logo" {...props}>
            <path fill="currentColor" d="M14.73 13.31A6.388 6.388 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.43 0 2.74-.48 3.81-1.27L19.59 21L21 19.59l-6.27-6.28zM9.5 14C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14z"></path><path fill="currentColor" d="M10.29 8.44L9.5 6l-.79 2.44H6.25l2.01 1.59l-.77 2.47l2.01-1.53l2.01 1.53l-.77-2.47l2.01-1.59z"></path>
        </svg>
    )
}
export const Campaign = (props) => {
    return (
        <svg viewBox="0 0 16 16" id="logo" {...props}>
            <path fill="currentColor" d="M10.871 1.015a.5.5 0 0 1 .364.606l-.25 1a.5.5 0 1 1-.97-.242l.25-1a.5.5 0 0 1 .606-.364Zm2.983 1.131a.5.5 0 0 1 0 .708l-1 1a.5.5 0 1 1-.707-.708l1-1a.5.5 0 0 1 .707 0Zm-7.57 10.886a2 2 0 0 0 3.63-1.604l-3.63 1.604Zm-.92.407l-.998.441a1.4 1.4 0 0 1-1.555-.288l-.4-.4a1.394 1.394 0 0 1-.293-1.548l3.871-8.809a1.4 1.4 0 0 1 2.269-.426l5.332 5.316a1.395 1.395 0 0 1-.422 2.264l-2.335 1.032a3 3 0 0 1-5.469 2.418ZM14.5 5h-1a.5.5 0 0 0 0 1h1a.5.5 0 1 0 0-1ZM6.905 3.238l-3.872 8.808a.394.394 0 0 0 .083.438l.401.4a.4.4 0 0 0 .444.082l8.802-3.892a.395.395 0 0 0 .12-.641l-5.33-5.316a.4.4 0 0 0-.647.12Z"></path>
        </svg>
    )
}
export const Percentage = (props) => {
    return (
        <svg viewBox="0 0 24 24" id="logo" {...props}>
            <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10Z"></path><path fill="currentColor" d="M15.5 16a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1Zm-7-7a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1Z"></path><path d="m16 8l-8 8"></path></g>
        </svg>
    )
}
export const Typography = (props) => {
    return (
        <svg viewBox="0 0 24 24" id="logo" {...props}>
            <path fill="currentColor" d="m18.5 4l1.16 4.35l-.96.26c-.45-.87-.91-1.74-1.44-2.18C16.73 6 16.11 6 15.5 6H13v10.5c0 .5 0 1 .33 1.25c.34.25 1 .25 1.67.25v1H9v-1c.67 0 1.33 0 1.67-.25c.33-.25.33-.75.33-1.25V6H8.5c-.61 0-1.23 0-1.76.43c-.53.44-.99 1.31-1.44 2.18l-.96-.26L5.5 4h13Z"></path>
        </svg>
    )
}
export const Idea = (props) => {
    return (
        <svg viewBox="0 0 15 15" id="logo" {...props}>
            <path fill="currentColor" d="m4.076 6.47l.495.07l-.495-.07Zm-.01.07l-.495-.07l.495.07Zm6.858-.07l.495-.07l-.495.07Zm.01.07l-.495.07l.495-.07ZM9.5 12.5v.5a.5.5 0 0 0 .5-.5h-.5Zm-4 0H5a.5.5 0 0 0 .5.5v-.5Zm-.745-3.347l.396-.306l-.396.306Zm5.49 0l-.396-.306l.396.306ZM6 15h3v-1H6v1ZM3.58 6.4l-.01.07l.99.14l.01-.07l-.99-.14ZM7.5 3a3.959 3.959 0 0 0-3.92 3.4l.99.14A2.959 2.959 0 0 1 7.5 4V3Zm3.92 3.4A3.959 3.959 0 0 0 7.5 3v1a2.96 2.96 0 0 1 2.93 2.54l.99-.14Zm.01.07l-.01-.07l-.99.14l.01.07l.99-.14Zm-.79 2.989c.63-.814.948-1.875.79-2.99l-.99.142a2.951 2.951 0 0 1-.59 2.236l.79.612ZM9 10.9v1.6h1v-1.599H9Zm.5 1.1h-4v1h4v-1Zm-3.5.5v-1.599H5V12.5h1ZM3.57 6.47a3.951 3.951 0 0 0 .79 2.989l.79-.612a2.951 2.951 0 0 1-.59-2.236l-.99-.142ZM6 10.9c0-.823-.438-1.523-.85-2.054l-.79.612c.383.495.64.968.64 1.442h1Zm3.85-2.054C9.437 9.378 9 10.077 9 10.9h1c0-.474.257-.947.64-1.442l-.79-.612ZM7 0v2h1V0H7ZM0 8h2V7H0v1Zm13 0h2V7h-2v1ZM3.354 3.646l-1.5-1.5l-.708.708l1.5 1.5l.708-.708Zm9 .708l1.5-1.5l-.708-.708l-1.5 1.5l.708.708Z"></path>
        </svg>
    )
}