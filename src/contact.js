const contact = () => {
    const element = document.createElement('div');
    const title = document.createElement('div');
        title.className='header';
        title.textContent="Contact";
        element.appendChild(title);
    const infoBox = document.createElement('div');
    infoBox.className = "infoBox";
    const directions = document.createElement('div');
        directions.className='subHeader';
        directions.textContent = "Address";
        infoBox.appendChild(directions);
        const address= document.createElement('p');
            address.textContent="3334 Palpatine Way, Co Co Town, Coruscant";
            infoBox.appendChild(address);
    const call = document.createElement('div');
        call.className='subHeader';
        call.textContent="Phone Number";
        infoBox.appendChild(call);
        const pNumber = document.createElement('p');
            pNumber.textContent='480-224-3475';
            infoBox.appendChild(pNumber);
    element.appendChild(infoBox);
    return element;
}

export default contact;