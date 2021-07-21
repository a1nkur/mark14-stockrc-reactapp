import React, { createContext, Component } from "react";

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
  state = {
    isLightTheme: true,
    btnLight: { syntax: "#555", bg: "#ddd" },
    btnDark: { syntax: "#ddd", bg: "#171010" },
    headerLight: {
      bg: "#438ce6",
      logoSyntax: "#fff",
      navLinkSyntax: "#fff",
      hoverColor: "#5494e3",
      hoverSyntax: "#ccc",
      toggleSyntax: "#000",
    },
    headerDark: {
      bg: "#282828",
      logoSyntax: "#fff",
      navLinkSyntax: "#fff",
      hoverColor: "#303030",
      hoverSyntax: "#ccc",
      toggleSyntax: "#fff",
    },
    footerLight: {
      bg: "#649FE8",
      titleSyntax: "#000",
      navLinkSyntax: "#fff",
      nameSyntax: "#282828",
      hoverColor: "#000",
    },
    footerDark: {
      bg: "#282828",
      titleSyntax: "#fff",
      navLinkSyntax: "#fff",
      nameSyntax: "#649FE8",
      hoverColor: "#ccc",
    },
    contentBgLight: { bg: "#fff", syntax: "#000" },
    contentBgDark: { bg: "#1b1b1b", syntax: "#fff" },
    descLight: { titleSyntax: "#000", paragraphSyntax: "#000" },
    descDark: { titleSyntax: "#fff", paragraphSyntax: "#ddd" },
  };

  x = {
      isNeutral : true,
      isLoss : false,
      isProfit: false,
      neutral: {appBg : '', inputBg: '', outputBg: ''}

  }

  ToggleTheme = () => this.setState({ isLightTheme: !this.state.isLightTheme });

  render() {
    return (
      <ThemeContext.Provider
        value={{ ...this.state, ToggleTheme: this.ToggleTheme }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;
