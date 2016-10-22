class Navbar extends React.Component {
  render () {
    return <header className="navigation" role="banner">
      <div className="navigation-wrapper">
        <ul className="navigation">
          <li className="nav-link">
            <a href={this.props.rootUrl}>Home</a>
          </li>
        </ul>
      </div>
    </header>
  }
}
