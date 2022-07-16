import sandwichPic from '../shawdaSandwichPic.png';

const shawdaClub = () => {
    const element = document.createElement('div');
    element.className="infoBox";
    const clubTitle=document.createElement('div');
        clubTitle.className="subHeader";
        clubTitle.textContent="Shawda Club Sandwich";
        element.appendChild(clubTitle);
    const clubBox = document.createElement('div');
        clubBox.className="photoScript";
        const clubPic = new Image();
            clubPic.className="photo";
            clubPic.src=sandwichPic;
            clubPic.width=200;
            clubPic.height=150;
            clubBox.appendChild(clubPic);
        const clubInfo=document.createElement('div');
            clubInfo.className="genInfo";
            clubInfo.textContent="A delicious sandwich eaten by Obi Wan himself!"
            clubBox.appendChild(clubInfo);
        element.appendChild(clubBox);
        return element;
}

export default shawdaClub;