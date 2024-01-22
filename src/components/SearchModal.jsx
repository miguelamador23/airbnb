import React, { useState } from 'react';

const SearchModal = ({ data, onFilter }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedLocation, setSelectedLocation] = useState(null);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleLocationClick = (location) => {
    setSelectedLocation(location);
    closeModal();
    onFilter(location);
  };

  const locations = [
    { city: 'Helsinki', country: 'Finland' },
    { city: 'Turku', country: 'Finland' },
    { city: 'Oulu', country: 'Finland' },
  ];

  const modalStyles = {
    display: modalVisible ? 'block' : 'none',
    position: 'fixed',
    zIndex: 1,
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    overflow: 'auto',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  };

  const modalContentStyles = {
    backgroundColor: '#fefefe',
    margin: '15% auto',
    padding: '20px',
    border: '1px solid #888',
    width: '80%',
    position: 'relative',
  };

  const closeModalStyles = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    cursor: 'pointer',
  };

  const searchContainerStyles = {
    display: 'flex',
    flexDirection: 'column',
  };

  const searchInputStyles = {
    margin: '8px 0',
    padding: '8px',
  };

  const searchButtonStyles = {
    backgroundColor: '#007BFF',
    color: 'white',
    padding: '10px',
    cursor: 'pointer',
    margin: '8px 0',
    borderRadius: '10px',
    fontSize: '14px',
  };

  const showButtonStyles = {
    position: 'absolute',
    top: '20px',
    right: '20px',
    cursor: 'pointer',
  };

  const buttonStyles = {
    border: '1px solid black',
    color: 'black',
    borderRadius: '4px',
    backgroundColor: 'transparent',
    padding: '10px 20px',
    fontSize: '14px',
    boxShadow: '2px 2px 3px rgba(0, 0, 0, 0.3)',
    transition: 'box-shadow 0.3s ease',
  };

  const locationButtonStyles = {
    backgroundColor: 'transparent',
    border: '1px solid black',
    borderRadius: '4px',
    padding: '10px 20px',
    fontSize: '14px',
    boxShadow: '2px 2px 3px rgba(0, 0, 0, 0.3)',
    transition: 'box-shadow 0.3s ease',
  };

  const guestButtonStyles = {
    backgroundColor: 'transparent',
    border: '1px solid black',
    borderRadius: '4px',
    padding: '10px 20px',
    fontSize: '14px',
    boxShadow: '2px 2px 3px rgba(0, 0, 0, 0.3)',
    transition: 'box-shadow 0.3s ease',
  };

  const buttonTitleStyles = {
    fontWeight: 'bold',
  };

  const buttonSubtitleStyles = {
    fontSize: '14px',
    color: 'gray',
  };

  return (
    <div>
      <div class="btn-group" role="group" aria-label="Basic outlined example" style={showButtonStyles}>
        <button onClick={openModal} className="btn btn-outline-primary" style={buttonStyles}>
          Whole, Finland
        </button>
        <button className="btn btn-outline-primary" style={buttonStyles}>
          Add guests
        </button>
        <button onClick={openModal} className="btn btn-outline-primary" style={buttonStyles}>
          Buscar
        </button>
      </div>

      <div style={modalStyles}>
        <div style={modalContentStyles}>
          <span style={closeModalStyles} onClick={closeModal}>&times;</span>
          <div style={searchContainerStyles}>
            <button style={locationButtonStyles}>
              <div style={{ textAlign: 'center' }}>
                <div style={buttonTitleStyles}>Location</div>
                <div style={buttonSubtitleStyles}>Whole, Finland</div>
              </div>
            </button>
            <button style={guestButtonStyles}>
              <div style={{ textAlign: 'center' }}>
                <div style={buttonTitleStyles}>Guest</div>
                <div style={buttonSubtitleStyles}>0</div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;