import React from 'react';
import "./Header.css"
import PersonIcon from '@material-ui/icons/Person';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Link, useHistory } from 'react-router-dom';

function Header({backButton}) {
    const history = useHistory();
  return (
    <div className="header">
        {backButton ? (
            <IconButton onClick={() => history.replace(backButton)}>
            <ArrowBackIosIcon className="header_icon" fontSize="large"/>
            </IconButton>
        ): (
            <Link to="/">
                <IconButton>
                    <PersonIcon className="header_icon" fontSize="large"/>
                </IconButton>
            </Link>
        )}
        
        <Link to="/">
            <img className="header_logo"
        src="https://p7.hiclipart.com/preview/884/17/224/tinder-logo-online-dating-applications-tinder-logo.jpg" 
        alt="TexMElogo"></img>
        </Link>
        
        <Link to="/chat">
        <IconButton>
            <QuestionAnswerIcon  className="header_icon" fontSize="large"/>
        </IconButton>
        </Link>
    </div>
    

  );
}

export default Header;
