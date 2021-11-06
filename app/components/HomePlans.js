import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import Card from './Card';
import { API } from '../utils/api';
import store from '../store/index';
import { fetchHomePlans, saveHomePlan } from '../store/actions/home-plans';
import { fetchLots, saveLot } from '../store/actions/lots';
import fetchCombinations from '../store/actions/combinations';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '850px'
  },
};

Modal.setAppElement('#app')

class HomePlans extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      modalIsOpen: false,
      onlySaved: false,
      selectedHomePlanID: null
    }
  }

  updateSavedLots = (itemID) => {
    store.dispatch(saveLot(itemID))
  }

  updateSavedHomePlans = (itemID) => {
    store.dispatch(saveHomePlan(itemID))
  }

  openModal = (itemID) => {
    this.setState({ modalIsOpen: true, selectedHomePlanID: itemID });
  }

  splitAddress(address) {
    return address.split(', ')
  }

  closeModal = () => {
    this.setState({ modalIsOpen: false })
  }

  toggleOnlySaved = () => {
    this.setState((state) => {
      return {
        onlySaved: state.onlySaved ? false : true
      }
    })
  }

  componentDidMount() {
    API.getHomePlans().then((homePlanData) => {
      store.dispatch(fetchHomePlans(homePlanData))
    }).catch((error) => {
      console.log(error)
    })

    API.getLots().then((lotData) => {
      store.dispatch(fetchLots(lotData))
    }).catch((error) => {
      console.log(error)
    })

    API.getCombinations().then((combinationData) => {
      store.dispatch(fetchCombinations(combinationData))
    }).catch((error) => {
      console.log(error)
    })
  }

  render() {
    const savedHomePlans = this.props.savedHomePlans
    const homePlans = this.state.onlySaved ? this.props.homePlans.filter((plan) => savedHomePlans.includes(plan.homePlanId) ) : this.props.homePlans;
    const lots = this.props.lots;
    const acreToSqft = 43560;

    const compatibleLotsIDs = this.props.combinations.filter((combo) => combo.homePlanId == this.state.selectedHomePlanID).map((combo) => combo.lotId)
    const selectedHomePlan = homePlans.filter((plan) => plan.homePlanId === this.state.selectedHomePlanID)[0]

    return(
      <>
        <div className='btn-container'>
          <button onClick={this.toggleOnlySaved}> Show Saved Homes</button>
        </div>
        <div className='cards-container'>
          {
            homePlans.map((plan) =>{
              return(
                <Card imgURL={plan.image} itemID={plan.homePlanId} savedItems={savedHomePlans} onCardClick={this.openModal} onSaveClick={this.updateSavedHomePlans}>
                  <div className='text'>
                    <header>
                      <h1>{plan.name}</h1>

                      <div>{plan.numBeds} beds {plan.numBaths} baths {plan.sqft} sqft</div>

                      <ul>
                        {plan.tags.sort().map((tag, index) => <li key={index}>{tag}</li>)}
                      </ul>
                    </header>

                    <div className='description'>
                      {plan.description}
                    </div>
                  </div>
                </Card>
              ) 
            })
          }
        </div>

        <div className='modalcontainer'>
          <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel="Compatibile Lots"
          >
            <h1>{selectedHomePlan?.name}</h1>
            <h2>Compatible Lots</h2>
            <div className='compatible-lots'>
              {
                lots.map((lot) => {
                  const [street, city, state] = this.splitAddress(lot.address)

                  if (compatibleLotsIDs.includes(lot.lotId)){
                    return(
                      <Card imgURL={lot.image} itemID={lot.lotId} savedItems={this.props.savedLots} onCardClick={() => {}} onSaveClick={this.updateSavedLots}>
                        <div className='text'>
                          <header>
                            <h1 className='street-address'>{street}</h1>
                            <div className='region'>{`${city}, ${state}`}</div>
                            <div>{lot.acres} acres {Math.round(lot.acres * acreToSqft)} sqft </div>
                          </header>
    
                          <div>
                            {lot.description}
                          </div>
                        </div>
                      </Card>
                    )
                  } else {
                    return null
                  }
                })
              }
            </div>
          </Modal>
        </div>
      </>
    )
  }
}

const mapStateToProps = state => {
  return { 
    homePlans: state.homePlans,
    lots: state.lots,
    combinations: state.combinations,
    savedHomePlans: state.savedHomePlans,
    savedLots: state.savedLots
  };
};

export default connect(mapStateToProps)(HomePlans)
