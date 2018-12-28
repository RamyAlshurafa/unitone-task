import styled from 'styled-components';

export const EmailWrapper = styled.div`
  position: fixed;
  background-color: #f2f3f2;
  width: 100%;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
`;

export const EmailBody = styled.div`
  height: 100%;
  width: 95%;
  margin: 0 auto;
  display: flex;
  background-color: #fff  
`;

export const EmailsListWrapper = styled.div`
  width: 40%;
  min-width: 240px;
  background-color: #fff;
  overflow-y: auto;
`;

export const EmailDetailsWrapper = styled.div`
  width: 60%;
  background-color: #f2f3f2;
  margin: 25px;
  padding: 40px 10px;
  overflow: auto;
`;

export const EmailHeaderWrapper = styled.header`
  height: 50px;
  width: 95%;
  margin: 0 auto;
  background-color: #f2f3f2;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const EmailSummaryWrapper = styled.div`
  display: flex;
  min-height: 68px;
  align-items: center;
  box-shadow: 0px 0px 5px -2px #888888;
  background-color: ${(props) => {
    if (props.active) {
      return '#57a2ff6b';
    } if (props.new) {
      return '#e6e6e6a3';
    }
    return '#fff';
  }}
`;

export const FirstLetter = styled.span`
  font-weight: 900;
  font-size: 24px;
  display: inline-block;
  width: 25%;
  align-self: center;
  pointer-events: none;
  text-shadow: 0px 0px 3px #00000096;
  color: #fff;
  text-align: center;
`;

export const EmailOverview = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 75%;
  pointer-events: none;
  margin: 10px 0;
`;

export const EmailSummaryFrom = styled.p`
  font-size: 14px
`;

export const MessageSummary = styled.p`
  font-size: 14px;
  font-weight: 100;
  color: gray;
`;

export const WellcomeWrapper = styled.div`
  width: 60%;
  margin: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const WelcomeTitle = styled.h1`
  margin-bottom: 30px;
  text-align: center
`;

export const WelcomeSummary = styled.h4``;

export const WelcomeImage = styled.div`
  width: 32%;
  min-width: 200px;
  height: 217px;
  margin: 0 auto;
  background-image: url(https://cdn.dribbble.com/users/779602/screenshots/4848986/gmailsmall.gif);
  background-position: center center;
  background-size: cover;
`;

export const DetailsFrom = styled.span`
  float: left;
  display: inline-block;
`;

export const DetailsTitle = styled.h4`
  clear: both;
  margin: 50px 0 14px;
`;

export const DetailsMessage = styled.p`
  text-align: left;
  font-size: 14px;
  color: #3c3c3c;
  line-height: 20px
`;

export const DetailsTime = styled.span`
  display: inline-block;
  float: right;
  font-size: 12px;
  margin-right: 10px;
`;
