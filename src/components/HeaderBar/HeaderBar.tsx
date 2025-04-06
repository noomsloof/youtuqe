import { Container, FormControl, InputGroup, Nav, Navbar } from "react-bootstrap";
import './HeaderBar.scss'

const HeaderBar = () => {


  return (
    <><Navbar bg="light" variant="light" fixed="top">
      <Container fluid className="d-flex justify-content-between align-items-center">

        <div className="d-flex align-item-center">

          <Navbar.Brand href="#home">
            <div className="custom-nav-logo">
              <i className="bi bi-caret-right-square-fill custom-icon"></i>
              <div> Youtuqe </div>
            </div>
          </Navbar.Brand>
        </div>

        <div style={{ width: "35%" }}>
          <Nav className="ml-auto d-flex align-items-center flex-grow-1 custom-gap-10">
            <InputGroup className="custom-nav-search">
              <FormControl
                type="text"
                placeholder="ค้นหา"
                className="search-input" />
              <button className="search-button">
                <i className="bi bi-search"></i>
              </button>
            </InputGroup>
            <button className="custom-nav-microphone"><i className="bi bi-mic-fill"></i></button>
          </Nav>
        </div>

        <div className="d-flex align-items-center custom-gap-10">
          <Nav><button className="custom-nav-create"> <i className="bi bi-plus big-text"></i> <p className="m-0 small-text">สร้าง</p></button></Nav>
          <Nav><button className="custom-nav-notify"> <i className="bi bi-bell"></i> </button> </Nav>
          <Nav><div className="custom-nav-profile"></div></Nav>
        </div>

      </Container>

      <Navbar
        bg="light"
        variant="light"
        style={{
          position: 'fixed',
          top: '62px',
          zIndex: 1029,
          height: '46px',
          width: '100%',
        }}
      >
        <Nav className="custom-gap-10">
          <Nav.Link className="custom-nav-category" href="#">ทั้งหมด</Nav.Link>
          <Nav.Link className="custom-nav-category" href="#">เกม</Nav.Link>
          <Nav.Link className="custom-nav-category" href="#">เพลง</Nav.Link>
          <Nav.Link className="custom-nav-category" href="#">มิกซ์</Nav.Link>
          <Nav.Link className="custom-nav-category" href="#">ข่าวสาร</Nav.Link>
          <Nav.Link className="custom-nav-category" href="#">ไลฟ์สด</Nav.Link>
          <Nav.Link className="custom-nav-category" href="#">พอตแคสต์</Nav.Link>
          <Nav.Link className="custom-nav-category" href="#">บาสเก็ตบอล</Nav.Link>
          <Nav.Link className="custom-nav-category" href="#">กีฬา</Nav.Link>
          <Nav.Link className="custom-nav-category" href="#">เกมแอ็กชันผจญภัย</Nav.Link>
          <Nav.Link className="custom-nav-category" href="#">การทำอาหาร</Nav.Link>
          <Nav.Link className="custom-nav-category" href="#">อัพโหลดล่าสุด</Nav.Link>
          <Nav.Link className="custom-nav-category" href="#">ดูแล้ว</Nav.Link>
          <Nav.Link className="custom-nav-category" href="#">วิดีโอใหม่สำหรับคุณ</Nav.Link>
        </Nav>
      </Navbar>
    </Navbar>

    </>

    
  );
};

export default HeaderBar;