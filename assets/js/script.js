console.log('Script loaded!')

const storageKey = 'theme-preference';

const onClick = () => {
    //toggle value
    console.log('Togggle clickes')
    theme.value = theme.value === 'light' ?'dark' : 'light'
    setPreference()
} //If button is pressed, does theme match light, if not, set to dark. and vice versa, if set to light, change to dark. bug proof.


const getColorPref = () => {
    if (localStorage.getItem(storageKey))
        return localStorage.getItem(storageKey) //checks if user has preference of light or dark mode
    else 
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light' //If no preference, then checks Operating system for prefered theme, if match for dark is true, return dark, if false, eturn Light
} 
// Basically, Use what they picked before, but if they never picked anything, respect their device's dark/light mode setting

const setPreference = () => {
    localStorage.setItem(storageKey, theme.value)
    reflectPreference()
} //sets the selected value to dark or light

const reflectPreference = () => {
    document.firstElementChild.setAttribute('data-theme', theme.value)
    document.querySelector('#theme-toggle')?.setAttribute('aria-label', theme.value)
} //applies the theme by:
// 1. Setting data-theme attribute on <html> element (CSS uses this to change colors)
// 2. Updating aria-label on the toggle button for accessibility

const theme = {
    value: getColorPref(),
}

// set early so no page flashes/ CSS is made aware. 
// I.e. prevents wrong theme from flashing on page before Js runs to correct it
reflectPreference()

window.onload = () => {
    // set on load so screen readers can see latest value on the button
    reflectPreference() // can be removed at any time with no issue

    // now this script can find and listen to clicks on the control
    document.querySelector('#theme-toggle')?.addEventListener('click', onClick)
    // When button is clicked, it calls the onClick Function. 
}

// sync with system changes. If user changes pref in OS, page will also update if open.
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', ({matches: isDark}) => {
    theme.value = isDark ? 'dark' : 'light';
    setPreference();
});