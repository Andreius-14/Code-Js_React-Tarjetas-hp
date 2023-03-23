const Navbar = (prompt) => {
  return (
    <div>

      <nav className="navbar bg-body-tertiary bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <img
              src="https://media.istockphoto.com/id/1419008308/vector/cartoon-dice-for-fantasy-dnd-and-rpg-board-game-outline-cartoon-with-medieval-sword.jpg?b=1&s=612x612&w=0&k=20&c=Yz83EtYbkenZ9ahYX2oLgOLu9QMNf986TlDa86xBYT0="
              alt="Logo"
              className="d-inline-block align-text-top rounded-1"
              width={60}
              height={60}
            />
            <p className="d-inline-block  h2 px-2">{prompt.title}</p>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
