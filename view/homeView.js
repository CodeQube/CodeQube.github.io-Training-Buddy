// Main Home View For the app
function homeView() {
  let html = '';

  for (let i = 0; i < model.data.events.length; i++) {
    let participants = '';
    model.data.events[i].eventParticipants.forEach(
      (participant) =>
        (participants += `<img src="${participant.userImg}" class="eventParticipants"></img>`)
    );

    //Intensity color
    let intensityColor = '';
    switch (model.data.events[i].eventIntensity) {
      case 1:
        intensityColor = '#38FF17';
        break;
      case 2:
        intensityColor = '#FFC700';
        break;
      case 3:
        intensityColor = '#F24E1E';
        break;
      case 4:
        intensityColor = '#FF0000';
        break;
    }

    //Switch for event category SVG
    let eventCategory = '';
    switch (model.data.events[i].eventCategory) {
      case 'Løping':
        eventCategory = `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.96821 4.16187C2.91858 4.19366 2.87256 4.23082 2.83097 4.27268L0.508996 6.60934C0.18556 6.93546 0.00271798 7.3766 3.00579e-05 7.83734C-0.00265786 8.29808 0.175024 8.74136 0.494633 9.07127L0.509794 9.08733L0.581607 9.16682L0.857691 9.46714C1.09707 9.7265 1.44098 10.0999 1.86547 10.5544C2.95168 11.719 4.04996 12.8721 5.16012 14.0136C7.68795 16.6096 10.7241 19.5798 12.533 20.8036C14.5701 22.1879 16.4213 22.9676 17.773 23.402C18.4496 23.6188 19.0002 23.7505 19.3888 23.8276C19.5813 23.8661 19.7751 23.8985 19.9697 23.9247L19.9976 23.9279C20.5362 24.0139 21.0126 24.0291 21.4363 23.94C21.8533 23.8573 22.236 23.6506 22.535 23.3466L23.0936 22.7845C23.135 22.7427 23.171 22.697 23.2021 22.6488C23.4538 22.419 23.6549 22.1386 23.7923 21.8257C23.9298 21.5129 24.0005 21.1745 24 20.8325C23.9066 19.7942 22.9332 19.1944 22.0714 18.6644C21.6377 18.4481 21.2505 18.1479 20.932 17.7812L20.2976 16.2908H20.3032C20.5254 16.2908 20.7385 16.202 20.8956 16.0439C21.0528 15.8858 21.141 15.6713 21.141 15.4477C21.141 15.2241 21.0528 15.0096 20.8956 14.8515C20.7385 14.6934 20.5254 14.6046 20.3032 14.6046H19.5795L19.0656 13.3969C19.247 13.3245 19.3975 13.1907 19.4913 13.0185C19.5851 12.8463 19.6163 12.6466 19.5794 12.4538C19.5425 12.261 19.4399 12.0872 19.2893 11.9624C19.1387 11.8376 18.9495 11.7695 18.7544 11.7701H18.373L17.9485 10.7736C18.1677 10.764 18.3743 10.6683 18.5241 10.507C18.6739 10.3458 18.7549 10.1319 18.7497 9.91117C18.7445 9.69049 18.6535 9.48067 18.4962 9.32678C18.3389 9.17289 18.128 9.08721 17.9086 9.08813H17.2312L16.9032 8.31728C16.8538 8.19683 16.8234 8.11011 16.7979 8.03623C16.6915 7.68543 16.493 7.37001 16.2234 7.12325L15.8085 6.7049C15.6173 6.51966 15.3859 6.38167 15.1326 6.30181V5.94047C14.6339 4.42686 12.8146 3.8993 11.5946 4.82031L9.89662 3.07786C10.0493 2.92281 10.17 2.73894 10.2518 2.53681C10.3336 2.33467 10.3749 2.11825 10.3734 1.9C10.3718 1.68174 10.3274 1.46595 10.2427 1.26501C10.158 1.06408 10.0347 0.88197 9.87986 0.72915C9.41428 0.262198 8.78375 0 8.12642 0C7.46909 0 6.83856 0.262198 6.37297 0.72915L2.96821 4.16187ZM10.5182 11.5332L10.5206 10.935C10.5206 9.56992 9.99397 8.2691 9.05241 7.2975L5.61334 3.76761L7.50044 1.86616C7.58519 1.78054 7.68712 1.7141 7.79942 1.67127C7.91172 1.62845 8.03181 1.61022 8.15166 1.61782C8.27152 1.62542 8.38838 1.65867 8.49445 1.71534C8.60052 1.77201 8.69335 1.85081 8.76675 1.94646C8.46095 2.25582 8.28928 2.67442 8.28928 3.11078C8.28928 3.54713 8.46095 3.96574 8.76675 4.27509L12.3016 7.84191C12.6209 8.15162 13.047 8.32466 13.4905 8.32466C13.9339 8.32466 14.3601 8.15162 14.6794 7.84191L15.0943 8.25946C15.1916 8.33594 15.2604 8.44314 15.2898 8.56379L15.2922 8.57182C15.3265 8.67139 15.3688 8.79183 15.4358 8.94841L15.4949 9.08813H14.7416C14.2788 9.08813 13.9038 9.46553 13.9038 9.93126C13.9061 10.1542 13.9951 10.3673 14.1517 10.5249C14.3084 10.6825 14.5201 10.7721 14.7416 10.7744H16.213L16.6367 11.7701H16.0103C15.5475 11.7701 15.1725 12.1475 15.1725 12.6132C15.1748 12.8361 15.2638 13.0492 15.4204 13.2068C15.5771 13.3645 15.7888 13.454 16.0103 13.4563H17.3549L17.8432 14.6046H17.0636C16.6008 14.6046 16.2258 14.982 16.2258 15.4477C16.2258 15.6806 16.3215 15.8893 16.4731 16.0419C16.6247 16.1945 16.8322 16.2828 17.0636 16.2908H18.5613L19.4654 18.4155C19.8829 19.1215 20.5021 19.6845 21.2424 20.0311L21.2448 20.0327C21.6461 20.2792 22.3922 20.7369 22.4121 20.9658C22.4121 21.0107 22.3682 21.148 22.1688 21.3729C20.805 21.2013 19.4664 20.8665 18.1815 20.3756C15.834 19.4666 13.4075 17.8518 12.5019 14.9948L12.5011 14.9932C12.1779 13.9815 11.4494 12.8035 10.6052 11.6504C10.5763 11.6113 10.5473 11.5722 10.5182 11.5332ZM1.63567 7.94871C1.6159 7.92434 1.60511 7.89385 1.60511 7.86239C1.60511 7.83093 1.6159 7.80044 1.63567 7.77607L3.41904 5.98061C4.49529 7.04222 5.541 8.13472 6.5549 9.25676C7.518 10.3247 8.50663 11.493 9.31972 12.6028C10.1448 13.7293 10.7408 14.7323 10.981 15.483C11.0179 15.6003 11.0573 15.7167 11.0991 15.8323L1.63727 7.95032L1.63567 7.94871Z" fill="#D9D9D9"/>
        </svg>
        `;
        break;
      case 'Sykling':
        eventCategory = `
        
        `;
        break;
    }

    html += /*HTML*/ `
    
        ${
          //Open card
          model.app.state.selectedCard !== null
            ? `
            
            <div class="eventCardOpen">
            <div class="intensityBar" style="background-color: ${intensityColor};" ></div>
                <div class="eventImgContainer">
                  <img class="eventImgBg" src="${model.data.events[i].eventImgOpen}" alt="Event image">
              </div>
              <div class="participantContainer">
                <div>Påmeldte</div>
                <div class="participantImgContainer">
                  ${participants}
                </div> 
                <div class="intensityContainer">
                  <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.764 24V0H24.5304V24H19.764ZM13.4089 6H18.1752V24H13.4089V6ZM7.05375 12H11.8201V24H7.05375V12ZM0.698608 18H5.46496V24H0.698608V18Z" fill="${intensityColor}"/>
                  </svg>
                  <div>intensitet</div>
                </div>
                <button class="eventSignUpBtn" >Meld på</button>
              </div>
              <div class="eventInfoContainer">
                <div class="eventTitle">${model.data.events[i].eventName}</div>
                <div class="eventLocation">${model.data.events[i].eventLocation}</div>
                <div class="eventCategoryContainer">
                  <div class="eventSubCategory">${model.data.events[i].eventSubCategory}</div>
                  ${eventCategory}
                </div>
                <div class="eventDescContainer">
                  <div class="eventDescTitle">${model.data.events[i].eventDescTitle}</div>
                  <div class="eventDescription">${model.data.events[i].eventDescription}</div>
                </div>
                
                <div class="eventDateTimeOpen">
                  <div class="eventTime">${model.data.events[i].eventTime}</div>
                  <div class="eventDate">${model.data.events[i].eventDate}</div>
                </div>
              </div>
              <div onclick="testClose()" class="showLess">Vis mindre </br> ︿</div>
            
            </div>
            `
            : //Closed card
              `
            <div class="eventCard">
              <div class="intensityBarClosed" style="background-color: ${intensityColor};" ></div>
                <div class="eventImgContainer">
                  <img class="eventImgBg" src="${model.data.events[i].eventImg}" alt="Event image">
              </div>
              <div class="eventInfoContainer">
                <div class="eventTitle">${model.data.events[i].eventName}</div>
                <div class="eventDateTime">
                  <div class="eventTime">${model.data.events[i].eventTime}</div>
                  <div class="eventDate">${model.data.events[i].eventDate}</div>
                </div>
                <div class="eventLocation">${model.data.events[i].eventLocation}</div>
              </div>
              <div class="eventCategoryContainerClosed">
                  <div class="eventSubCategory">${model.data.events[i].eventSubCategory}</div>
                  ${eventCategory}
                </div>
                <div class="intensityContainerClosed">
                  <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.764 24V0H24.5304V24H19.764ZM13.4089 6H18.1752V24H13.4089V6ZM7.05375 12H11.8201V24H7.05375V12ZM0.698608 18H5.46496V24H0.698608V18Z" fill="${intensityColor}"/>
                  </svg>
                  <div>intensitet</div>
                </div>
              <div onclick="testOpen(${i})" class="showMore">Vis mer </br> ﹀</div>
            </div>
            `
        }
    `;
  }
  document.getElementById('app').innerHTML = html;
}

//For you view
function forYouView() {}

function testClose() {
  model.app.state.selectedCard = null;
  mainView();
}

function testOpen(index) {
  model.app.state.selectedCard = index;
  mainView();
}
