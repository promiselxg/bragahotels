import { Breadcrumb, Checkbox } from 'antd';
import React, { useEffect, useState } from 'react';
import { Button, Section } from '../components';
import { Links } from '../components/NavAnchor';
import { RoomHeader } from '../components/Room/Room.style';
import { Typography } from '../GlobalStyle';
import { Input } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import {
  AccountSumary,
  CheckOutContainer,
  CheckoutDetails,
  CheckoutUserInfo,
  CheckOutWrapper,
  Left,
  PriceInfo,
  Right,
  RoomDetails,
} from '../styles/CheckoutScreen.style';
import { FiCheckCircle, FiMail, FiPhone, FiPlus, FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { HotelRules } from '../utils/Data';
import { useSelector } from 'react-redux';
const { TextArea } = Input;
const CheckoutScreen = () => {
  const userInfo = useSelector((state) => state.userInfo);
  const { room } = useSelector((state) => state.roomInfo);
  const { checkIn, checkOut } = useSelector((state) => state.listRooms);

  const [specialRequest, setSpecialRequest] = useState('');
  const [terms, setTerms] = useState(false);
  const [guestMember, setGuestMember] = useState([
    {
      first_name: '',
      last_name: '',
      phone: '',
      email: '',
      id: uuidv4(),
    },
  ]);

  const addNewGuest = () => {
    let _guestMember = [...guestMember];
    _guestMember.push({
      first_name: '',
      last_name: '',
      phone: '',
      email: '',
      id: uuidv4(),
    });
    setGuestMember(_guestMember);
  };

  const removeGuestMember = (id) => {
    let _guestMember = [...guestMember];
    _guestMember = _guestMember.filter((guest) => guest.id !== id);
    setGuestMember(_guestMember);
  };

  const handleInputFieldChange = (id, event) => {
    // get input index to be changed
    const index = guestMember.findIndex((g) => g.id === id);
    let _guestMember = [...guestMember];
    _guestMember[index][event.target.name] = event.target.value;
    setGuestMember(_guestMember);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let valid = true;
    guestMember.map((guest, key) => {
      if (
        !guest.first_name ||
        !guest.last_name ||
        !guest.phone ||
        !guest.email
      ) {
        valid = false;
      }
      return valid;
    });
    if (!valid || !terms) {
      console.log('Error');
    } else {
      const userData = {
        guestMember,
        special_request: specialRequest,
      };

      const response = await axios.post(`/api/v1/rooms/:id/book`);
    }
  };
  const fetchRoomInfo = () => {};
  // useEffect(() => {}, []);
  return (
    <>
      <Section>
        <CheckOutWrapper>
          <RoomHeader>
            <Breadcrumb>
              <Breadcrumb.Item className="seperator">
                <Links to="/" label="Home" />
              </Breadcrumb.Item>
              <Breadcrumb.Item className="seperator">
                <Links to={`/rooms`} label="Rooms" />
              </Breadcrumb.Item>
              <Breadcrumb.Item className="seperator">
                <Links
                  to={`/rooms/${room?.data?.category}`}
                  label={room?.data?.category}
                />
              </Breadcrumb.Item>
              <Breadcrumb.Item className="seperator">
                <i>{room?.data?.title}</i>
              </Breadcrumb.Item>
            </Breadcrumb>
          </RoomHeader>
          <CheckOutContainer>
            <div className="notice">
              Not ready to submit Your reservation?
              <Button
                label="Save for later"
                color="#000"
                bg="var(--blue)"
                hoverBg="var(--yellow)"
                hoverColor="#000"
              />
            </div>
            <CheckoutUserInfo>
              <Left>
                <form>
                  <div className="container">
                    <div className="top">
                      Guest Information <b>OR</b>
                      <Button
                        label="Sign in to Book faster"
                        bg="var(--yellow)"
                        color="#000"
                        hoverBg="var(--blue)"
                        hoverColor="#fff"
                      />
                    </div>
                    <div className="formFields">
                      <div className="form">
                        {guestMember.map((guest) => (
                          <div key={guest.id}>
                            <span className="name">Guest Name *</span>
                            <div className="form-field">
                              <Input
                                placeholder="First name"
                                name="first_name"
                                required
                                onChange={(e) =>
                                  handleInputFieldChange(guest.id, e)
                                }
                                prefix={<FiUser />}
                              />
                              <Input
                                placeholder="Last name"
                                name="last_name"
                                required
                                onChange={(e) =>
                                  handleInputFieldChange(guest.id, e)
                                }
                                prefix={<FiUser />}
                              />
                            </div>
                            <div className="form-field">
                              <div className="wrapper">
                                <span>Mobile Number</span>
                                <Input
                                  placeholder="Mobile number"
                                  name="phone"
                                  required
                                  onChange={(e) =>
                                    handleInputFieldChange(guest.id, e)
                                  }
                                  prefix={<FiPhone />}
                                />
                              </div>
                              <div className="wrapper">
                                <span>Email Address</span>
                                <Input
                                  placeholder="Email address"
                                  name="email"
                                  required
                                  onChange={(e) =>
                                    handleInputFieldChange(guest.id, e)
                                  }
                                  prefix={<FiMail />}
                                />
                                <p>
                                  Your receipt will be sent to this email
                                  address.
                                </p>
                              </div>
                            </div>
                            <div
                              className="btn"
                              style={{ display: 'flex', margin: '0px 5px' }}
                            >
                              <span
                                style={{
                                  fontSize: '0.7rem',
                                  display: 'flex',
                                  alignItems: 'center',
                                  cursor: 'pointer',
                                  color: 'var(--yellow)',
                                  marginRight: '5px',
                                }}
                                onClick={addNewGuest}
                              >
                                <FiPlus />
                                Add new Guest.
                              </span>
                              {guestMember.length > 1 && (
                                <span
                                  style={{
                                    fontSize: '0.7rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    cursor: 'pointer',
                                    color: 'var(--yellow)',
                                  }}
                                  onClick={() => removeGuestMember(guest.id)}
                                >
                                  <FiPlus />
                                  Remove Guest
                                </span>
                              )}
                            </div>
                          </div>
                        ))}

                        <div className="form-field">
                          <div className="wrapper">
                            <span>Special request (optional)</span>
                            <TextArea
                              showCount
                              maxLength={100}
                              onChange={(e) =>
                                setSpecialRequest(e.target.value)
                              }
                              name="special_request"
                              prefix={<FiUser />}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="formFields"
                      style={{ borderBottom: 'none' }}
                    >
                      <Typography as="h2">
                        Hotel Rules &amp; booking conditions.
                        {HotelRules.map(({ rule }, i) => (
                          <div className="rules" key={i}>
                            <span>
                              <FiCheckCircle />
                            </span>
                            <span>{rule}</span>
                          </div>
                        ))}
                        <div className="rules">
                          <Checkbox
                            name="terms"
                            required
                            onClick={(e) => setTerms(e.target.checked)}
                          >
                            I acknowledge and accept the{' '}
                            <Link to="/policy">
                              Terms and Conditions of Braga Hotels.
                            </Link>
                          </Checkbox>
                        </div>
                        <div className="rules btn">
                          <Button
                            label="Pay online (you save N3,000)"
                            bg="var(--yellow)"
                            hoverBg="var(--blue)"
                            hoverColor="#fff !important"
                            onClick={handleSubmit}
                          />
                          <Button
                            label="Pay at the hotel."
                            bg="var(--blue)"
                            hoverBg="var(--yellow)"
                            hoverColor="#fff"
                          />
                        </div>
                      </Typography>
                    </div>
                  </div>
                </form>
              </Left>
              <Right>
                <div className="container">
                  <div className="heading">Your booking summary</div>
                  <CheckoutDetails>
                    <Typography as="h2" fontSize="0.9rem" fontWeight="600">
                      {room?.data?.title}
                    </Typography>
                    <Typography as="p" fontSize="0.75rem">
                      {room?.data?.description}
                    </Typography>
                    <div className="checkinDetails">
                      <div className="checkin">
                        <span>Check-in</span>
                        <Typography as="h2" fontSize="0.8rem" fontWeight="600">
                          {checkIn}
                        </Typography>
                      </div>
                      <div className="checkin">
                        <span>Check-out</span>
                        <Typography as="h2" fontSize="0.8rem" fontWeight="600">
                          {checkOut}
                        </Typography>
                      </div>
                    </div>
                    <Typography
                      as="p"
                      fontSize="0.8rem"
                      fontWeight="600"
                      margin="-10px 0 0 0"
                    >
                      2 Nights Stay
                    </Typography>
                  </CheckoutDetails>
                  <div className="heading">
                    Rooms &amp; Rate&nbsp;(price for 1 night)
                  </div>
                  <RoomDetails>
                    <p>Room Details: 2 adults, 0 child</p>
                    <PriceInfo>
                      <table>
                        <tbody>
                          <tr>
                            <td style={{ fontSize: '0.8rem' }}>Room Charge</td>
                            <td style={{ fontWeight: '600' }}>N10,000</td>
                          </tr>
                          <tr>
                            <td style={{ fontSize: '0.8rem' }}>
                              Tax &amp; fees
                            </td>
                            <td style={{ fontWeight: '600' }}>N500.00</td>
                          </tr>
                          <tr>
                            <td style={{ fontSize: '0.8rem' }}>Total Price</td>
                            <td style={{ fontWeight: '600' }}>N10,500.00</td>
                          </tr>
                        </tbody>
                      </table>
                    </PriceInfo>
                  </RoomDetails>
                  <AccountSumary>
                    <Button
                      bg="var(--yellow)"
                      label="Pay Online (You Save N3,000)"
                      hoverBg="var(--blue)"
                      hoverColor="#fff"
                      onClick={handleSubmit}
                    />
                    <Button
                      bg="var(--blue)"
                      label="Pay at the Hotel"
                      hoverBg="var(--yellow)"
                    />
                  </AccountSumary>
                </div>
              </Right>
            </CheckoutUserInfo>
          </CheckOutContainer>
        </CheckOutWrapper>
      </Section>
    </>
  );
};

export default CheckoutScreen;