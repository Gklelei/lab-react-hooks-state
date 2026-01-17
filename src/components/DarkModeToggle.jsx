import React from 'react'

const DarkModeToggle = ({ theme, setTheme }) => {
  // TODO: Implement dark mode toggle logic

  const handleToggleTheme = () => {
    setTheme(prevTheme => prevTheme === "light" ? "dark" : "light")
  }

  return (
    <button onClick={handleToggleTheme}>
      Toggle theme  to {theme === "dark" ? "light" : "dark"} mode
      {/* TODO: Update this text from Dark to Light dynamically */}
    </button>
  )
}

export default DarkModeToggle
