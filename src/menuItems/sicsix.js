import sicPic from '../sicSixPic.png';

const sicSixLayer = () => {
    const element = document.createElement('div');
    element.className="infoBox";
    const clubTitle=document.createElement('div');
        clubTitle.className="subHeader";
        clubTitle.textContent="Sic Six Layer Cake";
        element.appendChild(clubTitle);
    const clubBox = document.createElement('div');
        clubBox.className="photoScript";
        const clubPic = new Image();
            clubPic.className="photo";
            clubPic.src=sicPic;
            clubPic.width=200;
            clubPic.height=150;
            clubBox.appendChild(clubPic);
        const clubInfo=document.createElement('div');
            clubInfo.className="genInfo";
            clubInfo.textContent="We will be honest here. Obi Wan never ate this cake. But if he did, he would have loved it."
            clubBox.appendChild(clubInfo);
        element.appendChild(clubBox);
        return element;
}

export default sicSixLayer;