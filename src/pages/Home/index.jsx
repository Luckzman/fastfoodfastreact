import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Navbar from '../../component/presentation/Navbar';
import Banner from '../../component/presentation/Banner';
import Footer from '../../component/presentation/Footer';
import TopOrderContainer from '../../component/presentation/TopOrderContainer';
import HowToOrderContainer from '../../component/presentation/HowToOrderContainer';
import HomePageReview from '../../component/presentation/HomePageReview';
import AuthFormContainer from '../../component/presentation/AuthFormContainer';
import Button from '../../component/presentation/Button';
import Modal from '../../component/presentation/Modal';
import { Alert } from '../../component/presentation/Alert';
import './home.scss';

export class Home extends React.Component {
  state = {
    isOpen: false,
    closeModal: true,
  }

  onToggle = () => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }

  handleAlert = () => {
    // const { user } = this.props;
    this.setState({ isOpen: false })
    document.body.style.overflow = 'unset';
    // return (<Alert alertMsg={user.data.message} />)
  }

  onClose = () => {
    const { closeModal } = this.state;
    this.setState({ closeModal: !closeModal })
    console.log(closeModal);
  }

  render() {
    const { isOpen, closeModal } = this.state;
    const { user } = this.props;
    return (
      <div className="home">
        <Navbar path="/">
          <li className="link"><a href="#order">how to order</a></li>
          <li className="link"><Link to="/catalog">Catalog</Link></li>
          <li className="link--btn">
            <Button
              name="LOGIN"
              className="button"
              handleClick={this.onToggle} />
          </li>
        </Navbar>
        {isOpen && (
          <Modal
            content={<AuthFormContainer onhandleAlert={this.handleAlert} />}
            onCloseModal={this.onToggle}
          />
        )}
        {/* {user.success && !isOpen} */}
        <Banner />
        <TopOrderContainer />
        <HowToOrderContainer />
        <HomePageReview />
        <Footer />
        {closeModal && user.success && <Alert
          alertMsg={user.data.message}
          handleClose={this.onClose} />}
      </div>
    );
  }
}

const mapStateToProp = (state) => {
  console.log(state);
  return { user: state.auth };
}


export default connect(mapStateToProp, null)(Home);
