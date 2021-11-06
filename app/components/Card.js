import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import store from '../store';

class Card extends React.Component {
  handleCardClick = (e) => {
    this.props.onCardClick(this.props.itemID)
  }

  handleSaveClick = (e) => {
    e.stopPropagation()
    e.preventDefault()
    const itemID = this.props.itemID
    this.props.onSaveClick(itemID)
  }

  render() {
    const isSaved = this.props.savedItems.includes(this.props.itemID)

    return (
      <div className='card' onClick={this.handleCardClick}>
        <div className='header-img' style={{backgroundImage: `url(${this.props.imgURL})` }}>
          <div className='save-icon-container'>
            <i className={isSaved ? 'saved' : ''} onClick={this.handleSaveClick}>
              <FontAwesomeIcon className={isSaved ? 'saved' : ''} icon={faHeart} />
            </i>
          </div>
        </div>
        { this.props.children }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { 
    savedHomePlans: state.savedHomePlans,
    savedLots: state.savedLots
  };
};



export default connect(mapStateToProps)(Card)